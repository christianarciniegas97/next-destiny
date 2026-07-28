import FeaturedDestinations from "@/src/components/landing/featuredDestinos"
import Newsletter from "@/src/components/landing/newsletter"
import WhyDestiny from "@/src/components/landing/whyDestiny"
import Hero from "@/src/components/landing/hero"

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