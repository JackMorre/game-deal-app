import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Bars } from "react-loading-icons";

import Aside from "./Aside";
import { useSelector } from "react-redux";

function AppLayout() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // const handleOpenCloseMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);

  return (
    <div
      className={`bg-sky-950 text-sky-100 grid-rows-[auto_1fr_auto] grid h-screen ${
        isMenuOpen
          ? "after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-black/20 after:z-0"
          : ""
      }`}
    >
      <Header />

      <Aside />
      <main
        className={` ${isMenuOpen ? "overflow-hidden" : "overflow-y-scroll"}`}
      >
        {isLoading ? <Bars /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
