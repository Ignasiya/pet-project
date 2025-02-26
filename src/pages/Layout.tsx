import { Link, Outlet } from "react-router-dom";
import clsx from "clsx";
import { useTheme } from "../app/provider/theme/useTheme";

export default function Layout() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={clsx("app", theme)}>
      <nav>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О нас</Link>
      </nav>

      <button onClick={toggleTheme}>Toggle</button>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
