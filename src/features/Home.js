import { useState } from "react";


const Home = () => {

  const [text, setText] = useState('first value');




  const handleChange = (msg) => {
    setText((prev) => {
      console.log(prev);
      return msg;
    });
  }

  console.log('render');

  return (
    <div className="p-2">

      <button onClick={() => handleChange('lio')} className="px-2  border-4 border-black   bg-black text-white font-serif font-boldrounded-lg">Click me</button>

      <h1>hello text----- {text}</h1>


    </div>
  )
}
export default Home