import { WeatherContext } from "@/context/WeatherContext";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
function Search() {
  const { setCity } = useContext(WeatherContext);
  const [inputValue, setİnputValue] = useState("");

  const handleChangeInput = (e) => {
    setİnputValue(e.target.value);
  };

  const handleSubmitCity = (e) => {
    e.preventDefault();
    setCity(inputValue);
  };
  return (
    <div onSubmit={handleSubmitCity} className="w-full">
      <form className="w-full sm:flex items-center justify-evenly  mt-10">
        <input
          className=" place-items-start sm:w-[60%] w-full outline-none  border-b-2 p-2"
          placeholder="Search for places..."
          onChange={handleChangeInput}
          value={inputValue}
          type="text"
        />
        <button className="btn w-full">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
