import { useState } from "react";

export function TestimonialCard() {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin Escobar",
      quote:
        "Exceptional experience at the omakase restaurant. Impeccable service and a delightful culinary journey. Highly recommend!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      quote:
        "The omakase restaurant surpassed all expectations. Each dish was a masterpiece, and the ambiance was perfect. A must-visit!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      quote:
        "Unforgettable omakase dining. The flavors were exquisite, and the presentation was top-notch. A true gem for food enthusiasts!",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center border border-border rounded-xl p-10">
      <div className="text-center">
        <h3 className="text-foreground font-semibold pb-6">
          What people are saying
        </h3>
        <ul>
          {testimonials.map((item, idx) =>
            currentTestimonial == idx ? (
              <li key={idx}>
                <figure>
                  <blockquote>
                    <p className="text-foreground text-xl font-semibold">
                      “{item.quote}“
                    </p>
                  </blockquote>
                  <div className="mt-6">
                    <img
                      src={item.avatar}
                      className="w-16 h-16 mx-auto rounded-full"
                    />
                    <div className="mt-3">
                      <span className="block text-foreground font-semibold">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </figure>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
      <div className="mt-6">
        <ul className="flex gap-x-3 justify-center">
          {testimonials.map((item, idx) => (
            <li key={idx}>
              <button
                className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-primary focus:ring ${
                  currentTestimonial == idx ? "bg-primary" : "bg-foreground"
                }`}
                onClick={() => setCurrentTestimonial(idx)}></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
