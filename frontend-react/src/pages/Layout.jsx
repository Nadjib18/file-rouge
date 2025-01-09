import { Outlet } from "react-router";
import { Footer } from "../components";

export default function Layout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
