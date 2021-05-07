import React from 'react';
import Layout from '../../components/Layout/Layout.js';
import Experience from '../Experience/Experience.js';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import ReactGA from 'react-ga';

import './home.scss';

const Separator = function() {
  return <div style={{borderTop: '1px solid #cccccc'}}/>
}

export default function Home(props) {
  ReactGA.initialize('UA-142292796-1');
  ReactGA.pageview('/home');

  return (
    <Layout className="home">
      <div className="home__title">
        <h2>
          Maximiliano Tulian - Frontend Software Engineer
        </h2>
      </div>
      <section className="home__social-item">
        <a className="home__social-item" href="https://github.com/maximilianotulian" ><AiFillGithub /></a>
        <a className="home__social-item" href="https://twitter.com/max_tulian"><FaTwitterSquare /></a>
      </section>
      <Separator />
      <section>
        <Experience />
      </section>
    </Layout>
  );
}