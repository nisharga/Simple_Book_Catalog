import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import ReactStars from "react-stars";

 

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState();
    const ratingChanged = (newRating) => {
        setRating(newRating)
      }
    const onSubmit = data => {
        const recipeName = data.recipeName;
        const suggestion = data.suggestion;
        const reviewDetails = data.reviewDetails; 
        // all data save together
        const saveData = {recipeName, suggestion, reviewDetails, rating}
        console.log(saveData);
        
        //  reset()
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-5 px-8">
    <div className="grid grid-cols-12">
    <div className="col-span-12 flex justify-center items-center">
            <div className="form-control">
                <h2 className="text-2xl">Rate Us</h2>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={50}
                    color2={'#ffd700'} 
                />
            </div>
        </div> 
        <div className="col-span-12 mb-4">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Which recipe you liked most?</span> 
                </label> 
                <input {...register("recipeName")} type="text" placeholder="recipe you liked most?"  className="input input-bordered w-full"/>
            </div>
        </div> 
       
        <div className="col-span-12">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Do you have any suggestion for us?</span> 
                </label> 
                <input {...register("suggestion")} type="text" placeholder="suggestion"  className="input input-bordered w-full"/>
            </div>
        </div> 
        <div className="col-span-12 my-4">
        <label className="label">
            <span className="label-text">Kindly express your care in a short way.</span> 
        </label> 
          <textarea className="textarea textarea-bordered w-full" placeholder="Review in Details" {...register("reviewDetails")} ></textarea>
        </div>  
        <div className="col-span-12">
            <button type="submit" className="bg-gradient-to-r from-[rgba(131,93,35,1)] to-[rgba(181,129,48,1)] text-white py-2 px-4 flex justify-center items-center"><span className="mr-2">Send Review</span> <BsFillRocketTakeoffFill/></button>
        </div>
    </div> 
  
</form>
  )
}

export default AddReview