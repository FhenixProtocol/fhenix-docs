import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

import { GettingStartedFrame } from "../components/AdditionalFeatures";

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout title={`${siteConfig.title}`}
              description="Documentation for Fhenix, the pioneering FHE-enabled L2. Explore how Fhenix is transforming privacy in Blockchain.">
          <div className="background-circle"></div>
          <main>
              <GettingStartedFrame/>
          </main>
      </Layout>
  );
}
