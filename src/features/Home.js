import { useEffect, useState } from "react";


const Home = () => {

  const [text, setText] = useState('first value');
  const [depend, setDepend] = useState(0);

  const handleChange = (msg) => {
    setText((prev) => {
      console.log(prev);
      return msg;
    });
  }

  const handleDepend = () => {
    setDepend((prev) => prev + 1);
  }


  useEffect(() => {
    console.log('effect call');
    setText('sd;lsd;flkk;sfdl');
  }, [depend]);


  console.log('render');

  return (
    <div className="p-2">

      <h1>{depend}</h1>

      <button onClick={handleDepend} className="px-2  border-4 border-black   bg-black text-white font-serif font-boldrounded-lg">InCrement</button>
      <br />
      <br />

      <button onClick={() => handleChange('lio')} className="px-2  border-4 border-black   bg-black text-white font-serif font-boldrounded-lg">Click me</button>

      <h1>hello text----- {text}</h1>


    </div>
  )
}
export default Home