import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Router from './shared/Router';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
