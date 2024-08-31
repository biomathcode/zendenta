import { colors } from "./colors";

function Chip({
  children,
  type = "default",
}: {
  children: string;
  type: "default" | "info" | "success" | "error";
}) {
  const chipstyles = {
    default: {
      background: colors.warningLight,
      color: colors.warning,
    },
    info: {
      background: colors.highlight,
      color: colors.primary,
    },
    success: {
      background: colors.successlight,
      color: colors.success,
    },
    error: {
      background: colors.dangerlight,
      color: colors.danger,
    },
  };

  return (
    <div
      style={{
        ...chipstyles[type],
      }}
      className=" w-fit px-4 py-2 rounded"
    >
      {children}
    </div>
  );
}

export default Chip;
