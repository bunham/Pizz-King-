/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Clock, 
  ShoppingBag, 
  Timer,
  Menu,
  X,
  Instagram,
  Facebook,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---

const MENU_ITEMS = [
  {
    id: 1,
    name: "Classic Pepperoni",
    nameKm: "ភីហ្សាផេបភឺរ៉ូនី",
    description: "Premium pepperoni, mozzarella, and our signature tomato sauce.",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    popular: true
  },
  {
    id: 2,
    name: "Double Cheese",
    nameKm: "ភីហ្សាឈីសទ្វេដង",
    description: "A blend of 4 different cheeses for the ultimate cheese lover.",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    popular: false
  },
  {
    id: 3,
    name: "BBQ Chicken",
    nameKm: "ភីហ្សាសាច់មាន់ប៊ីប៊ីឃ្យូ",
    description: "Grilled chicken, purple onions, and smoky BBQ sauce.",
    price: "$7.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    popular: true
  },
  {
    id: 4,
    name: "Seafood Deluxe",
    nameKm: "ភីហ្សាគ្រឿងសមុទ្រ",
    description: "Fresh shrimp, squid, and mussels with creamy garlic sauce.",
    price: "$8.90",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=800&auto=format&fit=crop",
    popular: true
  },
  {
    id: 5,
    name: "Veggie Garden",
    nameKm: "ភីហ្សាបន្លែគ្រប់មុខ",
    description: "Bell peppers, mushrooms, onions, and fresh garden tomatoes.",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=800&auto=format&fit=crop",
    popular: false
  },
  {
    id: 6,
    name: "Supreme Special",
    nameKm: "ភីហ្សាពិសេស",
    description: "Everything on it. The king's choice for a complete meal.",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format&fit=crop",
    popular: true
  }
];

