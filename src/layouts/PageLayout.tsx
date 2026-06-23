import { Outlet } from "react-router";
import HeaderBlock from "../blocks/HeaderBlock";
import NavPartial from "../partials/NavPartial";
import FooterPartial from "../partials/FooterPartial";

function PageLayout() {
  return (
    <section className="wrapper" data-layout-structure="page">
      <div className="container" data-layout-structure="builder">
        <HeaderBlock />
        <NavPartial />
        <Outlet />
        <FooterPartial />
      </div>
    </section>
  );
}

export default PageLayout;
