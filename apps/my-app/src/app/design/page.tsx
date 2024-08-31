import Box from "@/ui/box";
import Button from "@/ui/button";
import Chip from "@/ui/chip";
import { colors } from "@/ui/colors";
import ThemeSwitcher from "@/ui/themeToggle";
import { TypographyDemo } from "@/ui/typography";
import WorkingDays from "@/ui/workingdays";

function Design() {
  const listColors = Object.values(colors);
  return (
    <div className="flex justify-center items-center min-w-full px-10 py-4 container">
      <div className="flex flex-col gap-4 mb-40">
        <div className=" flex gap-10 max-w-lg flex-wrap">
          {listColors.map((e) => {
            return <Box key={e} color={e} />;
          })}
        </div>
        <Button label="Save" />
        <div className="flex gap-4">
          <Chip type="default">Hello</Chip>
          <Chip type="info">Hello</Chip>
          <Chip type="success">Hello</Chip>
          <Chip type="error">Hello</Chip>
        </div>
        <WorkingDays />
        <TypographyDemo />
      </div>
    </div>
  );
}

export default Design;
