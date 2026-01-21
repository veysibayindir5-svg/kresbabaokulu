import { useState, useEffect } from "react";
import { Phone, Star, Heart, Shield, Clock, Utensils, Smile, Calendar, MapPin, Menu, X, MessageCircle } from "lucide-react";
import rabbitImg from "@assets/—Pngtree—3d_cartoon_cute_bunny_15880747_1768993219752.png";
import lionImg from "@assets/Adsız_tasarım_(1)_1768993630559.png";
import bgImg from "@assets/generated_images/fairy_tale_sky_background_with_clouds_and_stars.png";

// --- Components ---

const Section = ({ id, title, children, className = "" }: { id: string, title: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-24 ${className}`}>
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-primary font-hand text-shadow">
      {title}
    </h2>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`glass-card rounded-3xl p-6 md:p-8 transition-transform hover:scale-[1.02] duration-300 ${className}`}>
    {children}
  </div>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center space-y-3">
    <div className="p-4 bg-primary/20 rounded-full text-primary">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold font-hand">{title}</h3>
    <p className="text-muted-foreground">{desc}</p>
  </div>
);

const ScheduleItem = ({ time, activity }: { time: string, activity: string }) => (
  <div className="flex items-center gap-4 py-3 border-b border-primary/20 last:border-0">
    <div className="w-24 font-bold text-primary shrink-0">{time}</div>
    <div className="text-foreground/80 font-medium">{activity}</div>
  </div>
);

// --- Main Home Page ---

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 glass-card !rounded-none !border-x-0 !border-t-0 px-4 py-3 md:py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-primary text-white p-2 rounded-full">
              <Star fill="currentColor" size={24} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold font-hand leading-none text-primary">Süperbaba</h1>
              <p className="text-xs text-muted-foreground font-medium">Kreş ve Gündüz Bakımevi</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-medium text-lg">
            {['Hakkımızda', 'Eğitim', 'Akış', 'Beslenme', 'İletişim'].map((item, i) => {
              const ids = ['about', 'education', 'schedule', 'nutrition', 'contact'];
              return (
                <button 
                  key={item} 
                  onClick={() => scrollTo(ids[i])} 
                  className="nav-button hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-primary/20 p-4 flex flex-col gap-4 shadow-xl">
            {['Hakkımızda', 'Eğitim', 'Akış', 'Beslenme', 'İletişim'].map((item, i) => {
              const ids = ['about', 'education', 'schedule', 'nutrition', 'contact'];
              return (
                <button key={item} onClick={() => scrollTo(ids[i])} className="text-lg font-medium text-left py-2 border-b border-dashed border-gray-100 last:border-0">
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-hand text-primary mb-4 drop-shadow-sm animate-float">
          Süperbaba Kreş
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-medium">
          “Güven, sevgi ve oyunla büyüyoruz.”
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => scrollTo('contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Hemen Ara
          </button>
          <button onClick={() => scrollTo('about')} className="bg-white hover:bg-gray-50 text-primary border-2 border-primary text-lg px-8 py-3 rounded-full font-bold shadow-sm transition-all">
            Keşfet
          </button>
        </div>
      </div>

      {/* About Section */}
      <Section id="about" title="Okulumuz Hakkında">
        <Card className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg leading-relaxed">
              Süperbaba Kreş olarak, çocuklarımızın en değerli varlıklarımız olduğunun bilinciyle, onlara sıcak bir yuva ortamı sunuyoruz.
            </p>
            <p className="text-lg leading-relaxed">
              Deneyimli eğitim kadromuz, güvenli fiziksel ortamımız ve sevgi dolu yaklaşımımızla, her çocuğun kendi hızında ve yeteneğinde gelişmesini destekliyoruz. Burada her gün yeni bir macera, her oyun yeni bir öğrenme fırsatı!
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <Feature icon={Heart} title="Sevgi Dolu" desc="Her çocuğa birebir ilgi ve şefkat." />
            <Feature icon={Shield} title="Güvenli" desc="7/24 kamera ve güvenlik önlemleri." />
            <Feature icon={Smile} title="Mutlu" desc="Oyun odaklı neşeli öğrenme ortamı." />
            <Feature icon={Star} title="Kaliteli" desc="Modern eğitim materyalleri." />
          </div>
        </Card>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Eğitim Yaklaşımımız">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-bold font-hand mb-2">Oyun Temelli Öğrenme</h3>
            <p>Çocukların doğal öğrenme aracı olan oyunu, eğitim metodumuzun merkezine koyuyoruz.</p>
          </Card>
          <Card className="text-center">
            <div className="bg-accent/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Smile size={32} />
            </div>
            <h3 className="text-xl font-bold font-hand mb-2">Sosyal Gelişim</h3>
            <p>Paylaşma, işbirliği ve empati becerilerini geliştiren grup etkinlikleri düzenliyoruz.</p>
          </Card>
          <Card className="text-center">
            <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold font-hand mb-2">Bireysel İlgi</h3>
            <p>Her çocuğun gelişim sürecini yakından takip ediyor ve yeteneklerini keşfediyoruz.</p>
          </Card>
        </div>
      </Section>

      {/* Schedule Section */}
      <Section id="schedule" title="Günlük Akış">
        <Card className="max-w-2xl mx-auto">
          <ScheduleItem time="08:00" activity="Karşılama ve Serbest Oyun" />
          <ScheduleItem time="09:00" activity="Sabah Kahvaltısı" />
          <ScheduleItem time="09:30" activity="Sabah Sporu ve Çember Saati" />
          <ScheduleItem time="10:30" activity="Sanat ve Öğrenme Etkinlikleri" />
          <ScheduleItem time="12:00" activity="Öğle Yemeği" />
          <ScheduleItem time="13:00" activity="Uyku ve Dinlenme Zamanı" />
          <ScheduleItem time="15:00" activity="İkindi Kahvaltısı" />
          <ScheduleItem time="15:30" activity="Bahçe ve Park Saati" />
          <ScheduleItem time="17:00" activity="Eve Dönüş Hazırlığı" />
        </Card>
      </Section>

      {/* Nutrition Section */}
      <Section id="nutrition" title="Beslenme & Sağlık">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Utensils className="text-primary" size={28} />
              <h3 className="text-2xl font-bold font-hand">Doğal Beslenme</h3>
            </div>
            <p className="mb-4">
              Çocuklarımızın fiziksel gelişimi için katkı maddesiz, mevsimine uygun ve taze gıdalarla hazırlanan menüler sunuyoruz.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Günlük taze süt ve yoğurt</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Mevsim meyveleri</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Ev yapımı çorbalar</li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" size={28} />
              <h3 className="text-2xl font-bold font-hand">Hijyen Standartları</h3>
            </div>
            <p className="mb-4">
              Okulumuz profesyonel ekiplerce düzenli olarak dezenfekte edilmektedir.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Günlük temizlik rutinleri</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Periyodik sağlık kontrolleri</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full"></div>Güvenli oyuncak materyalleri</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" title="Mutlu Kareler">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-muted-foreground hover:bg-gray-200 transition-colors cursor-pointer group relative overflow-hidden shadow-sm">
               <img 
                 src={`/images/galeri${i}.jpg`} 
                 alt={`Galeri Fotoğraf ${i}`}
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 onError={(e) => {
                   // Fallback if image doesn't exist
                   (e.target as HTMLImageElement).style.display = 'none';
                   const parent = (e.target as HTMLElement).parentElement;
                   if (parent) {
                     const span = document.createElement('span');
                     span.className = 'font-hand text-xl relative z-10';
                     span.innerText = `Fotoğraf ${i}`;
                     parent.appendChild(span);
                   }
                 }}
               />
               <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="İletişim">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="text-center space-y-6">
             <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-primary">
                <Phone size={40} />
             </div>
             <div>
               <h3 className="text-2xl font-bold font-hand mb-2">Bizi Arayın</h3>
               <p className="text-muted-foreground mb-4">Sorularınız için her zaman buradayız.</p>
               <a href="tel:05442797975" className="text-3xl font-bold text-primary hover:underline">0544 279 79 75</a>
             </div>
             <div className="flex flex-col gap-3">
               <a href="tel:05442797975" className="bg-primary text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                 Hemen Ara
               </a>
               <a href="https://wa.me/905442797975" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                 WhatsApp'tan Yaz
               </a>
             </div>
          </Card>
          <Card className="flex flex-col justify-center space-y-6">
             <div className="flex items-start gap-4">
               <MapPin className="text-primary shrink-0 mt-1" />
               <div>
                 <h4 className="font-bold text-lg">Adresimiz</h4>
                 <p className="text-muted-foreground">Şehir Merkezi, Çocuklar Mahallesi, Mutluluk Sokak No: 1</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <Calendar className="text-primary shrink-0 mt-1" />
               <div>
                 <h4 className="font-bold text-lg">Çalışma Saatleri</h4>
                 <p className="text-muted-foreground">Pazartesi - Cuma: 08:00 - 18:00</p>
               </div>
             </div>
             <div className="mt-4 bg-gray-100 rounded-xl h-48 flex items-center justify-center text-muted-foreground overflow-hidden">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d35.0!3d39.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDAwJzAwLjAiTiAzNcKwMDAnMDAuMCJF!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 loading="lazy" 
                 title="Map"
               ></iframe>
             </div>
          </Card>
        </div>
      </Section>

      <footer className="bg-primary/10 py-8 text-center text-primary/80 font-medium">
        <p>&copy; 2026 Süperbaba Kreş ve Gündüz Bakımevi. Tüm hakları saklıdır.</p>
      </footer>

      {/* Floating Action Buttons */}
      <div className={`floating-action-btn bottom-8 ${showFloating ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
        <a 
          href="https://wa.me/905442797975" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform btn-bounce border-2 border-white"
          style={{ animationDelay: '0.5s' }}
        >
          <MessageCircle size={28} />
        </a>
        <a 
          href="tel:05442797975" 
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform btn-bounce border-2 border-white"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}

// --- App Root with Gate Logic ---

export default function App() {
  const [theme, setTheme] = useState<'girl' | 'boy' | null>(null);
  const [gateState, setGateState] = useState<'closed' | 'opening' | 'open'>('closed');

  const handleSelect = (selectedTheme: 'girl' | 'boy') => {
    setTheme(selectedTheme);
    setGateState('opening');
    
    // After animation completes, set gate to open (removed)
    setTimeout(() => {
      setGateState('open');
    }, 1500); // Match CSS animation duration
  };

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [theme]);

  // Animation classes based on state and screen size
  // Mobile: Up/Down split. Desktop: Left/Right split.
  
  const leftPanelClass = `
    absolute
    w-full h-1/2 md:w-1/2 md:h-full
    top-0 left-0
    bg-[#fdfbf7]
    border-b md:border-b-0 md:border-r border-dashed border-gray-200
    z-20
    transition-transform duration-[1500ms] ease-in-out
    flex items-center justify-center md:justify-end
    ${gateState === 'opening' ? '-translate-y-full md:translate-y-0 md:-translate-x-full' : 'translate-y-0 translate-x-0'}
  `;

  const rightPanelClass = `
    absolute
    w-full h-1/2 md:w-1/2 md:h-full
    bottom-0 right-0 md:top-0
    bg-[#fdfbf7]
    border-t md:border-t-0 md:border-l border-dashed border-gray-200
    z-20
    transition-transform duration-[1500ms] ease-in-out
    flex items-center justify-center md:justify-start
    ${gateState === 'opening' ? 'translate-y-full md:translate-y-0 md:translate-x-full' : 'translate-y-0 translate-x-0'}
  `;

  return (
    <div className="min-h-screen font-sans overflow-hidden relative selection:bg-primary selection:text-white">
      {/* Background stays constant or changes based on theme */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      
      {/* The Main Content (Hidden behind gate initially) */}
      <div className={`transition-opacity duration-1000 ${gateState === 'open' ? 'opacity-100' : 'opacity-0'}`}>
        <HomePage />
      </div>

      {/* The Gate / Entrance Screen */}
      {gateState !== 'open' && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          
          {/* Panel 1 (Top/Left - Rabbit) */}
          <div className={leftPanelClass}>
             <div className={`absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-50`}></div>
             
             {/* Content Container */}
             <div className={`relative z-10 p-4 transition-opacity duration-500 pointer-events-auto ${gateState === 'opening' ? 'opacity-0' : 'opacity-100'}`}>
                <div 
                  onClick={() => handleSelect('girl')}
                  className="group cursor-pointer flex flex-col items-center gap-4 md:gap-6 entrance-card"
                >
                   <div className="relative w-40 h-40 md:w-80 md:h-80 animate-float">
                      <div className="absolute inset-0 bg-pink-200/50 rounded-full blur-3xl group-hover:bg-pink-300/60 transition-colors"></div>
                      <img src={rabbitImg} alt="Kızlar Teması" className="relative w-full h-full object-contain drop-shadow-xl" />
                      {/* Speech Bubble */}
                      <div className="absolute -top-4 -right-4 md:-top-8 md:-right-4 bg-white p-2 md:p-3 rounded-xl rounded-bl-none shadow-md border-2 border-pink-200 animate-bounce">
                        <span className="text-xs md:text-sm font-bold text-pink-500 font-hand whitespace-nowrap">Birlikte Keşfe Çıkalım ✨</span>
                      </div>
                   </div>
                   <button className="bg-pink-400 hover:bg-pink-500 text-white text-lg md:text-xl px-6 md:px-8 py-2 md:py-3 rounded-full font-bold font-hand shadow-lg transform transition-all group-hover:shadow-pink-300/50 flex items-center gap-2">
                     <span>🐰</span> Tavşanla Başla
                   </button>
                </div>
             </div>
          </div>

          {/* Panel 2 (Bottom/Right - Lion) */}
          <div className={rightPanelClass}>
             <div className={`absolute inset-0 bg-gradient-to-bl from-blue-50 to-white opacity-50`}></div>
             
             {/* Content Container */}
             <div className={`relative z-10 p-4 transition-opacity duration-500 pointer-events-auto ${gateState === 'opening' ? 'opacity-0' : 'opacity-100'}`}>
                <div 
                  onClick={() => handleSelect('boy')}
                  className="group cursor-pointer flex flex-col items-center gap-4 md:gap-6 entrance-card"
                >
                   <div className="relative w-40 h-40 md:w-80 md:h-80 animate-float" style={{ animationDelay: '1s' }}>
                      <div className="absolute inset-0 bg-blue-200/50 rounded-full blur-3xl group-hover:bg-blue-300/60 transition-colors"></div>
                      <img src={lionImg} alt="Erkekler Teması" className="relative w-full h-full object-contain drop-shadow-xl" />
                      {/* Speech Bubble */}
                      <div className="absolute -top-4 -left-4 md:-top-8 md:-left-4 bg-white p-2 md:p-3 rounded-xl rounded-br-none shadow-md border-2 border-blue-200 animate-bounce" style={{ animationDelay: '0.5s' }}>
                        <span className="text-xs md:text-sm font-bold text-blue-500 font-hand whitespace-nowrap">Birlikte Keşfe Çıkalım ✨</span>
                      </div>
                   </div>
                   <button className="bg-blue-400 hover:bg-blue-500 text-white text-lg md:text-xl px-6 md:px-8 py-2 md:py-3 rounded-full font-bold font-hand shadow-lg transform transition-all group-hover:shadow-blue-300/50 flex items-center gap-2">
                     <span>🦁</span> Aslanla Başla
                   </button>
                </div>
             </div>
          </div>

          {/* Central Gate Logo/Divider */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 transition-opacity duration-300 ${gateState === 'opening' ? 'opacity-0' : 'opacity-100'}`}>
             <div className="bg-white p-3 md:p-4 rounded-full shadow-xl border-4 border-yellow-100">
               <Star className="text-yellow-400 w-8 h-8 md:w-12 md:h-12 fill-current" />
             </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
