// styles
import "@styles/scss/index.scss";
import "aos/dist/aos.css";

// next
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Head from "next/head";

// react
import { useEffect, ReactNode, ComponentType } from "react";

// bootstrap
import { SSRProvider } from "react-bootstrap";

// react-query (v3)
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// components
import ToastWrapper from "@components/organisms/toastWrapper";
import PageProgress from "@components/molecules/pageProgress";

// providers
import MainProvider from "@utility/context";
import { ComposeContext } from "@utility/context";

// ===============================
// React Query Config
// ===============================
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000,
    },
  },
});

// ===============================
// Types
// ===============================
type NextPageWithProviders = NextPage & {
  providers?: ComponentType[];
};

type AppPropsWithProviders = AppProps & {
  Component: NextPageWithProviders;
};

// ===============================
// Page Context Provider
// ===============================
const PageCtxProvider = ({
  children,
  providers,
}: {
  children: ReactNode;
  providers: ComponentType[];
}) => {
  if (!providers || providers.length === 0) return <>{children}</>;

  return (
    <ComposeContext providers={providers}>
      {children}
    </ComposeContext>
  );
};

// ===============================
// App
// ===============================
export default function MyApp({
  Component,
  pageProps,
}: AppPropsWithProviders) {
  // Init AOS (client-only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({
        once: true,
        duration: 800,
        easing: "ease-in-out",
      });
    }
  }, []);

  const pageProviders = Component.providers || [];

  return (
    <>
      <Head>
        <title>ZennxStore</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#0d6efd" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <SSRProvider>
          <MainProvider>
            <PageCtxProvider providers={pageProviders}>
              <PageProgress />
              <Component {...pageProps} />
              <ToastWrapper />
            </PageCtxProvider>
          </MainProvider>
        </SSRProvider>

        {/* React Query Devtools (auto disabled on prod) */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
  }
