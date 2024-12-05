import { init } from "@telegram-apps/sdk";
import { useEffect, useState } from "react";

export function useTelegram() {
  const [user, setUser] = useState(null);
  const [queryId, setQueryId] = useState(null);
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    try {
      const tg = init();

      const userData = tg?.getUser?.();
      if (userData) {
        setUser(userData);
      }

      const queryData = tg?.getQuery?.();
      setQueryId(queryData?.id || null);

      const chatData = tg?.getChat?.();
      setChatId(chatData?.id || null);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { user, queryId, chatId };
}
