import type { NextPage, GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import dayjs from "lib/dayjs";
import i18n from "lib/i18n";
import Layout from "components/Layout";
import ConnectEth from "components/ConnectEth";

export const getServerSideProps: GetServerSideProps = i18n.getTranslations();

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <p>{t("hello")}</p>
      <p>
        {t("todayis")} : {dayjs(new Date()).format("LLLL")}
      </p>
    </Layout>
  );
};

export default Home;
