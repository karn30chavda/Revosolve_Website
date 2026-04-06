import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Connect = () => {
  const [activeCategory, setActiveCategory] = useState("Product Inquiry");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceName, setSelectedServiceName] = useState(""); // The "name" field for POST
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interestOptions, setInterestOptions] = useState([]);
  const [isLoadingInterests, setIsLoadingInterests] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const navigate = useNavigate();
  const selectRef = useRef(null);
  const location = useLocation();

  const ERP_BASE_URL = import.meta.env.VITE_ERP_BASE_URL

  useEffect(() => {
    // Force reset scroll to top on every navigation event
    window.scrollTo(0, 0);
  }, [location.key]);

  // Fetch Interest Options from API
  useEffect(() => {
    const fetchInterests = async () => {
      try {
        setIsLoadingInterests(true);
        const fields = JSON.stringify(["name", "reason", "sub_reason"]);
        const filters = JSON.stringify({ active: 1 });
        
        // Properly encoding the URL to handle spaces and JSON characters
        const resource = encodeURIComponent("Interest of Connect");
        const url = `${ERP_BASE_URL}/api/resource/${resource}?fields=${encodeURIComponent(fields)}&filters=${encodeURIComponent(filters)}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const result = await response.json();
        setInterestOptions(result.data || []);
      } catch (err) {
        console.error("Error fetching interests:", err);
      } finally {
        setIsLoadingInterests(false);
      }
    };

    fetchInterests();
  }, [ERP_BASE_URL]);

  // Click Outside logic to close select
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Category Change (reset selection when switching Product/Services)
  useEffect(() => {
    setSelectedService("");
    setSelectedServiceName("");
  }, [activeCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedServiceName) {
      alert("Please select your area of interest");
      return;
    }

    setIsSubmitting(true);

    try {
      // Construct the 'data' payload for ERP
      const payload = {
        first_name: formData.name,
        email_id: formData.email,
        company_name: formData.company,
        custom_reason_to_connect: activeCategory,
        custom_connect_message: formData.message,
        custom_interest_of_connect: selectedServiceName, // The 'name' value from GET API
        lead_owner: "yashbhanushali.tech@gmail.com",
        source: "Website",
        status: "Lead",
        doctype: "Lead",
        web_form_name: "website-connect-form"
      };

      const body = new URLSearchParams();
      body.append("data", JSON.stringify(payload));
      body.append("web_form", "website-connect-form");
      body.append("cmd", "frappe.website.doctype.web_form.web_form.accept");

      const response = await fetch(ERP_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body.toString()
      });

      // Handle success (200) or lead already exists (409) as a unified success state
      if (response.ok || response.status === 409) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit form");
      }
    } catch (err) {
      console.error("Form Submission Error:", err);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = ["Product Inquiry", "Services/Solution"];
  
  // Filter interests by active category
  const filteredInterests = interestOptions.filter(item => 
    item.reason === activeCategory
  );

  // Dynamic label based on category
  const selectLabel = activeCategory === "Product Inquiry" ? "Product of Interest" : "Service of Interest";

  return (
    <div 
      key={location.key}
      className="pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center relative w-full overflow-hidden self-stretch min-h-screen" 
      style={{ 
        fontFamily: "'Blauer Nue'",
        background: "linear-gradient(180deg, #1C1F52 0%, #050614 100%)"
      }}
    >
      
      {/* Background Atmosphere */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(29, 31, 76, 0.6) 0%, transparent 70%)`
        }}
      />

      <div className="flex flex-col lg:flex-row items-start justify-between w-[80%] mx-auto relative z-10 gap-16 lg:gap-8">
        
        {/* Left Column: Contact Info */}
        <div className="flex flex-col gap-[3.2rem] items-start justify-start flex-1 w-full relative">
          
          {/* Header Section */}
          <div className="flex flex-col gap-2 items-start justify-start w-full relative">
            <div
              className="text-white text-left font-normal text-lg leading-normal tracking-[0.016rem] opacity-30 h-10 flex items-center"
              style={{ letterSpacing: "0.26px" }}
            >
              <span>[ CONNECT ]</span>
            </div>
            
            <div className="flex flex-col items-start justify-start relative">
                <h1
                  className="text-left font-black text-[2.5rem] md:text-[3rem] leading-none text-white"
                  style={{
                    background: "linear-gradient(89.75deg, rgba(135, 123, 241, 1) 0%, rgba(252, 202, 113, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Get In Touch
                </h1>
                <h2 className="text-[#CACBDB] text-left text-[2.5rem] md:text-[3rem] font-normal leading-tight">
                  with Us
                </h2>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-start justify-start w-full relative pt-4">
            {/* Email */}
            <a 
              href="mailto:sales@revosolve.com"
              className="flex flex-row gap-6 items-center justify-start w-full group"
            >
              <div className="bg-[#1D1E32] rounded-lg flex items-center justify-center w-14 h-14 shadow-lg group-hover:bg-[#2A2B45] transition-all shrink-0">
                <img src="/connect/mail_icon.svg" alt="Email" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[#AAA9BE] text-sm leading-5 font-normal">Email Us</span>
                <span className="text-[#E7E6FC] text-lg leading-7 font-normal group-hover:text-white transition-colors">sales@revosolve.com</span>
              </div>
            </a>

            {/* Call */}
            <a 
              href="tel:+918976575888"
              className="flex flex-row gap-6 items-center justify-start w-full group"
            >
              <div className="bg-[#1D1E32] rounded-lg flex items-center justify-center w-14 h-14 shadow-lg group-hover:bg-[#2A2B45] transition-all shrink-0">
                <img src="/connect/call_icon.svg" alt="Call" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[#AAA9BE] text-sm leading-5 font-normal">Call us</span>
                <span className="text-[#E7E6FC] text-lg leading-7 font-normal group-hover:text-white transition-colors">+91 89765 75888</span>
              </div>
            </a>

            {/* Visit */}
            <a 
              href="https://maps.app.goo.gl/t7wp9DNGyE5811DNA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-6 items-center justify-start w-full group"
            >
              <div className="bg-[#1D1E32] rounded-lg flex items-center justify-center w-14 h-14 shadow-lg group-hover:bg-[#2A2B45] transition-all shrink-0">
                <img src="/connect/pin_icon.svg" alt="Visit" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <span className="text-[#AAA9BE] text-sm leading-5 font-normal">Visit Us</span>
                <span className="text-[#E7E6FC] text-lg leading-7 font-normal group-hover:text-white transition-colors">Mumbai, India</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div 
          className="rounded-2xl p-8 flex flex-col gap-10 items-center justify-start shrink-0 w-full lg:w-156 relative min-h-146"
          style={{
            background: "linear-gradient(188.91deg, rgba(24, 25, 46, 1) 0%, rgba(15, 15, 37, 1) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.05)"
          }}
        >
          {!isSubmitted ? (
            <>
              {/* Category Tabs */}
              <div className="rounded-lg bg-black/20 p-1.5 flex flex-row items-center justify-between w-full relative border border-white/5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    disabled={isSubmitting}
                    onClick={() => setActiveCategory(cat)}
                    className={`py-3 px-2 flex-1 text-center font-medium text-sm transition-all rounded-md ${
                      activeCategory === cat ? "bg-[#4A51B1] text-[#FBFBFF] shadow-lg" : "text-white/40 hover:text-white/70 cursor-pointer"
                    } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    style={{ letterSpacing: "-0.15px" }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full font-sans">
                
                {/* Row 1: Name and Email */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-[#AAA9BE] text-sm leading-4">Full Name</label>
                    <div className="bg-[#23243A] rounded-lg p-3 h-11 flex items-center focus-within:ring-1 focus-within:ring-[#787BBC] transition-all border border-white/5">
                      <input 
                        type="text" 
                        placeholder="Name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-transparent border-none outline-none w-full text-white text-sm placeholder-[#AAA9BE]/40 font-sans"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 w-full flex-1">
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-[#AAA9BE] text-sm leading-4">Corporate Email</label>
                      <div className="bg-[#23243A] rounded-lg p-3 h-11 flex items-center focus-within:ring-1 focus-within:ring-[#787BBC] transition-all border border-white/5">
                        <input 
                          type="email" 
                          placeholder="Email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-transparent border-none outline-none w-full text-white text-sm placeholder-[#AAA9BE]/40 font-sans"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2: Service of Interest and Company */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="flex flex-col gap-2 flex-1 relative" ref={selectRef}>
                    <label className="text-[#AAA9BE] text-sm leading-4">{selectLabel}</label>
                    <div 
                      onClick={() => !isSubmitting && setIsSelectOpen(!isSelectOpen)}
                      className={`bg-[#23243A] rounded-lg pr-3 pl-3 h-11 flex items-center justify-between border border-white/5 cursor-pointer hover:bg-[#2A2B45] transition-all relative ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <span className={`text-sm font-sans ${selectedService ? "text-white" : "text-[#AAA9BE]/40"}`}>
                        {isLoadingInterests ? "Loading..." : (selectedService || `Select ${activeCategory === "Product Inquiry" ? "Product" : "Service"}`)}
                      </span>
                      <img 
                        src="/connect/select_drop_icon.svg" 
                        alt="" 
                        className={`w-5 h-5 opacity-40 ml-auto transition-transform ${isSelectOpen ? "rotate-180" : ""}`} 
                      />
                    </div>

                    {isSelectOpen && !isLoadingInterests && (
                      <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-[#1D1E32] border border-white/10 rounded-lg shadow-2xl z-50 py-2 animate-in fade-in zoom-in-95 duration-200 overflow-hidden font-sans max-h-60 overflow-y-auto">
                        {filteredInterests.length > 0 ? (
                          filteredInterests.map((item) => (
                            <div
                              key={item.name}
                              onClick={() => {
                                setSelectedService(item.sub_reason);
                                setSelectedServiceName(item.name);
                                setIsSelectOpen(false);
                              }}
                              className={`px-4 py-3 text-sm transition-all cursor-pointer ${
                                selectedServiceName === item.name 
                                  ? "bg-[#4A51B1] text-white" 
                                  : "text-[#AAA9BE] hover:bg-[#2A2B45] hover:text-white"
                              }`}
                            >
                              {item.sub_reason}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-[#AAA9BE]/40 italic">No options available for this category</div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-[#AAA9BE] text-sm leading-4">Company</label>
                    <div className="bg-[#23243A] rounded-lg p-3 h-11 flex items-center focus-within:ring-1 focus-within:ring-[#787BBC] transition-all border border-white/5">
                      <input 
                        type="text" 
                        placeholder="Company" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="bg-transparent border-none outline-none w-full text-white text-sm placeholder-[#AAA9BE]/40 font-sans"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[#AAA9BE] text-sm leading-4">Message</label>
                  <div className="bg-[#23243A] rounded-lg p-3 h-32 flex items-start focus-within:ring-1 focus-within:ring-[#787BBC] transition-all border border-white/5">
                    <textarea 
                      placeholder="Tell us about your project, or how we can help..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-transparent border-none outline-none w-full h-full text-white text-sm placeholder-[#AAA9BE]/40 resize-none font-sans"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-[#ffaa00] rounded-sm py-4 px-8 flex flex-row gap-2 items-center justify-center md:justify-start w-full md:w-fit transition-all active:scale-95 group relative overflow-hidden cursor-pointer font-sans ${isSubmitting ? "opacity-70" : "hover:bg-[#FFB733]"}`}
                >
                  <span className="text-[#070784] text-center font-medium text-base md:text-lg leading-6" style={{ letterSpacing: "-0.31px" }}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </span>
                  {!isSubmitting && <img src="/connect/submit_icon.svg" alt="" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col gap-15.5 items-center justify-center self-stretch flex-1 relative opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] font-sans">
              <div className="bg-[#ffaa00] rounded-full shrink-0 w-30 h-30 relative flex items-center justify-center">
                <img
                  className="w-17.5 h-17.5 overflow-visible"
                  src="/connect/tick_icon.svg"
                  alt="Success"
                />
                <div
                  className="rounded-full border-solid border-[#ffaa00] border-4 p-1 w-[8.99rem] h-[8.99rem] absolute"
                  style={{ opacity: 0.29 }}
                ></div>
              </div>

              <div className="flex flex-col gap-3 items-center justify-center self-stretch shrink-0 relative px-4">
                  <div className="text-[#FBFBFFCC] text-center font-medium text-[2.375rem] leading-12 font-sans">
                    Thank You!
                  </div>
                  <div className="text-[#FFFFFF99] text-center font-normal text-base leading-6 max-w-99 font-sans opacity-70">
                    Your inquiry has been successfully submitted.
                    <br />
                    Our team will review your request and get back to you within 24-48
                    hours.
                  </div>
              </div>

              <button
                onClick={() => navigate("/")}
                className="rounded-lg border-2 border-[#5B62BF5E] py-2.5 px-8.75 flex flex-row gap-5.5 items-center justify-center shrink-0 h-14 relative backdrop-blur-[2px] transition-all hover:bg-white/5 active:scale-95 cursor-pointer font-sans"
              >
                <div
                  className="text-white text-center font-medium text-base leading-6"
                  style={{ letterSpacing: "-0.31px" }}
                >
                  Back to Home
                </div>
                <img
                  className="shrink-0 w-4.5 h-4.5 relative overflow-visible"
                  src="/connect/back_to_home_arrow.svg"
                  alt="Arrow"
                />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Connect;
