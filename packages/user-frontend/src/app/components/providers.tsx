"use client";

import { authActions, AuthState } from "@/lib/features/auth/authSlice";
import { AppStore, makeStore } from "@/lib/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";
import { Provider } from "react-redux";

type InitialReduxProviderProps = AuthState;

function ReduxProvider(
  props: React.PropsWithChildren<InitialReduxProviderProps>
) {
  const storeRef = React.useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(
      authActions.setSession({ session: props.session })
    );
  }

  return <Provider store={storeRef.current}>{props.children}</Provider>;
}

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export type ProvidersProps = InitialReduxProviderProps;

export default function Providers(
  props: React.PropsWithChildren<ProvidersProps>
) {
  return (
    <ReduxProvider session={props.session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {props.children}
      </ThemeProvider>
    </ReduxProvider>
  );
}
