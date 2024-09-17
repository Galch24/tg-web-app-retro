import {
  Container,
} from "@/components/ui";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { mainDomen } from "@/shared/config/env";
import { useEffect } from "react";
import {Box, Button} from "@mui/material";
import { useTelegram } from "@/hooks/useTelegram";
import { MainContent } from "@/components/MainContent";
import { SButtonClose, SPageContent } from "@/pages/styled";

const Main = () => {
  const crumbs = [
    {
      label: "Главная",
      path: mainDomen,
      id: 1,
    },
  ];

  const { onClose } = useTelegram()

  return (
  <>
    <Helmet>
      <title>Ретро 2024</title>
    </Helmet>
    <Layout>
      <SPageContent sx={{ paddingTop: '60px', position: 'relative' }}>
        <Container>
          <SButtonClose onClick={onClose}>Закрыть</SButtonClose>
          <MainContent />
        </Container>
      </SPageContent>
    </Layout>
  </>
  );
};

export default Main;
