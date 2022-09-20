import React from 'react';
import Logo from '../components/logo/Logo';
import hero from '../assets/images/hero-img.svg';

const Home = () => {
  return (
    <div>
      <header className='section header'>
        <Logo />
      </header>
      <section className='section hero'>
        <div className='hero-left'>
          <h1 className='hero-title'>
            Job Tracking <span>App</span>
          </h1>
          <p className='hero-desc'>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <button className='hero-btn'>Login / Register</button>
        </div>
        <div className='hero-right'>
          <img src={hero} alt='descriptive' />
        </div>
      </section>
    </div>
  );
};

export default Home;
