"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Marketing Manager",
      content: "After 6 months with Let's Master Spanish, I went from zero to having full conversations with my colleagues in Mexico City. The structured lessons made all the difference!",
      avatar: "🙋‍♀️"
    },
    {
      name: "David Chen",
      role: "Traveler & Photographer",
      content: "The travel phrases section saved my trip to Barcelona. I could order food, ask for directions, and make friends. This site is a game-changer for travelers!",
      avatar: "🙋‍♂️"
    },
    {
      name: "Emma Rodriguez",
      role: "Language Enthusiast",
      content: "I tried 5 different apps before finding this blog. The grammar explanations are clear, the examples are practical, and the community is so supportive. ¡Muchas gracias!",
      avatar: "🙋"
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-muted py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-foreground/70">
            Join thousands of successful Spanish learners
          </p>
        </div>

        <Card className="p-8 md:p-12 border-border relative">
          <Quote className="absolute top-6 left-6 h-12 w-12 text-accent/30" />
          
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 italic">
              "{testimonials[current].content}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                {testimonials[current].avatar}
              </div>
              <div>
                <p className="font-bold text-foreground font-heading">{testimonials[current].name}</p>
                <p className="text-sm text-foreground/60">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="rounded-full hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}