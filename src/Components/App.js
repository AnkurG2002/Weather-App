import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { API } from "../Api";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Favourites from "./Favourites";

function App() {
  const [location, setLocation] = useState("Delhi");
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);

  let favourites = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const url = `${API.URL}weather?units=metric&q=${location}&appid=${API.KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
          setTimeout(() => {
            setData(data);
            setLoading(false);
          }, 500);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
      }
    };

    fetchData();
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setLocation(inputValue);
    }
    if (inputValue.trim() === "") {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
    setInputValue("");
  };

  return (
    <div className="w-full min-w-min min-h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-wrap items-center justify-center px-4 lg:px-0 mx-auto">
      <div className="m-4">
        {/* form */}
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          animate={animate}
          handleSubmit={handleSubmit}
        />

        {/* weather card */}
        <Card data={data} loading={loading} />
      </div>

      <Favourites favourites={favourites} setLocation={setLocation} />
    </div>
  );
}

export default App;
