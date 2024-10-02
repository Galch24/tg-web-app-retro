import React, { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { SPageContent } from "@/pages/styled";
import { Container } from "@/components/ui";
import { Cases } from "@/components/Cases";

export const CasesPage = () => {
  return (
    <Layout>
      <SPageContent sx={{ position: "relative" }}>
        <Container>
          <Cases />
        </Container>
      </SPageContent>
    </Layout>
  );
};
