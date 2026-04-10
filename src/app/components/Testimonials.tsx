import { motion } from 'motion/react';
import { Star, Quote, Sparkles, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Алексей Морозов',
      position: 'CEO, TechFlow',
      avatar: 'https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzc1NjU3NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Работа с этим таргетологом превзошла все ожидания. ROI вырос на 450%, а стоимость лида снизилась в 2 раза. Профессионализм на высшем уровне!',
      rating: 5,
    },
    {
      name: 'Мария Петрова',
      position: 'Маркетинг директор, ShopLux',
      avatar: 'https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzc1NjU3NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'За 3 месяца продажи выросли на 340%. Глубокая аналитика, постоянная оптимизация и прозрачная отчетность. Рекомендую всем, кто хочет реальных результатов.',
      rating: 5,
    },
    {
      name: 'Дмитрий Волков',
      position: 'Founder, EduPro',
      avatar: 'https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzc1NjU3NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Масштабировали бюджет с 500K до 3M без потери эффективности. Четкая стратегия, быстрая реакция на изменения и отличное понимание нашей ниши.',
      rating: 5,
    },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      {/* Floating Particles */}
      <div className="absolute top-16 right-12 w-2 h-2 bg-primary rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-24 left-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.8s' }} />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-60" style={{ animationDelay: '1.5s' }} />

      {/* Glow Lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4 md:mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-semibold">Отзывы клиентов</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Что говорят{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              мои клиенты
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Доверие строится на результатах. Вот что говорят проекты, с которыми я работаю
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Gradient Glow on Hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

                {/* Quote Icon with Glow */}
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/50 transition-shadow">
                  <Quote className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>

                {/* Floating Sparkle */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05, type: 'spring' }}
                      >
                        <Star className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-6 flex-1">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Avatar Glow Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm md:text-base font-semibold">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { value: '150+', label: 'кейсов с результатом' },
            { value: '5 лет', label: 'Опыта в маркетинге' },
            { value: '79%', label: 'проектов окупаются и масштабируются' },
            { value: '$2М+', label: 'откручено в рекламе' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative text-center p-4 md:p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon */}
              <div className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>

              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}