import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen bg-gray-100 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-6 max-w-3xl">
            ТЕСТ ЭМОЦИОНАЛЬНОГО ИНТЕЛЛЕКТА ПОДРОСТКОВ (ТЭИП) 10-13 ЛЕТ
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl">
            Разработан при научной поддержке экспертов Института психологии РАН. 
            Отчет для родителя и педагога + отчет для ребенка (на понятном для него языке) 
            для оценки и построения траектории развития ключевых навыков XXI века. 
            Легко интегрируется в образовательные платформы и LMS системы.
          </p>
          
          <div className="relative mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 transform rotate-45">
              <div className="w-full h-full bg-yellow-400 rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-4">
                ЭМОЦИИ — ЭТО СУПЕРСИЛА
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Если знать, как ими пользоваться, они <span className="bg-yellow-300">помогут</span> решить любые задачи.
              </p>
              <Button 
                className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="https://wa.me/message/6YQROAKYU6PAC1">Подробнее о тесте</a>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[500px] flex items-end justify-center mt-12">
            <div className="absolute bottom-0 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-40"></div>
            <img 
              src="https://cdn.poehali.dev/files/b25ecc07-7377-43ce-a934-7d08655c0e9b.jpeg"
              alt="Ребенок показывает эмоции"
              className="relative z-10 w-full max-w-lg h-auto object-contain"
            />
            <Button 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold z-20"
              asChild
            >
              <a href="https://wa.me/message/6YQROAKYU6PAC1">Протестируй ребенка</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen bg-purple-600 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full opacity-30"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-between min-h-screen">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              ЩЕЛК!
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Учим переключаться с одной эмоции на другую — это как суперспособность управлять своим настроением.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8 pb-8">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/c62a6567-d488-49a7-a3c4-6f65a0475340.jpeg"
                alt="Ребенок в маске супергероя"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://wa.me/message/6YQROAKYU6PAC1">Протестируй ребенка</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen bg-yellow-500 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-500 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-between min-h-screen">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
              СУПЕРДЕТИ
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              Владеющие эмоциональным интеллектом дети лидируют в учёбе, спорте и отношениях с окружающими.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8 pb-8">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/64e037b2-3cea-4658-96c4-909998c84519.jpeg"
                alt="Ребенок в очках-пикселях"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold border-2 border-black"
              asChild
            >
              <a href="https://wa.me/message/6YQROAKYU6PAC1">Протестируй ребенка</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen bg-green-500 overflow-hidden">
        <div className="absolute top-32 left-10 w-64 h-64 bg-green-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-yellow-500 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-between min-h-screen">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              ОБЩЕНИЕ
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Развитая эмпатия помогает выстраивать крепкие дружеские связи и находить общий язык с любым человеком.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8 pb-8">
            <div className="relative">
              <div className="absolute top-10 left-10 w-48 h-48 bg-green-400 rounded-full opacity-40"></div>
              <img 
                src="https://cdn.poehali.dev/files/68883cb4-b35a-4ee4-9ccc-b5cf9d5d0662.jpeg"
                alt="Ребенок улыбается"
                className="relative z-10 w-full max-w-md h-auto object-contain"
              />
            </div>
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://wa.me/message/6YQROAKYU6PAC1">Протестируй ребенка</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;