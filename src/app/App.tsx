import { AppRouter } from "./router";
import { Providers } from "./provider";

export function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
