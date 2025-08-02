import Image from "next/image"
import frute1 from '../../assets/frute1.jpg'
import frute2 from '../../assets/frute2.jpg'

export default function AboutUsPage() {
  return (
    <main className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-white text-gray-900">
      <section className="container px-4 md:px-6 text-center max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          Our Story: Freshness from Farm to Table
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          At Fruity Delights, we believe in bringing the freshest, most delicious fruits directly to your home. Our
          journey began with a simple passion for healthy living and a commitment to sustainable farming practices.
        </p>
      </section>

      <section className="container px-4 md:px-6 py-12 grid md:grid-cols-2 gap-8 items-center max-w-5xl">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to cultivate and deliver premium quality fruits that are not only bursting with flavor but
            also packed with essential nutrients. We work closely with local farmers who share our vision for organic
            and environmentally friendly cultivation methods, ensuring every bite is a step towards a healthier you and
            a healthier planet.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are dedicated to transparency, from the soil our fruits grow in to the moment they arrive at your
            doorstep. We believe in fostering a community that values fresh, wholesome food and supports sustainable
            agriculture.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={frute1}
            width={600}
            height={400}
            alt="Fresh fruits in a basket"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 grid md:grid-cols-2 gap-8 items-center max-w-5xl">
        <div className="flex justify-center md:order-last">
          <Image
            src={frute2}
            width={600}
            height={400}
            alt="Farmer in a fruit orchard"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>
              <strong>Quality:</strong> We meticulously select only the finest fruits, ensuring peak ripeness and
              flavor.
            </li>
            <li>
              <strong>Sustainability:</strong> We champion eco-friendly farming and packaging to protect our planet.
            </li>
            <li>
              <strong>Community:</strong> We support local farmers and build strong relationships with our customers.
            </li>
            <li>
              <strong>Health:</strong> We promote healthy eating habits by providing nutritious and delicious options.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with honesty and transparency in all our practices.
            </li>
          </ul>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 text-center max-w-3xl space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Join Our Fruity Family!</h2>
        <p className="text-lg md:text-xl text-gray-700">
          We invite you to explore our selection and experience the difference that fresh, responsibly sourced fruits
          can make. Thank you for choosing Fruity Delights – where every fruit tells a story of dedication and natural
          goodness.
        </p>
      </section>
    </main>
  )
}
