"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

function FormSubmitButton({ isSubmitting }) {
  return (
    <Button
      className="bg-primary hover:bg-accent transition-all"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader className="mr-2" /> Sending
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

export default FormSubmitButton;
