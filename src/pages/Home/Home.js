import React from 'react';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import Layout from "../Layout/Layout";

const Home = () => {
    return (
        <Layout>
           <Hero />
           <Projects />
        </Layout>
    );
};

export default Home;
