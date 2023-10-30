
import AuthImage from "../../assets/Svg/authImage"

const WishList = () => {
  return (
    <div className="hero bg-[#07091E] text-white w-full py-6">
      <div className="w-full flex justify-between items-center">
        <div className="text-center lg:text-left">
          <AuthImage />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Wish List</h1>
          <p className="pt-6 text-center">Here is your all wish list books</p>
          
        </div>
      </div>
    </div>
  )
}

export default WishList