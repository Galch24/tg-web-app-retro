import React, {useCallback, useRef, useState} from "react";
import {Box, Button} from "@mui/material";
import {
  SBlockWrapper,
  SActionButton,
} from "./styled";

import {useTelegram} from "@/hooks/useTelegram";

type MainActionsProps = {
  sectionId: string
}

export const MainActions = ({ sectionId }: MainActionsProps) => {
  const {tg, user} = useTelegram();

  const handleAction = useCallback(() => {
    const data = {
      user: `${user} передал привет`,
    }
    tg.sendData(JSON.stringify(data));
  }, [])

  return (
    <section id={sectionId}>
      <Box sx={{ paddingTop: 3 }}>
        <SBlockWrapper>
          <SActionButton onClick={handleAction}>Передать привет Dev Unit</SActionButton>
        </SBlockWrapper>
      </Box>
    </section>
  );
};
