import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import React from "react"
import axios from "axios"
import { useState } from "react"

  let x = window.innerWidth
  let widthx = x*(10/100)
  




export default function Home () {
 let [quote, setQuote] = useState(" for a programming quote.")
 let [press, setPress] = useState("Press")

 function programming_quote () {
  axios.get('https://programming-quotesapi.vercel.app/api/random')
  .then((response)  => {
    let response1 = response
    let author = response1['data'].author
    let quote = response1['data'].quote
    setPress("Next")
    setQuote(` ${quote}  (${author})`)
     

})
}


    return (
<>
<Helmet>  
  <title>Home</title>
  </Helmet> 

<h3 style={{textAlign: "center", paddingRight: widthx, paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 
Ntuthuko Hlela <button > <Link to='/ntuthuko' style={{textDecoration: "none", color: 'black', boxShadow: 'inherit'}}> About Page </Link> </button>
</h3>

<h4 style={{textAlign: "justify", paddingRight: widthx, paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 

      I like being at the forefront of research, being deeply engaged in meaningful and practical work makes me happy!
        Therefore, this website will mainly focus on research and tech tools that I find interesting.
        I also like life hacks that make me more productive, effective and efficient, so, I will also be writing about these.
</h4>
<p style={{textAlign: "justify", paddingRight: widthx, paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 
 <button onClick= {() =>
  programming_quote ()

        }> {press}  </button>
          {quote}
</p>
        <hr/>
 


<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 1.
<Link to='/Competency' > Competency </Link>  - My approach to competency.
</h4>

<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 2.
<Link to='/Python' > Python Bot  </Link> - Creating a bot using the Difflib module.
</h4>

<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 3. 
  <a href="https://play.google.com/store/apps/details?id=org.infact.myapp"> Infact </a>
 - A simple app I created to keep my curiosity sated. It is only available on the Google Play Store. 
</h4>

<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 4.
<Link to='/React Native Component' > Dynamically creating React Native Components </Link> - An efficient way of creating multiple components in React Native.
</h4>

<div></div>
</>

    )}

