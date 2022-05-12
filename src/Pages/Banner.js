import React from "react";
import chair from "../assets/images/chair.png";
const Banner = () => {
  return (
    <div class="hero min-h-screen px-12">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="images" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            First time in Bangladesh we are setting our Medical service all across the mega city of 
            Dhaka, Every service ensuring the quality and maximum safety, Health is Our topmost concern
            Obviously also considering the minimum cost. Welcome to visit our Hospital........ 
          </p>
          <button class="btn btn-primary uppercase fond-bold bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
