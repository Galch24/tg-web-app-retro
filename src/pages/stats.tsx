import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { SPageContent } from "@/pages/styled";
import { Container } from "@/components/ui";
import { MainContent } from "@/components/MainContent";

export const Stats = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SPageContent sx={{ position: "relative" }}>
        <Container>
          <MainContent />
        </Container>
      </SPageContent>
    </Layout>
  );
};
