import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="w-full mx-auto min-h-screen justify-center">
      <Header />

      <main className="w-full max-w-[80%] md:max-w-[70%] lg:max-w-[60%] flex items-center mx-auto bg-white justify-center p-16 mt-20">
        <div className="flex flex-col justify-center">
          <form className="flex flex-col gap-8">
            <Input placeholder={"E-mail"} />
            <Input type="pass" placeholder={"Senha"} />

            <Button title={"Entrar"} onSubmit={() => {}} />
          </form>

          <div className="flex justify-between w-full mt-4 sm:gap-4 flex-wrap">
            <Button className="none text-yellow-500 hover:text-yellow-400 text-[1rem]" title="Esqueceu a Senha" />
            <Button className="none text-green-500 hover:text-green-400 text-[1rem]" title="Crie sua conta" />
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center fixed top-auto bottom-0 p-4 w-full">
        <p className="text-xs p-2">&copy; Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
