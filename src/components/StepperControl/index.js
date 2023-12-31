// import "./index.css";

export default function StepperControl() {
  return (
    <div className="container flex justify-around justify-around mt-4 mb-8">
      {/* back button */}
      <button
        className="bg-white text-slate-400 uppercase py-2 px-4 
      round-xl font-semibold cursor-pointer border-2 border-style-300 
      hover:bg-slate-700 hover:text-white transition duration-2oo
      ease-in-out"
      >
        Back
      </button>

      {/** next button */}
      <button
        className="bg-green-500 text-white uppercase py-2 px-4 
      round-xl font-semibold cursor-pointer border-2 border-style-300 
      hover:bg-slate-700 hover:text-white transition duration-2oo
      ease-in-out"
      >
        Next
      </button>
    </div>
  );
}
