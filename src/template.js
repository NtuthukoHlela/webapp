import { Helmet } from "react-helmet";

let generalStyle = {
    color: "black",
    padding: 24,
    fontFamily: "Sans-Serif",
    textAlign: "center"
  }

  let x = window.innerWidth
  let widthx = x*(10/100)

export default function Ntuthuko () {
    return (
<>

<Helmet>  
  <title>Ntuthuko Hlela</title>
  </Helmet>   


<h2 style= {generalStyle}> Ntuthuko Hlela (pronounced: Ntu-thu-ko) </h2>

<div style={{textAlign: "justify", paddingRight:widthx, paddingLeft: widthx}}>


</div>
</>
)}
