import React from "react";
import { InputClasses, InputType } from "./types/InputTypes";
import NumberFormat from "react-number-format";

export const InputText: React.FC<InputType> = ({ label, name, password, email, inputValue, setState , shouldDisable }) => (
  <div className={InputClasses.formGroup}>
    <label htmlFor={name} className={InputClasses.label}>
      {label}
    </label>
    <input
      type={password ? 'password' : email ? 'email' : 'text'}
      name={name}
      value={inputValue}
      className={shouldDisable ? InputClasses.input + ' bg-gray-400 cursor-not-allowed': InputClasses.input + ''}
      disabled={shouldDisable}
      onChange={(e) => setState(e.target.value)}
    />
  </div>
);

export const InputMoney: React.FC<InputType> = ({ label, name, setState, inputValue }) => (
  <div className={InputClasses.formGroup}>
    <label htmlFor={name} className={InputClasses.label}>
      {label}
    </label>
    <NumberFormat
      thousandSeparator={true}
      prefix={"$"}
      name={name}
      value={inputValue}
      className="w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
      onChange={(e) => setState(e.target.value)}
    />
  </div>
);

export const InputNumber: React.FC<InputType> = ({
  label,
  name,
  setState,
  minNum,
  maxNum,
  inputValue
}) => {
  // Check the value of the input
  // Insure not lower than min or greater than max
  const checkValue = (val: string) => {
    // Check for a min max before a return
    if (minNum !== undefined && maxNum !== undefined) {
      if (+val > maxNum || +val < minNum) {
        return "";
      } else {
        return val;
      }
    }
    return val;
  };
  return (
    <div className={InputClasses.formGroup}>
      <label htmlFor={name} className={InputClasses.label}>
        {label}
      </label>
      <NumberFormat
        name={name}
        min={minNum}
        max={maxNum}
        value={inputValue}
        format={checkValue}
        className="w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};
