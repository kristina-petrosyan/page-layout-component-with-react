function MapBlock() {
  return (
    <div className="footer-map" data-layout-structure="block">
      <h3 className="block-header map-title">
        <span className="material-symbols-outlined">location_on</span>
        Georgia, Tbilisi
      </h3>
      <div className="map-embed" data-layout-structure="component">
        <iframe
          src="https://maps.google.com/maps?q=Tbilisi,Georgia&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tbilisi, Georgia"
        ></iframe>
      </div>
    </div>
  );
}

export default MapBlock;
