import Image from "next/image"
import React from "react"

interface CardProps {
  imageSrc: string
  alt: string
  title: string
  price: number
}

export default function CardMenu() {
  const cards: CardProps[] = [
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/19/k2djuj3u7xhfraukcjgfwo_product_list.jpg",
      alt: "menu",
      title: "King Box Mexican Whopper® Medium",
      price: 90909,
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/19/t46t7sszwyzzq6j4a3jzsh_product_list.jpg",
      alt: "menu",
      title: "King Box Mexican Whopper® Jr Regular",
      price: 66364,
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/19/g5q9ufxfpg8uvxsmgdkmnb_product_list.jpg",
      alt: "menu",
      title: "Paket Mexican Whopper® Medium",
      price: 79545,
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/19/rfyv9qcbhjokakbp85zhhd_product_list.jpg",
      alt: "menu",
      title: "Paket Mexican Whopper® Jr Regular",
      price: 55000,
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/23/lfescxsu8q7bpyhvs8pyji_product_list.jpg",
      alt: "menu",
      title: "MEXICAN BUNDLE",
      price: 119545,
    },
  ]

  return (
    <div className="px-4 w-screen">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card card-side pl-4 py-3 my-2 shadow-xl bg-white"
        >
          <Image
            src={card.imageSrc}
            alt={card.alt}
            width={300}
            height={300}
            className="rounded-l-none"
          />
          <div className="card-body my-auto text-black">
            <h2 className="card-title">{card.title}</h2>
            <p>Rp. {card.price.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
