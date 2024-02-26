import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";
import { useColorMode  } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

export default function AdditionalFeatures(): JSX.Element {
    return (
    <section className={styles.additionalFeatures}>
      <div className="container">
          <div className="row">
              <div className="col col--6">
                <div className="youtube-section">
                  <div className="row">
                    <div><a href="https://youtu.be/0s-37QpDHUY" target="_blank"><img className="youtube-video" alt="fhenix video" src="img/video-remix.jpg" style={{}}/></a></div>
                    <div className="subrow">
                      <div className="title">Fhenix Remix Plugin</div>
                      <div className="content">Learn how to use Fhenix Plugin for Remix.</div>
                    </div>
                  </div>
                  <div className="sep"></div>
                  <div className="row">
                    <div><a href="https://youtu.be/HhEvo3-F0h4" target="_blank"><img className="youtube-video" alt="fhenix video" src="img/video-hardhat.jpg" style={{}}/></a></div>
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
