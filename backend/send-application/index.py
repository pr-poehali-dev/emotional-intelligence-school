import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr

class ApplicationRequest(BaseModel):
    '''Модель заявки на пробное занятие'''
    parent_name: str = Field(..., min_length=1, description="Имя родителя")
    phone: str = Field(..., min_length=10, description="Телефон")
    child_name: str = Field(..., min_length=1, description="Имя ребенка")
    child_age: int = Field(..., ge=5, le=16, description="Возраст ребенка")

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Обработка заявки на пробное занятие и отправка на email
    Args: event - dict с httpMethod, body, headers
          context - объект с request_id, function_name
    Returns: HTTP ответ с результатом отправки
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # CORS OPTIONS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Парсинг данных заявки
    body_data = json.loads(event.get('body', '{}'))
    application = ApplicationRequest(**body_data)
    
    # Получение настроек SMTP
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    
    if not all([smtp_host, smtp_user, smtp_password]):
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'SMTP configuration missing'})
        }
    
    # Формирование email
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'[ЭИ ДЕТИ ЗАЯВКИ] Новая заявка - {application.child_name}'
    msg['From'] = smtp_user
    msg['To'] = 'intrigai@mail.ru'
    
    # HTML тело письма
    html_body = f'''
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #9333ea;">Новая заявка на пробное занятие</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <p><strong>Имя родителя:</strong> {application.parent_name}</p>
          <p><strong>Телефон:</strong> {application.phone}</p>
          <p><strong>Имя ребенка:</strong> {application.child_name}</p>
          <p><strong>Возраст ребенка:</strong> {application.child_age} лет</p>
        </div>
        <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
          Заявка отправлена с сайта ЭИ дети
        </p>
      </body>
    </html>
    '''
    
    msg.attach(MIMEText(html_body, 'html'))
    
    # Отправка email
    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'message': 'Заявка успешно отправлена',
            'request_id': context.request_id
        })
    }