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
    title: 'Dev Quickstart',
    Svg: require('@site/static/img/getting-started.svg').default,
    description: (
        <>
            Start building Solidity Apps using your favorite tools
        </>
    ),
    linkTo: "/getting-started",
    buttonTitle: "Start"
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
    title: 'Grant and bounty program',
      Svg: require('@site/static/img/grant.svg').default,

    description: (
      <>
          Get funds to grow projects & communities in the Fhenix ecosystem
      </>
    ),
      linkTo: "https://www.fhenix.io/grant-program/",
      buttonTitle: "Get Started"
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

                  <Heading as="h2" className="" style={{ fontSize: 22 }} >{title}</Heading>
                  <p>{description}</p>
                  <div className="row" style={{ flex: 1 }}></div>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Link
                        className='tutorial-button minimum'
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
      <div className="container" style={{ marginBottom: "80px"}}>
          <div className="row">
              <Heading as="h1" className="text--center margin-bottom--lg margin-left--md orb-font" style={{ fontSize: 40, fontWeight: 'normal' }}>
                Useful Links
              </Heading>
          </div>
          {/* style={{ gap: "20px"}} */}
          <div className="row feature_container" >
            {FeatureList.map((props, idx) => (
                <div className="col col--3"> 
                    <Feature key={idx} {...props} />
                </div>
                    ))}
          </div>
          <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
            <img src="img/vertical-bullet.webp"/>
          </div>
          <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
              <Heading as="h1" className="text--center  orb-font" style={{ fontSize: 40, fontWeight: 'normal' }}>
                Connect With US
              </Heading>
          </div>
          <div className="row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px', gap: '20px'}}>
            <div className={clsx("card", styles.custom__card_1)} style={{ height: '200px', width: '500px', padding: '20px' }}>
              <div className="orb-font" style={{ fontSize: 26, fontWeight: 'bold' }}>Fhenix Developer Updates</div>
              <div>Stay up-to-date on the latest Fhenix developer news</div>
              <div className="row" style={{ flex: 1 }}></div>
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                <Link
                    className='tutorial-button minimum'
                    to="https://cdn.forms-content-1.sg-form.com/bc6341d0-c9d3-11ee-8af0-8a5e6a16f9f5">
                    Sign Up
                </Link>
              </div>

            </div>
            <div className={clsx("card", styles.custom__card_1)} style={{ height: '200px', width: '500px', padding: '20px' }}>
            <div className="orb-font" style={{ fontSize: 26, fontWeight: 'bold' }}>Even More Resources</div>
              <div>Hear from Fhenix co-founders, engineering and research teams, ecosystem projects, and more. Join us!</div>
              <div className="row" style={{ flex: 1 }}></div>
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link
                    className='tutorial-button'
                    to={"https://x.com/FhenixIO"}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: '10px' }}> 
                      X / Twitter <img src="img/x.svg" style={{ width: '15px'}}/>
                    </div>
                </Link>

                <Link
                    className='tutorial-button'
                    to={"https://discord.gg/FuVgxrvJMY"}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: '10px' }}> 
                      Discord <img src="img/discord.svg"  style={{ width: '20px'}}/>
                    </div>
                </Link>
              </div>

              </div>
            </div>

          </div>
          

      </div>
    </section>
  );
}
