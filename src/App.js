import React from 'react';
import Nav from './components/Nav'
import Banner from './components/Banner'
import Experience from './components/Experience';
import Video from './components/Video'
import Headsets from './components/Headsets';
import Testimonial from './components/Testimonial';
import MidSection from './components/MidSection';
import Explore from './components/Explore';
import Footer from './components/Footer';
const App = () => {
  return <div>
    <Nav />
    <Banner />
    <Experience />
    <Video />
    <Headsets />
    <Testimonial />
    <MidSection />
    <Explore />
    <Footer/>
  </div>;
};

export default App;
