import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, details);

    setTitle("");
    setDetails("");
  };
  return (
    <div className="h-screen bg-black lg:flex text-white">
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 items-start flex-col lg:w-1/2 p-10 "
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>
        {/* Title */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-3 border-2 font-medium outline-none rounded "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        {/* Detailed Notes */}
        <textarea
          type="text"
          className="px-5 w-full h-32 py-3 font-medium flex flex-start flex-row border-2 outline-none rounded"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        {/* Button */}
        <button className="bg-white active:scale-95 text-black font-medium px-5 w-full py-3 outline-none rounded">
          Add Notes
        </button>
      </form>
      <div className="p-10 lg:border-l-2 lg:w-1/2">
        <h1 className="text-4xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 overflow-auto mt-5 h-full">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
