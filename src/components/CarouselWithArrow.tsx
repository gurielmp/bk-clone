import Image from "next/image"
import React from "react"

export default function CarouselWithArrow() {
  const slides = [
    {
      id: "slide1",
      src: "https://bkdelivery.co.id/media/slider_image/2023/7/20/abujzwwmmzghgeveytyxil.jpg",
      prevSlide: "#slide5",
      nextSlide: "#slide2",
    },
    {
      id: "slide2",
      src: "https://bkdelivery.co.id/media/slider_image/2023/7/24/a8kveqzmfbctuhwwgwmjni.jpg",
      prevSlide: "#slide1",
      nextSlide: "#slide3",
    },
    {
      id: "slide3",
      src: "https://bkdelivery.co.id/media/slider_image/2023/9/22/5yekramsp7z4nsylebnudu.jpg",
      prevSlide: "#slide2",
      nextSlide: "#slide4",
    },
    {
      id: "slide4",
      src: "https://bkdelivery.co.id/media/slider_image/2023/10/11/xqnmgtkti7flmteexspgj9.jpg",
      prevSlide: "#slide3",
      nextSlide: "#slide5",
    },
    {
      id: "slide5",
      src: "https://bkdelivery.co.id/media/slider_image/2023/10/23/8epxnjshut8nen3td5a9hh.jpg",
      prevSlide: "#slide4",
      nextSlide: "#slide1",
    },
  ]

  return (
    <div className="carousel w-full">
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full"
        >
          <Image
            src={slide.src}
            className="w-full"
            width={1000}
            height={1000}
            alt="image"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={slide.prevSlide}
              className="btn btn-circle bg-white opacity-30 border-none text-2xl text-yellow-500"
            >
              ❮
            </a>
            <a
              href={slide.nextSlide}
              className="btn btn-circle bg-white opacity-30 border-none text-2xl text-yellow-500"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
