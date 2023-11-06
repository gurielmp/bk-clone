import Image from "next/image"

export default function NewsV1() {
  return (
    <div className="pb-8 lg:pt-4 w-full">
      {[
        "https://bkdelivery.co.id/media/landscape_image/2023/11/1/wr99nqebbmxj3kt6n2bvyz.jpg",
        "https://bkdelivery.co.id/media/landscape_image/2023/7/24/fr5p7hv8bd7hsnt7ma329o.jpg",
        "https://bkdelivery.co.id/media/landscape_image/2023/9/22/hgotdufd287gvxhdy8vjlp.jpg",
        "https://bkdelivery.co.id/media/landscape_image/2023/4/19/6qasxyu9lyrltgr3gzkysf.jpg",
        "https://bkdelivery.co.id/media/landscape_image/2023/1/18/mez28xqf8xytdfzprxx2an.jpg",
      ].map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          alt="logo"
          width={1800}
          height={1800}
          className="w-fit lg:w-2/3 mx-auto p-3"
        />
      ))}
    </div>
  )
}
