import React, { useState, useEffect } from 'react';
import Experience from '../Experience/Experience';
import Layout from '../../components/Layout/index';
import ReactGA from 'react-ga';
import Separator from '../../components/Separator';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTwitterSquare, FaMoon, FaSun } from 'react-icons/fa';

import { getItem, setItem } from '../../util/sessionStorage';
import './home.scss';

export default function Home() {
  const defaultThemeValue = getItem('dark-mode') || false;
  const [theme, setTheme] = useState(defaultThemeValue);
  
  useEffect(() => {
    if (defaultThemeValue) {
      const body = document.getElementsByTagName('body')[0];
      const newClass = 'body--dark';

      body.classList.add(newClass);
    }
  }, []);

  const handleThemeChange = () => {
    const body = document.getElementsByTagName('body')[0];
    const newClass = 'body--dark';
    const newTheme = !theme;

    setTheme(newTheme);
    setItem('dark-mode', newTheme);

    if (newTheme) {
      body.classList.add(newClass);
    } else {
      body.classList.remove(newClass);
    }
  };
  
  ReactGA.initialize('UA-142292796-1');
  ReactGA.pageview('/home');

  return (
    <Layout className={`home ${theme ? 'home--dark' : ''}`}>
      <div className="home__title">
        <h2>
          Maximiliano Tulian - Frontend Software Engineer
        </h2>
        <section className="home__social-item">
          <a className="home__social-item" href="https://github.com/maximilianotulian" ><AiFillGithub /></a>
          <a className="home__social-item" href="https://twitter.com/max_tulian"><FaTwitterSquare /></a>
          <a className="home__social-item" href="https://linkedin.com/in/maximilianotulian"><AiFillLinkedin /></a>
          <button className="home__social-item" onClick={(): void => handleThemeChange()}>
            {theme ? <FaSun /> : <FaMoon />}
          </button>
        </section>
      </div>
      <Separator />
      <section>
        <Experience />
      </section>
    </Layout>
  );
}