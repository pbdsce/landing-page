import React from 'react';
// import sections
import Hero2 from '../components/sections/Hero2';
import CodeofConduct from '../components/sections/CodeofConduct';

const Home = () => {

  return (
    <>
      <Hero2 className="illustration-section-01" />
    

      <CodeofConduct invertMobile topDivider imageFill className="illustration-section-02" />
    
    </>
  );
}

export default Home;
