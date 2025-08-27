import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/img/a450c831-cf94-40ea-8bd6-423183c85398.jpg" 
              alt="ЭИ ДЕТИ логотип" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-xl font-bold text-primary">ЭИ ДЕТИ</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">Программы</a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors">Результаты</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Получить урок</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full overflow-hidden opacity-20 hidden lg:block">
          <img 
            src="/img/921f73ef-38af-466b-bfcb-9a2ca61df4f7.jpg" 
            alt="Счастливая семья" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full overflow-hidden opacity-20 hidden lg:block">
          <img 
            src="/img/02f1d162-c276-4bfb-a33b-fd6849aaae8d.jpg" 
            alt="Дети выражают эмоции" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Развиваем эмоциональный интеллект детей
              <span className="text-primary"> от 6 до 16 лет</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Помогаем детям понимать свои эмоции, строить крепкие отношения и уверенно идти к своим целям
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                <Icon name="Gift" size={24} className="mr-2" />
                Получить бесплатный пробный урок
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                <Icon name="Play" size={24} className="mr-2" />
                Посмотреть как это работает
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">2000+ семей</h3>
                <p className="text-muted-foreground text-sm">уже развивают ЭИ с нами</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">5 лет опыта</h3>
                <p className="text-muted-foreground text-sm">в детской психологии</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">95% результат</h3>
                <p className="text-muted-foreground text-sm">видимые изменения за месяц</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Знакомые ситуации?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Многие родители сталкиваются с похожими вызовами в воспитании детей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Angry",
                title: "Частые истерики",
                description: "Ребёнок не может справиться с эмоциями, закатывает истерики по любому поводу"
              },
              {
                icon: "UserX",
                title: "Проблемы в общении",
                description: "Трудности в дружбе, конфликты со сверстниками, замкнутость"
              },
              {
                icon: "TrendingDown",
                title: "Низкая самооценка",
                description: "Ребёнок не верит в себя, боится пробовать новое, избегает трудностей"
              },
              {
                icon: "AlertTriangle",
                title: "Тревожность",
                description: "Постоянные переживания, страхи, трудности с адаптацией к изменениям"
              },
              {
                icon: "MessageSquareX",
                title: "Не слушается",
                description: "Игнорирует просьбы, спорит, не принимает правила и границы"
              },
              {
                icon: "BookOpen",
                title: "Проблемы в учёбе",
                description: "Нет мотивации учиться, быстро сдаётся, не может сосредоточиться"
              }
            ].map((problem, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={problem.icon} size={24} className="text-destructive" />
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Что даёт развитие эмоционального интеллекта?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Эмоциональный интеллект — это способность понимать и управлять своими эмоциями, 
              а также эффективно взаимодействовать с другими людьми
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <img 
                  src="/img/a132faa8-6625-4ef6-8eb1-0d354a5a7470.jpg" 
                  alt="Родитель и ребенок общаются" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-8">
                {[
                  {
                    icon: "Heart",
                    title: "Эмоциональная стабильность",
                    description: "Ребёнок учится распознавать и регулировать свои эмоции, становится более спокойным и уверенным"
                  },
                  {
                    icon: "Users",
                    title: "Лучшие отношения",
                    description: "Развивает эмпатию, учится понимать других людей, легче заводит друзей и решает конфликты"
                  },
                  {
                    icon: "TrendingUp",
                    title: "Высокая самооценка",
                    description: "Верит в свои силы, не боится ошибок, готов принимать вызовы и достигать целей"
                  },
                  {
                    icon: "Star",
                    title: "Успех в учёбе и жизни",
                    description: "Мотивация, концентрация внимания, лидерские качества — всё это приходит с развитым ЭИ"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Lightbulb" size={48} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Научные факты</h3>
              <div className="space-y-4">
                <div className="bg-white/80 rounded-xl p-4">
                  <p className="text-3xl font-bold text-primary mb-1">90%</p>
                  <p className="text-sm text-muted-foreground">успеха в жизни зависит от ЭИ</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <p className="text-3xl font-bold text-primary mb-1">2х</p>
                  <p className="text-sm text-muted-foreground">выше доходы у людей с развитым ЭИ</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4">
                  <p className="text-3xl font-bold text-primary mb-1">75%</p>
                  <p className="text-sm text-muted-foreground">карьерных провалов связаны с низким ЭИ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
                price: "5 990 ₽/мес",
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
                price: "6 990 ₽/мес",
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
                    <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {program.age}
                    </div>
                    <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                    <CardDescription>{program.duration}</CardDescription>
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
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Результаты наших учеников</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные изменения, которые происходят с детьми после прохождения программ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "92%", description: "детей стали спокойнее реагировать на стресс" },
              { metric: "85%", description: "улучшили отношения с родителями и друзьями" },
              { metric: "78%", description: "повысили успеваемость в школе" },
              { metric: "96%", description: "родителей отмечают положительные изменения" }
            ].map((result, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">{result.metric}</span>
                </div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Отзывы родителей</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              История семей, которые уже изменили жизнь своих детей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Елена Морозова",
                child: "Дочь Софья, 8 лет",
                text: "После занятий дочь стала намного спокойнее. Истерики практически прекратились, и она научилась объяснять, что её беспокоит словами.",
                rating: 5
              },
              {
                name: "Дмитрий Волков",
                child: "Сын Максим, 12 лет",
                text: "Сын был очень замкнутым, но теперь легко заводит друзей и стал увереннее в себе. Оценки в школе тоже улучшились!",
                rating: 5
              },
              {
                name: "Анна Петрова",
                child: "Дочь Мария, 15 лет",
                text: "Подросток — это сложно, но программа помогла нам наладить отношения. Дочь стала более ответственной и понимающей.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.child}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Наши преподаватели</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Команда опытных детских психологов и специалистов по эмоциональному интеллекту
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Смирнова",
                position: "Ведущий детский психолог",
                experience: "8 лет опыта",
                education: "МГУ, факультет психологии",
                specialization: "Работа с детьми 6-12 лет",
                achievements: "Автор 15+ научных работ",
                photo: "/img/98c154fd-d050-4718-a8f4-6dff94b66300.jpg"
              },
              {
                name: "Михаил Волков",
                position: "Специалист по подростковой психологии",
                experience: "12 лет опыта",
                education: "СПбГУ, клиническая психология",
                specialization: "Подростки 13-16 лет",
                achievements: "Сертификат Harvard Extension School",
                photo: "/img/47fc2d2b-b20f-444e-85ce-bfdef7813eb2.jpg"
              },
              {
                name: "Елена Петрова",
                position: "Методист-разработчик программ",
                experience: "10 лет опыта",
                education: "МГППУ, детская психология",
                specialization: "Развитие эмпатии и социальных навыков",
                achievements: "Разработчик авторской методики ЭИ",
                photo: "/img/90290757-67c0-4a7a-88ef-2e6101b494c8.jpg"
              }
            ].map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img 
                      src={teacher.photo} 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">{teacher.name}</CardTitle>
                  <CardDescription className="text-primary font-medium mb-4">
                    {teacher.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{teacher.experience}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="GraduationCap" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{teacher.education}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Target" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{teacher.specialization}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Award" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{teacher.achievements}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Почему наши преподаватели — лучшие?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="BookOpen" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Высшее образование</h4>
                  <p className="text-sm text-muted-foreground">Все специалисты имеют профильное психологическое образование</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Практический опыт</h4>
                  <p className="text-sm text-muted-foreground">Более 500 детей уже прошли обучение у наших преподавателей</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Постоянное развитие</h4>
                  <p className="text-sm text-muted-foreground">Регулярно проходят курсы повышения квалификации</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Получите бесплатный пробный урок
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Познакомьтесь с нашей методикой и убедитесь в её эффективности на практике
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Icon name="Clock" size={32} className="text-primary-foreground mx-auto mb-3" />
                <p className="text-primary-foreground/90">45 минут</p>
                <p className="text-primary-foreground/70 text-sm">индивидуальное занятие</p>
              </div>
              <div className="text-center">
                <Icon name="Video" size={32} className="text-primary-foreground mx-auto mb-3" />
                <p className="text-primary-foreground/90">Онлайн</p>
                <p className="text-primary-foreground/70 text-sm">в удобное время</p>
              </div>
              <div className="text-center">
                <Icon name="Gift" size={32} className="text-primary-foreground mx-auto mb-3" />
                <p className="text-primary-foreground/90">Бесплатно</p>
                <p className="text-primary-foreground/70 text-sm">без обязательств</p>
              </div>
            </div>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Записаться на пробный урок
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Полезные статьи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Практические советы по развитию эмоционального интеллекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "5 признаков высокого эмоционального интеллекта у ребёнка",
                excerpt: "Как понять, что ваш ребёнок эмоционально развит и что можно улучшить",
                readTime: "5 мин",
                category: "Развитие"
              },
              {
                title: "Что делать, если ребёнок не может справиться с гневом",
                excerpt: "Практические техники, которые помогут ребёнку управлять яростью",
                readTime: "7 мин",
                category: "Практика"
              },
              {
                title: "Как научить ребёнка дружить: 7 важных навыков",
                excerpt: "Социальные навыки, которые помогут вашему ребёнку легко заводить друзей",
                readTime: "6 мин",
                category: "Общение"
              }
            ].map((article, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-primary hover:text-primary/80">
                    <span className="text-sm font-medium mr-2">Читать далее</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/img/a450c831-cf94-40ea-8bd6-423183c85398.jpg" 
                  alt="ЭИ ДЕТИ логотип" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">ЭИ ДЕТИ</h3>
              </div>
              <p className="text-background/80 mb-6 max-w-md">
                Онлайн школа развития эмоционального интеллекта для детей от 6 до 16 лет. 
                Помогаем детям стать увереннее, счастливее и успешнее.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                  <Icon name="MessageCircle" size={20} className="text-background" />
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                  <Icon name="Mail" size={20} className="text-background" />
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
                  <Icon name="Phone" size={20} className="text-background" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">6-9 лет</a></li>
                <li><a href="#" className="hover:text-background transition-colors">10-13 лет</a></li>
                <li><a href="#" className="hover:text-background transition-colors">14-16 лет</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Пробный урок</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@eideti.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Пн-Пт: 9:00-20:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2024 ЭИ ДЕТИ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;