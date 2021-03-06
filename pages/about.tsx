import type { NextPage, GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";

import i18n from "lib/i18n";
import Layout from "components/Layout";

export const getServerSideProps: GetServerSideProps = i18n.getTranslations();

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <p>{t("hellotoabout")}</p>
    </Layout>
  );
};

export default Home;
