import React from "react";
import { Helmet } from "react-helmet-async";

import Layout from "@/components/layout/Layout";
import { Container } from "@/components/ui";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Layout>
        <Container>about</Container>
      </Layout>
    </>
  );
};

export default About;
