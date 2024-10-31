import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";
import { useColorMode  } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';


export function GettingStartedFrame(): JSX.Element {
  const { colorMode  } = useColorMode();
  const iframeSrc = "https://getting-started.nitrogen.fhenix.zone" + (colorMode === 'light' ? "?isLight=1" : "");

  return (
    <section className={styles.additionalFeatures}>
      <div className="container" style={{ marginTop: -40}}>
          <div className="row" >
            <iframe scrolling="no" className="getting-started-iframe" width="100%" height="1200px" src={iframeSrc}></iframe>
            <div className='getting-started-iframe-info'>
            The page is not supported in mobile, please use a PC
            </div>
          </div>  
        </div>
      </section>
  );
}

export function AdditionalFeatures(): JSX.Element {
    return (
    <section className={styles.additionalFeatures}>
      <div className="container">
          <div className="row">
              <div className="col col--6">
                <div className="youtube-section">
                  <div className="row">
                    <div><a href="https://youtu.be/0s-37QpDHUY" target="_blank"><img className="youtube-video" alt="fhenix remix plugin tutorial" src="img/video-remix.jpg" style={{}}/></a></div>
                    <div className="subrow">
                      <div className="title">Fhenix Remix Plugin</div>
                      <div className="content">Learn how to use Fhenix Plugin for Remix.</div>
                    </div>
                  </div>
                  <div className="sep"></div>
                  <div className="row">
                    <div><a href="https://youtu.be/HhEvo3-F0h4" target="_blank"><img className="youtube-video" alt="fhenix hardhat plugin tutorial" src="img/video-hardhat.jpg" style={{}}/></a></div>
                    <div className="subrow">
                      <div className="title">Fhenix Hardhat Plugin - Getting Started</div>
                      <div className="content">Learn how to use Fhenix Hardhat Plugin.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                  <Heading as="h1" className="align--left margin-bottom--lg small-title">
                      A new, encrypted web<br/>
                      is waiting for you 
                  </Heading>
                  <p >
                      The power of Fully Homomorphic Encryption is unmatched!
                      It enables deployment of confidential smart contracts, ensuring that transaction inputs and states stay encrypted throughout the entire computation process, or in other words- end-to-end encryption for Web3 based applications
                  </p>
                  <div className={styles.secondaryButton}>
                      <Link
                          className={clsx('button button--primary', )}
                          to="/docs/devdocs/intro">
                          Start Building
                      </Link>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
}
