import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [isProgram2ModalOpen, setIsProgram2ModalOpen] = useState(false);
  const [isProgram3ModalOpen, setIsProgram3ModalOpen] = useState(false);
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

      <section className="relative min-h-screen bg-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 text-center mb-16">
            ЗАНЯТИЯ
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Все пути к познанию эмоций ведут...в «ЭИ дети»! «ЭИ дети» – разработчик российских научных инструментов оценки и развития способностей эмоционального интеллекта (ЭИ) детей и подростков. Это:
            </p>
            
            <div className="space-y-4 text-lg md:text-xl text-gray-700 pt-8">
              <p>
                - методика, разработанная при мощной научной поддержке профессоров Института психологии РАН.
              </p>
              <p>
                - только проверенные на практике инструменты по развитию эмоционального интеллекта
              </p>
              <p className="font-semibold text-gray-900">
                - гарантия развития ЭИ вашего ребенка с большой буквы!
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://wa.me/message/6YQROAKYU6PAC1">Записаться на занятия</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen bg-gray-50 overflow-hidden py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 text-center mb-16">
            ПРОГРАММЫ
          </h2>
          
          <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
            <div className="relative w-full max-w-[14rem]">
              <button
                onClick={() => setIsProgramModalOpen(true)}
                className="w-full bg-blue-500 p-6 text-white text-center flex flex-col justify-center items-center transform transition-transform hover:scale-105 cursor-pointer" 
                style={{borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%', aspectRatio: '1/1'}}
              >
                <h3 className="text-xl md:text-2xl font-light mb-2">4–6 ЛЕТ</h3>
                <p className="text-sm md:text-base">
                  Эмоциональная подготовка к школе
                </p>
              </button>
            </div>

            <div className="relative w-full max-w-[16rem]">
              <button
                onClick={() => setIsProgram2ModalOpen(true)}
                className="w-full bg-purple-600 p-6 text-white text-center flex flex-col justify-center items-center transform transition-transform hover:scale-105 cursor-pointer" 
                style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', aspectRatio: '1.2/1'}}
              >
                <h3 className="text-xl md:text-2xl font-light mb-2">7–10 ЛЕТ</h3>
                <p className="text-sm md:text-base">
                  Развиваем эмоциональный интеллект
                </p>
              </button>
            </div>

            <div className="relative w-full max-w-[14rem]">
              <button
                onClick={() => setIsProgram3ModalOpen(true)}
                className="w-full bg-yellow-400 p-6 text-gray-900 text-center flex flex-col justify-center items-center transform transition-transform hover:scale-105 cursor-pointer" 
                style={{borderRadius: '30% 70% 40% 60% / 50% 50% 50% 50%', aspectRatio: '1/1'}}
              >
                <h3 className="text-xl md:text-2xl font-light mb-2">11–15 ЛЕТ</h3>
                <p className="text-sm md:text-base">
                  Эмоциональное лидерство
                </p>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://wa.me/message/6YQROAKYU6PAC1">Выбрать программу</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen bg-white overflow-hidden py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 text-center mb-8">
            КОМАНДА
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Осуществляют научно-методическую поддержку 50 центров в 40 городах России и СНГ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/1831a821-1dc2-4441-a6b8-f89eada33e58.jpeg" 
                  alt="Елена Сергиенко"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Елена Сергиенко</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Доктор психологических наук, профессор Института психологии Российской Академии Наук, научный консультант сети центров «ЭИ дети»
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/3ff15022-05cb-4d22-a32f-16d20dd3c42f.jpeg" 
                  alt="Татьяна Киселева"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Татьяна Киселева</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Кандидат психологических наук, генеральный директор «ЭИ дети». Разработчик программ развития эмоционального интеллекта детей и взрослых, соавтор книг и пособий по развитию ЭИ
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/8e776408-9797-40fc-8529-91007387ef19.jpeg" 
                  alt="Елена Хлевная"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Елена Хлевная</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Доктор экономических и кандидат психологических наук, соавтор первой русскоязычной объективной онлайн методики оценки эмоционального интеллекта ТЭИ, научный руководитель сети центров «ЭИ дети»
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/de366626-0f8d-471c-8ed9-0ec733a293e7.jpeg" 
                  alt="Дэвид Карузо"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Дэвид Карузо</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Профессор, исследователь центра развития эмоционального интеллекта Йельского университета, Ph.D., со-основатель научной теории эмоционального интеллекта
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/5ee9108a-9a60-4219-9d59-068d58faba31.jpeg" 
                  alt="Давиде Антоньяцца"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Давиде Антоньяцца</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Профессор Университета прикладных наук Швейцарии, M.Ed., мировой эксперт в области детского эмоционального интеллекта
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/74b4b8d5-ff9d-49f7-9481-67c6067fbdd0.jpeg" 
                  alt="Недашковская Лия Томазиевна"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Недашковская Лия</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Руководитель центра «ЭИ ДЕТИ» в г.Владивосток, преподаватель, специалист в области развития ЭИ у детей и взрослых
              </p>
            </div>
          </div>
        </div>
      </section>

      {isProgramModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={() => setIsProgramModalOpen(false)}>
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsProgramModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <Icon name="X" size={24} />
            </button>
            
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Формируем основу для адаптации к школе: учим детей проявлять эмоции понятными и социально приемлемыми способами.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 my-12 text-center">
                <div>
                  <div className="text-5xl font-light mb-2">8</div>
                  <p className="text-sm">человек в группе</p>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">60</div>
                  <p className="text-sm">минут длится одно занятие</p>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">1</div>
                  <p className="text-sm">раз в неделю</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Мы разработали систему занятий для детей 4-6 лет с учётом лучшего российского научно-практического опыта и опыта 20 стран, которые внедрили эмоциональный интеллект в свою систему школьного образования: США, Канады, Швейцарии, Италии, Испании и др. Используя инструменты и методики, доказавшие эффективность на мировом опыте, мы гарантируем прогресс в эмоционально-интеллектуальной сфере ребёнка в центрах «ЭИ дети».
              </p>

              <h3 className="text-2xl font-light mt-8 mb-4">Какие навыки формируем</h3>
              <ul className="space-y-2">
                <li>Волевая саморегуляция</li>
                <li>Внимание и концентрация</li>
                <li>Умение дружить, начинать и поддерживать дружеские отношения</li>
                <li>Адаптивность</li>
                <li>Управление своим поведением</li>
              </ul>

              <h3 className="text-2xl font-light mt-8 mb-4">Каких результатов можно ожидать?</h3>
              <ul className="space-y-2">
                <li>Знакомимся с 8 базовыми эмоциями</li>
                <li>Углубленно изучаем 5 эмоций</li>
                <li>Умеем справляться со своим страхом</li>
                <li>Учимся регулировать «сильные» эмоции</li>
                <li>Умеем концентрироваться на задачах</li>
                <li>Умеем проявлять заботу и оказать поддержку</li>
                <li>Умеем доверять и знаем, кому доверять нельзя</li>
                <li>Углубленно изучаем 3 эмоции</li>
                <li>Умеем говорить о своих эмоциях</li>
                <li>Умеем расслабляться и концентрироваться</li>
                <li>Умеем определять эмоции в музыке</li>
                <li>Учимся позитивно мыслить</li>
                <li>Знаем три стратегии управления эмоциями</li>
                <li>Чувствуем и понимаем интенсивность эмоций</li>
                <li>Начинаем распознавать и понимать эмоции других людей</li>
                <li>Распознаём свои эмоции и эмоции других</li>
                <li>Умеем проявлять эмоции социально приемлемым способом</li>
                <li>Умеет использовать эмоции в конкретной ситуации</li>
                <li>Уверенно чувствуем себя в окружении незнакомых людей</li>
                <li>Умеем дружить, поддерживать дружеские отношения</li>
                <li>Знаем как себя вести в конфликтных ситуациях</li>
              </ul>

              <h3 className="text-2xl font-light mt-8 mb-4">Дневник эмоций</h3>
              <p className="text-gray-700 leading-relaxed">
                Всем родителям мы рекомендуем ежедневно вести с ребенком «Дневник эмоций» и самостоятельно «Дневник наблюдений родителя». Во время работы с Дневниками вы будете анализировать эмоции и объяснять их причины, придумывать способы решения сложных ситуаций. Ребенок каждый день записывает и рисует эмоции, которые у него возникли в течение дня — это позволяет ему обращать внимание на свои эмоции и связывать их с определенными событиями. Подобное подведение «эмоционального итога дня» не только тренирует эмоциональный интеллект ребенка, но и повышает уверенность в себе.
              </p>

              <div className="flex justify-center mt-8">
                <Button 
                  className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
                  asChild
                >
                  <a href="https://wa.me/message/6YQROAKYU6PAC1">Записаться на программу</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isProgram2ModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={() => setIsProgram2ModalOpen(false)}>
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsProgram2ModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <Icon name="X" size={24} />
            </button>
            
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Узнаем, как использовать свои эмоции в различных ситуациях, развиваем навыки общения, учимся находить общий язык со сверстниками и взрослыми
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 my-12 text-center">
                <div>
                  <div className="text-5xl font-light mb-2">8</div>
                  <p className="text-sm">человек в группе</p>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">60</div>
                  <p className="text-sm">минут длится одно занятие</p>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">1</div>
                  <p className="text-sm">раз в неделю</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Занятия для детей 7-9 лет разработаны с учётом лучшего российского научно-практического опыта и опыта 20 стран, которые внедрили эмоциональный интеллект в свою систему школьного образования: США, Канады, Швейцарии, Италии, Испании и др. Используя инструменты и методики, доказавшие эффективность на мировом опыте, мы гарантируем прогресс в эмоционально-интеллектуальной сфере ребёнка в центрах «ЭИ дети».
              </p>

              <h3 className="text-2xl font-light mt-8 mb-4">Какие навыки формируем</h3>
              <ul className="space-y-2">
                <li>Эмоциональная грамотность</li>
                <li>Эмоциональная гибкость</li>
                <li>Волевая саморегуляция</li>
                <li>Внимание и концентрация</li>
                <li>Мотивация</li>
                <li>Работа в команде</li>
                <li>Управление своим поведением</li>
              </ul>

              <h3 className="text-2xl font-light mt-8 mb-4">Каких результатов можно ожидать?</h3>
              <ul className="space-y-2">
                <li>Знакомимся с 8 базовыми эмоциями</li>
                <li>Умеем концентрировать внимание и внимательно слушать</li>
                <li>Умеем находить интересное в том, что нужно делать</li>
                <li>Знаем дыхательные техники успокоения и расслабления</li>
                <li>Умеем распознавать свое эмоциональное состояние</li>
                <li>Знаем, чем может быть полезна злость, печаль и радость</li>
                <li>Знаем, что делать, если обижают и дразнят</li>
                <li>Умеем работать в команде, выполнять общие задачи</li>
                <li>Знаем этикет, правила взаимодействия в группе</li>
                <li>Умеем решать школьные задачи, используя эмоции</li>
                <li>Знаем способы преодоления страхов</li>
                <li>Умеем управлять своими эмоциями и поведением</li>
                <li>Развиваем уверенность в себе</li>
                <li>Умеем справляться с растерянностью</li>
                <li>Умеем управлять своей мотивацией</li>
                <li>Умеем дружить, эффективно взаимодействовать со сверстниками и взрослыми</li>
                <li>Можем адекватно реагировать на поведение других, адаптироваться в незнакомой ситуации</li>
                <li>Умеем справляться со стрессом</li>
                <li>Умеем находить решение конфликтной ситуации</li>
              </ul>

              <div className="flex justify-center mt-8">
                <Button 
                  className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
                  asChild
                >
                  <a href="https://wa.me/message/6YQROAKYU6PAC1">Записаться на программу</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isProgram3ModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={() => setIsProgram3ModalOpen(false)}>
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsProgram3ModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <Icon name="X" size={24} />
            </button>
            
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Развиваем осознанность, навыки межличностного взаимодействия, моделируем и разбираем различные жизненные ситуации и модели поведения
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 my-12 text-center">
                <div>
                  <div className="text-5xl font-light mb-2">8</div>
                  <p className="text-sm">человек в группе</p>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">60</div>
                  <p className="text-sm">минут длится одно занятие</p>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">1</div>
                  <p className="text-sm">раз в неделю</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Занятия для подростков 10-13 и 14-16 лет разработаны с учётом лучшего российского научно-практического опыта и опыта 20 стран, которые внедрили эмоциональный интеллект в свою систему школьного образования: США, Канады, Швейцарии, Италии, Испании и др. На занятиях дети моделируют реальные ситуации, изучают кейсы, начинают слушать мини-лекции.
              </p>

              <h3 className="text-2xl font-light mt-8 mb-4">Какие навыки формируем</h3>
              <ul className="space-y-2">
                <li>Осознанность</li>
                <li>Мотивация</li>
                <li>Уверенность, адекватная самооценка</li>
                <li>Работа в команде</li>
                <li>Управление своим поведением</li>
                <li>Навыки межличностного взаимодействия со сверстниками и взрослыми</li>
                <li>Эмоциональная гибкость</li>
              </ul>

              <h3 className="text-2xl font-light mt-8 mb-4">Каких результатов можно ожидать?</h3>
              <ul className="space-y-2">
                <li>Знакомимся с миром эмоций, чувств, настроений и состояний</li>
                <li>Развиваем эмпатию</li>
                <li>Знаем, как определить ложь</li>
                <li>Отрабатываем навыки коммуникации, умеем взаимодействовать в команде</li>
                <li>Умеем использовать эмоции в жизненных ситуациях</li>
                <li>Отрабатываем эффективные стратегии управления своими эмоциями и поведением</li>
                <li>Знаем стратегии поведения в эмоционально – насыщенной ситуации</li>
                <li>Умеем выстраивать социальные контакты</li>
                <li>Можем уверенно выступить перед классом</li>
                <li>Знаем, как справляться со стрессом, волнением</li>
                <li>Умеем ставить реалистичные цели</li>
                <li>Умеем управлять эмоциями и поведением для достижения целей</li>
                <li>Умеем ответственно принимать решения</li>
                <li>Знаем приемы сглаживания конфликтных ситуаций</li>
                <li>Умеем говорить «нет» и противостоять группе</li>
                <li>Умеем аргументировать свою позицию и отстаивать свои интересы</li>
              </ul>

              <div className="flex justify-center mt-8">
                <Button 
                  className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-10 py-6 text-lg font-semibold"
                  asChild
                >
                  <a href="https://wa.me/message/6YQROAKYU6PAC1">Записаться на программу</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

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