import { ImSpinner8 } from "react-icons/im";
import { TbTemperatureCelsius } from "react-icons/tb";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";

function Card(props) {
  const { data, loading } = props;

  let icon;
  switch (data && data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case "Clear":
      icon = <IoMdSunny className="text-[#ffde33]" />;
      break;
    case "Snow":
      icon = <IoMdSnow className="text-[#31cafb]" />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }

  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { weekday: "short" });
  const currentDate = `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`;

  return (
    <div className="w-full max-w-[450px] min-h-[284px] bg-black/20 text-white backdrop-blur-[32px] rounded-[32px] py-8 px-6">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ImSpinner8 className="text-5xl text-white animate-spin" />
        </div>
      ) : (
        data && (
          <div>
            <div className="flex items-center gap-x-5">
              <div className="text-[87px]">{icon}</div>
              <div>
                <div className="text-3xl font-semibold">
                  {data.name}, {data.sys.country}
                </div>
                {/* Date */}
                <div>{currentDate}</div>
              </div>
            </div>

            <div className="my-12">
              <div className="flex justify-center items-center">
                <div className="text-[104px] leading-none font-light">
                  {parseInt(data.main.temp)}
                </div>
                <div className="text-6xl">
                  <TbTemperatureCelsius />
                </div>
              </div>
              <div className="capitalize text-center">
                {data.weather[0].description}
                <div>
                  {parseInt(data.main.temp_max)}&deg; |{" "}
                  {parseInt(data.main.temp_min)}&deg;
                </div>
              </div>
            </div>

            <div className="max-w-[378px] mx-auto flex flex-row flex-wrap justify-between gap-y-4">
              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">
                  <BsEye />
                </div>
                <div>
                  Visibility{" "}
                  <span className="ml-2">{data.visibility / 1000} km</span>
                </div>
              </div>

              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">
                  <BsThermometer />
                </div>
                <div className="flex">
                  Feels like
                  <div className="flex ml-2">
                    {parseInt(data.main.feels_like)}
                    <TbTemperatureCelsius />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">
                  <BsWater />
                </div>
                <div>
                  Humidity
                  <span className="ml-2">{data.main.humidity} %</span>
                </div>
              </div>

              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">
                  <BsWind />
                </div>
                <div>
                  Wind <span className="ml-2">{data.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Card;
