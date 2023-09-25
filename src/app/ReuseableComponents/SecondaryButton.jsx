import Link from "next/link";

const SecondaryButton = ({children, link}) => {
    return (
        <button className="px-5 py-2 bg-transparent text-black border border-gray-500 font-Inter rounded-md text-sm hover:scale-105 transition-all shadow-sm">
            <Link href={link}>{children}</Link>
        </button>
    );
};

export default SecondaryButton;