import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/24909471-9ed8-4eb8-a543-12ad2286d726.jpeg" 
                alt="Логотип ЭИ ДЕТИ" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold">ЭИ ДЕТИ</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Развитие эмоционального интеллекта для детей
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Владивосток, ул. Русская 17</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79644448177" className="hover:text-white transition-colors">8 964 444 8177</a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@eideti.ru" className="hover:text-white transition-colors">info@eideti.ru</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Соцсети</h4>
            <div className="flex space-x-3">
              <a 
                href="https://t.me/eideti_vladivostok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a 
                href="https://wa.me/message/6YQROAKYU6PAC1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2024 ЭИ ДЕТИ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
