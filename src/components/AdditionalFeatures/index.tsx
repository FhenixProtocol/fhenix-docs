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
                  <img className={styles.randomImage} src={"/img/placeholder.png"} alt="Fhenix" />
              </div>
              <div className="col col--6 margin-top--xl">
                  <Heading as="h1" className="align--left margin-bottom--lg">
                      The Next Generation <br/>
                      Of Smart Contracts
                  </Heading>
                  <p>
                      Confidential smart contracts store and manage private data.
                      Private Tokens, NFTs that hold encryption keys, confidential voting, social networks, decentralized identity, private DeFi, and more. What are you waiting for?
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
