import { motion, useAnimationFrame } from 'motion/react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef, useState } from 'react';

export default function Blog() {
  const articles = [
    {
      title: 'Стратегии таргетинга в 2026',
      category: 'Стратегия',
      description: 'Как правильно настроить таргетинг для максимальной конверсии в новом году',
      image: 'https://images.unsplash.com/photo-1774997814741-f0a7b3b00e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBibG9nJTIwcHVycGxlJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzc1NzQxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '8 мин',
      date: 'Апрель 2026',
    },
    {
      title: 'Meta Ads: секреты эффективности',
      category: 'Meta Ads',
      description: 'Проверенные методы снижения стоимости лида и увеличения ROI в Facebook и Instagram',
      image: 'https://images.unsplash.com/photo-1584824486490-ef0fef6603eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMG1ldGElMjBhZHMlMjB0YXJnZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NzU3NDE3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '6 мин',
      date: 'Март 2026',
    },
    {
      title: 'Оптимизация конверсий в E-commerce',
      category: 'E-commerce',
      description: 'Как увеличить продажи через грамотную настройку рекламных кампаний',
      image: 'https://images.unsplash.com/photo-1674027392887-751d6396b710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXJzaW9uJTIwcmF0ZSUyMG9wdGltaXphdGlvbiUyMGVjb21tZXJjZSUyMHB1cnBsZXxlbnwxfHx8fDE3NzU3NDE4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '10 мин',
      date: 'Февраль 2026',
    },
    {
      title: 'Аналитика рекламных кампаний',
      category: 'Аналитика',
      description: 'Какие метрики важны и как правильно интерпретировать данные для роста бизнеса',
      image: 'https://images.unsplash.com/photo-1729525589463-818e3a5bd766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGFuYWx5dGljcyUyMGRhdGElMjBwdXJwbGUlMjBncmFkaWVudCUyMGRhcmt8ZW58MXx8fHwxNzc1NzQxODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '7 мин',
      date: 'Январь 2026',
    },
    {
      title: 'Автоматизация маркетинга',
      category: 'Автоматизация',
      description: 'Инструменты и подходы для масштабирования рекламных кампаний',
      image: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhdXRvbWF0aW9uJTIwdG9vbHMlMjBwdXJwbGUlMjBibHVlJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzc1NzQxODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '9 мин',
      date: 'Декабрь 2025',
    },
    {
      title: 'Google Ads для B2B',
      category: 'Google Ads',
      description: 'Особенности настройки рекламы для B2B-сектора и привлечения корпоративных клиентов',
      image: 'https://images.unsplash.com/photo-1774997814741-f0a7b3b00e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBibG9nJTIwcHVycGxlJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzc1NzQxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '11 мин',
      date: 'Ноябрь 2025',
    },
  ];

  // Duplicate articles for seamless infinite scroll
  const duplicatedArticles = [...articles, ...articles];

  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useAnimationFrame((t, delta) => {
    setOffset((prevOffset) => {
      const newOffset = prevOffset + delta * 0.03; // Adjust speed here (lower = slower)
      
      // Reset when scrolled through one set of articles
      const cardWidth = 400; // approximate card width + gap
      const resetPoint = articles.length * cardWidth;
      
      if (newOffset >= resetPoint) {
        return newOffset - resetPoint;
      }
      
      return newOffset;
    });
  });

  return (
    <section id="blog" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4 md:mb-6">
            <BookOpen className="w-3 h-3 md:w-4 md:h-4 text-accent" />
            <span className="text-xs md:text-sm text-accent">Полезные материалы</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Блог о{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              таргетированной рекламе
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Экспертные статьи, стратегии и кейсы из практики
          </p>
        </motion.div>
      </div>

      {/* Scrolling Articles Container */}
      <div className="relative overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={containerRef}
          className="flex gap-4 md:gap-6"
          style={{
            transform: `translateX(-${offset}px)`,
            willChange: 'transform',
          }}
        >
          {duplicatedArticles.map((article, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 px-3 py-1 md:px-4 md:py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                    <span className="text-xs md:text-sm font-semibold text-primary">{article.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-base md:text-lg lg:text-xl font-bold group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {article.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs md:text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-semibold">Читать далее</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
