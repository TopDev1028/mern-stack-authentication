import React from "react";

const About = () => {
  return (
    <div>
      <section id='about'>
        <div className='container mt-5 my-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img src='/assets/about1.png' alt='About' className='w-75 mt-5' />
            </div>
            <div className='col-md-6'>
              <h3 className='fs-5'>About Us</h3>
              <h1 className='display-6'>
                Who <b>We</b> Are
              </h1>
              <hr className='w-50' />
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, magni exercitationem delectus inventore voluptatum
                explicabo. Tempora laboriosam voluptatem nulla quibusdam,
                molestias atque quisquam. Pariatur hic nisi est magni at
                necessitatibus rerum provident placeat officia quaerat impedit
                tempore autem amet reprehenderit dolorem quia totam in beatae
                nihil, nesciunt suscipit ratione ullam! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit.
              </p>
              <button className='btn btn-primary rounded-pill px-4 py-2 ms-2'>
                Get Started
              </button>
              <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
