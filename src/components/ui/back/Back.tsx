import "./back-arrow-anim.css";

import Link from "next/link";

export default function Back() {
  return (
    <Link
      href="/board"
      className="group flex items-center gap-2 font-medium transition-all duration-[500ms] hover:gap-3 hover:text-rose-500 hover:duration-[250ms] mt-4"
    >
      <span className="group-hover:animate-[arrow-left_1s_infinite_ease-in-out]">
        {"<-"}
      </span>
      <span>Back</span>
    </Link>
  );
}
