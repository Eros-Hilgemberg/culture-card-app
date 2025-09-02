import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./src/context/AuthContext";
import Routes from "./src/routes/routes";

export default function App() {
  const TWO_HOURS_IN_MS = 1000 * 60 * 60 * 2;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: TWO_HOURS_IN_MS,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </QueryClientProvider>
  );
}
