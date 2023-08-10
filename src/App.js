import "./App.css";
import ScrollToTop from "./utils/scroll-to-top";
import Router from "./routes";
import ThemeProvider from "./theme";
import MotionLazyContainer from "./utils/animate/MotionLazyContainer";
import { ThemeSettings, SettingsProvider } from "./utils/settings";

function App() {
  return (
    <>
      <ScrollToTop />
      <SettingsProvider>
        <ThemeProvider>
          <ThemeSettings>
            <MotionLazyContainer>
              <Router />
            </MotionLazyContainer>
          </ThemeSettings>
        </ThemeProvider>
      </SettingsProvider>
    </>
  );
}

export default App;
