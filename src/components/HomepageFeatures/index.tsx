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
  buttonTitle: string;
};



const FeatureList: FeatureItem[] = [
  {
    title: 'Write Your First FHE Contract',
    Svg: require('@site/static/img/fhe-contract-card-image.svg').default,
    description: (
      <>

      </>
    ),
      linkTo: "/docs/devdocs/Writing%20Smart%20Contracts/FHE-sol",
      buttonTitle: "Build"
  },
  {
    title: 'Dev Cheatsheet',
      Svg: require('@site/static/img/dev.svg').default,

      description: (
      <>
          This doc helps devs ramp up fast for hackathons
      </>
    ),
      linkTo: "https://www.fhenix.io/cheat-sheet",
      buttonTitle: "View"
  },
  {
    title: 'Grant Program',
      Svg: require('@site/static/img/grant.svg').default,

    description: (
      <>
          Get funds to grow projects & communities in the Fhenix ecosystem
      </>
    ),
      linkTo: "https://www.fhenix.io/grant-program",
      buttonTitle: "Get Started"
  },
    {
        title: 'Bounty Program',
        Svg: require('@site/static/img/coins.svg').default,
        description: (
            <>
                Tackle challenges in the Fhenix ecosystem & earn monetary rewards
            </>
        ),
        linkTo: "https://www.fhenix.io/bounty",
        buttonTitle: "Learn More"
    }
];

function Feature({title, Svg, description, linkTo, buttonTitle}: FeatureItem) {
  const { colorMode  } = useColorMode();
  const svgClassName = colorMode === 'dark' ? `${styles.featureSvg} white-image` : styles.featureSvg;

  return (
      <div className={clsx("card", styles.custom__card)} style={{ height: '100%' }}>
          <Link
              className={clsx(styles.link)}
              to={linkTo}
              style={{ height: '100%' }}
          >
              <div className="card__body custom__body_flex">
                  <div>
                    <Svg className={svgClassName} role="img"/>
                  </div>

                  <Heading as="h2" className="orb-font" style={{ fontSize: 24 }} >{title}</Heading>
                  <p>{description}</p>
                  <div className="row" style={{ flex: 1 }}></div>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Link
                        className='docs-button minimum'
                        to={linkTo}>
                        {buttonTitle}
                    </Link>

                  </div>

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
              <Heading as="h1" className="text--center margin-bottom--lg margin-left--md orb-font" style={{ fontSize: 55, fontWeight: 'normal' }}>
                Useful Links
              </Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
                <div className="col col--3">
                    <Feature key={idx} {...props} />
                </div>
                    ))}
          </div>
          <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
            <img src="img/vertical-bullet.webp"/>
          </div>
      </div>
    </section>
  );
}
