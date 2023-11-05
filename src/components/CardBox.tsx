import Image from "next/image"

export default function CardBox({}) {
  const cards = [
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/11/1/bhbpfq8oswcfk7rye5jnof_product_list.jpg",
      alt: "menu",
      title: "Special Promo &#38; 1-5 Nov&#39;23 &#93;",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/10/23/hennaxjqiyceh79jnxto4k_product_list.jpg",
      alt: "menu",
      title: "Mexican x Heinz® Menu &#38; Limited Time Order &#93;",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/16/f8b2q8v78kxbkjxw8cvbbn_product_list.jpg",
      alt: "menu",
      title: "Special Promo &#38; 1-5 Nov23 &#93;",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <div key={index} className="card shadow-xl rounded-md m-1 bg-white">
          <div className="card-body">
            <Image
              src={card.imageSrc}
              alt={card.alt}
              width={200}
              height={200}
            />
            <h2 className="card-title">{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}
