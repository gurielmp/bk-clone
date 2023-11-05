import Image from "next/image"
export default function Carousel() {
  const imageUrls = [
    "https://bkdelivery.co.id/media/slider_image/2023/7/20/abujzwwmmzghgeveytyxil.jpg",
    "https://bkdelivery.co.id/media/slider_image/2023/7/24/a8kveqzmfbctuhwwgwmjni.jpg",
    "https://bkdelivery.co.id/media/slider_image/2023/9/22/5yekramsp7z4nsylebnudu.jpg",
    "https://bkdelivery.co.id/media/slider_image/2023/8/3/ijzniet93cwzputznoevuh.jpg",
    "https://bkdelivery.co.id/media/slider_image/2023/7/20/abujzwwmmzghgeveytyxil.jpg",
    "https://bkdelivery.co.id/media/slider_image/2023/7/24/a8kveqzmfbctuhwwgwmjni.jpg",
    "https://bkdelivery.co.id/media/slider_image/2023/9/22/5yekramsp7z4nsylebnudu.jpg",
    "https://bkdelivery.co.id/media/slider_image/2023/8/3/ijzniet93cwzputznoevuh.jpg",
  ]

  return (
    <>
      <div className="carousel min-h-[180px] xl:min-h-[450px] lg:min-h-[400px] sm:min-h-[250px] md:min-h-[300px] max-h-full">
        {imageUrls.map((url, index) => (
          <div
            key={`item${index + 1}`}
            id={`item${index + 1}`}
            className="carousel-item w-full"
          >
            <Image
              src={url}
              className="w-full"
              width={1000}
              height={1000}
              alt={"image"}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {imageUrls.map((_, index) => (
          <a
            key={`link${index + 1}`}
            href={`#item${index + 1}`}
            className="w-[5px] h-[5px] rounded-full bg-[#b5906c]"
          ></a>
        ))}
      </div>
    </>
  )
}
