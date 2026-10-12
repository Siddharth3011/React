import { useState } from "react"

function App() {
    const [color, setColor] = useState('olive')

    //niche ham onclick mein direct setcolor pass nhi krte kyuki onlcick expect krta hai ki aap usko function pass kro to agr hame setcolor pass kr dete to wahan ham function ka reference pass kr rahe hote na ki function. hn ham reference bhi pass kr skte hai lekin fir ham parameter nhi de paayenge isliye function heen pass krte hai.
  return (
    <div className="w-full h-screen duration-200"
      style = {{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button> 
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
            <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          </div>
        </div>
    </div>
  )
}

export default App
