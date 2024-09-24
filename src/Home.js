// npm start ===> local host 
//npm run deploy ===> to deploy to Github pages 

import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"

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
<a href="https://www.wider.unu.edu/publication/tax-financing-options-new-social-protection-instruments"> 
Tax financing options for new social protection instruments </a>  -  <a href="https://www.linkedin.com/in/maya-goldman-2226a019/" > Maya Goldman </a>  and Ntuthuko Hlela 
</h4>


<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 2.
<Link to='/Competency' > Competency </Link>  - My approach to competency.
</h4>

<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 3.
<Link to='/Python' > Python Bot  </Link> - Creating a bot using the Difflib module.
</h4>

<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 4. 
  <a href="https://play.google.com/store/apps/details?id=org.infact.myapp"> Infact </a>
 - A simple app I created to keep my curiosity sated. It is only available on the Google Play Store. 
</h4>

<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 5.
<Link to='/React Native Component' > Dynamically creating React Native Components </Link> - An efficient way of creating multiple components in React Native.
</h4>

<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 6.
<a href="https://mbrg.bsg.ox.ac.uk/sites/default/files/2022-11/SRD-granttargetingjobsearch_0.pdf"> 
Proposal for the extension, redesign and repurposing of the SRD for the  twin goals of poverty and  unemployment reduction </a>

  -  <a href="https://www.linkedin.com/in/kate-orkin-853a0665/" > Kate Orkin </a>,
  <a href="https://www.linkedin.com/in/maya-goldman-2226a019/" > Maya Goldman </a>,
  <a href="https://www.linkedin.com/in/brynde-kreft-170090196/" > Brynde Kreft </a>,
  Desmond Fairal,
  <a style = {{marginLeft: 5}} href="https://www.linkedin.com/in/alice-cahill-22a0671b4/" > Alice Cahill </a>,
Ntuthuko Hlela,
<a href="https://mbrg.bsg.ox.ac.uk/person/aliya-chikte#:~:text=Aliya%20is%20a%20Research%20Associate%20at%20J-PAL" > Aliya Chikte </a>,
<a href="https://www.linkedin.com/in/ingrid-woolard-bba27244/" > Ingrid Woolard </a> and
<a href="https://www.linkedin.com/in/murray-leibbrandt-36416513/" > Murray Leibbrandt </a>



</h4>





<div></div>
</>

    )}

