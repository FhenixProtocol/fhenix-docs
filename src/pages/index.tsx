import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, { useEffect } from 'react';

import styles from './index.module.css';
import { GettingStartedFrame } from "../components/AdditionalFeatures";
import { useColorMode  } from '@docusaurus/theme-common';

import TagManager from 'react-gtm-module';
import ReactGA from "react-ga4";

const tagManagerArgs = {
  gtmId: 'GTM-PLL6DPHF'
}

console.log("v0.1");

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode  } = useColorMode();

  return (
      <header style={{ zIndex: 2 }} className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
              <div className="row" style={{ display: 'flex', justifyContent: 'space-between'}}>
                  {/*<div className={styles.container2}>*/}
                  <div className="col col--6">
                      <div className="row">

                          <Heading as="h1" className="hero__title">
                              { /* siteConfig.title */} 
                              <img className="fhenix-logo" alt="fhenix image" src="img/fhenix-logo-build.webp" />
                          </Heading>
                      </div>
                      <div className="row">
                          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
                          <p className="home__description">
                          Tools and resources to help you build, launch, and grow your app on Fhenix
                          </p>
                      </div>
                      <div className={clsx("row", styles.ButtonRow)} style={{ marginLeft: -30 }}>
                          <div className='col col--3'>
                              <Link
                                  className='docs-button minimum'
                                  to="/docs/devdocs/intro">
                                  Docs
                              </Link>
                          </div>
                          <div className='col col--4'>
                              <Link
                                  className='tutorial-button minimum'
                                  to={"/docs/devdocs/Tutorials/Your-First-FHE-Contract"}>
                                  Tutorials
                              </Link>
                          </div>


                          {/*</div>*/}
                      </div>
                      <div className={clsx("row", styles.ButtonRowMobile)}>
                          <Link
                              className='docs-button minimum padding'
                              to="/docs/devdocs/intro">
                              Docs
                          </Link>
                      </div>
                      <div className={clsx("row", styles.ButtonRowMobile)}>
                          <Link
                              className='tutorial-button minimum padding'
                              to={"/docs/devdocs/Tutorials/Your-First-FHE-Contract"}>
                              Tutorials
                          </Link>
                      </div>
                  </div>

                  <div className="hide-small-width" style={{marginTop: "-100px"}}>
                  {/* <div className="" style={{marginTop: "-100px"}}> */}
                  { (colorMode === 'dark') ? <img className="page-cover-image" alt="fhenix stuttershock image" src="img/page-cover-dark-2.webp" style={{maxWidth: '450px'}}/> : <img className="page-cover-image" alt="fhenix stuttershock image" src="img/page-cover-dark-2.webp" style={{maxWidth: '450px'}}/>}
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
      ReactGA.initialize("G-NKHXME4286");
    });
    

    return (
        <Layout title={`${siteConfig.title}`}
                description="Documentation for Fhenix, the pioneering FHE-enabled L2. Explore how Fhenix is transforming privacy in Blockchain.">
            <div className="background-circle"></div>
            <HomepageHeader />
            <main>
                <div style={{ height: '100px' }}></div>
                <HomepageFeatures/>
                {/* <GettingStartedFrame/> */}
            </main>
        </Layout>
    );
}
