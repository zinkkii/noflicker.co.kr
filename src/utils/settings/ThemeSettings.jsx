import ThemeRtlLayout from "./ThemeRtlLayout";
import ThemeColorPresets from "./ThemeColorPresets";

export default function ThemeSettings({ children }) {
  return (
    <ThemeColorPresets>
      <ThemeRtlLayout>{children}</ThemeRtlLayout>
    </ThemeColorPresets>
  );
}
