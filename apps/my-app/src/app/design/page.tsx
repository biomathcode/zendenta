import { routes } from "@/data/routes";
import LinearGraph from "@/graph/linear";
import Box from "@/ui/box";
import Button from "@/ui/button";
import Chip from "@/ui/chip";
import ClinicDisplay from "@/ui/clinicDisplay";
import { colors } from "@/ui/colors";
import DentalChart from "@/ui/dentalchart";
import Header from "@/ui/header";
import { Dashboard } from "@/ui/icons";
import Label from "@/ui/label";
import Logo from "@/ui/logo";
import Nav from "@/ui/nav";
import NavItem from "@/ui/navitem";
import ThemeSwitcher from "@/ui/themeToggle";
import { TypographyDemo } from "@/ui/typography";
import WorkingDays from "@/ui/workingdays";

function Design() {
  return (
    <div className="flex justify-center items-center min-w-full  ">
      <main className="flex w-full h-full">
        <Nav>
          <div className="flex flex-col gap-2 ">
            <Logo />
            <ClinicDisplay />
            <NavItem icon="Dashboard" label="Dashboard" />
            {routes.map((e) => {
              return (
                <div key={e.groupname} className="flex flex-col gap-2">
                  <Label isCapital={true}>{e.groupname}</Label>
                  <div className="flex flex-col ">
                    {e.children.map((i) => (
                      <li
                        key={i.name}
                        className="group flex gap-4 items-center hover:bg-[#E9EFFB] w-full p-2 rounded-xl"
                      >
                        {i.icon}
                        <div className="font-semibold text-sm text-slate-700 group-hover:text-[#4B66E9]">
                          {i.name}
                        </div>
                      </li>
                    ))}
                  </div>
                </div>
              );
            })}
            <hr className=" w-full border-t-2 bg-slate-100 rounded " />
            <NavItem icon="Report" label="Report" />
            <NavItem icon="Customer Support" label="Customer Support" />
          </div>
        </Nav>
        <div className="h-full w-full flex flex-col ">
          <Header />
          <article className=" mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10 w-full h-[calc(100vh-60px)] ">
            <div className="flex flex-col gap-5">
              <LinearGraph />

              <Label isCapital={true}>clinic</Label>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

function Tokens() {
  const listColors = Object.values(colors);
  return (
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
  );
}

export default Design;
