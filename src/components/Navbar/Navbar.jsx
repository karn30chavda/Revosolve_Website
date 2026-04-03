import React from 'react';

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
        'IVR & 3D Assistant' // single item row handled naturally by grid
      ]
    }
  },
  {
    label: 'Products',
    dropdown: {
      image: '/navbar/products_dropdown.svg',
      title: 'Products',
      gridCols: 'grid-cols-1', // Single column layout for products 
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
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[98%] h-20 px-6 rounded-2xl bg-bg-primary/95 border border-white/10 transition-all duration-300">
    
      {/* Logo on the left */}
      <div className="flex items-center shrink-0">
        <img src="/navbar/Revosolve_logo.svg" alt="RevoSolve" className="h-12" />
      </div>

      {/* Navigation Links and Connect Button grouped on the right */}
      <div className="flex items-center gap-10">
        <ul className="hidden lg:flex items-center gap-8">
          {navData.map((item, idx) => {
            const isOpen = openDropdownIdx === idx;
            
            return (
              <li 
                key={idx} 
                onClick={() => item.dropdown && setOpenDropdownIdx(isOpen ? null : idx)}
                className="relative flex items-center justify-center gap-1.5 h-20 text-white font-sans text-[16px] font-medium leading-[24px] tracking-[-0.312px] hover:text-accent cursor-pointer transition-colors duration-300 text-center"
              >
                {item.label}
                
                {/* Dropdown Arrow Indicator */}
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
                    <div className="inline-flex flex-row p-[22px] gap-8 rounded-[16px] bg-[#EAEAFF] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/20">
                      
                      {/* Visual Asset Left Side */}
                      <div className="shrink-0 flex items-stretch">
                        <img 
                          src={item.dropdown.image} 
                          alt={item.dropdown.title} 
                          className="w-[280px] object-cover rounded-lg shadow-inner" 
                        />
                      </div>

                      {/* Links Right Side */}
                      <div className="flex flex-col items-start min-w-[200px] justify-center">
                        <span className="text-[#8e95c4] text-[13px] font-medium mb-5 uppercase tracking-wider">
                          {item.dropdown.title}
                        </span>
                        
                        <div className={`grid ${item.dropdown.gridCols} gap-x-12 gap-y-5 w-full`}>
                          {item.dropdown.links.map((link, linkIdx) => (
                            <a 
                              key={linkIdx}
                              href="/coming-soon" 
                              className="flex items-center gap-2 text-[#070784] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.15px] group/link w-fit"
                            >
                              <span className="group-hover/link:underline decoration-[#070784] underline-offset-4 transition-all">
                                {link}
                              </span>
                              
                              {/* Sliding Yellow Hover Chevron */}
                              <img 
                                src="/navbar/dropdown_link_icon.svg" 
                                className="w-[14px] h-[14px] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" 
                                alt="" 
                              />
                            </a>
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
        <button className="flex items-center justify-center gap-2.5 px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-accent hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(72,76,255,0.3)] transition-all duration-300 cursor-pointer shrink-0">
          Connect 
          <img src="/navbar/connect_icon.svg" className="w-4 h-4" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
