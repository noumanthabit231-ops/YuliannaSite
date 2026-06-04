import React from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  FileText, 
  Info, 
  Camera, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Star, 
  User 
} from 'lucide-react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold tracking-tight">FitnessStudioMix</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-indigo-600 transition-colors">О курсе</a>
              <a href="#modules" className="hover:text-indigo-600 transition-colors">Программа</a>
              <a href="#services" className="hover:text-indigo-600 transition-colors">Услуги</a>
              <a href="#pricing" className="hover:text-indigo-600 transition-colors">Стоимость</a>
              <a href="#requisites" className="hover:text-indigo-600 transition-colors">Реквизиты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Авторский курс Юлианны Бруг
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Трансформация с <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">FitnessStudioMix</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Профессиональный подход к фитнесу и здоровью. Обучающий курс, который изменит ваше представление о теле и тренировках.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Course Info Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Подробная информация об обучающей программе">О курсе</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Дата старта</h3>
                  <p className="text-slate-600">[Укажите дату старта курса]</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Длительность</h3>
                  <p className="text-slate-600">[Укажите продолжительность обучения]</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Автор курса</h3>
                  <p className="text-slate-600">Юлианна Бруг — эксперт в области фитнеса с многолетним опытом.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-6">О чем этот курс?</h3>
              <p className="text-slate-600 mb-4 italic">
                "[Здесь будет ваше описание курса. Расскажите о целях, для кого он предназначен и каких результатов достигнут ученики.]"
              </p>
              <div className="space-y-3">
                {['Комплексный подход', 'Профессиональная поддержка', 'Результат через науку'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-700">
                    <CheckCircle2 size={18} className="text-indigo-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Пошаговый план вашего обучения">Программа курса</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <Card key={num}>
                <div className="text-indigo-600 font-bold text-4xl mb-4 opacity-20">0{num}</div>
                <h3 className="text-xl font-bold mb-4">Модуль {num}: [Название]</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                    <span>[Описание темы или урока]</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                    <span>[Описание темы или урока]</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                    <span>[Описание темы или урока]</span>
                  </li>
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Исчерпывающий список предоставляемых услуг">Наши Услуги</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-indigo-600 transition-all duration-300">
              <Star className="text-indigo-600 group-hover:text-white mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Персональные тренировки</h3>
              <p className="text-slate-600 group-hover:text-indigo-100 mb-6 leading-relaxed">
                [Подробное описание услуги: индивидуальный план, контроль техники, адаптация под ваши цели и состояние здоровья. Полное сопровождение эксперта.]
              </p>
              <div className="text-sm font-semibold uppercase tracking-widest text-indigo-600 group-hover:text-indigo-200">Подробная информация</div>
            </div>
            
            <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-indigo-600 transition-all duration-300">
              <ShieldCheck className="text-indigo-600 group-hover:text-white mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Групповые онлайн-курсы</h3>
              <p className="text-slate-600 group-hover:text-indigo-100 mb-6 leading-relaxed">
                [Подробное описание услуги: работа в комьюнити, поддержка единомышленников, регулярные эфиры и структурированная подача материала.]
              </p>
              <div className="text-sm font-semibold uppercase tracking-widest text-indigo-600 group-hover:text-indigo-200">Подробная информация</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Policy */}
      <section id="pricing" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ценовая политика</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mb-10 rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto mb-16">
              Мы придерживаемся прозрачности в ценообразовании. Стоимость наших услуг зависит от выбранного формата обучения и объема обратной связи.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Базовый</h3>
              <div className="text-4xl font-bold mb-6">00 000 ₸</div>
              <ul className="text-left space-y-4 text-slate-400 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-indigo-400" />
                  <span>Доступ к материалам</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-indigo-400" />
                  <span>Общий чат</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-600 p-8 rounded-3xl border border-indigo-500 transform scale-105 shadow-2xl shadow-indigo-500/20">
              <h3 className="text-xl font-bold mb-4">Оптимальный</h3>
              <div className="text-4xl font-bold mb-6">00 000 ₸</div>
              <ul className="text-left space-y-4 text-indigo-100 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-white" />
                  <span>Все из Базового</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-white" />
                  <span>Проверка ДЗ</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-white" />
                  <span>Сертификат</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4">VIP</h3>
              <div className="text-4xl font-bold mb-6">00 000 ₸</div>
              <ul className="text-left space-y-4 text-slate-400 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-indigo-400" />
                  <span>Все из Оптимального</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-indigo-400" />
                  <span>Личные созвоны</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requisites Section */}
      <section id="requisites" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Юридическая информация</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <Info size={24} className="text-indigo-600" />
                <span>Реквизиты компании</span>
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <span className="font-semibold block text-slate-900">Индивидуальный предприниматель:</span>
                  Юлиана Бруг
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">БИН:</span>
                  930331401187
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">ФИО руководителей:</span>
                  ЮЛИАНА СИЛКИНА
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin size={20} className="text-slate-400 mt-1 flex-shrink-0" />
                  <span>
                    КАЗАХСТАН, АЛМАТИНСКАЯ обл, КАРАСАЙСКИЙ р-н, КАСКЕЛЕН г, АБЫЛАЙХАНА ул, дом 102А
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <CreditCard size={24} className="text-indigo-600" />
                <span>Платежная информация</span>
              </h3>
              <p className="text-slate-600">
                Оплата услуг производится онлайн через защищенный платежный шлюз. После оплаты на вашу электронную почту будет отправлен фискальный чек и доступ к материалам курса.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-8 bg-slate-200 rounded"></div>
                <div className="w-12 h-8 bg-slate-200 rounded"></div>
                <div className="w-12 h-8 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Placeholders */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white border border-slate-200 rounded-xl">
            <h4 className="font-bold flex items-center space-x-2 mb-4">
              <FileText size={20} className="text-indigo-600" />
              <span>Публичная оферта</span>
            </h4>
            <div className="text-sm text-slate-500 h-32 overflow-y-auto pr-2 bg-slate-50 p-3 rounded">
              [Здесь будет размещен текст вашей публичной оферты. На данный момент это плейсхолдер для прохождения процесса эквайринга. Данный документ регулирует отношения между исполнителем и заказчиком, определяет порядок оплаты, предоставления услуг и ответственности сторон.]
            </div>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-xl">
            <h4 className="font-bold flex items-center space-x-2 mb-4">
              <ShieldCheck size={20} className="text-indigo-600" />
              <span>Политика конфиденциальности</span>
            </h4>
            <div className="text-sm text-slate-500 h-32 overflow-y-auto pr-2 bg-slate-50 p-3 rounded">
              [Здесь будет размещен текст политики конфиденциальности. Документ описывает, какие персональные данные мы собираем, как их используем и защищаем в соответствии с законодательством Республики Казахстан.]
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-lg font-bold tracking-tight">FitnessStudioMix</span>
              </div>
              <p className="text-slate-500 text-sm">© 2024 FitnessStudioMix. Все права защищены.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Camera size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
