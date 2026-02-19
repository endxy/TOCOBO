
import './styles/main.scss'
import './App.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import Review from './sections/Review'
import Footer from './components/Footer'
import Follow from './sections/Follow'
import Cta from './sections/Cta'
import Collection from './sections/Collection'
import SkinCare from './sections/SkinCare'
import Instagram from './sections/Instagram'
function App() {

  return (
    <div>
      <Header/>
      <main>
        <section id="hero">
        <Hero/>

        </section>
        <section id="follow">
        <Follow/>

        </section>
        <section id="collection">
        <Collection/>

        </section>
        <section id="skincare">
        <SkinCare/>

        </section>
        <section id="instagram">
        <Instagram/>

        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App
