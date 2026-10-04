import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8) //here 8 is the default value. //if you don't write this default value then its value become undefined and our further loop will not work or give an error.
  const [numberAllowed, setNumberAllowed] = useState(false) //In default condition the number box is not checked so here we write false
  const [characterAllowed, setCharacterAllowed] = useState(false) 
  const [password, setPassword] = useState("")

  //using useRef hook:
  const passwordRef = useRef(null) //it is used only to give a better user reference

  const passwordGeneretor = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "0123456789"
      if(characterAllowed) str += "!@#$%^&*-+=_-`[]{}~"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()*str.length)
        pass += str.charAt(char)
        
      }
      setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword]) //ye line project ko optimize krne ke liye hai. 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();  // here ?. is an optional chaining operator. it checks that if passwordRef.current exist then run the .select operation although don't do anything. It help to make our project safe
    // passwordRef.current?.setSelectionRange(0,4)  //use to select a range of values. which is then copied.
    window.navigator.clipboard.writeText(password) //
  }, [password])

// using useEffect hook:
useEffect(()=> {passwordGeneretor()
}, [length, numberAllowed, characterAllowed, passwordGeneretor]) //aur ye line agr kuch bhi ched chad ho to usko handle krne ke liye use kiya jata hai.

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'> 
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='className= "flex-shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder="Password"
          readOnly 
          ref = {passwordRef} //it help browser in some features like selecting, highlighting text which require talking to html.
          />
          <button
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex test-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max = {100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(Number(e.target.value))}} //number is written to convert the string value to number and here e is the event object
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={() => {setNumberAllowed((prev)=>!prev) //it will change the previous selection to new selection means true to false or false to true.
            }}
            />
            <label htmlFor="numberInput">Numbers </label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked = {characterAllowed}
            id='characterInput'
            onChange={() => {setCharacterAllowed((prev)=>!prev)}}
            />
            <label htmlFor="characterInput">Characters</label>
            </div>
        </div>
      </div>

    </>
  )
}

export default App
