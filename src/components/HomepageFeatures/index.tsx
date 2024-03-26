import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";
import { useColorMode  } from '@docusaurus/theme-common';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  linkTo: string;
};



const FeatureList: FeatureItem[] = [
  {
    title: 'Fhenix Frontier',
    Svg: require('@site/static/img/fhenix-logo-card-image.svg').default,
    description: (
      <>
          Fully Homomorphic Encryption (FHE) enables processing of encrypted data, addressing encryption concerns and making Web3 applications safer. Learn more!
      </>
    ),
      linkTo: "/docs/devdocs/Fhenix%20Frontier/Connecting-To"
  },
  {
    title: 'FHE Contract',
      Svg: require('@site/static/img/fhe-contract-card-image.svg').default,

      description: (
      <>
          Run for the first time FHE-based smart contracts with on-chain confidential computation, providing unprecedented level of data encryption.
      </>
    ),
      linkTo: "/docs/devdocs/Writing%20Smart%20Contracts/FHE-sol"
  },
  {
    title: 'Encrypted & Private',
      Svg: require('@site/static/img/fhenix-frontier-card-image.svg').default,

    description: (
      <>
          Fhenix incorporates FHE to enable confidential smart contracts on public blockchains, ensuring data privacy for the next generation of Web3 applications.
      </>
    ),
      linkTo: "/docs/devdocs/Fhenix%20Frontier/Fhenix-T-FHE"
  },
    {
        title: 'EVM Compatible',
        Svg: require('@site/static/img/evm-compatible-card-image.svg').default,
        description: (
            <>
                Fhenix is fully EVM-compatible, allowing easy development of dApps using solidity. Bring your dApp ideas to life using our seamless integration with EVM!
            </>
        ),
        linkTo: "/docs/tutorial/Basic/Writing-The-Contract"
    }
];

function Feature({title, Svg, description, linkTo}: FeatureItem) {
  const { colorMode  } = useColorMode();
  const svgClassName = colorMode === 'dark' ? `${styles.featureSvg} white-image` : styles.featureSvg;

  return (
      <div className={clsx("card", styles.custom__card)}>
          <Link
              className={clsx(styles.link)}
              to={linkTo}
          >
              <div className="card__body text--center">
                  <Heading as="h2" className={clsx(styles.cardHeading)}>{title}</Heading>
                  <div className={clsx("text--center")}>
                      <Svg className={svgClassName} role="img"/>
                  </div>
                  <p>{description}</p>
              </div>
          </Link>
      </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
    return (
    <section className={styles.features}>
      <div className="container">
          <div className="row">
              <Heading as="h1" className="text--center margin-bottom--lg margin-left--md">
                  Unleash the Fhenix
              </Heading>
          </div>

        <div className="row">

            {FeatureList.map((props, idx) => (
                <div className="col col--3">
                    <Feature key={idx} {...props} />
                </div>
                    ))}
                </div>
                </div>
    </section>
  );
}
