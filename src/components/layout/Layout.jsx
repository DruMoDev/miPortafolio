import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { t } = useTranslation();
  document.title = t("metadata.title");
  document
    .querySelector("meta[name='description']")
    .setAttribute("content", t("metadata.description"));
  document
    .querySelector("meta[name='keywords']")
    .setAttribute("content", t("metadata.keywords"));

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center mx-auto">
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
