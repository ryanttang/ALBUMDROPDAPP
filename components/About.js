import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="py-10 mt-16 mb-60 ml-60 mr-60">
      <h1 className="mb-20 font-mono text-4xl font-semibold text-center text-darksky uppercase">
      THIS IS A COLLECTION OF 10000 PIECES OF ORIGINAL GENERATED AUDIO/VISUAL WORKS OF ART. <br />
      WE ARE A GROUP OF CREATORS EXPLORING THE FUTURE OF MUSIC IN WEB3 AND BEYOND. <br />
      <br />
      JOIN THE DISCORD
      </h1>
      <div className="container relative max-w-6xl py-3 pt-16 mx-auto mt-20 sm:max-w-xl sm:mx-auto">
        {/* <div className="absolute inset-0 transform shadow-lg gradient-background -skew-y-6sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div> */}
        <div className="relative px-4 py-10 bg-white sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="font-mono text-3xl font-bold text-gray-900 underlined">
                SANGO DRUM KITS NFTs
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <ul className="space-y-2 list-disc">
                  <li className="flex items-start">
                    <span className="flex items-center h-6 sm:h-7">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      <code className="font-semibold text-gray-900">10,0000</code>{" "}
                      ERC-721 NFTs.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center h-6 sm:h-7">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      Sounds direct from Sango
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center h-6 sm:h-7">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      True ownership
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center h-6 sm:h-7">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-cyan-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">0.01 ETH per KIT.</p>
                  </li>
                </ul>
              </div>
              <div className="pt-6 text-base leading-6 font-extralight sm:text-lg sm:leading-7 text-center">
                <p>
                 Thanks for listening.
                </p>
                <p className="mt-8">
                  <Link href="#main">
                    <a className="text-sky hover:text-darksky">
                      {" "}
                      Check the collection
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
