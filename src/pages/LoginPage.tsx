import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/store";
import { Button } from "../components/Button";

export const LoginPage = () => {
    const setUser = useAppStore((state) => state.setUser);
    const navigate = useNavigate();

    interface RegisterFormElements extends HTMLFormControlsCollection {
      usernameInput: HTMLInputElement;
    }
  
    interface RegisterFormElement extends HTMLFormElement {
      readonly elements: RegisterFormElements;
    }
  
    const handleSubmit = (event: React.FormEvent<RegisterFormElement>) => {
      event.preventDefault();
      const username = event.currentTarget.elements.usernameInput.value;
      setUser(username);
      navigate('/');
    };
  
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <header className="flex justify-center tween mb-4">
        <h1 className="text-2xl">Welcome</h1>
      </header>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col w-72 m-auto">
        <label htmlFor="usernameInput">Username</label>
        <input
          required
          type="text"
          id="usernameInput"
          name="usernameInput"
          className="border border-slate-300 bg-transparent  rounded px-2 py-1 outline-none focus-within:border-slate-100"
        ></input>
        <div className="flex gap-1 justify-end">
          <Button
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
