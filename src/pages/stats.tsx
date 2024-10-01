import React from "react";
import Layout from "@/components/layout/Layout";
import { SPageContent } from "@/pages/styled";
import { Container } from "@/components/ui";
import { MainContent } from "@/components/MainContent";

export const Stats = () => {
  return (
    <Layout>
      <SPageContent sx={{ paddingTop: "100px", position: "relative" }}>
        <Container>
          <MainContent />
        </Container>
      </SPageContent>
    </Layout>
  );
};
