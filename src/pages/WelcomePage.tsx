import { Link } from "react-router-dom";
import { useAppStore } from "../store/store";
import { Button } from "../components/Button";

export const WelcomePage = () => {
  const user = useAppStore((state) => state.user!);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-2xl block">
        Welcome <i>{user.name}</i>
      </h2>
      <Link to="/quiz">
        <Button> Start quiz</Button>
      </Link>
    </div>
  );
};
