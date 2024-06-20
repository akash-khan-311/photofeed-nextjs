import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        class="max-w-[100px] md:max-w-[165px]"
        width={100}
        height={165}
        src="/lws_logo.png"
        alt="Lws"
      />
    </Link>
  );
};
export default Logo;
