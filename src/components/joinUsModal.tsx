import React from "react";
import { useMemberShip } from "../hooks/useSendMail";
import useValidation from "../utils/formik/application";

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinUsModal({ isOpen, onClose }: JoinUsModalProps) {
  const { doSendMail, applicationMutation } = useMemberShip();
  const { ApplicationFormik } = useValidation(doSendMail);

  const disabled = Object.keys(ApplicationFormik.errors).length > 0 || applicationMutation?.isPending;

  // Close modal when form is successfully submitted
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ApplicationFormik.handleSubmit();
      // Close modal after successful submission
      setTimeout(() => {
     
        // Reset form
        ApplicationFormik.resetForm();
      }, 1000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close modal with Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset"; // Restore scrolling
    };
  }, [isOpen, onClose]);
React.useEffect(()=> {
    if(applicationMutation.isSuccess) {
onClose()   
 }
    
},[applicationMutation])
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#036333] text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Membership Application</h2>
            <button
              onClick={onClose}
              className="text-white cursor-pointer hover:text-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <p className="text-white/90 mt-2">
            Join the University of Ibadan Mechanical Engineering Alumni Association
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  onBlur={ApplicationFormik.handleBlur}
                  onChange={ApplicationFormik.handleChange}
                  className="w-full px-3 py-2 border text-black placeholder:text-gray-300 border-gray-300 rounded-md focus:ring-2 focus:ring-[#fe6400] focus:border-[#fe6400] outline-none"
                  placeholder="Enter your first name"
                  type="text"
                  value={ApplicationFormik.values.firstName}
                />
                {ApplicationFormik.errors.firstName &&
                ApplicationFormik.touched.firstName ? (
                  <div className="text-red-500 text-xs font-medium">
                    {ApplicationFormik.errors.firstName}
                  </div>
                ) : null}
              </div>
              
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-2 border text-black placeholder:text-gray-300 border-gray-300 rounded-md focus:ring-2 focus:ring-[#fe6400] focus:border-[#fe6400] outline-none"
                  placeholder="Enter your last name"
                  onBlur={ApplicationFormik.handleBlur}
                  onChange={ApplicationFormik.handleChange}
                  type="text"
                  value={ApplicationFormik.values.lastName}
                />
                {ApplicationFormik.errors.lastName &&
                ApplicationFormik.touched.lastName ? (
                  <div className="text-red-500 text-xs font-medium">
                    {ApplicationFormik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address *
              </label>
              <input
                id="email"
                onBlur={ApplicationFormik.handleBlur}
                onChange={ApplicationFormik.handleChange}
                className="w-full px-3 py-2 border text-black placeholder:text-gray-300 border-gray-300 rounded-md focus:ring-2 focus:ring-[#fe6400] focus:border-[#fe6400] outline-none"
                placeholder="Enter your email address"
                type="email"
                name="email"
                value={ApplicationFormik.values.email}
              />
              {ApplicationFormik.errors.email &&
              ApplicationFormik.touched.email ? (
                <div className="text-red-500 text-xs font-medium">
                  {ApplicationFormik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phoneNo"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number *
              </label>
              <input
                id="phoneNo"
                name="phoneNo"
                onChange={ApplicationFormik.handleChange}
                onBlur={ApplicationFormik.handleBlur}
                className="w-full px-3 py-2 border text-black placeholder:text-gray-300 border-gray-300 rounded-md focus:ring-2 focus:ring-[#fe6400] focus:border-[#fe6400] outline-none"
                placeholder="Enter your phone number"
                value={ApplicationFormik.values.phoneNo}
                type="tel"
              />
              {ApplicationFormik.errors.phoneNo &&
              ApplicationFormik.touched.phoneNo ? (
                <div className="text-red-500 text-xs font-medium">
                  {ApplicationFormik.errors.phoneNo}
                </div>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="graduationYear"
                className="text-sm font-medium text-gray-700"
              >
                Graduation Year *
              </label>
              <select
                id="YoG"
                className="w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fe6400] focus:border-[#fe6400] outline-none"
                name="YoG"
                value={ApplicationFormik.values.YoG}
                onBlur={ApplicationFormik.handleBlur}
                onChange={ApplicationFormik.handleChange}
              >
                <option value="" disabled>
                  Select your graduation year
                </option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
              </select>
              {ApplicationFormik.errors.YoG &&
              ApplicationFormik.touched.YoG ? (
                <div className="text-red-500 text-xs font-medium">
                  {ApplicationFormik.errors.YoG}
                </div>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="currentOrganization"
                className="text-sm font-medium text-gray-700"
              >
                Current Organization
              </label>
              <input
                id="currentOrg"
                onBlur={ApplicationFormik.handleBlur}
                onChange={ApplicationFormik.handleChange}
                name="currentOrg"
                value={ApplicationFormik.values.currentOrg}
                className="w-full placeholder:text-gray-300 text-black px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#fe6400] focus:border-[#fe6400] outline-none"
                placeholder="Enter your current organization"
                type="text"
              />
              {ApplicationFormik.errors.currentOrg &&
              ApplicationFormik.touched.currentOrg ? (
                <div className="text-red-500 text-xs font-medium">
                  {ApplicationFormik.errors.currentOrg}
                </div>
              ) : null}
            </div>

            {/* Success/Error Messages */}
            {applicationMutation?.isSuccess && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <div className="flex items-center gap-2 text-green-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-2-.4-2-1V5c0-1 .4-2 1-2s2 .4 2 1v6c0 .6-1 1-2 1z"></path>
                    <path d="M3 12c1 0 2-.4 2-1V5c0-1-.4-2-1-2s-2 .4-2 1v6c0 .6 1 1 2 1z"></path>
                    <path d="M12 21c0-1-.4-2-1-2H5c-1 0-2 .4-2 1s.4 2 1 2h6c.6 0 1-1 1-2z"></path>
                    <path d="M12 3c0 1 .4 2 1 2h6c1 0 2-.4 2-1s-.4-2-1-2h-6c-.6 0-1 1-1 2z"></path>
                  </svg>
                  <span className="font-medium">Application submitted successfully!</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Thank you for your interest in joining UIMEA. We'll be in touch soon.
                </p>
              </div>
            )}

            {applicationMutation?.isError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <div className="flex items-center gap-2 text-red-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <span className="font-medium">Submission failed</span>
                </div>
                <p className="text-red-700 text-sm mt-1">
                  There was an error submitting your application. Please try again.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                disabled={disabled}
                className={`flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 text-white ${
                  disabled
                    ? "bg-[#fe6400] opacity-30 cursor-not-allowed"
                    : "bg-[#fe6400] hover:bg-[#e05800]"
                }`}
              >
                {applicationMutation?.isPending ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
