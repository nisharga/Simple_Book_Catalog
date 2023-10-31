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
    
  )
}

export default AddReview