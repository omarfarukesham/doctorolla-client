import React from 'react';
import Footer from '../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {

    return (
        <>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <Appointment></Appointment>
          <Testimonials></Testimonials>
          <Footer></Footer>
        </>
    );
};

export default Home;