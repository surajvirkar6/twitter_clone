import Axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";
import "./Middlesection.css"

function MiddleSection() {
  // interface TweetData {
  //   _id: string;
  //   url: string;
  //   text: string;
  //   author: string;
  //   publishedDate: string;
  //   publishedTimestamp: {
  //     $numberLong: string;
  //   };
  //   scrapedTimestamp: {
  //     $numberLong: string;
  //   };
  //   retweets: number;
  //   likes: number;
  //   imageUrl?: undefined;
  // }

  const [data, setdata]: any = useState([]);
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [errorText, seterrorText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  function getData(){
    return Axios.get("https://www.mocky.io/v2/5d1ef97d310000552febe99d", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(
      (res: any) => {
        setdata(res.data);
        return res.data
      }
    );
  }

  async function dateFilter() {
    if (startDate && endDate) {
      seterrorText("");
      let res = await getData();
      let filterRes = res.filter((item: any) => {
        if (item.publishedDate >= startDate && item.publishedDate <= endDate) {
          return item;
        }
      });
      if (filterRes.length === 0) {
        setdata([])
        seterrorText(
          "No posts between selected range. Please select other dates"
        );
      } else {
        setdata(filterRes);
      }
    } else {
      seterrorText("Please select start and end date");
    }
  }

  function addLike(id: string, index: number) {
    data[index].likes++;
    // Allow the user to like a tweet and save it localstorage (Bonus point)
    localStorage.setItem(id, data[index].likes);
  }

  //An option to go to original tweet
  function navigateToOriginalPost(url: string) {
    window.open(url);
  }

  function handleStartDate(value: string) {
    setstartDate(value);
  }

  function handleEndDate(value: string) {
    setendDate(value);
  }

  return (
    <div className="p-5 overflow-auto border">
      <div className="text-2xl font-bold cursor-pointer text-blue-900">Home</div>
      <hr className="my-5"/>
      {/* Date  */}
      <div className="flex flex-col md:flex-row justify-start md:items-center  gap-3 mb-3">
        <div className="bg-blue-900 text-white px-4 py-1 rounded-full text-lg font-medium shadow-md w-max">Date Filter</div>
        <div>
          <div className="text-lg font-medium text-blue-900">Start Date</div>
          <input
              className="dateBtn"
              type="date"
              onChange={(e: any) => handleStartDate(e.target.value)}
          />
        </div>
        <div>
          <div className="text-lg font-medium text-blue-900">End Date</div>
          <input
            className="dateBtn"
            type="date"
            onChange={(e: any) => handleEndDate(e.target.value)}
          />
        </div>
        <div>
          <button className="dateBtn" onClick={()=> dateFilter()}>Filter</button>
        </div>
      </div>
      <h6 className="text-red-600 text-center">{errorText}</h6>
      <hr className="my-5"/>
      {/* card  */}
      {data.length > 0 ? (
        data.map((item: any, index: number) => {
          return (
            <div className="hover:bg-gray-50 p-1">
            <div className="flex gap-3">
              <img src={`https://randomuser.me/api/portraits/men/${index}.jpg`} alt="" className="rounded-full w-12"/>
              <div>
                <div className="text-lg font-normal">{item.author}</div>
                <div className="text-sm font-bold">@TobyOG5</div>
              </div>
              <div className="text-lg font-semibold">{moment(item?.publishedDate).format("MMM Do")}</div>
            </div>
            <div className="ml-16 mt-3">
              <p className="text-md cursor-pointer" onClick={() => navigateToOriginalPost(item.url)}>{item.text}</p>
              <p className="text-sm font-semibold text-blue-400 cursor-pointer">{item.hashtags} </p>
            </div>
            <div className="ml-16 mt-3">
              <img src={item.imageUrl} alt=""  className="w-[80%] rounded-lg "/>
            </div>
            <div className="flex justify-around items-center mt-3">
              <div className="cardBtn like" onClick={() => addLike(item._id, index)}>❤ Like {item.likes > 0 ? item.likes : ""}</div>
              <div className="cardBtn comment">💬 Comment {item.replies > 0 ? item.replies: ""}</div>
              <div className="cardBtn retweet">💞 retweet {item.retweets > 0 ? item.retweets : ""}</div>
            </div>
            <hr className="my-2"/>
          </div>
          );
        })
      ) : (
        <div className="text-center text-[32px]">No Posts Found</div>
      )}
    </div>
  );
}

export default MiddleSection;
