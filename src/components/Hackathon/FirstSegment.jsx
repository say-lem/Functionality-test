export const FirstSegment = ({
  colorChange,
  selectedColor,
  handleChange2,
  search,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-4">
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
    </>
  );
};
