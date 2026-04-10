import { motion } from 'motion/react';
import { BarChart3, Users, Globe, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Google Ads',
      description: 'Настройка и ведение рекламных кампаний в Google. Поисковая реклама, YouTube.',
      features: ['Поисковая реклама', 'YouTube Ads','Ретаргетинг', 'Google Shopping'],
      gradient: 'from-primary to-accent',
    },
    {
      icon: Users,
      title: 'Meta Ads',
      description: 'Таргетированная реклама в Facebook и Instagram с точным попаданием в целевую аудиторию.',
      features: ['Facebook Ads', 'Instagram Ads', 'Ретаргетинг', 'Lookalike'],
      gradient: 'from-accent to-secondary',
    },
    {
      icon: Globe,
      title: 'Аналитика',
      description: 'Глубокая аналитика эффективности рекламы. Отслеживание KPI и ROI.',
      features: ['Google Analytics', 'Яндекс.Метрика', 'Audience Insights', 'A/B тесты'],
      gradient: 'from-secondary to-primary',
    },
    {
      icon: TrendingUp,
      title: 'Оптимизация',
      description: 'Постоянная оптимизация кампаний для наилучшей стоимости лида и увеличения конверсий.',
      features: ['CRO', 'Тестирование', 'Масштабирование', 'Аудит'],
      gradient: 'from-primary via-accent to-secondary',
    },
  ];

  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Particles */}
      <div className="absolute top-32 right-20 w-2 h-2 bg-primary rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-40 left-16 w-3 h-3 bg-accent rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }} />

      {/* Animated Glow Line */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4 md:mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold">Что я предлагаю</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Услуги Perfomance{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              таргетолога
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексное управление рекламными кампаниями для максимального результата
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Corner Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                {/* Floating Icon Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full border border-primary/20"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                />
                
                <div className="relative z-10">
                  {/* Icon with Glow */}
                  <div className="relative inline-flex mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    {/* Icon Glow Ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-50 blur-xl`}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features with Icons */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mini Analytics Widget - Bottom Right */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap className="w-5 h-5 text-primary animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}