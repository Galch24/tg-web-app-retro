//@ts-nocheck
import Layout from "@/components/layout/Layout";
import { initData } from "@telegram-apps/sdk";
import { Helmet } from "react-helmet-async";

const Main = () => {
  console.log(initData.user);
  const user = initData.user;

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
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.id}</p>
              <p>{user.username}</p>
            </div>
          ) : (
            <p>Юзера нет</p>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Main;
