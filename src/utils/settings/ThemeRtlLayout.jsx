import { useEffect } from "react";
// rtl
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

export default function ThemeRtlLayout({ children }) {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === "rtl" ? "rtl" : "css",
    // https://github.com/styled-components/stylis-plugin-rtl/issues/35
    stylisPlugins: theme.direction === "rtl" ? [prefixer, rtlPlugin] : [],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
