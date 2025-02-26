import { ThemeProvider } from "./theme/ThemeProvider";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
