import React from 'react';
import Layout from '../../components/Layout/Layout.js';
import Experience from '../Experience/Experience.js';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitterSquare, FaMedium } from 'react-icons/fa';
import './home.scss';

const Separator = function() {
  return <div style={{borderTop: '1px solid #cccccc'}}/>
}
export default function Home(props) {
  return (
    <Layout>
      <div>
        <h2>
          Maximiliano Tulian - Software Engineer
        </h2>
      </div>
      <section>
        <a href="https://github.com/maximilianotulian" style={{fontSize: '30px '}}><AiFillGithub /></a>
        <a href="https://twitter.com/max_tulian" style={{fontSize: '30px '}}><FaTwitterSquare /></a>
      </section>
      <Separator />
      <section>
        <Experience />
      </section>
    </Layout>
  );
}