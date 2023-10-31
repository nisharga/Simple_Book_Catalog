 
 
import { FaBook } from "react-icons/fa6";
import { useAddBookMutation } from "../../redux/feature/api/apiSlice";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  [x: string]: any;
  example: string
  exampleRequired: string
}
import toast from "react-hot-toast";


const AddNew = () => {
    const [addBook, { isLoading, isSuccess, isError } ] = useAddBookMutation()
    const {
        register,
        handleSubmit,  
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        /* const title = data.bookname;
        const author = data.author;
        const genre = data.genre;
        const year = data.year; */
        /* const options ={
            "title": data?.bookname,
            "author": data?.author,
            "genre":  data?.genre ,
            "year": data?.year 
        } */
        await addBook({
            "title": data?.bookname,
            "author": data?.author,
            "genre":  data?.genre ,
            "year": data?.year 
        }) 
        toast.success("Book Added successfully")
         console.log("isSuccess", isSuccess);
      }
     
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-5 px-8 bg-[#07091E] text-white grid grid-cols-12 gap-4">
       <div className="lg:col-span-3 col-span-6"></div>
       <div className="lg:col-span-6 col-span-12">
       <div className="">
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Name</span> 
                    </label> 
                    <input {...register("bookname")} type="text" placeholder="Book name"  className="input input-bordered w-full p-2 rounded my-2 text-blue-500"/>
                </div>
            </div>  
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Author</span> 
                    </label> 
                    <input {...register("author")} type="text" placeholder="Book author"  className="input input-bordered w-full p-2 rounded my-2 text-blue-500"/>
                </div>
            </div>
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Genre</span> 
                    </label> 
                    <input {...register("genre")} type="text" placeholder="Book author"  className="input input-bordered w-full p-2 rounded my-2 text-blue-500"/>
                </div>
            </div> 
             <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Publication Year</span> 
                    </label> 
                    <input {...register("year")} type="number" placeholder="Book author"  className="input input-bordered w-full p-2 rounded my-2 text-blue-500" name="year"/>
                </div>
            </div>  
            
            <div className="col-span-12">
                <button type="submit" className="bg-gradient-to-r from-[rgba(131,93,35,1)] to-[rgba(181,129,48,1)] text-white py-2 px-4 flex justify-center items-center"><span className="mr-2">Add Book</span> <FaBook/></button>
            </div>
        </div> 
       </div>
    <div className="lg:col-span-3 col-span-12"></div>
    </form>
  )
}

export default AddNew