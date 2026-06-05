import image from "../assets/images/slides/slide-1.webp";

function SliderComponent() {
  return (
    <div className="slider-item" data-layout-structure="component">
      <img src={image} alt="" data-layout-structure="component" />
      <div className="slider-content">
        <h4 className="post-title-text">His mother had always taught him</h4>
        <p className="post-excerpt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default SliderComponent;
