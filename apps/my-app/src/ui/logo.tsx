import { useNav } from "@/hooks/useNavOpen";
import Image from "next/image";

function Logo() {
  const { width } = useNav();
  return (
    <div className="flex gap-2 py-4">
      <Image src={"/logo.png"} width={30} height={20} alt="Zendenta Logo" />
      {width === "280px" && (
        <div className="font-bold font-Manrope text-lg">Zendenta</div>
      )}
    </div>
  );
}

export default Logo;
