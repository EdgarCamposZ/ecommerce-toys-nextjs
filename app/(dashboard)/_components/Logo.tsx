import Image from "next/image";

export const Logo = () => {
    return (
        <Image
            src="/univologo.png"
            alt="Logo"
            width={70}
            height={70}
        />
    )
};
