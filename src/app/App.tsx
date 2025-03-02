import { AppRouter } from "./router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";

export function App() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />

      <button onClick={toggleTheme}>Toggle</button>

      <main>
        <AppRouter />
      </main>
    </div>
  );
}
