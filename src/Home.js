import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"


let generalStyle = {
    color: "black",
    padding: 24,
    fontFamily: "Sans-Serif",
    textAlign: "center"
  }
let x = window.innerWidth

let widthx = x/7.44


export default function Home () {
    return (
<>
<Helmet>  
  <title>Home</title>
  </Helmet>   

<h1 style= {generalStyle}> <b> Home Page </b> </h1>
<h1> width = {x} and new padding - width is = {widthx} </h1>
<li>
<Link to='/Competency'> Competency </Link>
</li>

<div>
  <h1>This is a test</h1>
  <h1> {widthx}</h1>

  <p style={{paddingRight: widthx, paddingLeft: widthx, textAlign: 'justify'}}>
  This article aims to outline concrete ways of approaching the road to competency. 
I have always been curious, knowing more excites me, I see competency as the ultimate success. Knowing how to do something thoroughly and expertly is not only a positive locally (people pay you), but it is also beneficial at a societal level (you solve real problems). This raises the question of, how one becomes competent. Below, I list routines/techniques/practices that make learning/working easier/faster, at least for me.   
  </p>

</div>
</>

    )}

