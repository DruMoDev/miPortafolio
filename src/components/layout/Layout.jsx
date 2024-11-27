import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className=" flex flex-col justify-center items-center mx-auto">
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="max-w-[1000px] px-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
