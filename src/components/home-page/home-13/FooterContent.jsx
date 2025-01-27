import { Link } from "react-router-dom";

const links = [
  {
    title: "Links",
    links: [
      { title: "Home", url: "/" },

      { title: "About us", url: "/pages-menu/about-us-v1" },
      { title: "Service", url: "/pages-menu/service-v1" },
      { title: "Blog", url: "/blog/blog-v1" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "FAQ", url: "/pages-menu/faq" },
      { title: "Blog", url: "/blog/blog-v1" },
      { title: "Contact Us", url: "/contact" },
      { title: "Support", url: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { title: "Take the tour", url: "/pages-menu/faq" },
      { title: "Live chat", url: "/pages-menu/faq" },
      { title: "Self-service", url: "/pages-menu/faq" },
      { title: "Social", url: "/pages-menu/faq" },
      { title: "Jano Reviews", url: "/pages-menu/faq" },
    ],
  },
];

const FooterContent = () => {
  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="col-lg-2 col-sm-4 mb-30">
          <h5 className="footer-title fw-normal">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((item, i) => (
              <li key={i}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
