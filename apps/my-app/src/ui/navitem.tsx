import { TbChartPieFilled } from "react-icons/tb";
import { Dashboard } from "./icons";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useNav } from "@/hooks/useNavOpen";
import Link from "next/link";

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
  return (
    <Link
      href={label.toLowerCase()}
      className="group flex gap-4 items-center hover:bg-[#E9EFFB] w-full p-2 rounded-xl"
    >
      {iconData[icon]}
      {width === "280px" && (
        <span className="font-bold text-sm text-slate-700 group-hover:text-[#4B66E9]">
          {label}
        </span>
      )}
    </Link>
  );
}

export default NavItem;
