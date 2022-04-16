import type { NextPage, GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import i18n from "lib/i18n";
import Layout from "components/Layout";
import UploadNft from "components/pages/uploadNft";

export const getServerSideProps: GetServerSideProps = i18n.getTranslations();

const Upload: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <UploadNft />
    </Layout>
  );
};

export default Upload;
