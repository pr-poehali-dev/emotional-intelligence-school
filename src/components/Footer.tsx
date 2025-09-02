import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://cdn.poehali.dev/files/24909471-9ed8-4eb8-a543-12ad2286d726.jpeg" 
                alt="Логотип школы ЭИ gemu" 
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <h3 className="text-xl font-bold">ЭИ • gemu</h3>
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
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79644448177" className="hover:text-background transition-colors">8 964 444 81 77</a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@gemu-ei.ru" className="hover:text-background transition-colors">info@gemu-ei.ru</a>
              </li>

              <li className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт: 9:00-19:00</span>
              </li>
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
  );
};

export default Footer;