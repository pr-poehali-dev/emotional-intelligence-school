import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                onClick={() => setIsModalOpen(true)}
              >
                Подробнее о тесте
              </Button>
            </div>
          </div>

          <div className="relative min-h-[500px] flex items-end justify-center mt-12">
            <div className="absolute bottom-0 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-40"></div>
            <img 
              src="https://cdn.poehali.dev/files/8754cb70-8157-44de-a12b-d450d906b786.jpeg"
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
                src="https://cdn.poehali.dev/files/8529b564-da76-43f1-baa9-c689ff777a2b.jpeg"
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
                src="https://cdn.poehali.dev/files/437f740b-bd75-44a8-861d-a17df6f09b9e.jpeg"
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

      <section className="relative min-h-screen bg-blue-500 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-cyan-400 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-between min-h-screen">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              НЕ БЫВАЕТ ПЛОХИХ ЭМОЦИЙ
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Суперребенок научится работать с каждой эмоцией. Ведь даже грусть может помочь — например, сосредоточиться на контрольной.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8 pb-8">
            <div className="relative">
              <div className="absolute top-10 right-10 w-48 h-48 bg-blue-400 rounded-full opacity-40"></div>
              <img 
                src="https://cdn.poehali.dev/files/57e82319-ec44-43b2-be49-63931764a367.jpeg"
                alt="Ребенок в очках"
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

      <section className="relative min-h-screen bg-red-600 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-yellow-400 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-between min-h-screen">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              НЕ ВСЕ СРАЗУ
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Иногда распознать эмоции и сладить с ними бывает не так просто.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8 pb-8">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/7ab5840f-0f69-4f82-b3b5-ac48a85e1e34.jpeg"
                alt="Удивленный ребенок"
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

      <section className="relative min-h-screen bg-gray-100 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-400 rounded-full opacity-20"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col justify-between min-h-screen">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
              СУПЕРВЗРОСЛЫЕ
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              Из супердетей вырастают эмоционально грамотные взрослые. Например, супервзрослый не затаит злость, а направит эту энергию на воплощение нового проекта.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8 pb-8">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/b1a67d27-bde5-4119-b5ed-c1e6a98d4062.jpeg"
                alt="Супервзрослый"
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <Icon name="X" size={24} />
            </button>
            
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
              О тесте ТЭИ-П
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Российская онлайн-методика оценки уровня эмоционального интеллекта (ЭИ) детей и подростков в возрасте от 10 до 13 лет.
              </p>
              
              <p>
                Разработка и психометрическая проверка теста ТЭИ-П проводилась под руководством д.психол.н., профессора Института психологии Российской академии наук, Е.А. Сергиенко.
              </p>
              
              <p>
                В основе теста заложено представление об эмоциональном интеллекте как когнитивной способности.
              </p>
              
              <p>
                Способности эмоционального интеллекта лежат в основе развития многих гибких навыков детей и подростков: коммуникативность, лидерские и социальные навыки, адаптивность к изменениям, стрессоустойчивость, эмпатичное поведение и др.
              </p>
              
              <p>
                Тест ТЭИ-П — задачная методика, объективно измеряющая способности эмоционального интеллекта и в отличие от опросников, основанных на самоотчете, она является наиболее надежным инструментом оценки.
              </p>
              
              <p>
                Психометрические показатели теста соответствуют основным требованиям, предъявляемым к исследовательским методикам: показатели валидности и надежности находятся на достаточном уровне (Сергиенко Е.А. и др.).
              </p>
            </div>
            
            <div className="mt-8">
              <Button 
                className="w-full bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="https://wa.me/message/6YQROAKYU6PAC1">Протестируй ребенка</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;