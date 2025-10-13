'''
Business: Отправляет заявки с сайта на почту intrigai@mail.ru в папку "эи дети заявки"
Args: event - dict с httpMethod, body (JSON с данными формы)
      context - объект с атрибутами request_id, function_name
Returns: HTTP response dict
'''

import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, ValidationError


class ApplicationRequest(BaseModel):
    parent_name: str = Field(..., min_length=1)
    phone: str = Field(..., min_length=1)
    child_name: str = Field(..., min_length=1)
    child_age: int = Field(..., ge=5, le=16)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
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
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Parse and validate request
    body_data = json.loads(event.get('body', '{}'))
    app_request = ApplicationRequest(**body_data)
    
    # Get email credentials from environment
    email_user = os.environ.get('EMAIL_USER')
    email_password = os.environ.get('EMAIL_PASSWORD')
    
    if not email_user or not email_password:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Email configuration missing'})
        }
    
    # Create email message
    msg = MIMEMultipart('alternative')
    msg['Subject'] = 'Новая заявка на пробное занятие - ЭИ дети'
    msg['From'] = email_user
    msg['To'] = email_user
    msg['X-Folder'] = 'эи дети заявки'
    
    # Email body
    text = f"""
Новая заявка на пробное занятие

Имя родителя: {app_request.parent_name}
Телефон: {app_request.phone}
Имя ребенка: {app_request.child_name}
Возраст ребенка: {app_request.child_age} лет

---
Заявка отправлена с сайта ЭИ дети
    """
    
    html = f"""
<html>
<body style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #ff6b35;">Новая заявка на пробное занятие</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Имя родителя:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">{app_request.parent_name}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Телефон:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">{app_request.phone}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Имя ребенка:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">{app_request.child_name}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Возраст ребенка:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">{app_request.child_age} лет</td>
        </tr>
    </table>
    <p style="margin-top: 20px; color: #999; font-size: 12px;">Заявка отправлена с сайта ЭИ дети</p>
</body>
</html>
    """
    
    part1 = MIMEText(text, 'plain', 'utf-8')
    part2 = MIMEText(html, 'html', 'utf-8')
    msg.attach(part1)
    msg.attach(part2)
    
    # Send email via Mail.ru SMTP
    try:
        server = smtplib.SMTP_SSL('smtp.mail.ru', 465)
        server.login(email_user, email_password)
        server.send_message(msg)
        server.quit()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': False,
                'error': f'Ошибка отправки: {str(e)}'
            })
        }
