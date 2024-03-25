import { DiAndroid, DiCss3, DiGithubFull, DiJavascript, DiKomodo, DiNetmagazine, DiPython, DiReact } from "react-icons/di";

const Tech = () => {
  return (
    <div className="mt-9 mb-2 space-y-9">
      <h1 className="text-center font-semibold text-3xl">Technologies I Use</h1>
      <div className="grid grid-cols-auto-fit place-items-center gap-y-5 ">

        <DiAndroid size={150} />
        <DiPython size={150} />
        <DiReact className="animate-bounce" size={150} />
        <DiJavascript size={150} />
        <DiCss3 className="hover:scale-125 transition-all  duration-300 hover:text-pink-600 cursor-pointer ease-in-out" size={150} />
        <DiGithubFull size={150} />
        <DiNetmagazine size={150} />
        <DiKomodo size={150} />

      </div>
    </div>
  )
}
export default Tech