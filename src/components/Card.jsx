import { Link } from "react-router-dom";

export default function Card({ place }) {
  return (
    <Link to={place._id}>
      <div className="mx-2 w-72 mb-8 cursor-pointer">
        <div>
          <img alt="place" src={`/img/${place.img}.jpg`} className="w-full h-44 rounded-tr-3xl rounded-tl-3xl" />
        </div>
        <div className="bg-white shadow-md rounded-bl-3xl rounded-br-3xl">
          <div className="flex items-center justify-between px-4 pt-4">
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bookmark"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-yellow-500">Featured</p>
            </div> */}
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">{place.name}</h2>
            </div>
            {/* <p className="text-xs text-gray-600 mt-2">{props.des}</p> */}
            <div className="flex mt-4">
              <div>
                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
              </div>
              <div className="pl-2">
                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2 className="text-indigo-700 text-xs font-semibold">{`${place.city}, ${place.state}`}</h2>
              {/* <h3 className="text-indigo-700 text-xl font-semibold">{place.state}</h3> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
