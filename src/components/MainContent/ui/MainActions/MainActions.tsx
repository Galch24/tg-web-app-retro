import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";
import { SBlockWrapper, SActionButton, SButtonClose } from "./styled";
import catSisadmin from "@/assets/img/cat-sisadmin2.jpg";

import { useTelegram } from "@/hooks/useTelegram";

type MainActionsProps = {
  sectionId: string;
};

export const MainActions = ({ sectionId }: MainActionsProps) => {
  const { tg, user, onClose } = useTelegram();
  const [sended, setSended] = useState(false);

  const onSendData = useCallback(async () => {
    setSended(true);
    const data = {
      username: `${user}`,
      user: user,
    };

    await tg.sendData(JSON.stringify(data));
  }, [user?.username]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });
  }, []);

  return (
    <section id={sectionId} style={{ marginTop: "60px" }}>
      <Box>
        <SBlockWrapper>
          <SActionButton onClick={onSendData}>
            Передать нам привет
          </SActionButton>
          {sended && (
            <Box sx={{ mt: 4, color: "#fff" }}>
              Привет, {`${user?.username}`}
              {/*<Box sx={{ mt: 2, mb: 3 }}>*/}
              {/*  <img src={catSisadmin} alt='Привет' />*/}
              {/*</Box>*/}
            </Box>
          )}
        </SBlockWrapper>
      </Box>
    </section>
  );
};
