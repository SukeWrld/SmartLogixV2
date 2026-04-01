import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <Link href="/" className="no-underline">
            <div className="flex items-center">
                <span className="text-2xl font-extrabold tracking-tight text-black">
                    Smart
                </span>
                <span className="text-2xl font-light tracking-tight text-black">
                    Logix
                </span>
            </div>
        </Link>
    );
};

export default Logo;