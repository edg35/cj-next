"use client";

import { useToast } from "@/components/ui/use-toast";
import { useRef, useState } from "react";
import { saveContactForm } from "../_actions";
import FormSubmitButton from "./FormSubmitButton";

function ContactForm() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const result = await saveContactForm(formData);

    if (result) {
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
        type: "success",
      });
    } else {
      toast({
        title: "Error",
        description: "An error occurred while sending your message.",
        type: "error",
      });
    }

    formRef.current.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <p className="max-w-xl text-lg">
            Please clearly state your questions in the message section. Our team
            will get back to you about contracts or inquiries as soon as
            possible.
          </p>

          <div className="mt-8">
            <a href="#" className="text-xl md:text-2xl font-bold text-accent">
              cjesolutions1014@gmail.com
            </a>

            <address className="mt-2 not-italic">
              Staten Island, New York, NY 58517
            </address>
          </div>
        </div>

        <div className="rounded-md bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border border-primary p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border border-primary p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg border border-primary p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full rounded-lg border border-primary p-3 text-sm"
                placeholder="Message"
                rows="8"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <FormSubmitButton isSubmitting={isSubmitting} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
