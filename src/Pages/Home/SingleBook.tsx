import { FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleBook = ({book}) => {
  return (
    <Link
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        to={`/singlebook/${book._id}`}
      >
        <FaBook/>    
        <h2 className="mt-4 text-xl font-bold text-white">{book.title}</h2>
        <h2 className="mt-1 text-md font-bold text-white">Author: {book.author}</h2>
        <div className="flex justify-between">
            <p className="mt-1 text-sm text-gray-300">Genre: {book.genre}</p>
            <p className="mt-1 text-sm text-gray-300">Year: {book.year}</p>
        </div>
        
    </Link> 
  )
}

export default SingleBook