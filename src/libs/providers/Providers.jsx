"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        {children}

        <Toaster richColors position="top-right" />
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
