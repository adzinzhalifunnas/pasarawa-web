import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Container, createTheme, MantineProvider, rem } from '@mantine/core';
import { Suspense } from 'react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './App.css';
import Home from './pages/Home';
import Loader from './components/loader/Loader';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(700),
  lg: rem(800),
  xl: rem(900),
  xxl: rem(1300),
};

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
  },
});

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
]);

function App() {
  return (
    <MantineProvider withGlobalClasses withStaticClasses theme={theme}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </MantineProvider>
  );
}

export default App;