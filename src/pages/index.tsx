import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, { FC } from 'react';

import styles from './index.module.css';

// interface HomepageSectionProps {
//     header?: string;
//     description?: string;
//     className?: string;
// }
//
// const HomepageSection: FC<HomepageSectionProps> = (props) => {
//     const toKebabCase = (header) =>
//         header &&
//         header
//             .match(
//                 /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
//             )
//             .map((parts) => parts.toLowerCase())
//             .join('-');
//
//     return (
//         <div className={clsx('homepage__section', props.className)}>
//             <div className='homepage__container'>
//                 {props.header && (
//                     <h2 className='homepage__header' id={toKebabCase(props.header)}>
//                         {props.header}
//                     </h2>
//                 )}
//                 {props.description && (
//                     <p className='homepage__description'>{props.description}</p>
//                 )}
//                 {props.children}
//             </div>
//         </div>
//     );
// };


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>

          <div className={styles.container2}>

              <Heading as="h1" className="hero__title">
                  {siteConfig.title}
              </Heading>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className='intro__buttons'>
                  <Link
                      className='intro__button button button--outline button--primary'
                      to={"https://github.com/fhenixprotocol"} target="_blank">
                      View on Github
                  </Link>
                  <Link
                      className='intro__button button button--primary'
                      to="/docs/devdocs/intro">
                      Start Building
                  </Link>
              </div>
          </div>

      </header>
  );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={`Hello from ${siteConfig.title}`}
                description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
