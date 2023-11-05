import Image from "next/image"
import Link from "next/link"
export default function NavBar() {
  return (
    <div className="navbar bg-[#2a2929] p-0">
      <div className="flex-none">
        <a className="btn btn-square btn-ghost">
          <Image
            src={
              "https://bkdelivery.co.id/static/website/img/BK_TopMenu2x.98a69d549abd.png"
            }
            alt="logo"
            width={25}
            height={25}
          />
        </a>
      </div>
      <div className="flex-1 justify-center">
        <Link href="/" className="btn btn-ghost">
          <Image
            src="https://bkdelivery.co.id/static/website/img/BK-NewLogo-2x.8c80bfc81ee0.png"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex-none">
        <a className="p-3 bg-[#ed7801]">
          <Image
            src="https://bkdelivery.co.id/static/website/img/BK_TopCart2x.ab793c4833a3.png"
            alt="logo"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  )
}
