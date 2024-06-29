import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        {pageTitle &&
          `${pageTitle} || Nile Technology Solution}`}
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
