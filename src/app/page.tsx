import CardBox from "@/components/CardBox"
import Carousel from "@/components/Carousel"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="bg-[url('https://bkdelivery.co.id/static/website/img/BK_bg.jpg?5218847fa211')] flex flex-col w-full h-screen bg-cover bg-no-repeat">
        <Carousel />
        <div className="p-4">
          <div className="flex bg-white border rounded-lg p-4">
            <h3 className="flex font-semibold text-black w-4/5">
              Get exclusive benefits now as a BK Member!{" "}
              <span className="ml-1">
                <Image
                  src="https://bkdelivery.co.id/static/website/img/crown2x.e2843cfb45cf.png"
                  alt="logo"
                  width={18}
                  height={18}
                />
              </span>{" "}
            </h3>
            <button className="uppercase rounded-lg bg-[#ed7801] py-4 text-white font-bold w-1/5">
              login
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <CardBox key={item} />
          ))}
        </div> */}
        <CardBox />
      </div>
    </>
  )
}
