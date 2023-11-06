import CardMenu from "@/components/CardMenu"

export default function Menus() {
  return (
    <div>
      <details className="dropdown pt-3 px-3">
        <summary className="m-1 btn bg-[#faaf18] hover:bg-[#faaf18] border-none text-white normal-case font-bold">
          Menu Categories
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
      <CardMenu />
    </div>
  )
}
