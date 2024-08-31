function Label({
  isCapital,
  children,
}: {
  isCapital: boolean;
  children: string;
}) {
  let label = isCapital ? children.toUpperCase() : children;

  return (
    <label
      className=" text-slate-400 font-semibold text-xs pl-2"
      aria-disabled={isCapital}
      htmlFor=""
    >
      {label}
    </label>
  );
}

export default Label;
