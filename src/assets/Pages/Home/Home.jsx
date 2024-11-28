import img from "../../imgs/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="bg-accent">
        <div className="flex justify-center items-center">
          <img src={img} alt="main_img" className="w-72 " />
        </div>
        <div className="text-center py-1">
          <h1 className="text-3xl text-white font-bold">START FRAMEWORK</h1>
        </div>
        <div className="text-center py-5  flex justify-center items-center space-x-4">
          <div className="w-24 border-t-8 border-white rounded-md"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="w-24 border-t-8 border-white rounded-md"></div>
        </div>
        <div className="text-white text-center pb-5 pt-2">
          <span>Graphic Artist - Web Designer - Illustrator</span>
        </div>
      </div>
    </>
  );
}
