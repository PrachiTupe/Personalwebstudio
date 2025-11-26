import React, { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem";
import "./ReviewsSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviewsData = [
  { 
    name: "Raghav Sinha — Restaurant Owner (Delhi)", 
    comment: "I wanted a professional website for my North Indian restaurant, and their team made the entire process super simple. The guidance call helped me understand what pages actually matter. Online table inquiries have increased a lot after the new website.", 
    rating: 5 
  },

  { 
    name: "Ananya Iyer — Boutique Founder (Chennai)", 
    comment: "They helped me choose the perfect colour theme and layout for my clothing brand. The website looks premium and my customer trust increased instantly. Extremely smooth and beginner-friendly experience.", 
    rating: 5 
  },

  { 
    name: "Rajdeep Singh — Real Estate Consultant (Punjab)", 
    comment: "Needed a clean property listing website and they delivered beyond expectations. They even suggested lead-capturing ideas that actually work. My website now feels trustworthy and professional.", 
    rating: 5 
  },

  { 
    name: "Sana Qureshi — Makeup Artist (Hyderabad)", 
    comment: "Super impressed with their clarity and communication. They built a beautiful portfolio website with galleries and booking options. Many clients told me they booked because the website looked so professional.", 
    rating: 5 
  },

  { 
    name: "Vikram Rao — E-commerce Store Owner (Bengaluru)", 
    comment: "My previous online store wasn’t converting well. Their redesign improved product layout, descriptions and overall flow. My conversions increased within days. They understand UI/UX deeply.", 
    rating: 5 
  },

  { 
    name: "Keshav Menon — Gym Owner (Kochi)", 
    comment: "I wanted a bold and energetic website for my fitness center. They helped with design, branding and even WhatsApp automation. Now I'm getting more inquiries and trial bookings than before.", 
    rating: 5 
  },

  { 
    name: "Amit Khurana — Chartered Accountant (Gurgaon)", 
    comment: "As a CA, trust and presentation matter a lot. The website they built looks extremely clean and professional. My clients appreciate how clearly my services are explained on the site.", 
    rating: 5 
  },

  { 
    name: "Ritu Lodh — Interior Designer (Kolkata)", 
    comment: "They matched the website aesthetic perfectly with the design style I follow. My portfolio now looks elegant and premium. I’ve started getting better-quality leads because of this.", 
    rating: 5 
  },

  { 
    name: "Arjun Shetty — Digital Marketing Consultant (Mangalore)", 
    comment: "Needed a personal branding website and they built exactly what I had in mind. Clean, modern and conversion-focused. My lead quality has improved ever since.", 
    rating: 5 
  },

  { 
    name: "Pallavi Kapoor — Home Baker (Lucknow)", 
    comment: "I wanted a warm, cute and professional website for my baking business. They understood the vibe instantly and created something beautiful. I’m receiving more birthday and anniversary cake orders now.", 
    rating: 5 
  }
];


const ReviewsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const firstRowReviews = reviewsData.slice(0, 8);
  const secondRowReviews = reviewsData.slice(8, 16);

  return (
    <section className="reviews-section">
      <h2 className="section-heading">Client Reviews</h2>
      <p className="section-subheadline">What our clients are saying about us</p>

      {!isMobile ? (
        <div className="reviews-grid">
          {reviewsData.slice(0, 8).map((r, idx) => (
            <ReviewItem key={idx} {...r} />
          ))}
        </div>
      ) : (
        <>
          {/* Upper row: Right → Left */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1.5}
            loop={true}
            freeMode={true}
            freeModeMomentum={false}
            speed={10000} 
            initialSlide={0} // start at beginning
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
            grabCursor={true}
          >
            {[...firstRowReviews, ...firstRowReviews].map((r, idx) => (
              <SwiperSlide key={idx} style={{ width: "70%" }}>
                <ReviewItem {...r} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom row: Left → Right, start at different point */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1.5}
            loop={true}
            freeMode={true}
            freeModeMomentum={false}
            speed={10000} 
            initialSlide={4} // start from middle of slides for offset
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
            grabCursor={true}
          >
            {[...secondRowReviews, ...secondRowReviews].map((r, idx) => (
              <SwiperSlide key={idx} style={{ width: "70%" }}>
                <ReviewItem {...r} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </section>
  );
};

export default ReviewsSection;
