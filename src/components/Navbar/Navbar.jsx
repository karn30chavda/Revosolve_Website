import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Helper function to create URL-friendly paths from link names
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const navData = [
  {
    label: "Solutions",
    dropdown: {
      defaultImage: "/navbar/document-intelligence.png",
      title: "Solutions",
      gridCols: "grid-cols-2",
      links: [
        { name: "Document Intelligence Systems", image: "/navbar/document-intelligence.png" },
        { name: "Customer Interaction Systems", image: "/navbar/customer-interaction-systems.png" },
        { name: "Commerce Operations Systems", image: "/navbar/commerce-operations-systems.png" },
        { name: "Simulation & Digital Twin Systems", image: "/navbar/digital-twin-systems.png" },
        { name: "AI Surveillance Systems", image: "/navbar/ai-surveillance.png" },
        {
          name: "Public Infrastructure Operations",
          image: "/navbar/public-infrastructure-operations.png",
          path: "/coming-soon",
        },
        { name: "Defense & Training Systems", image: "/navbar/defense-training-systems.png" },
      ],
    },
  },
  {
    label: "Products",
    dropdown: {
      defaultImage: "/navbar/products_dropdown.webp",
      title: "Products",
      gridCols: "grid-cols-1",
      links: ["RevoDox", "RevoVision"],
    },
  },
  {
    label: "Services",
    dropdown: {
      defaultImage: "/navbar/service_dropdown.webp",
      title: "Services",
      gridCols: "grid-cols-2",
      links: [
        "Enterprise Application Systems",
        "Product and Platform Engineering",
        "Legacy Transformation Systems",
        "Open Source & ERP Systems",
        "QA and Test Automation",
        "AI & Intelligent Systems",
        "Cloud and Devops",
        "Data Engineering & Data Analytics",
      ],
    },
  },
  { label: "Case Studies", dropdown: null },
  { label: "Blog", dropdown: null },
  { label: "About Us", dropdown: null },
  { label: "Careers", dropdown: null },
];

