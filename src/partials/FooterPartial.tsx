import SocialLinkBlock from "../blocks/SocialLinkBlock";
import ContactInfoBlock from "../blocks/ContactInfoBlock";
import MapBlock from "../blocks/MapBlock";
function FooterPartial() {
  return (
    <footer data-layout-structure="partial">
      <MapBlock />
      <ContactInfoBlock />
      <SocialLinkBlock />
    </footer>
  );
}

export default FooterPartial;
