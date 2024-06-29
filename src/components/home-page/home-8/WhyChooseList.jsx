const reasons = [
  {
    title: "Cutting-edge IT solutions trusted by businesses worldwide.",
  },
  {
    title: "Competitive pricing and superior market value.",
  },
  {
    title: "Expert support available 24/7.",
  },
];

const WhyChooseList = () => {
  return (
    <div className="block-style-five pe-xl-5 me-xxl-5" data-aos="fade-right">
      <div className="title-style-nine pb-20">
        <div className="sc-title">Why Choose Us</div>
        <h2 className="main-title text-white">
          Why <span>Choose</span> Nile Technology Solution for your business.
        </h2>
      </div>
      {/* /.title-style-nine */}
      <ul className="style-none list-item">
        {reasons.map((reason) => (
          <li key={reason.title}>{reason.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseList;

// const reasons = [
//   {
//     title: "World best technology data and trusted by 10m+ users.",
//   },
//   {
//     title: "We provide best price more than other market",
//   },
//   {
//     title: "We've expert to support you 24 hours in week.",
//   },
// ];

// const WhyChooseList = () => {
//   return (
//     <div className="block-style-five pe-xl-5 me-xxl-5" data-aos="fade-right">
//       <div className="title-style-nine pb-20">
//         <div className="sc-title">Why Choose us</div>
//         <h2 className="main-title text-white">
//           Why <span>Choose</span> us for your business.
//         </h2>
//       </div>
//       {/* /.title-style-nine */}
//       <ul className="style-none list-item">
//         {reasons.map((reason) => (
//           <li key={reason.title}>{reason.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WhyChooseList;
