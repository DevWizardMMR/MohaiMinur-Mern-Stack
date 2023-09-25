import Link from "next/link";

const PrimaryButton = ({ children,link }) => {
  return (
    <button className="px-5 py-2 bg-slate-600 text-white font-Inter rounded-md text-sm hover:bg-slate-700 hover:scale-105 transition-all shadow-sm">
      <Link href={link}>{children}</Link>
    </button>
  );
};

export default PrimaryButton;
