import { Container } from "@/components/ui";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { useTelegram } from "@/hooks/useTelegram";
import { MainContent } from "@/components/MainContent";
import { SButtonClose, SPageContent } from "@/pages/styled";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Ретро 2024</title>
      </Helmet>
      <Layout>
        <SPageContent sx={{ paddingTop: "100px", position: "relative" }}>
          <Container>
            <MainContent />
          </Container>
        </SPageContent>
      </Layout>
    </>
  );
};

export default Main;
