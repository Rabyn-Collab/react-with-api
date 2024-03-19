import { useNavigate } from "react-router"
import { data } from "../../dummy/products"

const Home = () => {



  const nav = useNavigate();



  // const mio = "he's a some";
  return (
    <div className="p-3">

      {/* <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} className="bg-no-repeat bg-cover bg-center bg-blend-darken h-[200px] w-full">


      </div> */}

      <div className="space-y-4">
        {data.products.map((product) => {
          return <div
            onClick={() => nav(`/product/detail/${product.id}`,)}
            className="shadow-xl p-3 cursor-pointer" key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        })}
      </div>




    </div>
  )
}
export default Home