import { Helmet } from "react-helmet";

let generalStyle = {
    color: "black",
    padding: 24,
    fontFamily: "Sans-Serif",
    textAlign: "center"
  }

  let x = window.innerWidth
  let widthx = x*(10/100)

export default function competencyPage () {

    return (
<>

<Helmet>  
  <title>XX</title>
  </Helmet>   


<h1 style= {generalStyle}> <b> XX </b> </h1>

<div style={{textAlign: "justify", paddingRight:widthx, paddingLeft: widthx}}>


</div>
</>

    )}

