function Favourites(props) {
  const { favourites, setLocation } = props;
  return (
    <div className="w-full max-w-[212px] min-h-[84px] bg-black/20 text-white backdrop-blur-[32px] rounded-[32px] py-8 px-6 mb-32">
      <h2 className="mb-4 text-3xl font-semibold">Favourites</h2>
      <ul className="space-y-1">
        {favourites.map((place, index) => (
          <li
            key={index}
            onClick={() => setLocation(place)}
            className="cursor-pointer max-w-xs transition duration-300 ease-in-out hover:text-gray-300 hover:scale-125 ml-4"
          >
            {place}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favourites;
