import "./LeftSection.css";

function LeftSection() {
  return (
    <div className="border sticky top-0 h-screen p-5 leftSection">
      <div className="flex flex-col items-start justify-center">
        <div>
          <img
            src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
            alt="twitter-logo"
            className="w-[80px] mb-5"
          />
        </div>
        <div>
          <div className="buttons bold">Home</div>
          <div className="buttons">Explore</div>
          <div className="buttons">Notifications</div>
          <div className="buttons">Messages</div>
          <div className="buttons">Bookmarks</div>
          <div className="buttons">List</div>
          <div className="buttons">Profile</div>
          <div className="buttons">More</div>
        </div>

        <div className="flex items-center justify-center gap-3 p-3 bg-blue-600 rounded-3xl shadow-md w-52 h-24 mt-10">
          <img
            src="https://randomuser.me/api/portraits/men/31.jpg"
            alt=""
            className="rounded-full w-[60px] shadow-md"
          />
          <div>
            <h6 className="text-lg font-semibold text-blue-100">Suraj virkar</h6>
            <h6 className="text-xs text-blue-50 font-medium">@SurajKVirkar</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
