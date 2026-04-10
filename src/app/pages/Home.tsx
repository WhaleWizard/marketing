import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Cases from '../components/Cases';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Cases />
      <CallToAction />
      <Testimonials />
      <Blog />
      <ContactForm />
      <Footer />
    </main>
  );
}