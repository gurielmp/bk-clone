import Image from "next/image"
import Link from "next/link"
import ShoppingCartButton from "./ShoppingCartButton"
export default function NavBar() {
  return (
    <div className="bg-[#2a2929]">
      <div className="navbar p-0 lg:max-w-6xl lg:mx-auto">
        <div className="flex-none">
          <a className="btn btn-square btn-ghost lg:hidden">
            <Image
              src={
                "https://bkdelivery.co.id/static/website/img/BK_TopMenu2x.98a69d549abd.png"
              }
              alt="logo"
              width={25}
              height={25}
            />
          </a>
          <Link href="/" className="btn btn-ghost hidden z-10 lg:flex">
            <Image
              src="https://bkdelivery.co.id/static/website/img/BK-NewLogo-2x.8c80bfc81ee0.png"
              alt="logo"
              width={90}
              height={90}
            />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link
            href="/menus"
            className="btn btn-ghost text-left normal-case -space-y-2 grid"
          >
            <span className="text-[#faaf18] text-xs">Delivery</span>

            <span className="text-white text-2xl ">Order</span>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link
            href="/news-v1"
            className="btn btn-ghost normal-case -space-y-2  text-left grid"
          >
            <span className="text-[#faaf18] text-xs">Get Fresh</span>

            <span className="text-white text-2xl ">Promotions</span>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link
            href="/large-order/create"
            className="btn btn-ghost normal-case -space-y-2  grid text-left"
          >
            <span className="text-[#faaf18] text-xs">Exclusive</span>

            <span className="text-white text-2xl ">Large Order</span>
          </Link>
        </div>
        <div className="flex-1 justify-center">
          <Link href="/" className="btn btn-ghost lg:hidden">
            <Image
              src="https://bkdelivery.co.id/static/website/img/BK-NewLogo-2x.8c80bfc81ee0.png"
              alt="logo"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link
            href="/accounts/login"
            className="p-3 font-bold text-white uppercase text-xl mr-5"
          >
            Login
          </Link>
        </div>
        <ShoppingCartButton />
      </div>
    </div>
  )
}
