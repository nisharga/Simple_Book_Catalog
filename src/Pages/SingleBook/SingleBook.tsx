import { useParams } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
const SingleBook = () => { 
  const { id } = useParams<{ id: string }>();
  return (
    <section className="bg-gray-900 text-white">
      <div
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 text-center"
        
      >
        <div className="flex justify-center"><FaBook/> </div>   
        <h2 className="mt-4 text-2xl font-bold text-white">{"book.title"}</h2>
        <h2 className="mt-1 text-xl font-bold text-white">Author: {"book.author"}</h2> 
            <p className="mt-1 text-sm text-gray-300">Genre: {"book.genre"}</p>
            <p className="mt-1 text-sm text-gray-300">Year: {"book.year"}</p> 
        
    </div> 
      <div className="py-8 flex justify-around text-center">
                  <button type="submit" className="bg-gradient-to-r from-[rgba(131,93,35,1)] to-[rgba(181,129,48,1)] text-white py-2 px-4 flex justify-center items-center"><span className="mr-2">Edit Book</span> <FaBook/></button>


                  <button type="submit" className="bg-gradient-to-r from-[rgba(131,93,35,1)] to-[rgba(181,129,48,1)] text-white py-2 px-4 flex justify-center items-center"><span className="mr-2">Delete Book</span> <FaBook/></button>
    </div>
   </section>
  )
}

export default SingleBook