export const SecondSegment = ({
  updateTodo,
  input,
  toDo,
  hideText,
  display,
}) => {
  return (
    <form className="flex flex-col h-[300px] w-[500px] items-center justify-center border-[1px] border-[#c7ac8d] p-12 rounded-[30px]">
      <div className="flex gap-4">
        <input
          placeholder="Input your todo"
          className="border-0 outline-none bg-transparent flex text-center text-[black] shadow-2xl w-[200px]"
          onChange={updateTodo}
          type="text"
          name="description"
          // value={input}
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
      <div className="flex gap-3 mt-11 p-4">
      <p className={`text-black ${display ? `block` : "text-transparent"}`}>
       Input Name
      </p>
      <input
          placeholder="Input your Name"
          className="border-0 outline-none bg-transparent flex text-center text-[black] shadow-2xl w-[200px]"
          onChange={updateTodo}
          type="text"
          name="name"
          // value={input1}
        />
      </div>
      
  
    </form>
  );
};
