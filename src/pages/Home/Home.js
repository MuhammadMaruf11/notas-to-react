import React from 'react';
import Example from '../../components/Example/Example';
import Hero from '../../components/Hero/Hero';
import OpenSource from '../../components/OpenSource/OpenSource';
import Projects from '../../components/Projects/Projects';
import Layout from "../Layout/Layout";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Projects />
            <Example />
            <OpenSource />
        </Layout>
    );
};

export default Home;
