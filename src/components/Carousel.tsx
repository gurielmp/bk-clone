import Image from "next/image"
export default function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Image
            src={
              "https://bkdelivery.co.id/media/slider_image/2023/7/20/abujzwwmmzghgeveytyxil.jpg"
            }
            className="w-full"
            width={500}
            height={500}
            alt={"image"}
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image
            src={
              "https://bkdelivery.co.id/media/slider_image/2023/7/24/a8kveqzmfbctuhwwgwmjni.jpg"
            }
            className="w-full"
            width={500}
            height={500}
            alt={"image"}
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Image
            src={
              "https://bkdelivery.co.id/media/slider_image/2023/9/22/5yekramsp7z4nsylebnudu.jpg"
            }
            className="w-full"
            width={500}
            height={500}
            alt={"image"}
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Image
            src={
              "https://bkdelivery.co.id/media/slider_image/2023/8/3/ijzniet93cwzputznoevuh.jpg"
            }
            className="w-full"
            width={500}
            height={500}
            alt={"image"}
          />
        </div>
        <div id="item5" className="carousel-item w-full">
          <Image
            src={
              "https://bkdelivery.co.id/media/slider_image/2023/7/20/abujzwwmmzghgeveytyxil.jpg"
            }
            className="w-full"
            width={500}
            height={500}
            alt={"image"}
          />
        </div>
        <div id="item6" className="carousel-item w-full">
          <Image
            src={
              "https://bkdelivery.co.id/media/slider_image/2023/7/24/a8kveqzmfbctuhwwgwmjni.jpg"
            }
            className="w-full"
            width={500}
            height={500}
            alt={"image"}
          />
        </div>
        <div id="item7" className="carousel-item w-full">
          <Image
            src={
              "https://bkdelivery.co.id/media/slider_image/2023/9/22/5yekramsp7z4nsylebnudu.jpg"
            }
            className="w-full"
            width={500}
            height={500}
            alt={"image"}
          />
        </div>
        <div id="item8" className="carousel-item w-full">
          <Image
            src={
              "https://bkdelivery.co.id/media/slider_image/2023/8/3/ijzniet93cwzputznoevuh.jpg"
            }
            className="w-full"
            width={500}
            height={500}
            alt={"image"}
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a
          href="#item1"
          className="w-[5px] h-[5px] rounded-full bg-[#b5906c]"
        ></a>
        <a
          href="#item2"
          className="w-[5px] h-[5px] rounded-full bg-[#b5906c]"
        ></a>
        <a
          href="#item3"
          className="w-[5px] h-[5px] rounded-full bg-[#b5906c]"
        ></a>
        <a
          href="#item4"
          className="w-[5px] h-[5px] rounded-full bg-[#b5906c]"
        ></a>
        <a
          href="#item5"
          className="w-[5px] h-[5px] rounded-full bg-[#b5906c]"
        ></a>
        <a
          href="#item6"
          className="w-[5px] h-[5px] rounded-full bg-[#b5906c]"
        ></a>
        <a
          href="#item7"
          className="w-[5px] h-[5px] rounded-full bg-[#b5906c]"
        ></a>
        <a
          href="#item8"
          className="w-[5px] h-[5px] rounded-full bg-[#b5906c]"
        ></a>
      </div>
    </>
  )
}
