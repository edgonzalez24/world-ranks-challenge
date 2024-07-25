import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import LayoutPage from './layouts/Index';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
const persister = createSyncStoragePersister({
  storage: window.localStorage,
});
function App() {
  return (
    <>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools initialIsOpen />
      </PersistQueryClientProvider>
    </>
  );
}

export default App;
