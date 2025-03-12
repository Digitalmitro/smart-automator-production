import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaTags = () => {
  const location = useLocation();
  const path = location.pathname;
console.log(path)
  // Meta data mapping
  const metaTags = {
    "/": {
      title: "Custom Home Improvement Solutions in NYC - Smart Automator",
      description: "Looking for a custom home improvement solution in NYC? Smart Automator is a reliable home improvement expert, with years of experience and matchless expertise. Operating in multiple locations."
    },
    "/aboutus": {
      title: "About Us - Smart Automator",
      description: "Know more about Smart Automator, a leading home improvement solution that transforms your living space."
    },
    "/services": {
        title: "Smart Home Automation Services in New York - Smart Automator",
        description: "Embrace smart home solutions from the experts at Smart Automator. Enhance your property value and make your living more comfortable."
      },
      "/serviceinfo/maintenance-&-support-plans": {
        title: "Maintenance & Support Plans - Smart Automator",
        description: "Professional maintenance and support for your smart home in NYC, LA, Miami, and more."
      },
      "/pricing-plans": {
        title: "Pricing Plans - Smart Automator",
        description: "View our pricing plans for installing and maintaining smart home improvement devices."
      },
    "/faq": {
      title: "FAQ - Smart Automator",
      description: "Find answers to frequently asked questions about smart home solutions and automation."
    }
  };

  // Handle dynamic service info pages
  if (path.startsWith("/serviceinfo/") && !metaTags[path]) {
    metaTags[path] = {
      title: "Service Information - Smart Automator",
      description: "Learn more about our smart home services, installation, and maintenance plans."
    };
  }

  // Get the correct meta title and description
  const { title, description } = metaTags[path] || {
    title: "Smart Automator - Home Improvement Solutions",
    description: "Explore our cutting-edge smart home automation solutions."
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default MetaTags;
