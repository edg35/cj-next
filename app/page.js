import { Button } from "@/components/ui/button";
import { Flower, GroupIcon, SprayCan } from "lucide-react";
import Link from "next/link";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main>
      {/* Navbar Section */}
      <header>
        <Navbar />
      </header>
      {/* Hero Section */}
      <section
        className="relative bg-[url('/bridge.jpg')] h-[650px] bg-cover bg-center"
        id="hero-section"
      >
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-transparent to-slate-100 z-0"></div>
        <div className="container px-5 py-24 mx-auto flex flex-col justify-center items-center w-full h-full z-1">
          <article className="text-center lg:w-2/3 w-full backdrop-blur-lg rounded-sm py-10 bg-glass">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900 dark:text-white">
              Professional Cleaning Services in New York
            </h1>
            <p className="mb-8 leading-relaxed text-black font-medium">
              Where cleanliness meets professionalism, CJ Environmental LLC
              Solutions
            </p>
            <div className="flex justify-center">
              <Link href="#services-section">
                <Button className="hover:bg-accent">Learn More</Button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <article>
        {/* Content Section */}
        <section class="bg-slate-100 dark:bg-gray-900 py-10">
          <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              class="w-full dark:hidden rounded-sm"
              src="/classroom.jpg"
              alt="dashboard image"
            />
            <div class="mt-4 md:mt-0">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Creating a Healthy Environment for Students
              </h2>
              <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                A clean organization environment is essential for promoting
                student health and well-being. It helps prevent the spread of
                germs, reduces allergies, and creates a positive learning
                atmosphere.
              </p>
              <Link href="#contact-us">
                <Button className="hover:bg-accent">Get Started</Button>
              </Link>
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section className="bg-slate-100 dark:bg-gray-900 py-10">
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
        </section>
        {/* Content Section */}
        <section class="bg-slate-100 dark:bg-gray-900 py-10">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                We are a team of professionals
              </h2>
              <p class="mb-4">
                We believe in understanding the specific requirements of each
                organization and tailoring our cleaning services accordingly.
                Our approach ensures that we meet and exceed expectations.
              </p>
              <p>
                We understand the importance of trust when it comes to cleaning
                organizations. Our team is reliable, professional, and dedicated
                to delivering high-quality results every time.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <img
                class="w-full rounded-sm md:h-[400px] h-[200px] object-cover"
                src="/broom.jpg"
                alt="office content 1"
              />
              <img
                class="w-full rounded-sm md:h-[400px] h-[200px] object-cover"
                src="/ctapic.jpeg"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="bg-slate-100 body-font py-10" id="services-section">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-center">
                We Offer a wide variety of services catering to all your
                cleaning demands
              </h1>
              <h3 className="hidden md:block text-xl font-medium title-font text-center mt-7">
                CJ Environmental Solutions
              </h3>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-300 text-primary mb-4 flex-shrink-0">
                  <Flower size={24} />
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
        </section>
      </article>
      {/* CTA Section */}
      <section className="bg-slate-100 dark:bg-gray-900 py-10" id="cta-section">
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
                <Link href="#contact-us">
                  <Button className="hover:bg-accent">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-gray-100 py-10" id="contact-us">
        <ContactForm />
      </section>
      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
