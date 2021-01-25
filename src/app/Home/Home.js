import React from 'react';
import Layout from '../../components/Layout/Layout.js';
import Experience from '../Experience/Experience.js';
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
        Github Twitter Medium
      </section>
      <Separator />
      <section>
        <Experience />
      </section>
    </Layout>
  );
}