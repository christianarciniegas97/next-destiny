import FeaturedDestinations from "../components/layout/featuredDestinos"
import Newsletter from "../components/layout/newsletter"
import WhyDestiny from "../components/layout/whyDestiny"
import Hero from "../components/ui/hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedDestinations />
      <WhyDestiny />
      <Newsletter />
    </main>
  )
}