export const Navbar = () => {
  const [openDropdownIdx, setOpenDropdownIdx] = useState(null);
  const [hoveredLinkImage, setHoveredLinkImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdownIdx, setMobileDropdownIdx] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdownIdx(null);
        setHoveredLinkImage(null);
        setIsMenuOpen(false);
        setMobileDropdownIdx(null);
      }
    };

    const handleScroll = () => {
      setOpenDropdownIdx(null);
      setHoveredLinkImage(null);
      if (window.scrollY > 50) {
        setIsMenuOpen(false);
        setMobileDropdownIdx(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileDropdownIdx(null);
  };

  const toggleMobileDropdown = (idx) => {
    setMobileDropdownIdx((prev) => (prev === idx ? null : idx));
  };

  // Resolves custom paths when provided, or generates clean slugified paths
  const getDropdownPath = (category, linkObj) => {
    if (typeof linkObj === "object" && linkObj.path) {
      return linkObj.path;
    }
    const name = typeof linkObj === "string" ? linkObj : linkObj.name;
    return `/${slugify(category)}/${slugify(name)}`;
  };

  return (
    <nav
      ref={navRef}
      className={`fixed z-50 transition-all duration-300 transform-gpu w-full min-[1290px]:w-[95%] min-[1290px]:left-1/2 min-[1290px]:-translate-x-1/2 ${
        isMenuOpen
          ? "h-auto bg-[#010319] top-0 shadow-2xl"
          : "h-[3.74938rem] min-[1290px]:h-20 bg-[#010319] min-[1290px]:bg-nav-bg top-0 min-[1290px]:top-6 min-[1290px]:rounded-2xl border-b border-[rgba(91,98,191,0.37)] min-[1290px]:border-white/10 shadow-md"
      }`}
    >
      <div className="flex items-center justify-between w-full h-[3.74938rem] min-[1290px]:h-20 px-[1.24956rem] min-[1290px]:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setOpenDropdownIdx(null);
            setHoveredLinkImage(null);
            setIsMenuOpen(false);
          }}
          className="flex items-center shrink-0 cursor-pointer transform-gpu"
        >
          <img
            src="/navbar/Revosolve_logo.webp"
            alt="RevoSolve"
            className="w-55 h-10 min-[1290px]:w-auto min-[1290px]:h-12"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden min-[1290px]:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navData.map((item, idx) => {
              const isOpen = openDropdownIdx === idx;

              return (
                <li
                  key={idx}
                  onClick={() => {
                    if (item.dropdown) {
                      setOpenDropdownIdx(isOpen ? null : idx);
                      setHoveredLinkImage(null);
                    }
                  }}
                  className="relative flex items-center justify-center gap-2 h-20 text-white font-sans text-base font-medium tracking-tight hover:text-accent cursor-pointer transition-colors duration-300 text-center"
                >
                  {!item.dropdown ? (
                    <Link
                      to={
                        item.label === "Careers"
                          ? "/careers"
                          : item.label === "About Us"
                          ? "/about-us"
                          : `/${slugify(item.label)}`
                      }
                      onClick={() => setOpenDropdownIdx(null)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}

                  {item.dropdown && (
                    <img
                      src="/navbar/nav_drop_icon.webp"
                      className={`w-3 h-3 transition-transform duration-300 ${
                        isOpen ? "rotate-180 opacity-100" : "opacity-70"
                      }`}
                      alt=""
                    />
                  )}

                  {item.dropdown && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className={`absolute left-1/2 -translate-x-1/2 top-20 pt-2 transition-all duration-300 z-50 transform origin-top w-max ${
                        isOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }`}
                    >
                      <div className="inline-flex flex-row p-6 gap-8 rounded-2xl bg-[#EAEAFF] shadow-2xl border border-white/20">
                        <div className="shrink-0 flex items-stretch">
                          <div className="w-72 h-48 overflow-hidden rounded-lg shadow-inner bg-[#010319] flex items-center justify-center">
                            <img
                              src={hoveredLinkImage || item.dropdown.defaultImage}
                              alt={item.dropdown.title}
                              className="w-full h-full object-contain transition-all duration-300"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start min-w-48 justify-center">
                          <span className="text-[#8e95c4] text-xs font-semibold mb-6 uppercase tracking-widest">
                            {item.dropdown.title}
                          </span>
                          <div className={`grid ${item.dropdown.gridCols} gap-x-12 gap-y-4 w-full`}>
                            {item.dropdown.links.map((linkObj, linkIdx) => {
                              const linkName =
                                typeof linkObj === "string" ? linkObj : linkObj.name;
                              const linkImage =
                                typeof linkObj === "string" ? null : linkObj.image;

                              return (
                                <Link
                                  key={linkIdx}
                                  to={getDropdownPath(item.label, linkObj)}
                                  onClick={() => {
                                    setOpenDropdownIdx(null);
                                    setHoveredLinkImage(null);
                                  }}
                                  onMouseEnter={() => {
                                    if (linkImage) setHoveredLinkImage(linkImage);
                                  }}
                                  className="flex items-center gap-2 text-[#070784] font-sans text-sm font-normal leading-5 tracking-wide group/link w-fit"
                                >
                                  <span className="group-hover/link:underline decoration-[#070784] underline-offset-4 transition-all">
                                    {linkName}
                                  </span>
                                  <img
                                    src="/navbar/dropdown_link_icon.webp"
                                    className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
                                    alt=""
                                  />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <Link
            to="/connect"
            onClick={() => setOpenDropdownIdx(null)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-sans font-semibold rounded-lg border border-accent hover:bg-accent/10 hover:shadow-lg transition-all duration-300 shrink-0"
          >
            Connect
            <img src="/navbar/connect_icon.webp" className="w-4 h-4" alt="" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="min-[1290px]:hidden p-1 flex items-center justify-center w-[1.999375rem] h-[1.999375rem] cursor-pointer"
        >
          <img
            src="/navbar/humburger.webp"
            alt="Menu"
            className="h-[1.49944rem] shrink-0"
          />
        </button>
      </div>

      {/* Mobile Accordion Menu */}
      {isMenuOpen && (
        <div className="min-[1290px]:hidden w-full bg-[#010319] flex flex-col items-start justify-start px-5.5 pb-8 pt-2 gap-0 relative animate-[fadeIn_0.3s_ease-out]">
          <div className="flex flex-col w-full">
            {navData.map((item, idx) => {
              const isActive = mobileDropdownIdx === idx;

              return (
                <div key={idx} className="flex flex-col w-full">
                  <div
                    onClick={() =>
                      item.dropdown
                        ? toggleMobileDropdown(idx)
                        : setIsMenuOpen(false)
                    }
                    className="flex flex-row items-center justify-between w-full h-[3.35988rem] pr-0 shrink-0 border-b-[0.768px] border-[rgba(91,98,191,0.37)] cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    {!item.dropdown ? (
                      <Link
                        to={
                          item.label === "Careers"
                            ? "/careers"
                            : item.label === "About Us"
                            ? "/about-us"
                            : `/${slugify(item.label)}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                        className="text-[#FFF] text-left font-sans text-[17px] leading-7 font-thin opacity-[0.64] tracking-[-0.02744rem] w-full"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="text-[#FFF] text-left font-sans text-[17px] leading-7 font-thin opacity-[0.64] tracking-[-0.02744rem]">
                        {item.label}
                      </div>
                    )}

                    {item.dropdown && (
                      <img
                        src="/navbar/nav_drop_icon.webp"
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        } opacity-70`}
                        alt=""
                      />
                    )}
                  </div>

                  {item.dropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        isActive ? "max-h-125 py-4" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-4 pl-4">
                        {item.dropdown.links.map((linkObj, lIdx) => {
                          const linkName =
                            typeof linkObj === "string" ? linkObj : linkObj.name;

                          return (
                            <Link
                              key={lIdx}
                              to={getDropdownPath(item.label, linkObj)}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-white/60 text-[14px] font-sans hover:text-white transition-colors cursor-pointer"
                            >
                              {linkName}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;