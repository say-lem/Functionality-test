import React, { useEffect, useState } from "react";
import { FirstSegment } from "./FirstSegment";
import { SecondSegment } from "./SecondSegment";
import { ThirdSegment } from "./ThirdSegment";

export const Assignment1 = () => {
  const [input, setInput] = useState(""); // useState for setting the display of what is written in the input
  const [display, setDisplay] = useState(true); // UseState for hiding the display
  const [todo, setTodo] = useState([]); //useState for setting up my todo array
  const [currentColor, setCurrentColor] = useState(null); // usestate to set the the selected color optin to display
  const [selectedColor, setSelectedColor] = useState(false); //useState to change the color of the todo tiles
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
    if ((currentColor !== "") | (currentColor !== null)) {
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
    <div className=" p-20 lg:h-screen lg:flex-row lg:gap-16  flex sm:flex-col items-center justify-center ">
      <FirstSegment
        colorChange={colorChange}
        search={search}
        selectedColor={selectedColor}
        handleChange2={handleChange2}
      />
      <SecondSegment
        handleChange={handleChange}
        input={input}
        toDo={toDo}
        hideText={hideText}
        display={display}
      />
      <ThirdSegment todo={todo} search={search} currentColor={currentColor} />
    </div>
  );
};
