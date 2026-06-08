import React from 'react';
import { 
  CheckCircle2, 
  CreditCard, 
  FileText, 
  Info, 
  Camera, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
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
              Онлайн-курс тренировок для женщин
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Система заботы <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">о себе и своём теле</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Комплексная работа над телом, осанкой и энергией. Укрепление мышц, создание подтянутого силуэта и полезные привычки на всю жизнь.
            </p>
          </motion.div>
        </div>
      </header>

      {/* About Course */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>О курсе</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-6">Онлайн-курс тренировок для женщин</h3>
              <p className="text-slate-600 mb-4">
                Это не просто тренировки, а полноценная система заботы о себе, своём теле и здоровье. В программе вас ждёт комплексная работа над всем телом: укрепление мышц, улучшение осанки, повышение выносливости и создание красивого, подтянутого силуэта. Особое внимание уделяется животу, ягодицам, ногам, рукам, спине и талии.
              </p>
              <div className="space-y-3">
                {[
                  'Правильный уход за телом',
                  'Поддержание стройности и здоровья',
                  'Улучшение качества кожи и внешнего вида',
                  'Восстановление энергии и уверенности',
                  'Полезные привычки на всю жизнь'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-700">
                    <CheckCircle2 size={18} className="text-indigo-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Автор курса</h3>
                  <p className="text-slate-600">Юлианна Бруг — эксперт в области фитнеса с многолетним опытом.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Для кого</h3>
                  <p className="text-slate-600">Для женщин любого возраста и уровня подготовки. Можно заниматься в удобное время и комфортном темпе.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Формат</h3>
                  <p className="text-slate-600">Онлайн-курс с доступом к материалам, проверкой заданий и поддержкой в общем чате.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mb-10 rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto mb-16">
              Прозрачная ценовая политика. Все цены указаны в тенге.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <div className="bg-indigo-600 p-8 rounded-3xl border border-indigo-500 shadow-2xl shadow-indigo-500/20">
              <h3 className="text-xl font-bold mb-4">Стандарт</h3>
              <div className="text-4xl font-bold mb-6">9 999 ₸</div>
              <p className="text-indigo-100 mb-6">Ежемесячная подписка</p>
              <ul className="text-left space-y-4 text-indigo-100 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-white" />
                  <span>Доступ ко всем материалам курса</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-white" />
                  <span>Общий чат участников</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-white" />
                  <span>Проверка домашних заданий</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-white" />
                  <span>Сертификат по окончании</span>
                </li>
              </ul>
              <div className="text-sm text-indigo-200">
                При оплате через сайт вы получите фискальный чек.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requisites */}
      <section id="requisites" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Реквизиты и документы</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <Info size={24} className="text-indigo-600" />
                <span>Реквизиты ИП</span>
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <span className="font-semibold block text-slate-900">Индивидуальный предприниматель:</span>
                  Силкина Юлиана Евгеньевна
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">БИН:</span>
                  930331401187
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">ФИО руководителя:</span>
                  Силкина Юлиана Евгеньевна
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin size={20} className="text-slate-400 mt-1 flex-shrink-0" />
                  <span>
                    Казахстан, Алматинская обл, Карасайский р-н, г. Каскелен, ул. Абылайхана, дом 102А
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <CreditCard size={24} className="text-indigo-600" />
                <span>Платёжные реквизиты</span>
              </h3>
              <p className="text-slate-600">
                Оплата принимается онлайн через защищённый шлюз Robokassa. После оплаты на вашу почту придёт фискальный чек и доступ к курсу.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-8 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-500">VISA</div>
                <div className="w-12 h-8 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-500">MC</div>
              </div>
            </div>
          </div>

          {/* Legal documents */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-slate-200 rounded-xl">
              <h4 className="font-bold flex items-center space-x-2 mb-4">
                <FileText size={20} className="text-indigo-600" />
                <span>Публичная оферта</span>
              </h4>
              <div className="text-sm text-slate-500 h-32 overflow-y-auto pr-2 bg-slate-50 p-3 rounded">
                [Текст публичной оферты будет размещён здесь. Документ регламентирует порядок оплаты, возврата и предоставления услуг в соответствии с законодательством РК.]
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl">
              <h4 className="font-bold flex items-center space-x-2 mb-4">
                <ShieldCheck size={20} className="text-indigo-600" />
                <span>Политика конфиденциальности</span>
              </h4>
              <div className="text-sm text-slate-500 h-32 overflow-y-auto pr-2 bg-slate-50 p-3 rounded">
                Политика конфиденциальности и обработки персональных данных<br/><br/>
                Настоящая политика конфиденциальности и обработки персональных данных регулирует порядок обработки и использования персональных и иных данных онлайн ресурса Силкиной Юлианы Евгеньевны (дальше — Оператор). Действующая редакция настоящей Политики конфиденциальности, постоянно доступна для ознакомления, и размещена в сети Интернет по адресу: https://t.me/+JsTLZr7CMG8xNjJi<br/><br/>
                Передавая Оператору персональные и иные данные посредством их заполнения через онлайн ресурс, Пользователь подтверждает свое согласие на использование указанных данных на условиях, изложенных в настоящей Политике конфиденциальности.<br/>
                Если Пользователь не согласен с условиями настоящей Политики конфиденциальности, он обязан прекратить использование онлайн ресурса.<br/>
                Безусловным акцептом настоящей Политики конфиденциальности является начало использования онлайн ресурса Пользователем.<br/><br/>
                1.ТЕРМИНЫ<br/>
                1.1. онлайн ресурс – сайт/телеграм-бот, расположенный в сети Интернет по адресу https://t.me/+JsTLZr7CMG8xNjJi<br/>
                Все исключительные права на онлайн ресурс и его отдельные элементы (включая программное обеспечение, дизайн) принадлежат Оператору в полном объеме. Передача исключительных прав Пользователю не является предметом настоящей Политики конфиденциальности.<br/>
                1.2. Пользователь — лицо, использующее онлайн ресурс.<br/>
                1.3. Законодательство — действующее законодательство Республики Казахстан.<br/>
                1.4. Персональные данные — персональные данные Пользователя, которые Пользователь предоставляет самостоятельно при регистрации или в процессе использования функционала онлайн ресурса.<br/>
                1.5. Данные — иные данные о Пользователе (не входящие в понятие Персональных данных).<br/>
                1.6. Регистрация — заполнение Пользователем Регистрационной формы, путем указания необходимых сведений и отправки сканированных документов.<br/>
                1.7. Регистрационная форма — форма, которую Пользователь должен заполнить для возможности использования онлайн ресурса в полном объеме.<br/>
                1.8. Услуга(и) — услуги, предоставляемые Оператором на основании соглашения.<br/><br/>
                2. СБОР И ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ<br/>
                2.1. Оператор собирает и хранит только те Персональные данные, которые необходимы для оказания Услуг Оператором и взаимодействия с Пользователем.<br/>
                2.2. Персональные данные могут использоваться в следующих целях:<br/>
                2.2.1 оказание Услуг Пользователю;<br/>
                2.2.2 идентификация Пользователя;<br/>
                2.2.3 взаимодействие с Пользователем;<br/>
                2.2.4 направление Пользователю рекламных материалов, информации и запросов;<br/>
                2.2.5 проведение статистических и иных исследований;<br/>
                2.3. Оператор в том числе обрабатывает следующие данные:<br/>
                2.3.1 фамилия, имя и отчество;<br/>
                2.3.2 адрес электронной почты;<br/>
                2.3.3 номер телефона (в т.ч. мобильного).<br/>
                2.4. Пользователю запрещается указывать персональные данные третьих лиц(за исключением условия представления интересов этих лиц, имея документальное подтверждение третьих лиц на осуществление таких действий).<br/><br/>
                3. ПОРЯДОК ОБРАБОТКИ ПЕРСОНАЛЬНЫХ И ИНЫХ ДАННЫХ<br/>
                3.1. Оператор обязуется использовать Персональные данные в соответствии с Законом «О персональных данных» Республики Казахстан и внутренними документами Оператора.<br/>
                3.2. В отношении Персональных данных и иных Данных Пользователя сохраняется их конфиденциальность, кроме случаев, когда указанные данные являются общедоступными.<br/>
                3.3. Оператор имеет право сохранять архивную копию Персональных данных.<br/>
                Оператор имеет право хранить Персональные данные и Данные на серверах вне территории Республики Казахстан.<br/>
                3.4. Оператор имеет право передавать Персональные данные и Данные Пользователя без согласия Пользователя следующим лицам:<br/>
                3.4.1 государственным органам, в том числе органам дознания и следствия, и органам местного самоуправления по их мотивированному запросу;<br/>
                3.4.2 в иных случаях, прямо предусмотренных действующим законодательством Республики Казахстан.<br/>
                3.5. Оператор имеет право передавать Персональные данные и Данные третьим лицам, не указанным в п.3.4. настоящей Политики конфиденциальности, в следующих случаях:<br/>
                3.5.1 Пользователь выразил свое согласие на такие действия;<br/>
                3.5.2 передача необходима в рамках использования Пользователем онлайн ресурса или оказания Услуг Пользователю;<br/>
                3.6. Оператор осуществляет автоматизированную обработку Персональных данных и Данных.<br/><br/>
                4. ЗАЩИТА ПЕРСОНАЛЬНЫХ ДАННЫХ<br/>
                4.1. Оператор осуществляет надлежащую защиту Персональных и иных данных в соответствии с Законодательством и принимает необходимые и достаточные организационные и технические меры для защиты Персональных данных.<br/>
                4.2. Применяемые меры защиты в том числе позволяют защитить Персональные данные от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий с ними третьих лиц.<br/><br/>
                5. ИНЫЕ ПОЛОЖЕНИЯ<br/>
                5.1. К настоящей Политике конфиденциальности и отношениям между Пользователем и Оператором, возникающим в связи с применением Политики конфиденциальности, подлежит применению право Республики Казахстан.<br/>
                5.2. Все возможные споры, вытекающие из настоящего Соглашения, подлежат разрешению в соответствии с действующим законодательством по месту регистрации Оператора.<br/>
                Перед обращением в суд Пользователь должен соблюсти обязательный досудебный порядок и направить Оператору соответствующую претензию в письменном виде. Срок ответа на претензию составляет 30 (тридцать) рабочих дней.<br/>
                5.3. Если по тем или иным причинам одно или несколько положений Политики конфиденциальности будут признаны недействительными или не имеющими юридической силы, это не оказывает влияния на действительность или применимость остальных положений Политики конфиденциальности.<br/>
                5.4. Оператор имеет право в любой момент изменять Политику конфиденциальности (полностью или в части) в одностороннем порядке без предварительного согласования с Пользователем. Все изменения вступают в силу с момента ее размещения в онлайн ресурсе.<br/>
                5.5. Пользователь обязуется самостоятельно следить за изменениями Политики конфиденциальности путем ознакомления с актуальной редакцией.<br/>
                5.6. Все предложения или вопросы по настоящей Политике конфиденциальности следует сообщать по телефонам: +7 702 949 9419
              </div>
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
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors" aria-label="Instagram">
                <Camera size={24} />
              </a>
              <a href="mailto:example@mail.com" className="text-slate-400 hover:text-indigo-600 transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="tel:+77029499419" className="text-slate-400 hover:text-indigo-600 transition-colors" aria-label="Телефон">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
