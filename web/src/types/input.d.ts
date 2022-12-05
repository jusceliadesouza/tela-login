import { Control } from "react-hook-form";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<any, any>;
  name: string;
  errorMessage?: string;
}
