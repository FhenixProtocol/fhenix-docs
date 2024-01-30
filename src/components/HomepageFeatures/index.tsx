import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";
import { useColorMode  } from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};



const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/clock.svg').default,
    description: (
      <>
        Fhenix Frontier solidity easy to use the best
      </>
    ),
  },
  {
    title: 'FHE Is the Best',
    Svg: require('@site/static/img/shield_check.svg').default,
    description: (
      <>
        FHE next generation text the best stuff ever weeee<br />
          lots of text seeing what we want to say here <br />
          To make the page a little longer
      </>
    ),
  },
  {
    title: 'Powered by Solidity',
    Svg: require('@site/static/img/surface1.svg').default,
    description: (
      <>
        Solidity #1 fhe fhenix fronter winning
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  const { colorMode  } = useColorMode();
  const svgClassName = colorMode === 'dark' ? `${styles.featureSvg} white-image` : styles.featureSvg;

  return (
      <div className="card margin-left--xl" style={{borderRadius: "20px", border: "1px solid var(--ifm-color-primary)"}}>
        <div className="card__header text--center">
          <Svg className={svgClassName} role="img"/>
        </div>
        <div className="card__body text--center" >
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">

            {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
            ))}
                </div>
              </div>
    </section>
  );
}
