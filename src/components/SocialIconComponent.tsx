type SocialIconProps = {
  href: string;
  label: string;
  icon: string;
};

function SocialIconComponent({ href, label, icon }: SocialIconProps) {
  return (
    <div className="social-icon" data-layout-structure="component">
      <a href={href} aria-label={label}>
        <span className="label">{label}</span>
        <i className={`fab ${icon}`}></i>
      </a>
    </div>
  );
}

export default SocialIconComponent;
