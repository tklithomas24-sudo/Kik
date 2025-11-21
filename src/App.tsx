import { HardHat, Phone, MapPin, Mail, Facebook, ClipboardCheck, Ruler } from 'lucide-react';
import { Card } from '@/components/ui/card';

const galleryImages = [
  { id: 1, src: '/images/references/526847408_122114543792942632_7208817015348574806_n.jpg', alt: 'Referencia Projekt 1' },
  { id: 2, src: '/images/references/554081584_122132577848942632_2152710175706565230_n.jpg', alt: 'Referencia Projekt 2' },
  { id: 3, src: '/images/references/582981406_122146644518942632_2038854075381247764_n.jpg', alt: 'Referencia Projekt 3' },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <HardHat className="w-12 h-12 text-black" />
              <div>
                <h1 className="text-3xl font-bold text-black">Tóth Balázs</h1>
                <p className="text-sm text-gray-600 tracking-wider">EGYÉNI VÁLLALKOZÓ</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+36304368464" className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                <Phone className="w-4 h-4" />
                +36 30 436 8464
              </a>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4" />
                Kapuvár
              </div>
              <a href="mailto:b.toth0801@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                <Mail className="w-4 h-4" />
                b.toth0801@gmail.com
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <HardHat className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tóth Balázs</h2>
          <p className="text-xl md:text-2xl tracking-wide">MŰSZAKI ELLENŐR | FELELŐS MŰSZAKI VEZETŐ</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Bemutatkozás</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Egyéni vállalkozóként műszaki ellenőri és felelős műszaki vezetői feladatokat látok el az építőipar különböző területein.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-10 text-center">Szolgáltatásaim</h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-gray-200 hover:border-black transition-colors">
              <div className="flex flex-col items-center text-center gap-4">
                <ClipboardCheck className="w-12 h-12 text-black" />
                <h3 className="text-xl font-bold text-black">Műszaki ellenőr</h3>
              </div>
            </Card>
            <Card className="p-6 border-2 border-gray-200 hover:border-black transition-colors">
              <div className="flex flex-col items-center text-center gap-4">
                <Ruler className="w-12 h-12 text-black" />
                <h3 className="text-xl font-bold text-black">Felelős műszaki vezető</h3>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-10 text-center">Referencia Munkáim</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg border-2 border-gray-200 hover:border-black transition-all hover:scale-105 duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Kapcsolat</h2>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-2xl font-bold">Tóth Balázs</p>
            <p className="text-lg">Kapuvár, Magyarország</p>
            <a href="tel:+36304368464" className="block text-2xl font-bold hover:text-gray-300 transition-colors">
              +36 30 436 8464
            </a>
            <a href="mailto:b.toth0801@gmail.com" className="block text-lg hover:text-gray-300 transition-colors">
              b.toth0801@gmail.com
            </a>
            <div className="pt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61578278981315&locale=ro_RO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <Facebook className="w-8 h-8" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <p className="text-sm">Copyright © 2024 Tóth Balázs Egyéni Vállalkozó</p>
            <p className="text-sm text-gray-400">Telephely: Kapuvár</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-gray-400">
              <a href="tel:+36304368464" className="hover:text-white transition-colors">
                +36 30 436 8464
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:b.toth0801@gmail.com" className="hover:text-white transition-colors">
                b.toth0801@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
