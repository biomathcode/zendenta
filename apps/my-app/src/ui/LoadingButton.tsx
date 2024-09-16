import { Button } from "@/ui/button";
import {} from "react-icons/bs";
import { MouseEvent, ReactNode } from "react";
import { RiLoader3Fill } from "react-icons/ri";

export function LoadingButton({
  isLoading,
  children,
  loadingText,
  onClick,
}: {
  isLoading: boolean;
  children: ReactNode;
  loadingText: string;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}) {
  return (
    <Button
      className="flex gap-1 items-center"
      disabled={isLoading}
      type="submit"
      onClick={(e) => {
        onClick?.(e);
      }}
    >
      {isLoading && <RiLoader3Fill className="animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
}
