const CallToAction = () => {
  const platformButtons = [
    {
      href: "#",
      className: "ios-button",
      icon: "/images/icon/icon_89.svg",
      text1: "Download on the",
      text2: "App store",
      aos: "fade-right",
    },
    {
      href: "#",
      className: "windows-button",
      icon: "/images/icon/playstore.svg",
      text1: "Get it on",
      text2: "Google play",
      aos: "fade-left",
    },
  ];
  return (
    <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
      <div className="title-style-nine text-center mb-40" data-aos="fade-up">
        <h2 className="main-title text-white">
          Order Us. You will exprience <span>Fast &amp; Easy.</span> Service
        </h2>
      </div>
      {/* /.title-style-nine */}


    </div>
  );
};

export default CallToAction;
