import SocialIconComponent from "../components/SocialIconComponent";

function SocialLinkBlock() {
  return (
    <div className="social-links" data-layout-structure="block">
      <h3 className="block-header social-title">
        <span className="material-symbols-outlined">share</span>
        Follow Us
      </h3>
      {/*Social Link Component Render Here*/}
      <div className="social-icons">
        <SocialIconComponent />
        <SocialIconComponent />
        <SocialIconComponent />
      </div>
    </div>
  );
}

export default SocialLinkBlock;
