const MediaCard = ({ item }) => (
  <div className="flex flex-col items-center text-center cursor-pointer group">
    <img
      src={item.logo || item.screenshot_uri || item.poster_url}
      alt={item.name}
      className="w-full h-48 object-cover rounded-lg bg-gray-800 shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
      loading="lazy"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://via.placeholder.com/200x300/1f2937/FFFFFF?text=${encodeURIComponent(item.name)}`;
      }}
    />
    <span className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
  </div>
);

export default MediaCard;
