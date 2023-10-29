import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <>
      <div>HEADER</div>
      <div><Outlet /></div>
      <div>FOOTER</div>
    </>
  )
}

export default Main