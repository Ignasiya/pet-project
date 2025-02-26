import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../app/provider/theme/useTheme";
import { classNames } from "../shared/utils/classNames/classNames";

export default function Layout() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
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
