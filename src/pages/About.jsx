import React from 'react';
import aboutImg from '../assets/about-img.avif';

const About = () => {
  return (
    <section class="overflow-hidden bg-gray-50 md:pt-0 ">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Welcome to <br class="block sm:hidden" />Amuud University
            </h2>
            <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Amuud University is a premier institution committed to academic excellence and innovative research. Our vibrant community fosters growth and success.
            </p>

            <p class="mt-4 text-xl text-gray-600 md:mt-8">
              <span class="relative inline-block">
                <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                <span class="relative"> Have a question? </span>
              </span>
              <br class="block sm:hidden" />Contact us on <a href="#" title="" class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Twitter</a>
            </p>
          </div>

          <div class="relative">
            <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

            <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;