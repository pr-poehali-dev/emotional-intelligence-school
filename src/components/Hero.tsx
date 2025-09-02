import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full overflow-hidden opacity-20 hidden lg:block">
          <img 
            src="https://cdn.poehali.dev/files/2efebe2e-25da-43c2-9774-207638c0b7af.jpeg" 
            alt="Эмоции - это суперсила. Развиваем эмоциональный интеллект" 
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
            <div className="flex justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                <a href="https://wa.me/message/6YQROAKYU6PAC1">
                  <Icon name="Gift" size={24} className="mr-2" />
                  Получить бесплатный пробный урок
                </a>
              </Button>
            </div>
            
            {/* Video Section */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Наши занятия</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-2xl overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/files/35750b48-9357-4140-9f9f-cca7c225b815.jpeg"
                      alt="Дети играют с развивающими игрушками"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/files/65ed2f2f-21f3-4722-8ef2-336bd9e79242.jpeg"
                      alt="Дети изучают эмоции в игровой форме"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/files/de799000-fd3c-4aeb-808b-18f4e399e43a.jpeg"
                      alt="Групповые занятия с детьми"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://cdn.poehali.dev/files/62c9b32b-4a60-45ca-8977-b9a891e00188.jpeg" 
                alt="Эмоции - это суперсила. Развиваем ключевой навык XXI века — эмоциональный интеллект" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">Узнайте больше на пробном уроке!</h3>
                <Button size="lg" className="w-full" asChild>
                  <a href="https://wa.me/message/6YQROAKYU6PAC1">
                    <Icon name="Gift" size={20} className="mr-2" />
                    Записаться бесплатно
                  </a>
                </Button>
              </div>
              <div className="bg-blue-500 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Присоединяйтесь к нашему сообществу</h3>
                <Button variant="secondary" size="lg" className="w-full bg-white text-blue-500 hover:bg-gray-100" asChild>
                  <a href="https://t.me/eideti_vladivostok" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Telegram канал
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-6 text-2xl">Что даёт развитие эмоционального интеллекта?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Эмоциональный интеллект — это способность понимать и управлять своими эмоциями, 
              а также эффективно взаимодействовать с другими людьми
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <img 
                  src="https://cdn.poehali.dev/files/d33645cc-2dd2-4c02-a7e6-09028121d9c5.jpeg" 
                  alt="Семейные руки держат буквы FAMILY - символ единства и семейных ценностей" 
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
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-red-600">Мощная научная методика</h3>
              <div className="bg-white/80 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Научный подход - наш ДНК</h4>
                <p className="text-muted-foreground mb-4">
                  Мы сотрудничаем с ведущими учеными мира в области ЭИ, используем только лучшие мировые практики, доказавшие свою эффективность.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold mb-2">«ЭИ ДЕТИ» - спикеры самого авторитетного мероприятия по ЭИ в мире</p>
                  <p className="text-sm text-muted-foreground">Международный Конгресс ICEI (Австралия, 2019)</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-6 text-center">Наши специалисты</h4>
              <div className="space-y-6">
                <div className="bg-white/80 rounded-xl p-4 flex items-center gap-4">
                  <img 
                    src="/img/48be6c73-1eec-4c10-86ee-8341982a8f01.jpg" 
                    alt="Детский психолог" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Анна Петрова</h4>
                    <p className="text-sm text-muted-foreground">Детский психолог, 8 лет опыта</p>
                  </div>
                </div>
                <div className="bg-white/80 rounded-xl p-4 flex items-center gap-4">
                  <img 
                    src="https://cdn.poehali.dev/files/f7e93928-e321-4f5e-9a3d-3c5a43759d30.png" 
                    alt="Дэвид Карузо" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Михаил Соколов</h4>
                    <p className="text-sm text-muted-foreground">Детский терапевт, 6 лет опыта</p>
                  </div>
                </div>
                <div className="bg-white/80 rounded-xl p-4 flex items-center gap-4">
                  <img 
                    src="/img/fda3a071-f244-455b-8419-284524e9abea.jpg" 
                    alt="Педагог-психолог" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Елена Васильева</h4>
                    <p className="text-sm text-muted-foreground">Педагог-психолог, 10 лет опыта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <div className="bg-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Готовы начать развивать ЭИ у вашего ребёнка?</h3>
              <p className="text-muted-foreground mb-6">Попробуйте наш подход на бесплатном пробном уроке</p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/message/6YQROAKYU6PAC1">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на пробный урок
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;