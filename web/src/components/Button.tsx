interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onSubmit?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={
        !`none`
          ? `bg-none`
          : `center max-w-sm py-1 px-3 rounded border bg-gradient-to-r hover:text-pink-100 hover:from-indigo-700 hover:via-indigo-500 hover:to-indigo-300 hover:shadow-lg hover:shadow-zinc-400 border-none transition-all`
      }
      onSubmit={props.onSubmit}
      {...props}
    >
      {props.title}
    </button>
  );
}
