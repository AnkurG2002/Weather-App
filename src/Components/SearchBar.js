import { IoMdSearch } from "react-icons/io";

function SearchBar(props) {
  const { inputValue, setInputValue, animate, handleSubmit } = props;
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${
        animate ? "animate-shake" : "animate-none"
      } h-12 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] my-2`}
    >
      <div className="h-full relative flex items-center justify-between p-2">
        <input
          className="text-white text-[15px] flex-1 bg-transparent outline-none placeholder:text-white font-light pl-4 h-full"
          type="text"
          placeholder="Enter Location"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#b97fdd76] hover:bg-[#15abdd] w-20 h-10 rounded-full flex justify-center items-center transition"
        >
          <IoMdSearch className="text-2xl text-white" />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
