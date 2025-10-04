import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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

  const gallery = [
    { id: 1, url: '/img/9f4dcdd3-53af-485b-af32-eb908ea7d779.jpg', title: 'Современные классы' },
    { id: 2, url: '/img/12a084ab-ff71-49ff-9a89-efe83f6612c6.jpg', title: 'Наши ученики' },
    { id: 3, url: '/img/4e818b4a-adaa-49c8-bcde-355f89749c92.jpg', title: 'Здание школы' },
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
    }
  ];

  const steps = [
    { number: '01', title: 'Запись на экскурсию', description: 'Заполните форму или позвоните нам' },
    { number: '02', title: 'Знакомство со школой', description: 'Экскурсия по школе и встреча с директором' },
    { number: '03', title: 'Диагностика', description: 'Тестирование и собеседование с психологом' },
    { number: '04', title: 'Зачисление', description: 'Подписание договора и начало обучения' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Частная школа<br />
            <span className="text-white/90">будущего</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Где каждый ребенок раскрывает свой потенциал в атмосфере заботы и вдохновения
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
              Записаться на экскурсию
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
              Узнать больше
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
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

      <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Отзывы родителей и учеников</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Как поступить в школу</h2>
            <p className="text-xl text-muted-foreground">Простой путь к качественному образованию</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Фото школы и мероприятий</h2>
            <p className="text-xl text-muted-foreground">Посмотрите, где учатся наши дети</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((photo) => (
              <div 
                key={photo.id}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer animate-scale-in"
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
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

      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
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
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Частная школа</h3>
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
              <p className="text-white/70">Пн-Пт: 8:00 - 19:00</p>
              <p className="text-white/70">Сб-Вс: по записи</p>
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
