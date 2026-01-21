import { FaEye } from 'react-icons/fa';

const ShowItemsSelector = ({ value = 6, onChange }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-700">
      <label htmlFor="show-count" className="text-sm font-medium">
        Show:
      </label>
      <input
        id="show-count"
        type="number"
        value={value}
        onChange={onChange}
        className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default ShowItemsSelector;
