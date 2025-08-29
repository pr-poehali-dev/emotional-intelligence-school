import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <>
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
            <h1 className="md:text-6xl font-bold mb-6 text-foreground leading-tight text-3xl">
              Развиваем эмоциональный интеллект детей
              <br />
              <span className="text-primary">от 6 до 16 лет</span>
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
            
            {/* Video Section */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Посмотрите, как проходят наши занятия</h3>
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="/img/video-preview.jpg"
                  >
                    <source src="/videos/demo-lesson.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-primary/20 backdrop-blur-sm rounded-full p-6">
                      <Icon name="Play" size={48} className="text-primary" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-muted-foreground mt-4">
                  Демонстрация урока по развитию эмоционального интеллекта для детей 8-10 лет
                </p>
              </div>
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
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name={problem.icon} size={24} className="text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-3">Узнайте больше на пробном уроке!</h3>
              <Button size="lg" className="w-full">
                <Icon name="Gift" size={20} className="mr-2" />
                Записаться бесплатно
              </Button>
            </div>
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
          <div className="text-center mt-16">
            <div className="bg-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Готовы начать развивать ЭИ у вашего ребёнка?</h3>
              <p className="text-muted-foreground mb-6">Попробуйте наш подход на бесплатном пробном уроке</p>
              <Button size="lg" className="text-lg px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на пробный урок
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;