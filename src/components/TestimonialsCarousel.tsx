import React, { useEffect, useRef, useState } from 'react';
import { User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

interface Props {
  testimonials: Testimonial[];
  theme: 'default' | 'light' | 'dark';
}

const TestimonialsCarousel = ({ testimonials, theme }: Props) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clone the first testimonial and append it to the end
    const firstCard = container.children[0].cloneNode(true) as HTMLElement;
    container.appendChild(firstCard);

    // Calculate total width for the animation
    const cardWidth = 400; // Width of each card + gap
    const totalWidth = cardWidth * testimonials.length;
    
    // Set the animation
    container.style.setProperty('--total-width', `-${totalWidth}px`);
    container.style.animation = `scroll-testimonials ${testimonials.length * 10}s linear infinite`;

    // Pause animation on hover
    const handleMouseEnter = () => {
      container.style.animationPlayState = 'paused';
      setIsPaused(true);
    };

    const handleMouseLeave = () => {
      container.style.animationPlayState = 'running';
      setIsPaused(false);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [testimonials]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient masks removed */}

      <style>{`
        @keyframes scroll-testimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(var(--total-width));
          }
        }
      `}</style>

      <div className="py-12 px-32">
        <div
          ref={containerRef}
          className="flex gap-6"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-[300px] md:w-[400px] p-6 rounded-xl transform transition-transform duration-300 ${
                isPaused ? 'hover:scale-105' : ''
              } ${
                theme === 'light'
                  ? 'bg-white/80 border-2 border-black/10'
                  : 'bg-white/5 border border-white/10'
              } backdrop-blur-sm`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-500">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <h4 className={`font-medium ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>{testimonial.name}</h4>
                  <p className={`text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>{testimonial.role}</p>
                </div>
              </div>
              <blockquote className={`mt-4 text-sm ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;