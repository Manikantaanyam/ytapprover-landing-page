import React from "react";

const Footer = () => {
  const footerData = {
    logo: "YtApprover", // Replace with your actual logo URL or JSX component
    columns: [
      {
        title: "Company",
        links: [
          { name: "About Us", href: "/about" },
          { name: "Careers", href: "/careers" },
          { name: "Press", href: "/press" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Blog", href: "/blog" },
          { name: "Help Center", href: "/help" },
          { name: "Terms of Service", href: "/terms" },
          { name: "Privacy Policy", href: "/privacy" },
        ],
      },
      {
        title: "Connect",
        links: [
          { name: "Contact Us", href: "/contact" },
          { name: "Twitter", href: "https://twitter.com/ytapprover" },
          { name: "LinkedIn", href: "https://linkedin.com/ytapprover" },
          { name: "Facebook", href: "https://facebook.com/ytapprover" },
        ],
      },
    ],
    copyright: "© 2025 YtApprover, Inc. All rights reserved.",
  };

  return (
    <footer className="mt-10 pb-4 text-white px-6 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:gap-4 justify-between mb-6 space-y-6 sm:space-y-0">
          <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
            <h1 className="text-xl text-black dark:text-white font-semibold">
              {footerData.logo}
            </h1>
          </div>

          {/* Columns */}
          {footerData.columns.map((column, index) => (
            <div className="flex flex-col" key={index}>
              <h2 className="text-lg font-medium text-black dark:text-white mb-4">
                {column.title}
              </h2>
              <ul className="space-y-2">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-white text-[14px] transition-colors font-thin text-black dark:text-white/80"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="mb-4" />
        <div className="text-center text-black dark:text-gray-400 text-sm sm:text-base">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
