import {
  Container,
} from "@/components/ui";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { mainDomen } from "@/shared/config/env";
import { useEffect } from "react";
import {Box, Button} from "@mui/material";
import { useTelegram } from "@/hooks/useTelegram";

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
      <Container>
        <Box sx={{ mt: 4 }}>
          Содержимое
          <Button onClick={onClose}>Закрыть</Button>
        </Box>
      </Container>
    </Layout>
  </>
  );
};

export default Main;
