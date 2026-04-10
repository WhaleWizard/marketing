import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Sparkles, BarChart3, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Cases() {
  const cases = [
    {
      title: 'Premium Concierge Service',
      category: 'Meta Ads',
      description: 'Привлечение исключительно квалифицированных лидов для премиум-консьерж сервиса с высокой конверсией в общение.',
      image: 'https://images.unsplash.com/photo-1615714880989-1b48c82d8f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb25jaWVyZ2UlMjBwcmVtaXVtJTIwc2VydmljZSUyMHB1cnBsZSUyMGJsdWUlMjBncmFkaWVudHxlbnwxfHx8fDE3NzU3NDE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: [
        { label: 'Срок работы', value: '4 года' },
        { label: 'Лиды', value: '65к+' },
        { label: 'Бюджет', value: '$1 Млн+' },
      ],
    },
    {
      title: 'E-commerce',
      category: 'Google Ads + Meta Ads',
      description: 'Продвжение товаров в уникальной связке Goole ads + Shopping ads + Meta ads',
      image: 'https://images.unsplash.com/photo-1674027392887-751d6396b710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGRpZ2l0YWwlMjBwdXJwbGUlMjBibHVlJTIwZ3JhZGllbnQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1NzQxNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: [
        { label: 'Add to cart', value: '120.000+' },
        { label: 'Покупки', value: '30.000+' },
        { label: 'ROI', value: '210%' },
      ],
    },
    {
      title: 'Инфобизнес',
      category: 'Google Ads + Meta Ads',
      description: 'Продвигал инфопродукты на русскоязычную аудиторию по всему миру',
      image: 'https://images.unsplash.com/photo-1760008486599-e62d30e2ca95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBpbmZvYnVzaW5lc3MlMjBkaWdpdGFsJTIwY291cnNlJTIwcHVycGxlJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzc1NzQxNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: [
        { label: 'Бюджет', value: '$600к +' },
        { label: 'CPL', value: 'до $5' },
        { label: 'ROI', value: '180%' },
      ],
    },
    {
      title: 'B2C услуги',
      category: 'Google Ads + Meta Ads',
      description: 'Уникальные стратегии продвижения для вашего бизнеса',
      image: 'https://images.unsplash.com/photo-1617957772002-57adde1156fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiMmMlMjBidXNpbmVzcyUyMGN1c3RvbWVyJTIwc2VydmljZSUyMHB1cnBsZSUyMGJsdWUlMjBncmFkaWVudHxlbnwxfHx8fDE3NzU3NDE3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stats: [
        { label: 'Проектов', value: '50+' },
        { label: 'CPL', value: 'до $25' },
        { label: 'ROI', value: 'до 300%' },
      ],
    },
  ];

  return (
    <section id="cases" className="relative py-16 md:py-24 overflow-hidden bg-muted/30">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-60" style={{ animationDelay: '1.2s' }} />

      {/* Glow Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4 md:mb-6">
            <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary">Результат моей работы</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Кейсы с{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              наилучшей результативностью
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Конкретные результаты, подтверждённые цифрами и аналитикой
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Animated Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              
              {/* Floating Analytics Icon */}
              <motion.div
                className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <BarChart3 className="w-5 h-5 text-primary" />
              </motion.div>

              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Glowing Border on Hover */}
                <motion.div 
                  className="absolute inset-0 border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/30"
                  animate={{
                    boxShadow: ['0 0 0 rgba(139,92,246,0)', '0 0 20px rgba(139,92,246,0.3)', '0 0 0 rgba(139,92,246,0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Category Badge with Icon */}
                <div className="absolute top-4 right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center gap-2">
                  <Target className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  <span className="text-xs md:text-sm text-primary font-semibold">{item.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 space-y-4">
                <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors flex items-start justify-between">
                  {item.title}
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Stats with Icons */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 border-t border-border/50">
                  {item.stats.map((stat, idx) => (
                    <motion.div 
                      key={idx} 
                      className="relative space-y-1 p-2 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Mini Icon */}
                      <div className="absolute top-1 right-1 w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-primary" />
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                      <div className="text-sm md:text-base font-bold text-primary">{stat.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}