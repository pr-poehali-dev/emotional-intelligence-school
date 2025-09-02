import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Наши программы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Индивидуальный подход к каждому возрасту и потребностям ребёнка
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              age: "6-9 лет",
              title: "Первые эмоции",
              duration: "3 месяца",
              price: "4 990 ₽/мес",
              features: [
                "Изучаем базовые эмоции",
                "Учимся их называть",
                "Простые техники успокоения",
                "Игровой формат занятий",
                "Работа с родителями"
              ]
            },
            {
              age: "10-13 лет",
              title: "Эмоциональный баланс",
              duration: "4 месяца",
              price: "4 999 ₽/мес",
              features: [
                "Управление гневом и тревогой",
                "Навыки общения со сверстниками",
                "Развитие эмпатии",
                "Уверенность в себе",
                "Решение конфликтов"
              ],
              popular: true
            },
            {
              age: "14-16 лет",
              title: "Лидерские качества",
              duration: "6 месяцев",
              price: "5 999 ₽/мес",
              features: [
                "Эмоциональная зрелость",
                "Навыки лидерства",
                "Управление стрессом",
                "Планирование будущего",
                "Подготовка к взрослой жизни"
              ]
            }
          ].map((program, index) => (
            <Card key={index} className={`relative ${program.popular ? 'ring-2 ring-primary' : ''}`}>
              {program.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl mb-4">{program.title}</CardTitle>
                  <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {program.age}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">{program.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={program.popular ? 'default' : 'outline'}>
                  Выбрать программу
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-3">Хотите такую же программу?</h3>
            <p className="text-sm text-muted-foreground mb-4">Начните с бесплатного пробного урока</p>
            <Button size="lg" className="w-full" asChild>
              <a href="https://wa.me/message/6YQROAKYU6PAC1">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Выбрать программу
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;