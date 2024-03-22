
import { useLottie } from "lottie-react";
import yoga from "../../../assets/animation.json";

const DisplaySection = () => {

  const { View } = useLottie({
    animationData: yoga,
    loop: true,

  });

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-1 items-center bg-black text-white py-4">

      <div className="animation">
        {View}

        {/* <dotlottie-player src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json" background="transparent" speed="1" loop autoplay></dotlottie-player> */}


      </div>


      <div className="dis-info sm:px-7">
        <h1>Hi, I am John</h1>
        <p className="italic text-pink-600">Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
      </div>



    </div>
  )
}
export default DisplaySection