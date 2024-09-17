import React from 'react';
import styles from './style';

const CTA = () => {
    return (
       

        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 gap-4`}>
    <input type="text" name="email" class="py-2.5 px-5 h-14 w-full md:max-w-md border border-gray-300 bg-gray-600 shadow-sm rounded-full text-lg text-white focus:outline-none placeholder:text-indigo-200" placeholder="Your mail id.." />
    <button class="h-14 py-3.5 px-7 bg-white shadow-sm rounded-full text-gray-600 font-semibold">Subscribe</button>
    </div>
  </section>
      
                                     
    );
}

export default CTA;