import Hero from "../components/Hero"
import LearnMore from "../components/LearnMore"
import LetestOffer from "../components/LetestOffer"
import News from "../components/News"
import Recommends from "../components/Recommends"
import Slide from "../components/Slide"

const Home = () => {
  return (
    <div>
      <News />
      <Hero />
      <Slide />
      <LetestOffer />
      <Recommends />
      <LearnMore />
    </div>
  )
}
export default Home