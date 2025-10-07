import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/24909471-9ed8-4eb8-a543-12ad2286d726.jpeg" 
              alt="Логотип школы ЭИ gemu" 
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">ЭИ ДЕТИ</h1>
              <div className="text-xs text-muted-foreground">
                <div>Адрес: г. Владивосток, ул. Русская 17</div>
                <div>Тел: 8 964 444 8177</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={14} />
              <span>г. Москва, ул. Примерная, д. 123</span>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#programs" className="text-foreground hover:text-primary transition-colors">Программы</a>
          <a href="#results" className="text-foreground hover:text-primary transition-colors">Результаты</a>
          <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
          <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
          <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Button asChild>
          <a href="https://wa.me/message/6YQROAKYU6PAC1">Получить урок</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;