import Chai from "./chai";


function App() {
  const username = "Siddharth";
  return (
    <>
    <Chai />
    <h1>Hello {username}</h1> {/* here {username} is a evaluated expression. */}
    <p>Lorem ipsum dolor sit amet.</p>
    </> //we can only return one parent element so we use React fragments.
    //it is like we write a div but we don't want to write div many times. so we remove the <div>...</div> and write <>...</>.
  )
}

export default App
