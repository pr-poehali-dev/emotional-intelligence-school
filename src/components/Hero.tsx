import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[80vh] bg-gray-100 overflow-hidden">
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
                Если знать, как ими пользоваться, они помогут решить любые задачи.
              </p>
              <Button 
                className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="https://wa.me/message/6YQROAKYU6PAC1">Подробнее о тесте</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-20">
            <div className="relative min-h-[600px]">
              <img 
                src="https://cdn.poehali.dev/files/712d9065-c3ad-4bfd-b570-04a80ce85251.png"
                alt="Ребенок показывает эмоции"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] bg-blue-600 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-300 to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-700 rounded-full opacity-30 transform translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-green-500 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-between min-h-[90vh]">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              НЕ БЫВАЕТ ПЛОХИХ ЭМОЦИЙ
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Суперребенок научится работать с каждой эмоцией. Ведь даже грусть может помочь — например, сосредоточиться на контрольной.
            </p>
          </div>
          
          <div className="flex justify-center items-end">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/a46bf0c7-0511-40bb-a0fb-af5aa7442f3a.png"
                alt="Ребенок в синих очках"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://wa.me/message/6YQROAKYU6PAC1">Протестируй ребенка</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] bg-green-500 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-600 to-transparent"></div>
        <div className="absolute top-32 left-10 w-64 h-64 bg-green-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-red-600 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-between min-h-[90vh]">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              ОБЩЕНИЕ
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Супердетям проще понимать окружающих. Они умеют дружить, заботиться, сопереживать, убеждать.
            </p>
          </div>
          
          <div className="flex justify-center items-end">
            <div className="relative">
              <div className="absolute top-10 left-10 w-48 h-48 bg-green-400 rounded-full opacity-40"></div>
              <img 
                src="https://cdn.poehali.dev/files/608d1eaf-6267-4139-812e-4cf27929b766.png"
                alt="Ребенок улыбается"
                className="relative z-10 w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://wa.me/message/6YQROAKYU6PAC1">Протестируй ребенка</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] bg-red-600 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-500 to-transparent"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-400 rounded-full opacity-30 transform translate-x-32"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-400 rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-between min-h-[90vh]">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              НЕ ВСЕ СРАЗУ
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Иногда распознать эмоции и сладить с ними бывает не так просто.
            </p>
          </div>
          
          <div className="flex justify-center items-end">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/15c24f11-ce16-452f-b5f8-0ffc74aa5f51.png"
                alt="Ребенок в костюме супергероя"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://wa.me/message/6YQROAKYU6PAC1">Протестируй ребенка</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              СУПЕРВЗРОСЛЫЕ
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Из супердетей вырастают эмоционально грамотные взрослые. Например, супервзрослый не затаит злость, 
              а направит эту энергию на воплощение нового проекта.
            </p>
            
            <div className="relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 rounded-full opacity-30"></div>
              <img 
                src="https://cdn.poehali.dev/files/cad29b98-1ab9-4e09-9d42-a438f185ed80.png"
                alt="Взрослый в свитере с молнией"
                className="relative z-10 w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
