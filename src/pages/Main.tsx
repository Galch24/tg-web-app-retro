//@ts-nocheck
import Layout from "@/components/layout/Layout";
import { useTelegram } from "@/hooks/useTelegram";
import { Helmet } from "react-helmet-async";

const Main = () => {
  const { user, chatId } = useTelegram();

  return (
    <>
      <Helmet>
        <title>Ретро 2024</title>
      </Helmet>
      <Layout>
        <div>
          <h1>Информация о пользователе:</h1>
          {user ? (
            <div>
              <p>Имя: {user.first_name}</p>
              <p>Фамилия: {user.last_name || "Не указана"}</p>
              <p>Username: {user.username || "Не указан"}</p>
              <p>ID: {user.id}</p>
            </div>
          ) : (
            <p>Пользователь не найден</p>
          )}
          <h2>Chat ID: {chatId || "Недоступен"}</h2>
        </div>
      </Layout>
    </>
  );
};

export default Main;
