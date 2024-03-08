import { Link, Outlet } from "react-router-dom";

export default function SubpageLayout() {
  return (
    <>
      <Link to="/">&lt; &lt; Back</Link>

      <div className="main__content">
        <Outlet />
      </div>
    </>
  );
}