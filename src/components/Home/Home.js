import React from 'react';
import Banner2 from '../Shop/Banner2';
import Option from './Option';
import './Home.css'
import Banner from '../Shop/Banner';

const Home = () => {
    return (
        <div className="mt-0 pt-4 mb-0 pb-4 homeBG">
            <Banner2/>
            <Option/>
            <Banner/>
        </div>
    );
};

export default Home;