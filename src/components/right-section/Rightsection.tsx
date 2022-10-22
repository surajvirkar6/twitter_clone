import "./right.css"

function RightSection() {
  return (
    <div className="border p-5 sticky top-0 h-screen rightSection">
      <input
        type="text"
        className="w-[100%] px-5 py-2 rounded-3xl shadow-md border border-blue-400 text-blue-400"
        placeholder="Search Twitter"
      />
      <div className="p-3 bg-blue-50 rounded-3xl mt-5 shadow-md">
        <div className="text-2xl font-bold ml-3 text-blue-900">Who to follow</div>
        <div className="flex items-center gap-3 p-3">
            <img src="https://randomuser.me/api/portraits/men/15.jpg" className="rounded-full w-[60px]" alt="" />
            <div>
                <div className="text-lg font-semibold ">Akilesh Yadav</div>
                <div className="text-sm font-medium ">@yadavakhilesh</div>
            </div>
            <button className="bg-blue-300 rounded-full text-lg font-bold px-6 py-2 text-blue-800 ml-auto">Follow</button>
        </div>
        <hr />
        <div className="flex items-center gap-3 p-3">
            <img src="https://randomuser.me/api/portraits/men/12.jpg" className="rounded-full w-[60px]" alt="" />
            <div>
                <div className="text-lg font-semibold ">Elon Musk</div>
                <div className="text-sm font-medium ">@elonmusk</div>
            </div>
            <button className="bg-blue-300 rounded-full text-lg font-bold px-6 py-2 text-blue-800 ml-auto">Follow</button>
        </div>
        <hr />
        <div className="flex items-center gap-3 p-3">
            <img src="https://randomuser.me/api/portraits/men/16.jpg" className="rounded-full w-[60px]" alt="" />
            <div>
                <div className="text-lg font-semibold ">Virat Kohli</div>
                <div className="text-sm font-medium ">@imVkohli</div>
            </div>
            <button className="bg-blue-300 rounded-full text-lg font-bold px-6 py-2 text-blue-800 ml-auto">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
