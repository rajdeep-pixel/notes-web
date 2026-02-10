import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setTask([...task, { title, details }]);
    setTitle("");
    setDetails("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...task];
    copyTask.splice(i, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-black lg:flex text-white font-sans">
      {/* LEFT SECTION */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-6 items-start flex-col lg:w-1/2 p-10 lg:sticky lg:top-0 bg-black border-r border-zinc-800"
      >
        <h1 className="text-4xl font-bold mb-4"> NOTES WEB</h1>
        
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-4 border-2 border-white bg-black text-white placeholder:text-zinc-500 font-bold text-lg outline-none rounded-xl transition-all"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea
          className="px-5 w-full h-48 py-4 border-2 border-white bg-black text-white placeholder:text-zinc-500 font-medium text-lg outline-none rounded-xl transition-all resize-none"
          placeholder="Write Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        
        <button className="bg-white hover:bg-zinc-200 active:scale-[0.98] text-black font-black text-xl px-5 w-full py-4 outline-none rounded-xl cursor-pointer transition-all">
          ADD NOTE
        </button>
      </form>

      {/* RIGHT SECTION */}
      <div className="p-10 lg:w-1/2 min-h-screen">
        <h1 className="text-4xl font-bold mb-10">YOUR NOTES</h1>
        
        <div className="flex flex-wrap gap-10 justify-start items-start">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between items-start bg-cover bg-center bg-no-repeat rounded-xl relative h-72 w-64 pt-12 px-7 pb-6 text-black bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] shadow-2xl transition-transform hover:scale-105"
              >
                <div className="-rotate-1 w-full overflow-hidden">
                  <h2 className="text-xl leading-tight font-black uppercase tracking-tight break-all">
                    {elem.title}
                  </h2>
                  <p className="mt-2 text-sm leading-snug font-semibold text-zinc-800 break-all">
                    {elem.details}
                  </p>
                </div>

                <button
                  onClick={() => deleteHandler(idx)}
                  className="bg-red-500 hover:bg-red-600 active:scale-90 text-white text-[10px] font-black uppercase tracking-widest w-full py-2.5 cursor-pointer rounded-lg shadow-md transition-all"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;