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

              </div>
              <div className="col col--6">
                  <Heading as="h1" className="align--left margin-bottom--lg">
                      This Text is Really Cringe <br/>
                      And Should be Replaced
                  </Heading>
                  <p>
                      The power of Fully Homomorphic Encryption is unmatched!
                      It enables deployment of confidential smart contracts, ensuring that transaction inputs and states stay encrypted throughout the entire computation process, or in other words- end-to-end encryption for Web3 based applications
                  </p>
                  <Link
                      className='button button--primary'
                      to="/docs/devdocs/intro">
                      Start Building
                  </Link>
              </div>

          </div>
      </div>
    </section>
  );
}
