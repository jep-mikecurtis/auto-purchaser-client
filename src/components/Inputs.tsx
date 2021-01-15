import React from "react";
import { InputClasses, InputType } from "./types/InputTypes";
import NumberFormat from "react-number-format";

export const InputText: React.FC<InputType> = ({ label, name, cb }) => (
  <div className={InputClasses.formGroup}>
    <label htmlFor={name} className={InputClasses.label}>
      {label}
    </label>
    <input type="text" name={name} className={InputClasses.input} />
  </div>
);

export const InputMoney: React.FC<InputType> = ({ label, name, cb }) => (
  <div className={InputClasses.formGroup}>
    <label htmlFor={name} className={InputClasses.label}>
      {label}
    </label>
    <NumberFormat
      thousandSeparator={true}
      prefix={"$"}
      name={name}
      className="w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
      onChange={cb}
    />
  </div>
);

export const InputNumber: React.FC<InputType> = ({
  label,
  name,
  cb,
  minNum,
  maxNum,
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
        format={checkValue}
        className="w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
        onChange={cb}
      />
    </div>
  );
};
