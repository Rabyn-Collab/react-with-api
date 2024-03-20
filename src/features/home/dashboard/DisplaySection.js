const DisplaySection = () => {
  return (
    <div className=" grid grid-cols-2 items-center bg-black text-white py-4">

      <div className="animation">

        <dotlottie-player src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json" background="transparent" speed="1" loop autoplay></dotlottie-player>


      </div>


      <div className="dis-info">
        <h1>Hi, I am John</h1>
        <p className="italic text-pink-600">Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
      </div>



    </div>
  )
}
export default DisplaySection