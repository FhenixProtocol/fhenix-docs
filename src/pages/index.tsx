import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, { FC } from 'react';

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
              <div className="row">
                  {/*<div className={styles.container2}>*/}
                  <div className="col col--6">
                      <div className="row">
                          < Heading as="h1" className="hero__title col col--6 margin-left--md">
                              {siteConfig.title}
                          </Heading>
                      </div>
                      <div className="row">
                          <p className="hero__subtitle">{siteConfig.tagline}</p>
                      </div>
                      <div className="row">
                          {/*<div className='col col--3'>*/}
                          <Link
                              className='button button--lol margin-left--md'
                              to={"https://github.com/fhenixprotocol"} target="_blank">
                              View on Github
                          </Link>
                          {/*</div>*/}
                          {/*<div className='col col--3'>*/}
                          <Link
                              className='button button--primary  col col--3  margin-left--md'
                              to="/docs/devdocs/intro">
                              Start Building
                          </Link>
                          {/*</div>*/}
                      </div>
                  </div>
                  <div className="col col--6" style={{height: "200px", marginTop: "-175px"}}>
                      <img alt="fhenix stuttershock image" style={{display: "block"}} src="img/image.png"/>
                  </div>
              </div>

          </div>
      </header>
  );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={`Hello from ${siteConfig.title}`}
                description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
