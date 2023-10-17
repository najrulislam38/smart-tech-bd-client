import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1>Root of the project.</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
