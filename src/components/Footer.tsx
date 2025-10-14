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
            <h4 className="font-semibold mt-4 mb-3">Соцсети</h4>
            <div className="flex space-x-3">
              <a 
                href="https://t.me/eideti_vladivostok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
              <a 
                href="https://vk.com/golovolomka_centr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="VK"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.785 16.241s.288-.032.436-.194c.136-.149.132-.428.132-.428s-.019-1.307.587-1.5c.597-.189 1.364 1.263 2.177 1.823.615.424 1.083.331 1.083.331l2.177-.03s1.139-.071.599-.967c-.044-.074-.315-.664-1.62-1.878-1.367-1.27-1.184-1.065.463-3.263.999-1.338 1.398-2.154 1.274-2.503-.118-.333-.849-.245-.849-.245l-2.45.015s-.182-.025-.317.056c-.131.079-.216.263-.216.263s-.387 1.03-.902 1.906c-1.085 1.847-1.519 1.945-1.697 1.83-.413-.267-.31-1.073-.31-1.645 0-1.788.271-2.533-.528-2.726-.266-.064-.462-.106-1.143-.113-.873-.009-1.612.003-2.031.208-.279.136-.494.44-.363.458.162.022.528.099.722.364.251.342.242 1.11.242 1.11s.144 2.105-.336 2.366c-.33.179-.782-.187-1.753-1.862-.497-.857-.873-1.806-.873-1.806s-.072-.177-.201-.272c-.157-.115-.376-.152-.376-.152l-2.328.015s-.35.01-.478.162c-.114.135-.009.414-.009.414s1.816 4.253 3.873 6.397c1.885 1.967 4.025 1.837 4.025 1.837h.971z"/>
                </svg>
              </a>
            </div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;