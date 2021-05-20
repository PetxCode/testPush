import { Button } from 'antd'
import React, {useState, useEffect, useRef} from 'react'

const myQuote = [
  "Hello, it's a beautiful day!",
  "One with God is Majority",
  "Let your light so shine before men",
  "The Earth is the Lord's and the fullnest therefore",
  "I will rejoice and be glad",
]

const myColor = [
  "red", 'black', "green", "brown", "orange", "pink"
]

const myBckImg = [
  "./asset/1.jpg",
  "./asset/2.jpg",
  "./asset/3.jpg",
]

const CardMove = () => {
const chngColr = useRef()
const chngBckColr = useRef()
  const [counter, setCounter] = useState(0)

  const prevQuote = () => {
    if(counter === 0){
      setCounter(myQuote.length - 1)
    }else{
      setCounter(counter - 1)
    }
  }

  const nextQuote = () => {
    setCounter(counter + 1)
  }

  useEffect(()=>{
    setInterval(()=>{
      setCounter(count => count + 1)
    }, 5000)
  }, [])

  useEffect(()=>{
    // chngColr.current.style.color = myColor[Math.floor(Math.random()*myColor.length)]
    // chngBckColr.current.style.backgroundColor = myColor[Math.floor(Math.random()*myColor.length)]
  }, [counter])

  return (
    <div
    style={{
      width:"100vw",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      // backgroundColor:"red"
      flexDirection:"column"
    }}
    >
      <div
      // ref={chngBckColr}
      style={{
        width:"70vw",
        height:"50vh",
        backgroundColor:"lightgray",
        borderRadius:"20px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
        // backgroundI
      }}
      >
        <Button
        type="primary"
        danger
        onClick={prevQuote}
        >Previous</Button>
        <div
        ref={chngColr}
        >{
          myQuote[counter%myQuote.length]
          }</div>
        <Button
        type="primary"
        onClick={nextQuote}
        >Next</Button>

      </div>

<div
  style={{
    width:"70vw",
    height:"50vh",
    backgroundColor:"lightgray",
    borderRadius:"20px",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    marginTop:"30px",
    marginBottom:"100px",
    flexDirection:"column"

  }}
>
<img
        src={myBckImg[counter%myBckImg.length]}
        style={{
          width:"100%",
          height:"100%",
          objectFit:"cover",
          borderRadius:"10px"
        }}
      />
</div>
<div

style={{
  width:"50vw",
  height:"100%",
  justifyContent:"space-between",
  display:"flex",
  marginTop:"0px"
}}>
  <Button
  onClick={prevQuote}
  >Prev</Button>
  <Button
  onClick={nextQuote}
  >Next</Button>
</div>
    </div>
  )
}

export default CardMove
