import { Link } from "react-router-dom";

const links = [
  {
    title: "Privacy & Terms.",
    href: "/faq",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const icons = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/",
  },
  {
    icon: "fab fa-twitter",
    href: "https://www.twitter.com/",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/",
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li>
      <Link to={href}>{title}</Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  return (
    <li>
      <Link to={href} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </Link>
    </li>
  );
};

const CopyrightFooter = () => {
  return (
    <div className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-0 mt-15">
            <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
              {links.map((link, index) => (
                <LinkItem key={index} title={link.title} href={link.href} />
              ))}
            </ul>
          </div>
          <div className="col-lg-4 order-lg-2 mt-15">
            <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
              {icons.map((icon, index) => (
                <IconItem key={index} icon={icon.icon} href={icon.href} />
              ))}
            </ul>
          </div>
          <div className="col-lg-4 order-lg-1 mt-15">
            <p className="copyright text-center m0">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                style={{ color: "inherit" }}
                href="https://themeforest.net/user/elite-themes24"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nile Technology Solution
              </a>{" "}
              Plc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
