import Image from "next/image"

export default function CardBox({}) {
  const cards = [
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/11/1/bhbpfq8oswcfk7rye5jnof_product_list.jpg",
      alt: "menu",
      title: "Special Promo [1-5 Nov'23]",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/10/23/hennaxjqiyceh79jnxto4k_product_list.jpg",
      alt: "menu",
      title: "Mexican x Heinz® Menu [Limited Time Order]",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/16/f8b2q8v78kxbkjxw8cvbbn_product_list.jpg",
      alt: "menu",
      title: "Gold Collection",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/11/2/fwvutetzjew4arsjqzq9td_product_list.jpg",
      alt: "menu",
      title: "Cheese Whopper®",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/11/2/ahjlc47bb9hstuc3cc9en2_product_list.jpg",
      alt: "menu",
      title: "Cheese Burger Favorite",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/6/3/bzilpvmecz3gmmngfan9vg_product_list.jpg",
      alt: "menu",
      title: "King's Chicken [ Rasa Baru ]",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/7/17/7vsqwgbwhohuthx5pb7bfp_product_list.jpg",
      alt: "menu",
      title: "3-Cheese [ Limited Time ]",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/znilxvdnwuyurvfmej3lft_product_list.jpg",
      alt: "menu",
      title: "BK APP EXCLUSIVE",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/syhbxldehjxkumhbs5yiz9_product_list.jpg",
      alt: "menu",
      title: "Kids Meal",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/10/10/fkj8wesyvwhxvwfs4um9mt_product_list.jpg",
      alt: "menu",
      title: "Side & Dessert",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/3/15/5s3jdve3uve4itsndqnqkm_product_list.jpg",
      alt: "menu",
      title: "BEVERAGES",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/2/8/cckufhpxcf4vaj2yupoouv_product_list.jpg",
      alt: "menu",
      title: "KING DEALS",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/10/2/zemzufs9bgvx59u8rzxcyz_product_list.jpg",
      alt: "menu",
      title: "November Hemat",
    },
    {
      imageSrc:
        "https://media-order.bkdelivery.co.id/thumb/group_photo/2023/7/31/eqd9boqisvqpdifbcrjo7f_product_list.jpg",
      alt: "menu",
      title: "Double Mantul",
    },
  ]

  return (
    <div className="pb-10 max-w-4xl mx-auto">
      <h3 className="text-center text-[#8b542f] text-2xl py-6 font-bold">
        Our Menus
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card p-2 shadow-xl rounded-xl m-2 bg-white"
          >
            <div className="card-body p-0">
              <Image
                className="w-full rounded-t-xl"
                src={card.imageSrc}
                alt={card.alt}
                width={600}
                height={600}
              />
              <div className="grid lg:grid-cols-2 gap-2 px-4 pt-3 pb-7 justify-center text-center lg:justify-normal lg:text-left">
                <h2 className="card-title text-[#8b542f] font-bold">
                  {card.title}
                </h2>
                <button className="hidden lg:block btn normal-case font-bold bg-[#ed7801] border-none text-white">
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
