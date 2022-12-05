import { Button } from "./Button";

export function Header() {
  return (
    <header>
      <div className="w-full max-w-[80%] h-12 my-0 mx-auto flex justify-between items-center">
        <h4 className="">Login</h4>
        <div className="flex justify-between gap-4 items-center">
          <a href="/">Home</a>
          <a href="#">Sign In</a>
        </div>
      </div>
    </header>
  );
}
