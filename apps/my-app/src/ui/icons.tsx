const ClinicIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 24v8h8v-8h-8zm6 6v-4h-4v4h4z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 6a6.002 6.002 0 00-5.653 3.985H6v2.481l4 3.03V40H7a1 1 0 100 2h3v.015h28V42h3a1 1 0 100-2h-3V15.532l4.5-3.03V9.984H24.653A6.002 6.002 0 0019 6zm5.659 8A5.99 5.99 0 0025 12v-.015h14.687L36.695 14H24.659zm-1.187 2A5.985 5.985 0 0119 18a5.985 5.985 0 01-4.472-2H12v24h12V24h10v16h2V16H23.472zM13 12c0 .701.12 1.374.341 2h-2.005l-2.66-2.015H13V12zm7-1V9h-2v2h-2v2h2v2h2v-2h2v-2h-2zm12 15v14h-6V26h6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

function Stethoscope() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        d="M12 10a2 2 0 10-1.732-3H10a3 3 0 00-3 3v9c-.552 0-1.005.449-.955.999A11 11 0 0014 29.583V32c0 1.306.835 2.418 2 2.83a7.25 7.25 0 0014.5-.08v-4a3.75 3.75 0 117.5 0v2.42a3.001 3.001 0 102 0v-2.42a5.75 5.75 0 00-11.5 0v4a5.25 5.25 0 01-10.5.08A3.001 3.001 0 0020 32v-2.417a11 11 0 007.955-9.584c.05-.55-.403-.999-.955-.999v-9a3 3 0 00-3-3h-.268A2 2 0 0020 8a2 2 0 003.732 1H24a1 1 0 011 1v9h.21c-.553 0-.993.45-1.07.997a7.21 7.21 0 01-14.28 0C9.783 19.45 9.343 19 8.79 19H9v-9a1 1 0 011-1h.268A2 2 0 0012 10z"
      ></path>
    </svg>
  );
}
function Peripheral() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="13"
      fill="none"
      viewBox="0 0 18 13"
    >
      <path
        stroke="#CFD3E1"
        strokeLinecap="round"
        d="M7 12l8-5M7 7l8 5M6 7h10"
      ></path>
      <path
        stroke="#80889E"
        strokeLinecap="round"
        strokeWidth="2"
        d="M1.424 1.861L5.876 5.591"
      ></path>
      <path
        stroke="#80889E"
        strokeLinecap="round"
        strokeWidth="2"
        d="M6 6L16.5 6"
      ></path>
    </svg>
  );
}

function Dashboard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 11 13"
    >
      <rect width="5" height="8" fill="#DADFEA" rx="1"></rect>
      <rect width="5" height="8" x="6" y="5" fill="#DADFEA" rx="1"></rect>
      <rect width="5" height="4" x="6" fill="#A5ABBB" rx="1"></rect>
      <rect width="5" height="4" y="9" fill="#8E96AA" rx="1"></rect>
    </svg>
  );
}

export { ClinicIcon, Dashboard, Stethoscope, Peripheral };
