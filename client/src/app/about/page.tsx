import aboutImage from "@/assets/images/about.jpg"
import Image from "next/image"
const AboutPage = () => {
  return (
    <div className="pt-20 max-w-[85vw] mx-auto">
         <h1 className="md:text-[6vw] text-[10vw] md:mb-8 mb-4 text-center uppercase font-heading text-dark">About us</h1>
         <p className="md:text-sm tracking-widest md:leading-8 leading-6 text-xs">At <span className="font-heading text-xl">MediMart</span>, we are dedicated to providing high-quality, affordable medicines and healthcare products to ensure that you and your loved ones live healthy, happy lives. With years of experience in the healthcare industry, we understand the importance of accessibility, trust, and convenience when it comes to taking care of your health.</p>
         <Image src={aboutImage} alt="About" className="rounded-lg my-8 w-full" width={2000} />
         <p className="md:text-sm tracking-widest md:leading-8 leading-6 text-xs">Our mission is simple: to make it easier for you to access the medications and wellness products you need, when you need them. Whether you are seeking prescription medications, over-the-counter remedies, or personal care products, we offer a wide range of options to meet your needs.</p>
         <p className="md:text-sm tracking-widest md:leading-8 mt-6 leading-6 text-xs">We take pride in our commitment to providing excellent customer service, offering expert advice from our qualified pharmacists, and delivering your orders quickly and safely to your doorstep. At [Your Pharmacy Name], your health and well-being are our top priority. We are here to support you every step of the way on your journey to better health.</p>
    </div>
  )
}

export default AboutPage