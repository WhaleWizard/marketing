import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2, DollarSign, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', budget: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const budgetOptions = [
    { value: '50-100k', label: 'до 1000 $', icon: Sparkles, color: 'from-primary/20 to-primary/10' },
    { value: '100-300k', label: '1к-10к $', icon: TrendingUp, color: 'from-accent/20 to-accent/10' },
    { value: '300-500k', label: '10к-50к $', icon: Zap, color: 'from-secondary/20 to-secondary/10' },
    { value: '500k+', label: '50к+ $', icon: DollarSign, color: 'from-primary/20 to-accent/10' },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-40 left-10 w-16 h-16 border border-accent/20 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-semibold">Бесплатная консультация</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Начните зарабатывать{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                больше сегодня
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Оставьте заявку на бесплатную консультацию. Проанализирую ваш бизнес и предложу стратегию роста.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { title: 'Бесплатный аудит', description: 'Анализ текущей ситуации и точек роста', icon: CheckCircle2, delay: 0 },
                { title: 'Стратегия роста', description: 'конкретные шаги для увеличения продаж с первого месяца.', icon: TrendingUp, delay: 0.1 },
                { title: 'Быстрый старт', description: 'Запуск рекламы в течение 4-6 дней', icon: Zap, delay: 0.2 },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-2xl">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 opacity-50" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/5 to-accent/5 animate-pulse" />

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur-2xl" />

              <div className="relative">
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12 space-y-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-16 h-16 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 animate-ping" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Спасибо за заявку!</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Я свяжусь с вами в ближайшее время
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm mb-2 font-medium">
                        Имя *
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Ваше имя"
                          className="bg-background/50 border-border/50 focus:border-primary focus:bg-background/70 transition-all backdrop-blur-sm"
                        />
                        {focusedField === 'name' && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute inset-0 rounded-lg border-2 border-primary/50 pointer-events-none"
                          />
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm mb-2 font-medium">
                        Email *
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="your@email.com"
                          className="bg-background/50 border-border/50 focus:border-primary focus:bg-background/70 transition-all backdrop-blur-sm"
                        />
                        {focusedField === 'email' && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute inset-0 rounded-lg border-2 border-primary/50 pointer-events-none"
                          />
                        )}
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <label htmlFor="phone" className="block text-sm mb-2 font-medium">
                        Телефон *
                      </label>
                      <div className="relative">
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+998 (90) 123-45-67"
                          className="bg-background/50 border-border/50 focus:border-primary focus:bg-background/70 transition-all backdrop-blur-sm"
                        />
                        {focusedField === 'phone' && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute inset-0 rounded-lg border-2 border-primary/50 pointer-events-none"
                          />
                        )}
                      </div>
                    </div>

                    {/* Budget Selection - Premium Cards */}
                    <div>
                      <label htmlFor="budget" className="block text-sm mb-3 font-medium">
                        Месячный бюджет
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {budgetOptions.map((option) => (
                          <motion.div
                            key={option.value}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                          >
                            <input
                              type="radio"
                              id={option.value}
                              name="budget"
                              value={option.value}
                              checked={formData.budget === option.value}
                              onChange={handleChange}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={option.value}
                              className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300
                                bg-background/50 border border-border/50 backdrop-blur-sm
                                hover:border-primary/50 hover:bg-background/70
                                peer-checked:border-primary peer-checked:bg-gradient-to-br peer-checked:${option.color}
                                peer-checked:shadow-lg peer-checked:shadow-primary/20`}
                            >
                              <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${option.color} border border-primary/30 flex items-center justify-center`}>
                                <option.icon className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold truncate">{option.label}</div>
                              </div>
                              {formData.budget === option.value && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="flex-shrink-0"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-primary" />
                                </motion.div>
                              )}
                            </label>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <label htmlFor="message" className="block text-sm mb-2 font-medium">
                        О вашем проекте
                      </label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Расскажите кратко о вашем проекте..."
                          rows={4}
                          className="bg-background/50 border-border/50 focus:border-primary focus:bg-background/70 transition-all resize-none backdrop-blur-sm"
                        />
                        {focusedField === 'message' && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute inset-0 rounded-lg border-2 border-primary/50 pointer-events-none"
                          />
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all group relative overflow-hidden shadow-lg shadow-primary/30"
                      size="lg"
                    >
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin relative" />
                          <span className="relative">Отправка...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative">Отправить заявку</span>
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}