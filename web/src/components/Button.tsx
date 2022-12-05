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
          : `center max-w-sm py-1 px-3 rounded border bg-gradient-to-br hover:text-pink-100 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-zinc-400 border-none transition-all`
      }
      onSubmit={props.onSubmit}
      {...props}
    >
      {props.title}
    </button>
  );
}
