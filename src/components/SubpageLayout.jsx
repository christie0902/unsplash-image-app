import { Link, Outlet } from "react-router-dom";

export default function SubpageLayout() {
  return (
    <>
      <Link to="/" class="back-button">&lt; &lt; Back to Home &gt; &gt;</Link>

      <div className="main__content">
        <Outlet />
      </div>
    </>
  );
}