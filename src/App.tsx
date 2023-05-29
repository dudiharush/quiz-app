import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage.tsx";
import { QuizPage } from "./pages/QuizPage/QuizPage.tsx";
import { FinishPage } from "./pages/FinishPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { PrivateRoute } from "./components/PrivateRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <PrivateRoute><WelcomePage /></PrivateRoute>,
  },
  {
    path: "/quiz",
    element: <PrivateRoute><QuizPage /></PrivateRoute>,
  },
  {
    path: "/finish",
    element: <FinishPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
