import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Target, Zap, BarChart3, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-[600px] md:h-[600px] bg-primary/30 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[600px] md:h-[600px] bg-accent/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-60 left-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-30" style={{ animationDelay: '1.5s' }} />

      {/* Animated Glow Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content - Typography Space */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(139, 92, 246, 0)', '0 0 20px 5px rgba(139, 92, 246, 0.3)', '0 0 0 0 rgba(139, 92, 246, 0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="text-xs md:text-sm text-primary">Perfomance-таргетинг</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Увеличу поток клиентов через{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Google Ads & Meta Ads
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Профессиональный таргетолог с опытом работы от e‑commerce до premium-сегмента.
              Настройка рекламы, которая приносит результат с первого месяца.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all group relative overflow-hidden shadow-lg shadow-primary/30"
              >
                {/* Button Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative">Начать работу</span>
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform relative" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('cases');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-primary/30 hover:bg-primary/10 backdrop-blur-sm text-sm md:text-base"
              >
                Посмотреть кейсы
              </Button>
            </div>

            {/* Stats with Icons */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative p-3 md:p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm"
              >
                <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary">150+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Кейсов</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative p-3 md:p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 backdrop-blur-sm"
              >
                <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-accent">$2М+</div>
                <div className="text-xs md:text-sm text-muted-foreground"> инвестировано в трафик</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative p-3 md:p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 backdrop-blur-sm"
              >
                <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <BarChart3 className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">79%</div>
                <div className="text-xs md:text-sm text-muted-foreground">проектов окупились</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Futuristic Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Hero Image - Businessman Silhouette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767475190533-19cd3908c07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMGJhY2slMjBzaWxob3VldHRlJTIwZnV0dXJpc3RpYyUyMGhvbG9ncmFwaGljJTIwZGlzcGxheSUyMHB1cnBsZSUyMGJsdWV8ZW58MXx8fHwxNzc1ODE4MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Futuristic Business Analytics"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:from-transparent" />
              
              {/* Glowing Edge Effect */}
              <div className="absolute inset-0 rounded-3xl border border-primary/30 shadow-[0_0_50px_rgba(139,92,246,0.3)]" />
            </motion.div>

            {/* Floating Holographic Dashboard - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -left-4 md:top-8 md:left-0 w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-primary/40 shadow-lg shadow-primary/30 backdrop-blur-xl bg-card/30"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699062139074-f7b6f776c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwaG9sb2dyYW0lMjBwdXJwbGUlMjBuZW9uJTIwY3liZXJwdW5rfGVufDF8fHx8MTc3NTgxODIzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 mix-blend-overlay" />
              {/* Animated Glow */}
              <motion.div 
                className="absolute inset-0 border-2 border-primary/50 rounded-2xl"
                animate={{ 
                  boxShadow: ['0 0 10px rgba(139,92,246,0.3)', '0 0 30px rgba(139,92,246,0.6)', '0 0 10px rgba(139,92,246,0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Glass UI Card - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 md:bottom-12 md:right-0 w-40 h-32 md:w-56 md:h-40 rounded-2xl bg-card/40 backdrop-blur-xl border border-accent/40 shadow-lg shadow-accent/30 p-3 md:p-4"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684692862482-8fa5ddbbd90e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGhvbG9ncmFwaGljJTIwaW50ZXJmYWNlJTIwcHVycGxlJTIwYmx1ZSUyMGdyYWRpZW50JTIwZGFya3xlbnwxfHx8fDE3NzU4MTgyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data Visualization"
                className="w-full h-full object-cover rounded-xl opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-accent/40 to-secondary/40 mix-blend-overlay rounded-2xl" />
              
              {/* Mini Stats Widget */}
              <div className="absolute top-2 left-2 md:top-3 md:left-3 px-2 py-1 md:px-3 md:py-1.5 rounded-lg bg-background/80 backdrop-blur-sm border border-accent/30">
                <div className="flex items-center gap-1 md:gap-2">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                  <span className="text-xs md:text-sm font-bold text-accent">+340%</span>
                </div>
              </div>
            </motion.div>

            {/* Transparent Glass Panel - Center Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="hidden md:block absolute top-1/2 -right-8 w-48 h-56 rounded-2xl bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-2xl border border-primary/30 shadow-2xl shadow-primary/20 p-4"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646614871839-881108ea8407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVudCUyMGdsYXNzJTIwVUklMjBjYXJkJTIwZnV0dXJpc3RpYyUyMHRlY2hub2xvZ3klMjBwdXJwbGV8ZW58MXx8fHwxNzc1ODE4MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="UI Interface"
                className="w-full h-full object-cover rounded-xl opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 mix-blend-overlay rounded-2xl" />
              
              {/* Platform Badges */}
              <div className="absolute bottom-3 left-3 right-3 space-y-2">
                <div className="px-3 py-1.5 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center gap-2">
                  <Target className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">Google Ads</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-accent/20 backdrop-blur-sm border border-accent/40 flex items-center gap-2">
                  <Zap className="w-3 h-3 text-accent" />
                  <span className="text-xs font-semibold text-accent">Meta Ads</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Mini Analytics Widget - Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="hidden lg:block absolute top-4 right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-xl border border-secondary/40 shadow-lg shadow-secondary/30 p-3"
            >
              <div className="flex flex-col h-full justify-between">
                <BarChart3 className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-lg font-bold text-secondary">ROI</div>
                  <div className="text-xs text-muted-foreground">250%</div>
                </div>
              </div>
              {/* Pulse Effect */}
              <motion.div 
                className="absolute inset-0 border-2 border-secondary/50 rounded-xl"
                animate={{ 
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}