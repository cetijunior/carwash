import DocumentTitle from './components/DocumentTitle'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import GallerySection from './components/GallerySection'
import PricesSection from './components/PricesSection'
import MapSection from './components/MapSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/Footer'

function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <DocumentTitle />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PricesSection />
        <MapSection />
        <ContactSection />
        <GallerySection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
