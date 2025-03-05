import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "Daniel Foster",
  },
  {
    quote:
      "The team is professional and delivers quality work on time. Their services exceeded my expectations.",
    author: "Sarah Johnson",
  },
  {
    quote:
      "Exceptional attention to detail. Their creativity and skill brought our vision to life.",
    author: "Michael Smith",
  },
  {
    quote:
      "Their communication was excellent, and they kept us updated throughout the entire process.",
    author: "Emily Davis",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (testimonialRef.current) {
      ScrollReveal().reveal(testimonialRef.current, {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 300,
        easing: "ease-in-out",
        reset: true,
      });
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="testimonials"
      className="testimonials-section"
      ref={testimonialRef}
    >
      <div className="testimonial-slide">
        <h1 className="testimonial-subtitle">Testimonies</h1>
        <h2 className="testimonial-heading">Clients Says</h2>

        <p className="testimonial-quote">
          “{testimonials[currentIndex].quote}”
        </p>

        <p className="testimonial-author">
          — {testimonials[currentIndex].author}
        </p>

        <div className="next__line">
          <div className="next-line" onClick={handleNext} />
          <div className="next-line" onClick={handleNext} />
          <div className="next-line" onClick={handleNext} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
