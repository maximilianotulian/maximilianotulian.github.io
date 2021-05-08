import React from 'react';
import Experience from '../Experience/Experience';
import Layout from '../../components/Layout/index';
import Separator from '../../components/Separator';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import ReactGA from 'react-ga';

import './home.scss';

export default function Home() {
  ReactGA.initialize('UA-142292796-1');
  ReactGA.pageview('/home');

  return (
    <Layout className="home">
      <div className="home__title">
        <h2>
          Maximiliano Tulian - Frontend Software Engineer
        </h2>
        <section className="home__social-item">
          <a className="home__social-item" href="https://github.com/maximilianotulian" ><AiFillGithub /></a>
          <a className="home__social-item" href="https://twitter.com/max_tulian"><FaTwitterSquare /></a>
        </section>
      </div>
      <Separator />
      <section>
        <Experience />
      </section>
    </Layout>
  );
}