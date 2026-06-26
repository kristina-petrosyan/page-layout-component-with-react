import SocialIconComponent from "../components/SocialIconComponent";

function SocialLinkBlock() {
  return (
    <div className="social-links" data-layout-structure="block">
      <h3 className="block-header social-title">
        <span className="material-symbols-outlined">share</span>
        Follow Us
      </h3>
      <div className="social-icons">
        <SocialIconComponent href="#" label="Facebook" icon="fa-facebook-f" />
        <SocialIconComponent href="#" label="Twitter" icon="fa-x-twitter" />
        <SocialIconComponent href="#" label="Instagram" icon="fa-instagram" />
        <SocialIconComponent href="#" label="GitHub" icon="fa-github" />
      </div>
    </div>
  );
}

export default SocialLinkBlock;
