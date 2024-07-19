import { Button } from "@/components/ui/button";
import { Flower, GroupIcon, SprayCan } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./_components/ContactForm";
import FadeIn from "./_components/FadeIn";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-100" id="hero-section">
        <div className="container mx-auto pt-16">
          <Navbar />
        </div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Professional Cleaning Services in New York
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Where Cleanliness Meets Professionalism. We provide the services
              you need to keep your business clean.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact-us">
                <Button className="hover:bg-accent">Join Our Network</Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={"/newhero.png"} alt="mockup" width={700} height={700} />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-slate-100 py-20 dark:bg-gray-900" id="about-us">
        <FadeIn>
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Creating a Healthy Environment for Students
              </h2>
              <p className="mb-4">
                A clean organization is essential for promoting student health
                and well-being. It helps prevent the spread of germs, reduce
                allergies, and creates a positive learning atmosphere.
              </p>
              <p>
                We are strategists, designers and developers. Innovators and
                problem solvers. Small enough to be simple and quick.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src={"/ctapic.jpeg"}
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src={"/broom.jpeg"}
                alt="office content 2"
              />
            </div>
          </div>
        </FadeIn>
      </section>
      {/* Content Section */}
      <section className="bg-slate-100 dark:bg-gray-900 ">
        <FadeIn>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                Providing Specialized Cleaning Proficiency:
                <br /> Custom Solutions for Your Organization
              </h2>
              <p className="mb-4 font-light">
                At CJ Environmental, we are commited to providing a clean
                environment. A clean environment is a key component of a modern,
                safe,and effective organization. we can assure you our expert
                staff goes above and beyond to deliver sparkling results and our
                training ensures that your organization is always treated with
                professionalism and respect
              </p>
              <p className="mb-4 font-medium">
                Tailor cleaning services to your specific needs, whether it's
                daily, weekly, or bi-weekly. Focus on your core business while
                we ensure a consistently clean and healthy environment.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
      {/* Services Section */}
      <section className="bg-slate-100 body-font" id="services-section">
        <FadeIn>
          <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center mb-20">
              We Offer a wide variety of services catering to all your cleaning
              demands
              <br className="hidden sm:block" />
              CJ Environmental Solutions LLC
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-300 text-primary mb-4 flex-shrink-0">
                  <Flower />
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-lg title-font font-medium mb-2">
                    Whole Environment Cleaning
                  </h2>
                  <p className="leading-relaxed text-base">
                    Our experienced team provides thorough and efficient
                    cleaning services to ensure a clean and healthy environment
                    for all students and staff. From classrooms to common areas
                    we cover it all.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-300 text-primary mb-4 flex-shrink-0">
                  <SprayCan size={24} />
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-lg title-font font-medium mb-2">
                    Disinfection
                  </h2>
                  <p className="leading-relaxed text-base">
                    In today’s world, maintaining a hygienic environment is
                    crucial. Our disinfection services utilize advances
                    techniques an products to effectively eliminate germs and
                    viruses, keeping the organization safe.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-300 text-primary mb-4 flex-shrink-0">
                  <GroupIcon size={24} />
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-lg title-font font-medium mb-2">
                    Flooring
                  </h2>
                  <p className="leading-relaxed text-base">
                    We understand the importance of well-maintained floors in
                    organizations. Our team specializes in floor cleaning,
                    polishing, and maintenance, ensuring a clean and polished
                    appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
      {/* CTA Section */}
      <section className="bg-slate-100 dark:bg-gray-900" id="cta-section">
        <FadeIn>
          <div className="bg-slate-900">
            <div className="bg-gradient-to-b from-primary/[.15] via-transparent">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                <div className="max-w-3xl text-center mx-auto">
                  <h1 className="block font-medium text-gray-200 text-3xl sm:text-5xl md:text-xl lg:text-5xl">
                    Join Our Client Network
                  </h1>
                </div>

                <div className="max-w-3xl text-center mx-auto">
                  <p className="text-lg text-gray-400">
                    Experience the difference with Staten Island's premier
                    cleaning service. Join our network of satisfied clients and
                    enjoy a cleaner, healthier environment today.
                  </p>
                </div>

                <div className="text-center">
                  <Button className="hover:bg-accent">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
      {/* Contact Section */}
      <section className="bg-gray-100" id="contact-us">
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </section>
      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
