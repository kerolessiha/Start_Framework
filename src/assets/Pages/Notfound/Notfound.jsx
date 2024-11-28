import errorImg from "../../imgs/error.png";
export default function Notfound() {
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-accent py-10">
        <img src={errorImg} alt="errorImg" className="w-52" />
        <h2 className="text-white uppercase font-bold text-3xl">SERVER DOWN</h2>
        <a href="/">Back to Home</a>
      </div>
    </>
  );
}
