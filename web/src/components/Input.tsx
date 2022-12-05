import { InvalidEvent } from "react";
import { IInputProps } from "../types/input";
import { Controller } from "react-hook-form";

function handleInputInvalid(event: InvalidEvent<HTMLInputElement>) {
  event.target.setCustomValidity("Campo Obrigatório");
}

export function Input({ control, name, errorMessage, ...props }: IInputProps) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <input
            {...props}
            className={
              "border rounded w-full p-3 text-pink-500 placeholder:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all"
            }
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            onInvalid={handleInputInvalid}
          />
        )}
      />
      {errorMessage ? <p className="text-red-500 text-xs">{errorMessage}</p> : null}
    </div>
  );
}
