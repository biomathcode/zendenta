"use client";
import Logo from "@/ui/logo";
import Nav from "@/ui/nav";
import NavItem from "@/ui/navitem";
import ClinicDisplay from "./clinicDisplay";
import { routes } from "@/data/routes";
import Label from "./label";
import { useNav } from "@/hooks/useNavOpen";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavGroup() {
  const { width } = useNav();
  const params = usePathname();

  let path = params.slice(1);
  console.log(params, path);

  return (
    <Nav>
      <div className="flex flex-col gap-2 ">
        <Logo />
        {width === "280px" && <ClinicDisplay />}
        <NavItem icon="Dashboard" label="Dashboard" />
        {routes.map((e) => {
          return (
            <div key={e.groupname} className="flex flex-col gap-2">
              {width === "280px" && (
                <Label isCapital={true}>{e.groupname}</Label>
              )}

              <div className="flex flex-col ">
                {e.children.map((i) => (
                  <Link
                    href={i.href}
                    key={i.name}
                    className={`group flex  gap-4 items-center hover:bg-[#E9EFFB] w-full p-2 rounded-xl  ${
                      path === i.href ? " bg-blue-600" : ""
                    } `}
                  >
                    <span
                      className={`${path === i.href ? " text-neutral-50 " : ""}`}
                    >
                      {i.icon}
                    </span>

                    {width === "280px" && (
                      <div
                        className={`font-semibold  text-sm text-slate-700 group-hover:text-[#4B66E9]  ${
                          path === i.href ? " text-white " : ""
                        } `}
                      >
                        {i.name}
                      </div>
                    )}
                  </Link>
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
  );
}

export default NavGroup;
