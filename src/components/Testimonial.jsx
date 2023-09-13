import React from "react";
import TestimonialSlider from "./TestimonialSlider";
const Testimonial = () => {
  return (
    <div className="mt-[30px]">
      <div className="mb-64 lg:mb-48 container mx-auto">
        <div className=" bg-purple-400/10 max-h-[400px] md:p-12 p-3 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">What our clients say</h2>
            <p className="max-w-2xl mx-auto mb-12 lg:mb-24">
              See what our customer say about us. It really matter for us. How
              good or bad we for evaluation to make everything better.
            </p>
          </div>
          {/* for slider */}
          <div>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
