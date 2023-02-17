import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <header>
        <Nav />
      </header> */}
      <main>
        <Outlet></Outlet>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
