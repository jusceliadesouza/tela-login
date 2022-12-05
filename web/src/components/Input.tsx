import { HTMLInputTypeAttribute, InvalidEvent } from "react";

interface InputProps<HTMLInputTypeAttribute> {
  type?: string;
  placeholder: string;
}

function handleInputInvalid(event: InvalidEvent<HTMLInputElement>) {
  event.target.setCustomValidity("Campo Obrigatório")
}

export function Input({ ...props }: InputProps<HTMLInputTypeAttribute>) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={"border rounded w-full p-3 placeholder:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-pink-500"}
      onInvalid={handleInputInvalid}
    />
  );
}
