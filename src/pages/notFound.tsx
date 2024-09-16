import React from "react";
import { Helmet } from "react-helmet-async";

import Layout from "@/components/layout/Layout";
import { Container } from "@/components/ui";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <Layout>
        <Container>404</Container>
      </Layout>
    </>
  );
};

export default NotFound;
