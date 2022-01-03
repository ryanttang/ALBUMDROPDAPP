/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useStatus } from "../context/statusContext";

import {
  getMaxMintAmount,
  getTotalSupply,
  getNftPrice,
  mintNFT,
  getSaleState,
} from "../utils/interact";

const Hero = () => {
  const { status, setStatus } = useStatus();

  const [count, setCount] = useState(1);
  const [maxMintAmount, setMaxMintAmount] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [nftPrice, setNftPrice] = useState("0.01");
  const [isSaleActive, setIsSaleActive] = useState(false);

  useEffect(async () => {
    setMaxMintAmount(await getMaxMintAmount());
    setNftPrice(await getNftPrice());
    setIsSaleActive(await getSaleState());
    await updateTotalSupply();
  });

  const updateTotalSupply = async () => {
    const mintedCount = await getTotalSupply();
    setTotalSupply(mintedCount);
  };

  const incrementCount = () => {
    if (count < maxMintAmount) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const mintAlbumNFT = async () => {
    const { status } = await mintNFT(count);
    setStatus(status);

    // We minted a new album, so we need to update the total supply
    updateTotalSupply();
  };

  return (
    <main id="main" className="h-full py-16 bg-pattern">
            <div className="container max-w-6xl mx-auto flex flex-col items-center pt-4">
        <div className="flex flex-col items-center">
        <Image
            src="/images/sangologo.png"
            width="600"
            height="250"
            alt="emoji faces gif"
            className="rounded-md"
          />
          <Image
            src="/images/SDK1.jpg"
            width="270"
            height="270"
            alt="emoji faces gif"
            className="rounded-md"
          />

          {isSaleActive ? (
            <>
              {/* Minted NFT Ratio */}
              <p className="bg-gray-100 rounded-md text-gray-800 font-extrabold text-lg my-4 py-1 px-3">
                <span className="text-darksky">{`${totalSupply}`}</span> /
                10K
              </p>

              <div className='menu-card'>
                  {/* <Image
                    src="" 
                    className='h-full rounded mb-10 shadow' /> */}
                      <div className='center-content items-center'>
                          <h2 className='text-2xl mb-2 text-center'>Contents:</h2>
                          <p className='m-10 text-center'>Drums <br />
                                          FX<br />
                                          Loops (including Sango Funk Carioca 2)<br />
                                          Textures<br />
                                          Vocals<br />

                                          Drums used in:<br />

                                          Moments Spent Loving You<br />
                                          In the Comfort Of<br />
                                          De Mim, Pra Você<br />
                                          Acima<br />
                                          The Healing Component by Mick Jenkins<br />
                                          Blkswn & NØIR by Smino<br />
                                          Wow That's Crazy by Wale<br />
                                          Milky Way by Bas<br />
                                          + more <br /></p>
                        </div>
                      </div> 

              <div className="flex items-center mt-6 text-3xl font-bold text-gray-200">
                <button
                  className="flex items-center justify-center w-12 h-12 bg-sky rounded-md text-black hover:bg-darksky text-center"
                  onClick={incrementCount}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>

                <h2 className="mx-8">{count}</h2>

                <button
                  className="flex items-center justify-center w-12 h-12 bg-sky rounded-md hover:bg-darksky text-center"
                  onClick={decrementCount}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
              </div>

              <h4 className="mt-2 font-semibold text-center text-darksky">
                {nftPrice} ETH{" "}
                <span className="text-sm text-darksky"> + GAS</span>
              </h4>

              {/* Mint Button */}
              <button
                className="mt-6 py-2 px-4 text-center text-white uppercase bg-darksky hover:bg-sky"
                onClick={mintAlbumNFT}
              >
                Mint Installment 1
              </button>
            </>
          ) : (
            <p className="text-white text-2xl mt-8">
              {" "}
              😥 Sale is not active yet!
            </p>
          )}

          {/* Status */}

          {status && (
            <div className="flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white bg-red-400 rounded-md ">
              {status}
            </div>
          )}
        </div>
      </div>

      
      <div className="container max-w-6xl mx-auto flex flex-col items-center mt-20 pt-4">
        <div className="flex flex-col items-center">
          <Image
            src="/images/SDK1.jpg"
            width="270"
            height="270"
            alt="emoji faces gif"
            className="rounded-md"
          />

          {isSaleActive ? (
            <>
              {/* Minted NFT Ratio */}
              <p className="bg-gray-100 rounded-md text-gray-800 font-extrabold text-lg my-4 py-1 px-3">
                <span className="text-darksky">{`${totalSupply}`}</span> /
                10K
              </p>

              <div className='menu-card'>
                  {/* <Image
                    src="" 
                    className='h-full rounded mb-10 shadow' /> */}
                      <div className='center-content items-center'>
                          <h2 className='text-2xl mb-2 text-center'>Contents:</h2>
                          <p className='m-10 text-center'>
                          “Sango - Soulection mainstay, groovemaster, flavorful chef of so many sounds and genres - <br /> 
          be it R&B, trap, baile funk, jazz - now lets you in on his many wonderful and eclectic sounds. <br /> 
          You're not ready for this one - dive in now.”</p>
                        </div>
                      </div> 

              <div className="flex items-center mt-6 text-3xl font-bold text-gray-200">
                <button
                  className="flex items-center justify-center w-12 h-12 bg-sky rounded-md text-black hover:bg-darksky text-center"
                  onClick={incrementCount}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>

                <h2 className="mx-8">{count}</h2>

                <button
                  className="flex items-center justify-center w-12 h-12 bg-sky rounded-md hover:bg-darksky text-center"
                  onClick={decrementCount}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
              </div>

              <h4 className="mt-2 font-semibold text-center text-darksky">
                {nftPrice} ETH{" "}
                <span className="text-sm text-darksky"> + GAS</span>
              </h4>

              {/* Mint Button */}
              <button
                className="mt-6 py-2 px-4 text-center text-white uppercase bg-darksky hover:bg-sky"
                onClick={mintAlbumNFT}
              >
                Mint Installment 2
              </button>
            </>
          ) : (
            <p className="text-white text-2xl mt-8">
              {" "}
              😥 Sale is not active yet!
            </p>
          )}

          {/* Status */}

          {status && (
            <div className="flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white bg-red-400 rounded-md ">
              {status}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Hero;
