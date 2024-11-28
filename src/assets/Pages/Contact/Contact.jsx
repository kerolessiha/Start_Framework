export default function Contact() {
  return (
    <>
      <div className="text-center pt-4 ">
        <h1 className="text-4xl text-main font-bold uppercase">
          conatct section
        </h1>
      </div>
      <div className="text-center py-5  flex justify-center items-center space-x-4">
        <div className="w-24 border-t-8 border-main rounded-md"></div>
        <i className="fa-solid fa-star text-main"></i>
        <div className="w-24 border-t-8 border-main rounded-md"></div>
      </div>
      <form className="w-1/2 py-4 px-8 mt-12 flex flex-wrap flex-col mx-auto ">
        <label
          htmlFor="UserName"
          className="relative block border-b border-gray-200 bg-transparent mb-8"
        >
          <input
            type="text"
            id="UserName"
            placeholder="userName"
            className="peer w-full border-none bg-white p-4 focus:border-transparent focus:outline-none focus:ring-0"
          />
          <span className="absolute start-0 -top-4 -translate-y-1/2 text-accent ps-4 transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:opacity-0 -z-10">
            userName :
          </span>
        </label>
        <label
          htmlFor="UserAge"
          className="relative block border-b border-gray-200 bg-transparent mb-8"
        >
          <input
            type="text"
            id="UserAge"
            placeholder="userAge"
            className="peer w-full border-none bg-white p-4 focus:border-transparent focus:outline-none focus:ring-0"
          />
          <span className="absolute start-0 -top-4 -translate-y-1/2 text-accent ps-4 transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:opacity-0 -z-10">
            userAge :
          </span>
        </label>
        <label
          htmlFor="UserEmail"
          className="relative block border-b border-gray-200 bg-transparent mb-8"
        >
          <input
            type="email"
            id="UserEmail"
            placeholder="userEmail"
            className="peer w-full border-none bg-white p-4 focus:border-transparent focus:outline-none focus:ring-0"
          />
          <span className="absolute start-0 -top-4 -translate-y-1/2 text-accent ps-4 transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:opacity-0 -z-10">
            userEmail :
          </span>
        </label>
        <label
          htmlFor="UserPassword"
          className="relative block border-b border-gray-200 bg-transparent"
        >
          <input
            type="password"
            id="UserPassword"
            placeholder="userPassword"
            className="peer w-full border-none bg-white p-4 focus:border-transparent focus:outline-none focus:ring-0"
          />
          <span className="absolute start-0 -top-4 -translate-y-1/2 text-accent ps-4 transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:opacity-0 -z-10">
            userPassword :
          </span>
        </label>
        <input
          type="button"
          value="send Message"
          role="button"
          className="bg-accent text-white px-3 py-2 mt-6 rounded-md me-auto"
        />
      </form>
    </>
  );
}
