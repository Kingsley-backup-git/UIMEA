import { Link } from "react-router-dom";
import { useMemberShip } from "../hooks/useSendMail";
import useValidation from "../utils/formik/application";

export default function JoinUs() {
  const {doSendMail, applicationMutation} = useMemberShip()
  const { ApplicationFormik } = useValidation(doSendMail);

  const disabled = Object.keys(ApplicationFormik.errors).length > 0 || applicationMutation?.isPending;
  return (
    <section id="join-us" className="py-16 bg-[#036333] text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="mb-6">
              Become a member of the University of Ibadan Mechanical Engineering
              Alumni (UIMEA) Association and connect with fellow mechanical
              engineers from the University of Ibadan. Enjoy exclusive benefits
              and opportunities.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#fe6400] p-1.5 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Networking Opportunities</h3>
                  <p className="text-sm text-white/80">
                    Connect with industry professionals and peers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#fe6400] p-1.5 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Professional Development</h3>
                  <p className="text-sm text-white/80">
                    Access to workshops, seminars, and training
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#fe6400] p-1.5 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Mentorship Programs</h3>
                  <p className="text-sm text-white/80">
                    Guidance from experienced professionals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#fe6400] p-1.5 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Exclusive Events</h3>
                  <p className="text-sm text-white/80">
                    Invitations to special gatherings and conferences
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 bg-[#fe6400] hover:bg-[#e05800] text-white">
                Apply Now
              </button> */}
              <Link to="/learn-more" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-black">
              Membership Application
            </h3>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                ApplicationFormik.handleSubmit();
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    onBlur={ApplicationFormik.handleBlur}
                    onChange={ApplicationFormik.handleChange}
                    className="w-full px-3 py-2 border text-black placeholder:text-gray-300 border-gray-300 rounded-md"
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
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border text-black placeholder:text-gray-300 border-gray-300 rounded-md"
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
                  Email Address
                </label>
                <input
                  id="email"
                  onBlur={ApplicationFormik.handleBlur}
                  onChange={ApplicationFormik.handleChange}
                  className="w-full px-3 py-2 border text-black placeholder:text-gray-300 border-gray-300 rounded-md"
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
                  Phone Number
                </label>
                <input
                  id="phoneNo"
                  name="phoneNo"
                  onChange={ApplicationFormik.handleChange}
                  onBlur={ApplicationFormik.handleBlur}
                  className="w-full px-3 py-2 border text-black placeholder:text-gray-300 border-gray-300 rounded-md"
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
                  Graduation Year
                </label>
                <select
                  id="YoG"
                  className="w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-md"
                  name="YoG"
                  value={ApplicationFormik.values.YoG}
                  onBlur={ApplicationFormik.handleBlur}
                  onChange={ApplicationFormik.handleChange}
                >
                  <option value="Selected" disabled selected={true}>
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
                  className="w-full placeholder:text-gray-300 text-black  px-3 py-2 border border-gray-300 rounded-md"
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
              <button
               
                className={`inline-flex ${
                  disabled
                    ? "bg-[#fe6400] opacity-30 cursor-not-allowed"
                    : "bg-[#fe6400] hover:bg-[#e05800]"
                } items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 py-2 w-full  text-white`}
                type="submit"
                disabled={disabled}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
