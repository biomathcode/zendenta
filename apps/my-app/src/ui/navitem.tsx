import { TbChartPieFilled } from "react-icons/tb";
import { Dashboard } from "./icons";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useNav } from "@/hooks/useNavOpen";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({
  label,
  icon,
}: {
  label: string;
  icon: "Dashboard" | "Report" | "Customer Support";
}) {
  const { width } = useNav();
  const iconData = {
    Dashboard: <Dashboard />,
    Report: <TbChartPieFilled />,
    "Customer Support": <RiCustomerService2Fill />,
  };
  const params = usePathname();

  let path = params.slice(1);
  console.log(params, path);
  return (
    <Link
      href={label.replace(/\s+/g, "").toLowerCase()}
      className={` group flex gap-4 items-center hover:bg-[#E9EFFB] w-full p-2 rounded-xl ${
        path === label.replace(/\s+/g, "").toLowerCase() ? " bg-blue-600" : ""
      } `}
    >
      <span
        className={`${path === label.replace(/\s+/g, "").toLowerCase() ? " text-neutral-50 " : ""}`}
      >
        {iconData[icon]}
      </span>

      {width === "280px" && (
        <span
          className={`font-bold text-sm text-slate-700 group-hover:text-[#4B66E9] ${
            path === label.replace(/\s+/g, "").toLowerCase()
              ? " text-white"
              : ""
          }`}
        >
          {label}
        </span>
      )}
    </Link>
  );
}

export default NavItem;
