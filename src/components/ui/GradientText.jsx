// src/components/ui/GradientText.jsx
import { useTheme } from "../../context/ThemeContext";

export default function GradientText({
  children,
  className = "",
  as: Component = "span",
}) {
  const { theme } = useTheme();

  return (
    <Component
      className={[
        "bg-clip-text text-transparent bg-gradient-to-r",
        theme.gradients.from,
        theme.gradients.to,
        className,
      ].join(" ")}
    >
      {children}
    </Component>
  );
}
