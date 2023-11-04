import Image from "next/image"

export default function CardBox({}) {
  return (
    <div className="card shadow-xl rounded-md m-1 bg-white">
      <div className="card-body">
        <Image
          src="https://media-order.bkdelivery.co.id/thumb/group_photo/2023/11/1/bhbpfq8oswcfk7rye5jnof_product_list.jpg"
          alt="menu"
          width={200}
          height={200}
        />
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
