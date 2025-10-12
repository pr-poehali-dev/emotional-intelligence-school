import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="https://cdn.poehali.dev/files/24909471-9ed8-4eb8-a543-12ad2286d726.jpeg" 
            alt="Логотип ЭИ ДЕТИ" 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="hidden md:block text-sm text-gray-700">
            г. Владивосток, ул. Русская 17
          </div>
        </div>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2"
          aria-label="Меню"
        >
          <div className="space-y-1.5">
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-8 h-0.5 bg-black"></div>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6">
          <nav className="space-y-4">
            <a href="#test" className="block text-lg text-gray-800 hover:text-yellow-500">О тесте</a>
            <a href="#emotions" className="block text-lg text-gray-800 hover:text-yellow-500">Эмоции</a>
            <a href="#contacts" className="block text-lg text-gray-800 hover:text-yellow-500">Контакты</a>
          </nav>
          <div className="mt-6 text-sm text-gray-600">
            <div>г. Владивосток, ул. Русская 17</div>
            <div>Тел: 8 964 444 8177</div>
          </div>
          <Button 
            className="mt-4 w-full bg-yellow-400 text-black hover:bg-yellow-500"
            asChild
          >
            <a href="https://wa.me/message/6YQROAKYU6PAC1">Связаться</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;