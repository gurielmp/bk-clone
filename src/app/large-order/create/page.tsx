import Image from "next/image"

export default function CreateLargeOrderPage() {
  return (
    <div>
      <Image
        src="https://bkdelivery.co.id/media/mobile_large_order_banners/2023/7/10/bjiozhamejjnbfoazyw8ve.jpg"
        alt="logo"
        width={2000}
        height={2000}
        className="w-screen lg:w-2/3 mx-auto lg:hidden"
      />
      <Image
        src="https://bkdelivery.co.id/media/large_order_banners/2023/7/10/ah5i2q3ykgpjkc7cjpzzfb.jpg"
        alt="logo"
        width={2000}
        height={2000}
        className=" w-screen mx-auto hidden lg:block"
      />
    </div>
  )
}
