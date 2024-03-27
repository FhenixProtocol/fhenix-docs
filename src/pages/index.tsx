import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, { FC, useEffect } from 'react';

import styles from './index.module.css';
import AdditionalFeatures from "../components/AdditionalFeatures";
import { useColorMode  } from '@docusaurus/theme-common';

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-PLL6DPHF'
}

console.log("v0.1");

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode  } = useColorMode();

  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
              <div className="row">
                  {/*<div className={styles.container2}>*/}
                  <div className="col col--6">
                      <div className="row">

                          <Heading as="h1" className="hero__title">
                              { /* siteConfig.title */} 
                              <img className="fhenix-logo" alt="fhenix image" src="img/fhenix-logo.svg" style={{maxWidth: '600px'}}/>
                          </Heading>
                      </div>
                      <div className="row">
                          <p className="hero__subtitle">{siteConfig.tagline}</p>
                          <p className="home__description">
                              Fhenix is the first Fully Homomorphic Encryption (FHE) powered L2 to bring computation
                              over encrypted data to Ethereum.
                              Through the use of its FHE rollups, Fhenix enables Ethereum developers to seamlessly
                              deploy encrypted smart contracts to leverage end-to-end encryption of their data.
                          </p>
                      </div>
                      <div className={clsx("row", styles.ButtonRow)}>
                          <div className='col col--4'>
                              <Link
                                  className='button button--primary'
                                  to="/docs/devdocs/intro">
                                  Start Building
                              </Link>
                          </div>
                          <div className='col col--4'>
                              <Link
                                  className='button button--lol'
                                  to={"/docs/tutorial/intro"}>
                                  Tutorial
                              </Link>
                          </div>


                          {/*</div>*/}
                      </div>
                      <div className={clsx("row", styles.ButtonRowMobile)}>
                          <Link
                              className='button button--primary'
                              to="/docs/devdocs/intro">
                              Start Building
                          </Link>
                      </div>
                      <div className={clsx("row", styles.ButtonRowMobile)}>
                          <Link
                              className='button button--lol'
                              to={"/docs/tutorial/intro"}>
                              Tutorial
                          </Link>
                      </div>
                  </div>
                  

                  <div className="hide-small-width col col--6" style={{marginTop: "-100px"}}>
                  { (colorMode === 'dark') ? <img className="page-cover-image" alt="fhenix stuttershock image" src="img/page-cover-dark.webp" style={{maxWidth: '600px'}}/> : <img className="page-cover-image" alt="fhenix stuttershock image" src="img/page-cover-light.webp" style={{maxWidth: '600px'}}/>}
                  </div>
              </div>

          </div>
      </header>
  );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    useEffect(() => {
      TagManager.initialize(tagManagerArgs)
    });
    

    return (
        <Layout title={`${siteConfig.title}`}
                description="Documentation for Fhenix, the pioneering FHE-enabled L2. Explore how Fhenix is transforming privacy in Blockchain.">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <AdditionalFeatures/>
            </main>
        </Layout>
    );
}
