import React, { useEffect, useState } from "react";
import { FirstSegment } from "./FirstSegment";
import { SecondSegment } from "./SecondSegment";
import { ThirdSegment } from "./ThirdSegment";
import { NavBar } from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

export const Assignment1 = () => {
  const [input, setInput] = useState(""); // useState for setting the display of what is written in the input
  const [display, setDisplay] = useState(true); // UseState for hiding the display
  const [todo] = useState([]); //useState for setting up my todo array
  const [currentColor, setCurrentColor] = useState(null); // usestate to set the the selected color optin to display
  const [selectedColor, setSelectedColor] = useState(false); //useState to change the color of the todo tiles
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [post, setPost] = useState({
    name: "",
    completed: completed,
    description: "",
  });

  const hideText = () => {
    // onclick function that handles the hide and unhide
    setDisplay(!display);
    setInput("");
  };

  const updateTodo = (e) => {
    //function that alows me to edit the value of my input
    // setInput(e.target.value);
    // const newId = users.length > 0 ? users[users.length - 1]?.id + 1 : 1;
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleChange2 = (e) => {
    //function that alows me to edit the value of my search input
    setSearch(e.target.value);
  };

  const toDo = (e) => {
    //function to add the content of my input into my todo array
    const newId = users.length > 0 ? users[users.length - 1]?.id + 1 : 1;
    e.preventDefault();
    axios.post("http://49.13.2.10:4000/todos", post);
    return console.log(post);
    // console.log("abeg");
  };

  const removeTodo = (id) => {
    //function to remove items from the todo array
    axios.delete(`http://49.13.2.10:4000/todos/${id}`).then(()=>{
      setCompleted(prev => !prev)
    }).catch()
    
  };

  const colorChange = (e) => {
    //function to change the color of the todo tiles
    if ((currentColor !== "") | (currentColor !== null)) {
      setSelectedColor(true);
    }
    const newColor = e.target.value;
    setCurrentColor(newColor);
  };

  const tick = (id, item) => {
    console.log(id, item);
    axios.put(`http://49.13.2.10:4000/todos/${id}`, {...item, completed:!item.completed})
    .then(()=>{
      setCompleted(prev => !prev)
    }).catch()

  };

  useEffect(() => {
    getUsers();
  }, [completed]);

  const getUsers = () => {
    axios.get("http://49.13.2.10:4000/todos").then((response) => {
      // console.log(response);
      // console.log(response.data.data);
      // console.log(response.data.data);
      setUsers(response.data.data);
    });
  };

  return (
    <div>
      <NavBar />
      <div className=" p-20 lg:flex-row lg:gap-16  flex sm:flex-col items-center justify-center ">
        <FirstSegment
          colorChange={colorChange}
          search={search}
          selectedColor={selectedColor}
          handleChange2={handleChange2}
          users={users}
        />
        <ThirdSegment
          todo={todo}
          users={users}
          search={search}
          currentColor={currentColor}
          removeTodo={removeTodo}
          completed={completed}
          tick={tick}
        />
        <SecondSegment
          updateTodo={updateTodo}
          input={input}
          toDo={toDo}
          hideText={hideText}
          display={display}
        />
      </div>
    </div>
  );
};
