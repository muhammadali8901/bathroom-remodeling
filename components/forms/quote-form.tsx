"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-lg p-6 lg:p-8">
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
        Get Free Quote
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Fill out the form and we'll contact you within 24 hours
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
        />
        
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        
        <Input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          required
        />
        
        <Textarea
          name="message"
          placeholder="Message (Optional)"
          rows={3}
          className="resize-none"
        />
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isSubmitting ? "Sending..." : "Get Free Quote"}
        </Button>
      </form>
    </div>
  );
}
