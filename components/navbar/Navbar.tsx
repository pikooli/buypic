import { useTranslation } from "next-i18next";
import Link from "components/link/Link";
import ConnectEth from "components/ConnectEth";

export default function RootNavbar() {
  const { t } = useTranslation("navbar");

  return (
    <div className="navbar flex justify-between content-center">
      <Link href="/" text={t("title")} className="text-2xl uppercase" />
      <ConnectEth />
    </div>
  );
}
