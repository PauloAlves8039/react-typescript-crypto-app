import { router } from "../src/routes/router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}