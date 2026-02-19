
import './styles/main.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import Footer from './components/Footer'
import Follow from './sections/Follow'
import Collection from './sections/Collection'
import SkinCare from './sections/SkinCare'
import Instargram from './sections/Instargram'
function App() {

    return (
    <>
    <Header />
    <main>
        <section id="hero">
            <Hero />
        </section>
        <section id="follow">
            <Follow />
        </section>
        <section id="collection">
            <Collection />
        </section>
        <section id="skincare">
            <SkinCare />
        </section>
        <section id="instargram">
            <Instargram />
        </section>
    </main>
    <Footer />
    </>
    )
}

export default App
