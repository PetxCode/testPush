import { Button } from 'antd'
import React, {useState, useEffect, useRef} from 'react'




const myQuote = [
 " It's a new day, make the best of it",
 "There will be light at the End of the Tunnel",
 "This is the day that the Lord has made, we'll rejoice and be glad in it",
 "Man know thy self...!",
 "so, it a beautiful day ahead..."
]

const newQuote = [
  {name: " It's a new day, make the best of it", author:"Peter"},
  {name: "There will be light at the End of the Tunnel", author:"Okus"},
  {name:   "This is the day that the Lord has made, we'll rejoice and be glad in it", author:"Ubani"},
  {name: "Man know thy self...!", author:"Ndidi"},
  {name: "so, it a beautiful day ahead...", author:"Bukky"},
]

const colors = [
  "red", "tomato", "pink", "black", "green", "lightblue"
]

const NewTest = () => {
  const textRef = useRef()
  const [changeQuote, setChangeQuote] = React.useState(0)
  const[quoter, setQuoter] = useState([0])


  const handleQuote = () => {
   let rand = Math.floor(Math.random() * newQuote.length)
   setQuoter(newQuote[rand])

   console.log(rand)
   console.log(quoter)
  }



  const nextQuote = () => {
    setChangeQuote(changeQuote + 1)
   
  }

  const previousQuote = () => {
    if(changeQuote === 0){
      return setChangeQuote(myQuote.length - 1)
    }else{
      setChangeQuote(changeQuote - 1)
    }
  }

  useEffect(()=>{
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
  }, [quoter])

  return (
    <div
    style={{
      width:"100%",
      display:"flex",
      justifyContent:"center",
      flexDirection:"Column",
      alignItems:"center",
      height:"100%",
      marginTop:"100px"

    }}
    >
      <div>Buiding a Quote</div>

      <div
      style={{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:"30px",
        width:"100%"
      }}
      >
        <Button
        onClick={previousQuote}
        
        >Previous Quote</Button>

<div
      style={{
        marginLeft:"10px",
        width:"350px",
        display:"flex",
        justifyContent:"center",
        fontWeight:"bold",
        fontSize:"25px",
        textAlign:"center",
        flexDirection:"column",
      }}
>

  <div>{myQuote[changeQuote % myQuote.length]}  </div>
  <Button
  onClick={ handleQuote}
  >New Quote</Button>
  <div ref={textRef} 
  // style={{
  //   color: "black"
  // }}
  >{quoter.name}  </div>
</div>

        <Button
        onClick={nextQuote}
        >Next Quote</Button>
      </div>



    </div>
  )
}

export default NewTest
