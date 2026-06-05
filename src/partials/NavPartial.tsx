import PageNavBlock from "../blocks/PageNavBlock";
import AuthorizationBlock from "../blocks/AuthorizationBlock";

function NavPartial() {
  return (
    <nav data-layout-structure="partial">
      <PageNavBlock />
      <AuthorizationBlock />
    </nav>
  );
}

export default NavPartial;
