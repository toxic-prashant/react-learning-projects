"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Personalized Lessons",
    description:
      "Learn at your own pace with our personalized music lessons. Our experienced instructors will tailor each session to fit your goals, whether you're a beginner or advanced musician. Experience a supportive and nurturing learning environment that makes every lesson enjoyable.",
  },
  {
    title: "Group Classes",
    description:
      "Join our group classes to learn alongside other musicians. Perfect for building confidence and teamwork skills, our group classes offer a collaborative environment where students can practice and grow together. Embrace the joy of making music with friends and peers.",
  },
  {
    title: "Performance Opportunities",
    description:
      "Gain stage experience with our regular performance events. Students of all levels get the chance to perform in front of an audience, boosting confidence and showcasing their progress. Join us to share your music journey and celebrate your achievements.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "We understand that life is busy, which is why we offer flexible scheduling options for all our classes. Whether you prefer weekends or weekdays, morning or evening lessons, our platform lets you find the best times that work for you. Enjoy learning music without compromising your other commitments.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="p-10">
      <StickyScroll content={content}></StickyScroll>
    </div>
  );
};

export default WhyChooseUs;