const REVIEWS = [
  {
    name: "Sokha Mean",
    text: "Best pizza in Phnom Penh! The cheese stretch is real and delivery was super fast.",
    rating: 5
  },
  {
    name: "James Chen",
    text: "Authentic taste. The BBQ chicken is my favorite. Highly recommend for students!",
    rating: 5
  },
  {
    name: "Vannak K.",
    text: "Affordable and very tasty. The staff is friendly too. Will visit again soon.",
    rating: 4
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <ShoppingBag className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-extrabold text-primary tracking-tight">PIZZA KING</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-secondary font-medium hover:text-primary transition-colors">Menu</a>
            <a href="#offers" className="text-secondary font-medium hover:text-primary transition-colors">Offers</a>
            <a href="#reviews" className="text-secondary font-medium hover:text-primary transition-colors">Reviews</a>
            <a href="#contact" className="text-secondary font-medium hover:text-primary transition-colors">Location</a>
            <a href="tel:012345678" className="bg-primary text-white px-5 py-2.5 rounded-full font-bold hover:bg-primary-dark transition-all flex items-center gap-2">
              <Phone size={18} /> Call Boss
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#menu" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Menu</a>
              <a href="#offers" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Offers</a>
              <a href="#reviews" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Reviews</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Location</a>
              <a href="tel:012345678" className="w-full bg-primary text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2">
                <Phone size={20} /> Call Now / ហៅឡូវ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Timer size={16} /> Ready in 15 Minutes
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-secondary leading-[1.1] mb-6">
              Hot, Fresh <span className="text-primary">Pizza</span> in Phnom Penh
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-lg leading-relaxed">
              Experience the royal taste of handcrafted pizzas with premium ingredients. Order now or visit us today for the best pizza in Cambodia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-200">
                <Phone size={20} /> Order Now / បញ្ជាទិញ
              </button>
              <button className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <MapPin size={20} /> Find Us / មើលទីតាំង
              </button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-orange-50"
                    alt="user"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600">
                <span className="font-bold text-secondary">500+</span> Customers ordered today
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <div className="relative z-10 rounded-full overflow-hidden border-[12px] border-white shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1593504049359-74330189a355?q=80&w=1000&auto=format&fit=crop" 
                alt="Main Pizza King" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decors */}
            <div className="absolute -top-6 -right-6 z-20 bg-accent text-secondary px-6 py-4 rounded-3xl font-black text-2xl shadow-xl rotate-12">
              $9.99 COMBO
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fastest Delivery</p>
                <p className="text-sm font-black">Under 30 Mins</p>
              </div>
            </div>
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-48 h-48 bg-primary rounded-full blur-[100px] opacity-20 -z-1"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PizzaCard = ({ item }: { item: typeof MENU_ITEMS[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] overflow-hidden pizza-card-shadow group border border-gray-50 flex flex-col h-full"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {item.popular && (
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
            Most Popular
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-display font-extrabold">{item.name}</h3>
          <span className="text-primary font-black text-xl">{item.price}</span>
        </div>
        <p className="text-secondary/70 text-sm font-medium mb-1">{item.nameKm}</p>
        <p className="text-gray-500 text-sm mb-6 flex-grow">{item.description}</p>
        <button className="w-full py-3 bg-gray-50 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all group/btn">
          Add To Order <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const BestSellers = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">Our Best Sellers</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            The most loved pizzas in the kingdom. Handcrafted with love and baked to perfection.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <PizzaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 5); // 5 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="offers" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-[3rem] p-8 lg:p-16 relative overflow-hidden">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-20"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary text-white px-5 py-2 rounded-full inline-block font-bold text-sm mb-6 uppercase tracking-widest">
                Flash Sale
              </div>
              <h2 className="text-4xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
                Buy 1 Get 1 Free <br /> <span className="text-primary">Every Tuesday!</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
                Don't miss out on the best deal in town. Treat yourself and a friend to any large pizza today. 
              </p>
              
              <div className="flex items-center gap-6 mb-10">
                <div className="text-white text-center">
                  <p className="text-[2.5rem] font-black leading-none font-mono mb-1">{formatTime(timeLeft)}</p>
                  <p className="text-xs uppercase font-bold text-gray-500 tracking-tighter">Time Left For Today</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all">
                  Claim Deal Now
                </button>
                <div className="flex items-center gap-2 text-white/60">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   12 people claiming now
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop" 
                alt="BOGO Offer" 
                className="w-full rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-3xl shadow-xl transform hover:scale-105 transition-all">
                <p className="text-secondary font-black text-4xl">FREE</p>
                <p className="text-secondary text-xs font-bold uppercase tracking-widest">Delivery included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">Happy Customers</h2>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="text-accent fill-accent" />)}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-secondary text-lg font-medium mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary font-bold">
                  {review.name[0]}
                </div>
                <p className="font-bold">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-black mb-6">Visit Pizza King</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              We are located in the heart of Phnom Penh. Open daily for dine-in, takeaway, and delivery.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-2xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location / ទីតាំង</h4>
                  <p className="text-gray-500">St 123, BKK1, Phnom Penh, Cambodia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-2xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us / ហៅទូរស័ព្ទ</h4>
                  <p className="text-gray-500">+855 12 345 678 | +855 99 000 111</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-2xl text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Opening Hours / ម៉ោងបើក</h4>
                  <p className="text-gray-500">Mon - Sun: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary transition-all hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary transition-all hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary transition-all hover:text-white">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden h-[450px] shadow-2xl border-4 border-white relative group">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop" 
              alt="Store Location" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-secondary px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                Open in Maps <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
           <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <ShoppingBag className="text-white w-6 h-6" />
              </div>
              <span className="text-3xl font-display font-extrabold text-white tracking-tight">PIZZA KING</span>
            </div>
        </div>
        <div className="text-center text-gray-500 pb-12 border-b border-white/5 mb-8">
          <p className="max-w-md mx-auto mb-8">
             Fresh, hot pizza delivered to your doorstep in minutes. Proudly serving Phnom Penh since 2024.
          </p>
          <div className="flex justify-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#offers" className="hover:text-primary transition-colors">Deals</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Community</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-600">
           &copy; {new Date().getFullYear()} PIZZA KING CAMBODIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const StickyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-4 md:pb-6 pointer-events-none">
      <div className="max-w-xl mx-auto w-full pointer-events-auto">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-3xl p-3 flex items-center justify-between gap-3">
          <a href="tel:012345678" className="flex-1 bg-primary text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-primary-dark transition-all">
            <Phone size={20} className="hidden sm:block" /> CALL NOW / ហៅឡូវ
          </a>
          <a href="https://t.me/pizzaking" target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-4 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-600 transition-all">
            <MessageCircle size={20} /> <span className="hidden sm:block font-bold">Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const LiveActivity = () => {
  const [visible, setVisible] = useState(false);
  const [activity, setActivity] = useState({ name: 'Sokha', action: 'just ordered a Pepperoni Pizza' });

  useEffect(() => {
    const showTimeout = setTimeout(() => setVisible(true), 3000);
    const hideTimeout = setTimeout(() => setVisible(false), 8000);

    const interval = setInterval(() => {
      const names = ['Vannak', 'Sophal', 'Dara', 'Chandra', 'Monica'];
      const actions = ['just ordered a BBQ Chicken Pizza', 'is viewing the Supreme Special', 'just called for delivery', 'left a 5-star review'];
      setActivity({
        name: names[Math.floor(Math.random() * names.length)],
        action: actions[Math.floor(Math.random() * actions.length)]
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 15000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-24 left-4 z-[110] bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 max-w-[280px]"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
              {activity.name[0]}
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <p className="text-sm font-bold leading-tight">{activity.name}</p>
            <p className="text-xs text-gray-500 leading-tight">{activity.action}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <BestSellers />
        <Offers />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyFooter />
      <LiveActivity />
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
