import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2tevw8g",
        "template_dz4pnph",
        e.target,
        "4vCriu0Qpt9Y4zT7k"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Your message is sent");
    e.target.reset();
  };
  return (
    <div className="my-5 text-white">
      <div className="pt-12 px-10 md:px-28 mb-10">
        <p className="text-[30px]">Contact Me</p>
        <p className="text-[18px] text-blue-400">
          <span className="text-xs italic font-light"></span>
        </p>
      </div>

      <div className="">
        <section
          id="contact"
          className="relative w-full min-h-screen text-white"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 h-32 w-full"></div>

          {/* wrapper */}
          <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
            {/* social media  */}
            <div className="w-full md:w-1/2 p-5 md:px-0 mx-5">
              <div className="bg-gray-900 border border-purple-400 w-full lg:w-1/2 h-full p-5 pt-8 rounded-md">
                <h3 className="text-2xl font-semibold mb-5">My Social Media</h3>

                {/* list */}
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/PranoySarker"
                    className="flex items-center hover:text-white hover:bg-purple-500 p-2 rounded-lg"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      className="w-6 h-6 m-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pranoy-chandra-sarker-032b62118/"
                    className="flex items-center hover:text-white hover:bg-purple-500 p-2 rounded-lg"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      className="w-6 h-6 m-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z" />
                    </svg>
                    Linkedin
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1uqgaEGMksHL_4v4ItgfP1N-UN1jsYvMc/view?usp=drive_link"
                    className="flex items-center hover:text-white hover:bg-purple-500 p-2 rounded-lg"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 m-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M55.068 9H55V5a2 2 0 0 0-4 0v4h-7V5a2 2 0 0 0-4 0v4h-7V5a2 2 0 0 0-4 0v4h-7V5a2 2 0 0 0-4 0v4h-1.068A6.933 6.933 0 0 0 10 15.932v46.136A6.933 6.933 0 0 0 16.932 69h38.136A6.933 6.933 0 0 0 62 62.068V15.932A6.933 6.933 0 0 0 55.068 9zm-38.136 4H18v5a2 2 0 0 0 4 0v-5h7v5a2 2 0 0 0 4 0v-5h7v5a2 2 0 0 0 4 0v-5h7v5a2 2 0 0 0 4 0v-5h.068A2.932 2.932 0 0 1 58 15.932V26H14V15.932A2.932 2.932 0 0 1 16.932 13zm38.136 52H16.932A2.932 2.932 0 0 1 14 62.068V28h44v34.068A2.931 2.931 0 0 1 55.068 65z"></path>
                      <path d="M54 51a1 1 0 0 0-1 1v3.184C53 58.109 52.1 60 50.521 60H34.119a1 1 0 1 0 0 2h16.402C53.314 62 55 59.325 55 55.184V52a1 1 0 0 0-1-1zM53.527 46.251a1.002 1.002 0 0 0 0 1.41 1.017 1.017 0 0 0 1.421 0c.181-.19.29-.451.29-.711 0-.261-.109-.521-.29-.709-.38-.371-1.039-.361-1.421.01z"></path>
                    </svg>
                    Resume
                  </a>
                  <a
                    href="https://codeswithpranoy01bucse.blogspot.com/"
                    className="flex items-center hover:text-white hover:bg-purple-500 p-2 rounded-lg"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 m-2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.5 0C5.602 0 0 5.602 0 12.5S5.602 25 12.5 25 25 19.398 25 12.5 19.398 0 12.5 0zm0 .969A11.519 11.519 0 0 1 24.031 12.5c0 6.378-5.153 11.563-11.531 11.563C6.122 24.063.969 18.878.969 12.5A11.519 11.519 0 0 1 12.5.969zM7 5v15h11v-4h-1v3H8V6h6.031L14 9h4V8l-3-3H7zm8.031 1.438L16.594 8H15l.031-1.563zM19.187 9a.944.944 0 0 0-.656.281l-.937.938-4.563 4.562-1.094 3.313 3.282-1.125 4.937-4.907.563-.593a.903.903 0 0 0 0-1.281l-.875-.907a.912.912 0 0 0-.657-.25V9zm0 1.031.782.813-.532.5-.78-.781.53-.532zM9 11v1h6v-1H9zm8.938.281.78.781-3.624 3.626-.781-.782 3.624-3.625zM9 13v1h4v-1H9zm0 2v1h3v-1H9zm4.75.75.5.5-.75.25.25-.75zM9 17v1h2v-1H9z"
                        fill="currentColor"
                      />
                    </svg>
                    Blog
                  </a>
                </div>
              </div>
            </div>

            {/* contact me  */}
            <form
              onSubmit={sendEmail}
              className="w-full md:w-1/2 border border-purple-400 p-6 bg-gray-900 rounded-md"
            >
              <h2 className="text-2xl pb-3 font-semibold">Send Message</h2>
              <div>
                <div className="flex flex-col mb-3">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-purple-400 focus:outline-none focus:bg-gray-800 focus:text-purple-400"
                    autocomplete="off"
                    name="name"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-purple-400 focus:outline-none focus:bg-gray-800 focus:text-purple-400"
                    autocomplete="off"
                    name="email"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label for="message">Message</label>
                  <textarea
                    rows="4"
                    id="message"
                    className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-purple-400 focus:outline-none focus:bg-gray-800 focus:text-purple-400"
                    name="message"
                  ></textarea>
                </div>
              </div>
              <div className="w-full pt-3">
                <button
                  type="submit"
                  className="w-full bg-gray-900 border border-purple-400 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-purple-400 hover:text-white text-xl cursor-pointer rounded-md"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
