import React from 'react';
import { Link } from 'react-router-dom';

const navData = [
  {
    label: 'Solutions',
    dropdown: {
      image: '/navbar/solution_dropdown.svg',
      title: 'Solutions',
      gridCols: 'grid-cols-2',
      links: [
        'OCR Solution', 'D2C & Ecom',
        'AI Surveillance', 'Digital Twin',
        'Manhole Survey', 'AR/VR',
        'IVR & 3D Assistant' 
      ]
    }
  },
  {
    label: 'Products',
    dropdown: {
      image: '/navbar/products_dropdown.svg',
      title: 'Products',
      gridCols: 'grid-cols-1', 
      links: [
        'RevoDox',
        'AI Surveillance'
      ]
    }
  },
  {
    label: 'Services',
    dropdown: {
      image: '/navbar/service_dropdown.svg',
      title: 'Services',
      gridCols: 'grid-cols-2',
      links: [
        'End-to-End Development Services', 'Technology Consulting Services',
        'Accelerating Delivery with Cloud & DevOps', 'Reliable QA and Continuous Testing',
        'AI Strategy & Implementation', 'Intuitive UX & Engaging UI Solutions'
      ]
    }
  },
  { label: 'Case Studies', dropdown: null },
  { label: 'Blog', dropdown: null },
  { label: 'About Us', dropdown: null },
  { label: 'Careers', dropdown: null }
];

const Navbar = () => {
  const [openDropdownIdx, setOpenDropdownIdx] = React.useState(null);
  const navRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdownIdx(null);
      }
    };

    const handleScroll = () => {
      setOpenDropdownIdx(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] h-20 px-8 rounded-2xl bg-bg-primary/95 border border-white/10 transition-all duration-300">
    
      {/* Logo on the left */}
      <Link to="/" onClick={() => setOpenDropdownIdx(null)} className="flex items-center shrink-0">
        <img src="/navbar/Revosolve_logo.svg" alt="RevoSolve" className="h-10 md:h-12" />
      </Link>

      {/* Navigation Links and Connect Button group */}
      <div className="flex items-center gap-10">
        <ul className="hidden lg:flex items-center gap-8">
          {navData.map((item, idx) => {
            const isOpen = openDropdownIdx === idx;
            
            return (
              <li 
                key={idx} 
                onClick={() => item.dropdown && setOpenDropdownIdx(isOpen ? null : idx)}
                className="relative flex items-center justify-center gap-2 h-20 text-white font-sans text-base font-medium tracking-tight hover:text-accent cursor-pointer transition-colors duration-300 text-center"
              >
                {!item.dropdown ? (
                  <Link to="/coming-soon" onClick={() => setOpenDropdownIdx(null)}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                
                {item.dropdown && (
                  <img 
                    src="/navbar/nav_drop_icon.svg" 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 opacity-100' : 'opacity-70'}`} 
                    alt="" 
                  />
                )}

                {/* Mega Menu Dropdown */}
                {item.dropdown && (
                  <div 
                    onClick={(e) => e.stopPropagation()} 
                    className={`absolute left-1/2 -translate-x-1/2 top-20 pt-2 transition-all duration-300 z-50 transform origin-top w-max ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                  >
                    <div className="inline-flex flex-row p-6 gap-8 rounded-2xl bg-[#EAEAFF] shadow-2xl border border-white/20">
                      
                      {/* Visual Asset */}
                      <div className="shrink-0 flex items-stretch">
                        <img 
                          src={item.dropdown.image} 
                          alt={item.dropdown.title} 
                          className="w-72 object-cover rounded-lg shadow-inner" 
                        />
                      </div>

                      {/* Links Grid */}
                      <div className="flex flex-col items-start min-w-48 justify-center">
                        <span className="text-[#8e95c4] text-xs font-semibold mb-6 uppercase tracking-widest">
                          {item.dropdown.title}
                        </span>
                        
                        <div className={`grid ${item.dropdown.gridCols} gap-x-12 gap-y-4 w-full`}>
                          {item.dropdown.links.map((link, linkIdx) => (
                            <Link 
                              key={linkIdx}
                              to="/coming-soon" 
                              onClick={() => setOpenDropdownIdx(null)}
                              className="flex items-center gap-2 text-[#070784] font-sans text-sm font-normal leading-5 tracking-tight group/link w-fit"
                            >
                              <span className="group-hover/link:underline decoration-[#070784] underline-offset-4 transition-all">
                                {link}
                              </span>
                              
                              <img 
                                src="/navbar/dropdown_link_icon.svg" 
                                className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" 
                                alt="" 
                              />
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Connect Button */}
        <Link 
          to="/connect" 
          onClick={() => setOpenDropdownIdx(null)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-sans font-semibold rounded-lg border border-accent hover:bg-accent/10 hover:shadow-lg transition-all duration-300 shrink-0"
        >
          Connect 
          <img src="/navbar/connect_icon.svg" className="w-4 h-4" alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
