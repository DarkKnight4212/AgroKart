import React, { useEffect } from "react";
import "./AboutUs.css";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import Map from "../../User_profile/userProfileDetails/map/map";

function About() {
  return (
    <>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto" style={{ width: "100%",boxShadow:"none" }}>
            <div class="flex flex-col text-center mb-20 text-white -mx-12 py-8 w-screen" style={{backgroundColor:"rgb(0, 113, 93)"}}>
              <p class="text-2xl font-medium title-font mb-4 text-white nuni" id="GFG" >
                OUR TEAM
              </p>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base sans">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them.
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6r6t_jveCSCBbhGTNZr3YJmbWpsh8CntVw&usqp=CAU"
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900 nuni">
                      Sumit Ghosh 
                    </h2>
                    <h3 class="text-gray-500 mb-3 sans">Frontend Developer</h3>
                    <p class="mb-4 sans">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a class="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://static.vecteezy.com/system/resources/previews/004/865/921/original/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900 nuni">
                      Tanmay Shukla
                    </h2>
                    <h3 class="text-gray-500 mb-3 sans">Backend Developer</h3>
                    <p class="mb-4 sans">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a class="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://static.vecteezy.com/system/resources/thumbnails/016/915/122/small_2x/man-programmer-is-working-on-his-laptop-coding-and-programming-vector.jpg"
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900 nuni">
                      Tushar Shingane
                    </h2>
                    <h3 class="text-gray-500 mb-3 sans">Backend Developer</h3>
                    <p class="mb-4 sans">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a class="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500"> 
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="https://thumbs.dreamstime.com/b/programmer-sitting-table-working-coding-chatting-laptop-online-backend-frontend-developer-man-home-office-guy-202147846.jpg"
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900 nuni">
                      Aryan Bhargava
                    </h2>
                    <h3 class="text-gray-500 mb-3 sans">UI Developer</h3>
                    <p class="mb-4 sans">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span class="inline-flex">
                      <a class="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5 aryan"
                          viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div
          className="text-white sm:text-3xl sm:flex sm:justify-center sm:items-center nuni banner">
          Let's Create Something Together
        </div>
        <div
          className="flex justify-evenly items-center -mt-12  z-10"
          style={{ width: "98vw" }}>
          <div
            className="px-8 py-8 flex flex-col justify-around w-1/5 bg-white display-card"
            style={{
              height: "30vh",
             
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}>
            <div>
              <ContactsOutlinedIcon style={{ height: "4rem", width: "4rem" }} />
            </div>
            <div className="text-xl" style={{ fontWeight: "600" }}>
              Call us
            </div>
            <div>
              <div className="sans">+91-9876543210</div>
              <div className="sans">+91-9876543210</div>
            </div>
          </div>
          <div
            className="px-8 py-8 flex flex-col justify-around bg-white contact-card"
            style={{
              height: "30vh",
              width: "20%",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}>
            <div>
              <ContactsOutlinedIcon style={{ height: "4rem", width: "4rem" }} />
            </div>
            <div className="text-xl" style={{ fontWeight: "600" }}>
              Call us
            </div>
            <div>
              <div className="sans">+91-9876543210</div>
              <div className="sans">+91-9876543210</div>
            </div>
          </div>
          <div
            className="px-8 py-8 flex flex-col justify-around bg-white contact-card"
            style={{
              height: "30vh",
              width: "20%",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}>
            <div>
              <ContactsOutlinedIcon style={{ height: "4rem", width: "4rem" }} />
            </div>
            <div className="text-xl" style={{ fontWeight: "600" }}>
              Call us
            </div>
            <div>
              <div className="sans">+91-9876543210</div>
              <div className="sans">+91-9876543210</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-56 mt-32" style={{ backgroundColor: "#F9F5E9" }}>
        <section class="text-gray-600 body-font relative">
          <div class="absolute inset-0" style={{ backgroundColor: "#F9F5E9" }}>
            {/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
          </div>
          <div
            class="container px-5 py-24 mx-auto flex"
            style={{
              width: "100%",
              backgroundColor: "#F9F5E9",
              boxShadow: "none",
            }}>
            <section class="text-gray-600 body-font relative flex sm:flex-row flex-col w-full justify-evenly">
              <div
                class="container px-5 py-24 sm:w-1/2 w-full mx-0"
                style={{
                  backgroundColor: "#F9F5E9",
                  boxShadow: "none",
                }}>
                <div class="flex flex-col text-center w-full">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 nuni" id="aa">
                    Contact Us
                  </h1>
                </div>
                <div class="lg:w-full md:w-2/3 mx-auto">
                  <div class="flex flex-wrap -m-2">
                    <div class="p-2 w-full">
                      <div class="relative">
                        <label
                          for="name"
                          class="leading-7 text-sm text-gray-600 cc">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <div class="relative">
                        <label
                          for="email"
                          class="leading-7 text-sm text-gray-600 cc">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <div class="relative">
                        <label
                          for="message"
                          class="leading-7 text-sm text-gray-600 cc">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <button
                        class="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        style={{ backgroundColor: "#3D6B47" }}>
                        Let's Connect
                      </button>
                    </div>
                    <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                      <a class="text-indigo-500 bb">agrokart@gmail.com</a>
                      <p class="leading-normal ss">
                        DG-2 IIT BHU.
                        <br />
                        Varanasi, 221005
                      </p>
                      <span class="inline-flex">
                        <a class="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5 aryan"
                            viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-4 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5 aryan"
                            viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-4 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5 aryan"
                            viewBox="0 0 24 24">
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a class="ml-4 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5 aryan"
                            viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:w-1/2  mt-20 sm:h-2/3 h-1/2 w-full rounded-3xl border-2 border-slate-300 mapbox" >
                <Map
                  latlng={[82.984146, 25.264544]}
                  marker={[82.984146, 25.264544]}
                  zoom={16}
                />
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
