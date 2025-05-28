// npm start ===> local host 
//npm run deploy ===> to deploy to Github pages 
// Quote: Nothing is as permanent as a temporary solution that works
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"

  let x = window.innerWidth
  let widthx = x*(10/100)
  let widthz = x*0.074

  let y = window.innerHeight
  let heighty = y*(0.4)
  



export default function Home () {

 /*
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

  // Button for the Programming qoute API
 
<p style={{textAlign: "justify", paddingRight: widthx, paddingLeft: widthx, fontFamily: ' Courier New'}}> 
 <button onClick= {() =>
  programming_quote ()

        }> {press}  </button>
          {quote}
</p>

*/



    return (
<>
<Helmet>  
  <title>Home</title>
  </Helmet> 


<h3 style={{textAlign: "center", paddingRight: widthx, paddingLeft: widthx, fontFamily: '-apple-system'}}> 
Ntuthuko Hlela <button > <Link to='/ntuthuko' style={{textDecoration: "none", color: 'black', boxShadow: 'inherit'}}> About Page </Link> </button>
</h3>

<p style={{textAlign: "justify", paddingRight: widthx, paddingLeft: widthx, fontFamily: '-apple-system'}}> 
I like being at the forefront of research, and being deeply engaged in technical work, especially when the goal is to solve real-world problems, makes me happy.
 Also, I love coding!    
</p>
        <hr/> 
  
 <h2 style={{paddingLeft: widthx, fontFamily: '-apple-system', color: 'GrayText'}}>2025</h2>

 <div style={{paddingLeft: widthx, fontFamily: '-apple-system'}}>

 <p> <b>28/05: </b> {` `} 
<Link to='/Discipline' > Be Disciplined. </Link> 
</p>


 <p> <label> <b>21/04: </b></label> {``}
<a href="https://ntuthukohlela.pythonanywhere.com/"> 
Personal Dashboard: Everything that matters in one view (Work in Progress 🔧🚧)  </a>
</p>

 <p> <label> <b>03/03: </b></label> {``}
<a href="https://medium.com/@ntuthukohlela15/binary-classifier-accuracy-confusion-matrix-f1-score-roc-curve-and-auc-from-scratch-6b696ee978f0"> 
Binary Classifier Accuracy, Confusion Matrix, F1 Score, ROC Curve and AUC From Scratch </a>
</p>


 <p> <label> <b>16/02: </b></label> {``}
<a href="https://searchhelper-145058681244.us-central1.run.app/"> 
Findx - A job search tool to help people easily browse government job adverts (more features to come). </a>
</p>



 <p> <b>07/01: </b> {` `} 
<Link to='/Convolutional Neural Network' > Convolutional Neural Network </Link>  - A simple Deep Learning model that classifies knives and pistols.
</p>


</div>

 <h2 style={{paddingLeft: widthx, fontFamily: '-apple-system', color: 'GrayText'}}>2024</h2>

 <div style={{paddingLeft: widthx, fontFamily: ' -apple-system'}}>





 <p><b>03/11:</b>{` `} 
<Link to='/Notes' > Principles </Link>  - Things to remember
</p>



<p><b>30/10: </b>{` `}  <a href="https://sa-tied.wider.unu.edu/article/does-south-africas-srd-grant-need-a-major-overhaul"> 
Does South Africa's SRD grant need a major overhaul? </a>   
   </p>



<p> <b>30/09:</b> {`   `}
<a href="https://www.wider.unu.edu/publication/tax-financing-options-new-social-protection-instruments"> 
Tax financing options for new social protection instruments </a> 
</p>

<p> <b>23/09:</b> {` `}
<Link to='/Competency' > Competency </Link>  - My approach to competency.
</p>

<p> <b>18/09: </b>{` `}
<a href="https://www.afd.fr/sites/afd/files/2024-09-12-18-30/SRD_extension_redesign_and_repurposing_for_poverty_reduction.pdf"> 
Proposal for the extension, redesign and repurposing of the SRD for the  twin goals of poverty and  unemployment reduction (Second Version) </a>
</p>


<p> <b>17/08:</b> {` `}
<Link to='/React Native Component' > Dynamically creating React Native Components </Link> - An efficient way of creating multiple components in React Native.
</p>

<p> <b>15/08:</b> {` `}
<Link to='/Python' > Python Bot  </Link> - Creating a bot using the Difflib module.
</p>



<h2 style={{fontFamily: '-apple-system', color: 'GrayText'}}> 2023 </h2>
<p> <b>04/11: </b> {` `}
  <a href="https://play.google.com/store/apps/details?id=org.infact.myapp"> InFact </a>
 - A simple app I created to keep my curiosity sated. It is only available on the Google Play Store. 
</p>


<h2 style={{fontFamily: '-apple-system', color: 'GrayText'}}> 2022 </h2>

<p> <b>22/11:</b> {` `}
<a href="https://mbrg.bsg.ox.ac.uk/sites/default/files/2022-11/SRD-granttargetingjobsearch_0.pdf"> 
Proposal for the extension, redesign and repurposing of the SRD for the  twin goals of poverty and  unemployment reduction</a>
</p>
</div>



<div></div>
</>

    )}

