import "./back-arrow-anim.css"
import Link from "next/link";

export default function Back() {
  return (
      <Link href="/board" className="group flex gap-2 items-center font-medium transition-all duration-[500ms]  hover:text-rose-500 hover:gap-3 hover:duration-[250ms]">
        <span className="group-hover:animate-[arrow-left_1s_infinite_ease-in-out] ">{"<-"}</span>
        <span>Back</span>
      </Link>
  )
}
