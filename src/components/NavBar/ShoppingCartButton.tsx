"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ShoppingCartButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={"/cart/preview"} className="flex-none">
      <div
        className="p-3 bg-[#ed7801]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="https://bkdelivery.co.id/static/website/img/BK_TopCart2x.ab793c4833a3.png"
          alt="logo"
          width={30}
          height={30}
        />
        {isHovered && (
          <div className="hidden lg:block absolute top-[65px] rounded-lg right-[100px] z-10 bg-white shadow-md p-4">
            <div className="flex gap-2">
              <span>img</span>
              <span>productname</span>
              <span>qty</span>
              <span>price</span>
            </div>
            <div className="border-b-2 mt-2"></div>
            <div className="grid grid-cols-2">
              <h3>Subtotal</h3>
              <span>Rp. 0</span>
            </div>
            <Link href={"/cart/preview"}>
              <button className="bg-[#ed7801] w-full text-white p-2 rounded-lg">
                Go To Cart
              </button>
            </Link>
          </div>
        )}
      </div>
    </Link>
  )
}
