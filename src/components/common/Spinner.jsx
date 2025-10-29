const Spinner = ({ message = 'Chargement...' }) => (
  <div className="flex flex-col justify-center items-center h-full min-h-[50vh] text-gray-500 dark:text-gray-400">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
    <p className="mt-4 text-lg">{message}</p>
  </div>
);

export default Spinner;
