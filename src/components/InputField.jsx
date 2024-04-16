import React from 'react';

const InputField = ({ label, type, name, value, options, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">{label}</label>
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      )}
    </div>
  );
};

export default InputField;
