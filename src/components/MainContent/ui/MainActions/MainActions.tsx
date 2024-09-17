import React, {useCallback, useRef, useState} from "react";
import {Box, Button} from "@mui/material";
import {
  SBlockWrapper,
  SActionButton,
} from "./styled";
import catSisadmin from '@/assets/img/cat-sisadmin2.jpg';

import {useTelegram} from "@/hooks/useTelegram";

type MainActionsProps = {
  sectionId: string
}

export const MainActions = ({ sectionId }: MainActionsProps) => {
  const {tg, user} = useTelegram();
  const [sended, setSended] = useState(false)

  const handleAction = useCallback(async () => {
    const data = {
      user: `${user} передал привет`,
    }
    await tg.sendData(JSON.stringify(data));
    setSended(true)
  }, [])

  return (
    <section id={sectionId}>
      <Box>
        <SBlockWrapper>
          <SActionButton onClick={handleAction}>Передать привет Dev Unit</SActionButton>
          {sended && (
            <Box sx={{ mt: 4, color: '#333' }}>
              Привет, {`${user?.username}`}
              <Box sx={{ mt: 2 }}>
                <img src={catSisadmin} alt="Привет" />
              </Box>
            </Box>
          )}
        </SBlockWrapper>
      </Box>
    </section>
  );
};
