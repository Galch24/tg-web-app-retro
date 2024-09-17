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
      <Box sx={{ paddingTop: 3 }}>
        <SBlockWrapper>
          <SActionButton onClick={handleAction}>Передать привет Dev Unit</SActionButton>
          {sended && (
            <Box sx={{ mt: 4, color: '#333' }}>
              Привет, {`${user}`}
            </Box>
          )}
        </SBlockWrapper>
      </Box>
    </section>
  );
};
