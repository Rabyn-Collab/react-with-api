import axios from "axios"
import { useState } from "react";


const Home = () => {
  // const [mio, setMio] = useState(null);

  // setTimeout(() => {
  //   setMio('null bhayena')

  // }, 5000)
  const [award, setAward] = useState(null);
  const person = {
    name: 'lio',
    li: {
      msg: 90
    }
  };




  axios.get('https://www.omdbapi.com', {
    params: {
      t: 'spider',
      apikey: '6905a701'
    }
  }).then((res) => {
    console.log(res);
    console.log('call it');
    setAward(res.data.Awards);
  }).catch((err) => {
    // console.log(err.response.data.Error);
  });




  console.log('re render');

  return (
    <div>
      {award && <h1>{award}</h1>}
    </div>
  )
}
export default Home