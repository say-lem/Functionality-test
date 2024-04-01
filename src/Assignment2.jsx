import { useState } from "react";
import { gbUsers } from "./learnApi";

export const Assignment2 = () => {
  const [gUser, setGUser] = useState(gbUsers); //useState handling the info array being mapped
  const [favourite, setFaourite] = useState([]); //UseState handling the like and unlike count and display
  const [search, setSearch] = useState(""); //useState that handles the search and how it filters it
  const [toggle, setToggle] = useState(true);// usestate that handles the toggle

  const handleChange = (e) => {
    //fuction that handles the dynamic update of input in the search bar
    setSearch(e.target.value);
  };
  const liked = (id) => {
    //function that handles the like and unlike
    const newFavourite = gUser.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setGUser(newFavourite);
    let myNum = newFavourite.filter((item) => item.checked); //this is where i created the array for just favourite items
    setFaourite(myNum); //display this number of items in the favourite array
  };
  const changeView = () => {//function to toggle view
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className=" border-[1px] shadow-2xl sticky top-0 z-30 bg-white w-[100%] p-5 ">
        <div className="flex items-center justify-center gap-4">
          <input
            onChange={handleChange}
            placeholder="Search for a user"
            className="flex text-center items-center bg-transparent  h-11 outline-none w-[200px] border-[1px] rounded-[10px] text-black"
            type="search"
            value={search}
          />
          <p className="text-black p-4 rounded-[10px] border-[1px]">Liked: {favourite.length}</p>
          <button onClick={changeView} className="text-black p-4 rounded-[10px] border-[1px] bg-[#e8be8e] hover:text-white hover:bg-black cursor">Toggle View
          </button>
          {console.log(toggle)}
        </div>

        <div className=" flex gap-5 ml-5 w-[100%] flex-wrap pt-2">
          {favourite.map((item) => (
            <div className=" cursor-pointer border-[1px] border-black flex gap-2 p-2  items-center rounded-[10px] shadow-2xl">
              <p className="text-black">{item.login}</p>
              <div
                onClick={() => liked(item.id)}
                className="w-5 h-5 rounded-full border-[1px] border-black items-center justify-center text-[black] flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </nav>
      <div className="flex flex-wrap justify-center ">
        {gUser
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.login.toLowerCase().includes(search);
          })
          .map((item, id) => (
            <div
              key={id}
              className={`${toggle ? "flex flex-col h-[380px] w-[280px] ":"flex h-[200px] gap-3 w-[380px]"} justify-center   ml-11 border-[1px] mt-11 items-center  border-[#e8be8e] rounded-[30px]`}
            >
              <img
                className={`${toggle ? "h-[250px] w-[250px] rounded-[30px]": "h-[150px] w-[150px] rounded-full"}`}
                src={item.avatar_url}
              />
              <div className={`${toggle ? "flex flex-col":" flex flex-col-reverse"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => liked(item.id)}
                  className={`w-6 h-6 absolute ${
                    item.checked ? "fill-red-500" : "fill- none"
                  }  cursor-pointer ${toggle ? " ml-[10px] -mt-[230px] " : " mb-[50px] ml-[120px]   text-black" }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <p className="mt-4 text-black ">Username: {item.login}</p>
                <a
                  className={`btn mt-2  bg-[#e8be8e] text-black hover:text-white border-0 ${toggle ? "w-[250px]":"w-[100px]" }`}
                  href={item.html_url}
                  rel="noreferrer"
                  target="_blank"
                >
                  Check my Profile
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
