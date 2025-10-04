import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const advantages = [
    {
      icon: 'GraduationCap',
      title: 'Индивидуальный подход',
      description: 'Небольшие классы до 12 человек позволяют уделить внимание каждому ученику'
    },
    {
      icon: 'Users',
      title: 'Опытные педагоги',
      description: 'Команда профессионалов с международными сертификатами и опытом более 10 лет'
    },
    {
      icon: 'BookOpen',
      title: 'Современная программа',
      description: 'Интеграция международных стандартов образования и инновационных методик'
    },
    {
      icon: 'Trophy',
      title: 'Высокие результаты',
      description: '98% выпускников поступают в ведущие вузы страны и зарубежья'
    },
    {
      icon: 'Sparkles',
      title: 'Творческое развитие',
      description: 'Широкий выбор кружков: от робототехники до театрального искусства'
    },
    {
      icon: 'Heart',
      title: 'Комфортная среда',
      description: 'Психологическая поддержка, здоровое питание и безопасная территория'
    }
  ];

  const programs = [
    {
      title: 'Начальная школа',
      grades: '1-4 классы',
      icon: 'Smile',
      color: 'from-orange-400 to-red-400',
      features: ['Игровые методики', 'Развитие креативности', 'Социализация', 'Основы английского']
    },
    {
      title: 'Средняя школа',
      grades: '5-9 классы',
      icon: 'BookOpenCheck',
      color: 'from-blue-400 to-cyan-400',
      features: ['Профориентация', 'Проектная работа', 'Углубленное изучение', 'Soft skills']
    },
    {
      title: 'Старшая школа',
      grades: '10-11 классы',
      icon: 'Rocket',
      color: 'from-purple-400 to-pink-400',
      features: ['Подготовка к ЕГЭ', 'Профильное обучение', 'Вузовская программа', 'Менторство']
    }
  ];

  const subjects = [
    { name: 'Математика', icon: 'Calculator', description: 'Углубленная программа с олимпиадной подготовкой' },
    { name: 'Английский', icon: 'Languages', description: 'Носители языка, международные сертификаты' },
    { name: 'Информатика', icon: 'Code', description: 'Программирование, робототехника, IT-проекты' },
    { name: 'Наука', icon: 'FlaskConical', description: 'Современные лаборатории, эксперименты' },
    { name: 'Искусство', icon: 'Palette', description: 'Творческие студии, выставки, конкурсы' },
    { name: 'Спорт', icon: 'Dumbbell', description: 'Секции, соревнования, здоровый образ жизни' }
  ];

  const teachers = [
    {
      name: 'Анна Петрова',
      role: 'Директор, учитель математики',
      education: 'МГУ, кандидат педагогических наук',
      experience: '20 лет',
      awards: 'Заслуженный учитель РФ'
    },
    {
      name: 'Михаил Сергеев',
      role: 'Завуч, учитель физики',
      education: 'МФТИ, PhD',
      experience: '15 лет',
      awards: 'Лауреат премии "Учитель года"'
    },
    {
      name: 'Елена Иванова',
      role: 'Учитель английского языка',
      education: 'МГЛУ, Cambridge CELTA',
      experience: '12 лет',
      awards: 'Сертификат C2 Proficiency'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Выпускников', icon: 'Users' },
    { number: '98%', label: 'Поступление в ВУЗы', icon: 'TrendingUp' },
    { number: '25+', label: 'Лет опыта', icon: 'Award' },
    { number: '40+', label: 'Педагогов', icon: 'GraduationCap' }
  ];

  const testimonials = [
    {
      name: 'Елена Смирнова',
      role: 'Мама ученика 5 класса',
      text: 'Наш сын стал увереннее в себе, появился интерес к учебе. Учителя действительно любят свое дело!',
      rating: 5
    },
    {
      name: 'Алексей Петров',
      role: 'Выпускник 2023',
      text: 'Благодаря школе поступил в МГУ на бюджет. Уровень подготовки превзошел все ожидания.',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      role: 'Родитель',
      text: 'Дочь с радостью ходит в школу каждый день. Особенно нравятся проектные занятия и экскурсии.',
      rating: 5
    }
  ];

  const activities = [
    { title: 'Робототехника', icon: 'Bot', description: 'Конструирование и программирование роботов' },
    { title: 'Театральная студия', icon: 'Drama', description: 'Актерское мастерство и постановки спектаклей' },
    { title: 'Научные эксперименты', icon: 'Microscope', description: 'Химия, физика, биология на практике' },
    { title: 'Шахматы', icon: 'Brain', description: 'Развитие логического мышления и стратегии' },
    { title: 'Творческие мастерские', icon: 'Paintbrush', description: 'Рисование, лепка, дизайн' },
    { title: 'Спортивные секции', icon: 'Trophy', description: 'Футбол, баскетбол, плавание, йога' }
  ];

  const gallery = [
    { url: '/img/b2a960a5-3cc9-46b2-bc73-408b79531e8d.jpg', title: 'Здание школы' },
    { url: '/img/3650017a-f487-4b49-9d23-6d9910c7efe2.jpg', title: 'Современные классы' },
    { url: '/img/ce32c1c0-fbe4-47e6-97ef-08166442bc96.jpg', title: 'Библиотека' }
  ];

  const faqs = [
    {
      question: 'Какие классы есть в школе?',
      answer: 'У нас обучаются дети с 1 по 11 класс. Каждая параллель включает 2-3 класса по 10-12 человек.'
    },
    {
      question: 'Сколько стоит обучение?',
      answer: 'Стоимость обучения зависит от класса и выбранных дополнительных занятий. Базовая цена от 45 000 руб/месяц. Предусмотрены скидки для многодетных семей.'
    },
    {
      question: 'Как поступить в школу?',
      answer: 'Запишитесь на экскурсию и собеседование через форму на сайте. После знакомства со школой проводится диагностическое тестирование ребенка.'
    },
    {
      question: 'Есть ли продленка?',
      answer: 'Да, группа продленного дня работает с 15:00 до 19:00. В программе: выполнение домашних заданий, творческие занятия, прогулки.'
    },
    {
      question: 'Предусмотрено ли питание?',
      answer: 'Трехразовое здоровое питание включено в стоимость. Меню разработано диетологом с учетом возрастных потребностей.'
    },
    {
      question: 'Какие языки изучают в школе?',
      answer: 'Английский язык с 1 класса, с 5 класса добавляется второй иностранный на выбор: немецкий, французский или испанский.'
    }
  ];

  const infrastructure = [
    { title: 'Современные классы', icon: 'School', description: 'Интерактивные доски, проекторы, комфортная мебель' },
    { title: 'Научные лаборатории', icon: 'Flask', description: 'Оборудование для химии, физики, биологии' },
    { title: 'Спортивный комплекс', icon: 'Activity', description: 'Залы, бассейн, спортплощадки' },
    { title: 'Библиотека', icon: 'Library', description: '10000+ книг, читальный зал, медиатека' },
    { title: 'Столовая', icon: 'Utensils', description: 'Здоровое питание, собственная кухня' },
    { title: 'Медицинский кабинет', icon: 'Stethoscope', description: 'Квалифицированный персонал, профилактика' }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <h3 className="text-2xl font-bold text-foreground">Частная школа</h3>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
                <span className="font-semibold hidden sm:inline">+7 (495) 123-45-67</span>
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Меню"
              >
                <Icon name={isMenuOpen ? "X" : "Menu"} size={28} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-sm border-b shadow-lg animate-fade-in">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                >
                  О школе
                </button>
                <button 
                  onClick={() => scrollToSection('programs')} 
                  className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                >
                  Программы
                </button>
                <button 
                  onClick={() => scrollToSection('teachers')} 
                  className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                >
                  Педагоги
                </button>
                <Button onClick={() => scrollToSection('contact')} className="w-full">
                  Записаться на экскурсию
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white animate-fade-in">
          <Badge className="mb-6 text-base px-6 py-2 bg-white/20 border-white/40">🚀 Набор на 2024-2025 учебный год открыт</Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Частная школа<br />
            <span className="text-white/90">будущего</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Где каждый ребенок раскрывает свой потенциал в атмосфере заботы и вдохновения
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
            >
              Записаться на экскурсию
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Icon name={achievement.icon as any} className="text-white mx-auto mb-3" size={32} />
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-white/80 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 text-base">О школе</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 500 семей доверили нам образование своих детей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <Icon name={advantage.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base">Образовательные программы</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Программы обучения</h2>
            <p className="text-xl text-muted-foreground">От первого класса до выпускного</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                    <Icon name={program.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.grades}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground">
                        <Icon name="Check" className="text-primary" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base">Предметы</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Что мы преподаем</h2>
            <p className="text-xl text-muted-foreground">Углубленное изучение ключевых предметов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={subject.icon as any} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{subject.name}</h3>
                    <p className="text-muted-foreground text-sm">{subject.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base">Наша команда</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Педагогический состав</h2>
            <p className="text-xl text-muted-foreground">Опытные преподаватели с международными сертификатами</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card 
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                    <Icon name="User" className="text-white" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{teacher.name}</h3>
                  <p className="text-primary font-semibold mb-4">{teacher.role}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2 justify-center">
                      <Icon name="BookOpen" size={16} />
                      {teacher.education}
                    </p>
                    <p className="flex items-center gap-2 justify-center">
                      <Icon name="Calendar" size={16} />
                      Опыт: {teacher.experience}
                    </p>
                    <p className="flex items-center gap-2 justify-center">
                      <Icon name="Award" size={16} />
                      {teacher.awards}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base">Инфраструктура</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Современное оснащение</h2>
            <p className="text-xl text-muted-foreground">Все необходимое для комфортного обучения</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base">Дополнительное образование</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Кружки и секции</h2>
            <p className="text-xl text-muted-foreground">Развиваем таланты и увлечения</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon name={activity.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base">Галерея</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Фото школы</h2>
            <p className="text-xl text-muted-foreground">Посмотрите, где учатся наши дети</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((photo, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base">Отзывы</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Что говорят о нас</h2>
            <p className="text-xl text-muted-foreground">Мнения родителей и учеников</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base">FAQ</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-2xl px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-white/20 border-white/40">Свяжитесь с нами</Badge>
              <h2 className="text-5xl font-bold mb-4">Запись на экскурсию</h2>
              <p className="text-xl text-white/90">Приходите познакомиться с нашей школой лично</p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input 
                      type="email"
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем ребенке..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-32"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <h3 className="text-2xl font-bold">Частная школа</h3>
              </div>
              <p className="text-white/70">Образование мирового уровня в сердце России</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@school.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Москва, ул. Примерная, 123
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Режим работы</h4>
              <div className="text-white/70 space-y-1">
                <p>Пн-Пт: 8:00 - 19:00</p>
                <p>Сб-Вс: по записи</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 Частная школа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}