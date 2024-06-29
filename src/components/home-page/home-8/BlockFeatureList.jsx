const BlockFeatureList = () => {
  const featureList = [
    {
      title: "Product Discovery & Collaboration",
    },
    {
      title: "Wireframe & Production",
    },
    {
      title: "Free Consultations",
    },
    {
      title: "Prototype Applications",
    },
  ];

  return (
    <div className="block-style-three ps-xxl-5" data-aos="fade-left">
      <div className="title-style-nine">
        <div className="sc-title">Our Process</div>
        {/* <h2 className="main-title text-white">
          Buy <span>Crypto</span> fast &amp; Instantly.
        </h2> */}
        <h2 class="main-title text-white">
          Nile Technology Solution: <span>Innovative IT Solutions</span>
        </h2>
      </div>
      <p className="text-lg text-white opacity-75 pt-20 pb-30 lg-pb-20">
        Digitalize your business with Nile Technology Solutions internationally validated
        solutions, designed for efficiency, sustainability, scalability, and
        alignment with your business priorities.
      </p>
      <ul className="style-none list-item fs-18 text-white opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
      <a href="#" className="btn-sixteen fw-500 border7 tran3s mt-45">
        Learn More
      </a>
    </div>
  );
};

export default BlockFeatureList;
