import { useGetAllBooksQuery } from "../../redux/feature/api/apiSlice";
import SingleBook from "../Home/SingleBook";

const Allbooks = () => {
    const { data, isLoading, error } = useGetAllBooksQuery(null);
  return (
    <section className="bg-gray-900 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">All Books</h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> 
      
        {
            data?.data.map((book, index) => <SingleBook key={index} book={book}/>)
        }        
      
    </div>

  </div>
</section>
  )
}

export default Allbooks