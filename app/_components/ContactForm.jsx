"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { saveContactFrom, sendEmail } from "../_actions";

function ContactForm() {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Send form data in an email and save to database
    const email = await sendEmail(formData);
    const dbSave = await saveContactFrom(formData);

    if (!email.success) {
      // Handle error
      toast({
        variant: "destructive",
        message: "An error occurred. Please try again later.",
      });

      setLoading(false);
      setFormData(initialFormState);
      return;
    }

    // Continue with form submission logic
    setLoading(false);
    // Clear out form fields
    setFormData(initialFormState);
    // Toast a success message
    toast({
      variant: "success",
      title: "Thank you!",
      description: "Message sent successfully!",
    });
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
            <a href="#" className="text-2xl font-bold text-accent">
              cjesolutions1014@gmail.com
            </a>

            <address className="mt-2 not-italic">
              Staten Island, New York, NY 58517
            </address>
          </div>
        </div>

        <div className="rounded-md bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form onSubmit={onSubmit} className="space-y-4">
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
                value={formData.name}
                onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
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
                  value={formData.phone}
                  onChange={handleInputChange}
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
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <Button
                className="bg-primary hover:bg-accent transition-all"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin" /> Sending
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
