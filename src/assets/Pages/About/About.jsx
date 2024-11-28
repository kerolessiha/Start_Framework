export default function About() {
  return (
    <>
      <div className="bg-accent py-32">
        <div className="text-center ">
          <h1 className=" text-4xl text-white font-bold uppercase">
            about component
          </h1>
        </div>
        <div className="text-center py-5  flex justify-center items-center space-x-4">
          <div className="w-24 border-t-8 border-white rounded-md"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="w-24 border-t-8 border-white rounded-md"></div>
        </div>
        <div className="flex flex-wrap text-white text-start sm:px-12">
          <div className="md:w-1/2 md:ps-12 md:pe-3">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="md:w-1/2 md:ps-3 md:pe-12">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
