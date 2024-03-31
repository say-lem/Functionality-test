import React, { useEffect, useState } from "react";

export const Assignment1 = () => {
  const [input, setInput] = useState(""); // useState for setting the display of what is written in the input
  const [display, setDisplay] = useState(true); // UseState for hiding the display
  const [todo, setTodo] = useState([]); //useState for setting up my todo array
  const [currentColor, setCurrentColor] = useState(null); // usestate to set the the selected color optin to display
  const [selectedColor, setSelectedColor] = useState(false);//useState to change the color of the todo tiles
  const [search, setSearch] = useState("");

  const hideText = () => {
    // onclick function that handles the hide and unhide
    setDisplay(!display);
    setInput("");
  };

  const handleChange = (e) => {
    //function that alows me to edit the value of my input
    setInput(e.target.value);
  };
  const handleChange2 = (e) => {
    //function that alows me to edit the value of my search input
    setSearch(e.target.value);
  };

  const toDo = () => {
    //function to add the content of my input into my todo array
    const newId = todo.length > 0 ? todo[todo.length - 1]?.id + 1 : 1;
    if (input != "") {
      setTodo([...todo, { id: newId, data: input }]);
      setInput("");
    }
  };
  const removeTodo = (id) => {
    //function to remove items from the todo array
    let deleteTodos = todo.filter((item) => item.id !== id);
    setTodo(deleteTodos);
  };

  const colorChange = (e) => {
    //function to change the color of the todo tiles
    if (currentColor !== "" | currentColor !== null) {
      setSelectedColor(true);
    }
    const newColor = e.target.value;
    setCurrentColor(newColor);

  };


  const tick = (id) => {
    // function to tick out done todo
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setTodo(updatedTodo);
    console.log(updatedTodo);
    console.log(id);
  };

  return (
    <div className="h-screen flex gap-16  items-center justify-center">
      <div className="flex flex-col items-center justify-center"> 
        <select
          onChange={colorChange}
          id="color"
          name="color"
          className=" border-0 outline-none shadow-2xl text-[6D6A7550] w-[100%] h-[60px] rounded-[25px] flex items-center justify-center text-center bg-[#D4D4D420]"
        >
          <option className="text-[#64748B]" value="" disabled={selectedColor}>
            Select color
          </option>
          <option value="bg-blue-500">Blue</option>
          <option value="bg-red-500">Red</option>
          <option value="bg-yellow-200">Yellow</option>
          <option value="none">Original</option>
        </select>
        <div
          className={`w-[300px] h-16 mt-5 text-black flex items-center justify-between shadow-2xl p-2 rounded-[30px]`}
        >
          <input
            placeholder="Search a Todo"
            className=" border-0 outline-none bg-transparent flex text-center text-[black] h-11 w-[200px] border-none"
            onChange={handleChange2}
            type="search"
            value={search}
          />
          <div className="btn text-black border-transparent hover:text-white rounded-full h-[50px] w-[50px] bg-[#e8be8e]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer border-0 outline-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[300px] w-[500px] items-center justify-between bg-[#c7ac8d] p-12 rounded-[30px]">
        <div className="flex gap-4">
          <input
            placeholder="Input your text"
            className="border-0 outline-none bg-transparent flex text-center text-[black] shadow-2xl w-[200px]"
            onChange={handleChange}
            type="text"
            value={input}
          />
          <button
            onClick={toDo}
            className="text-black bg-[#e8be8e] gap-2 w-[120px] justify-center items-center flex h-9  rounded-[5px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add Todo
          </button>
        </div>
        <p className={`text-black ${display ? `block` : "text-transparent"}`}>
          Text Input: {input}
        </p>
        <p className={`text-black ${display ? `block` : "text-transparent"}`}>
          Text count: {input.length}
        </p>
        <button
          onClick={hideText}
          className=" cursor-auto text-black bg-[#e8be8e] shadow-xl w-[125px] gap-2 justify-center items-center flex h-9  rounded-[5px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
            />
          </svg>
          {display ? "Hide Text" : "Show Text"}
        </button>
      </div>
      {/* {console.log(todo)} */}
      <div className="w-[400px]">
        {todo
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.data.toLowerCase().includes(search);
          })
          .map((item) => {
            return (
              <div
                className={`flex gap-2 items-center justify-between ${`${currentColor}`}  mt-5 p-1 border-[1px] border-black`}
                key={item?.id}
              >
                <div className="text-black h-[100%] flex items-center  gap-4 w-[300px]">
                  <p className="w-[30px] h-[30px] flex justify-center items-center border-[1px] border-black rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-6 h-6 cursor-pointer ${
                        item.checked ? "text-black" : "text-transparent"
                      }`}
                      onClick={() => tick(item.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </p>
                  {item?.data}
                </div>

                <button
                  onClick={() => removeTodo(item?.id)}
                  className=" text-black bg-[#e8be8e] shadow-xl w-[100px] justify-center gap-3 items-center flex h-9  rounded-[5px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
