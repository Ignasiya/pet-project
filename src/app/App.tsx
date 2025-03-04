import { Suspense } from "react";
import { AppRouter } from "./router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <main className="content-page">
          <Sidebar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}
