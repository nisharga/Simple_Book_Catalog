 
import { useForm } from "react-hook-form";
import { FaBook } from "react-icons/fa6";
import { useAddBookMutation } from "../../redux/feature/api/apiSlice";
import { api } from './../../redux/feature/api/apiSlice';
import toast from "react-hot-toast";

const AddNew = () => {
    const { register, handleSubmit, reset } = useForm();

    const [addBook, { isLoading, isSuccess, isError } ] = api.useAddBookMutation()
   
    console.log(isLoading, isSuccess, isError) 
 
    const onSubmit = data => {
        const title = data.bookname; 
        const author = data.author; 
        const genre = data.genre; 
        const year = data.year; 
        // all data save together 
        
        addBook({title, author, genre, year});
        console.log(title, author, genre, year);
        toast.success("Book Added successfully")
              // eslint-disable-next-line no-undef
        reset()
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
                    <input {...register("year")} type="number" placeholder="Book author"  className="input input-bordered w-full p-2 rounded my-2 text-blue-500"/>
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