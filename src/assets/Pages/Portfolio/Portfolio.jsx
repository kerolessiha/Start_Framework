import { useState } from "react";
import port1 from "../../imgs/gallery/port1.png";
import port2 from "../../imgs/gallery/port2.png";
import port3 from "../../imgs/gallery/port3.png";

function Portfolio() {
  const [imgSrc, setImgSrc] = useState("port1");
  const [isShown, setIsShown] = useState(false);
  let clickedImage;

  function displayModal(e) {
    if (e.target.tagName.toLowerCase() === "i") {
      clickedImage = e.target.parentElement.nextSibling.querySelector("img");
    } else {
      clickedImage = e.target.nextSibling.querySelector("img");
    }
    if (clickedImage) {
      setImgSrc(clickedImage.src);
      setIsShown(true);
    } else {
      console.warn("No image found within the clicked element.");
    }
  }

  return (
    <>
      <div className="text-center pt-4 ">
        <h1 className="text-4xl text-main font-bold uppercase">
          portfolio component
        </h1>
      </div>
      <div className="text-center py-5  flex justify-center items-center space-x-4">
        <div className="w-24 border-t-8 border-main rounded-md"></div>
        <i className="fa-solid fa-star text-main"></i>
        <div className="w-24 border-t-8 border-main rounded-md"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-28 py-9">
        <div className="">
          <div
            onClick={displayModal}
            className="rounded-lg overflow-hidden cursor-pointer relative"
          >
            <div
              data-src={port1}
              className="flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500"
            >
              <i className="fa-solid fa-plus"></i>
            </div>
            <div>
              <img src={port1} alt="port1" />
            </div>
          </div>
        </div>
        <div className="">
          <div
            onClick={displayModal}
            className="rounded-lg overflow-hidden cursor-pointer relative"
          >
            <div className="flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div>
              <img src={port2} alt="port2" />
            </div>
          </div>
        </div>
        <div className="">
          <div
            onClick={displayModal}
            className="rounded-lg overflow-hidden cursor-pointer relative"
          >
            <div className="flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div>
              <img src={port3} alt="port3" />
            </div>
          </div>
        </div>
        <div className="">
          <div
            onClick={displayModal}
            className="rounded-lg overflow-hidden cursor-pointer relative"
          >
            <div className="flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div>
              <img src={port1} alt="port1" />
            </div>
          </div>
        </div>
        <div className="">
          <div
            onClick={displayModal}
            className="rounded-lg overflow-hidden cursor-pointer relative"
          >
            <div className="flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div>
              <img src={port2} alt="port2" />
            </div>
          </div>
        </div>
        <div className="">
          <div
            onClick={displayModal}
            className="rounded-lg overflow-hidden cursor-pointer relative"
          >
            <div className="flex justify-center items-center bg-accent text-white text-8xl absolute inset-0 opacity-0 hover:opacity-90 translate-opacity duration-500">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div>
              <img src={port3} alt="port3" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Modal ===== */}
      <section
        className={`modal h-screen inset-0 ${
          isShown ? "fixed" : "hidden"
        } flex justify-center items-center z-50`}
      >
        <div
          onClick={() => setIsShown(false)}
          className="bg-sec absolute inset-0"
        ></div>
        <div className="w-1/2 absolute">
          <img className="img-fluid" src={imgSrc} alt="port" />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
