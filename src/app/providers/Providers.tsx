import { ThemeProvider } from "app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}
