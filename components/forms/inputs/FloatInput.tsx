import React from "react";

type Props = {
  type?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  label?: string;
  classLabel?: string;
  classInput?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const FloatInput: React.FC<Props> = ({
  type = "text",
  name,
  className,
  placeholder,
  label,
  classLabel,
  classInput,
  onChange,
}) => {
  return (
    <div className={`relative z-0 mb-6 w-full group ${className || ""}`}>
      <input
        type={type}
        name={name}
        className={`input-float peer ${classInput || ""}`}
        placeholder={placeholder || " "}
        onChange={onChange}
      />
      <label htmlFor="name" className={`label-float ${classLabel || ""}`}>
        {label}
      </label>
    </div>
  );
};

export default FloatInput;
