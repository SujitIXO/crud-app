import React from 'react';

const InputField = ({ type, name, value, options, onChange }) => {
  return (
    <div>
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
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
          className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      )}
    </div>
  );
};

export default InputField;
