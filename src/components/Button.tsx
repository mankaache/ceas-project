import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
  className?: string;
}
const Button = ({ href, text, className }: ButtonProps) => {
  return (
    <Link
      className={cn(
        "bg-secondary hover:bg-primary transition-all px-8 py-3 rounded-lg text-white text-lg",
        className
      )}
      href={href}
    >
      {text}
    </Link>
  );
};

export default Button;
