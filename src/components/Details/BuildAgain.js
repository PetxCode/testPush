import { Button } from 'antd'
import React, {useEffect, useState, useRef} from 'react'



const myQuote = [
  {id: "1", title:"Bless the Lord oh my soul", author: "Bukky"},
  {id: "2", title:"Man know thy self", author: "Aristotu"},
  {id: "3", title:"Tomorrow will be better", author: "Peter"},
  {id: "4", title:"The path is Light is TRUE", author: "Ubani"},
  {id: "5", title:"Our God, Our strength", author: "Tunde"},
  {id: "6", title:"We will bless the Lord at all Times", author: "Gideon"},
  {id: "7", title:"if you can, then what's stopping you?", author: "Thymo"},
]

const colors = [
  "blue", "white", "black", "green", "green", "yellow", "darkblue", "purple"
]

const BuildAgain = () => {
const colorRef = useRef()
const bgClr = useRef()

const [quote, setQuote] = useState(myQuote[3])

const handleQuote = () => {
  const randQuote = Math.floor(Math.random() * myQuote.length)
 
  setQuote(myQuote[randQuote])
  console.log(randQuote)  
  console.log(quote)  
}


useEffect(()=>{
  bgClr.current.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}, [quote])

  return (
    <div
    style={{
      width:"100%",
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}
    >
      <div
      ref={bgClr}
      style={{
        width:"500px",
        height:"300px",
        borderRadius:"20px",
        backgroundColor:"red",
        marginTop:"100px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }}
      >
      
        <div>{quote.title}</div>
        <div>Author: {quote.author}</div>

        <div
        style={{
          width: "300px",
          display:"flex",
          justifyContent:"space-between",
          marginTop:"50px"
        }}
        >
          <Button
          type="primary"
          onClick={handleQuote}
          >Get Quote</Button>
          <Button
          href={`https://twitter.com/intent/tweet?text=${quote}`}
          target="_blank"
          rel="noopener norefereer"
          >Share Quote</Button>
        </div>
      </div>

    </div>
  )
}

export default BuildAgain
