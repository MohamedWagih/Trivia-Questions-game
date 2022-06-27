import { ChakraProvider, useToast } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './presentation/AppLayout';

function App() {
  const toast = useToast();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: (err) => {
          console.log('Query Error', err);
          toast({
            title: 'Error',
            description: err.message,
            status: 'error',
            isClosable: true,
            duration: 9000,
          });
        },
      },
    },
  });

  return (
    <BrowserRouter>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <AppLayout />
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
