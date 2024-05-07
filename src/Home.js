import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"


let generalStyle = {
    color: "black",
    padding: 24,
    fontFamily: "Sans-Serif",
    textAlign: "center"
  }


export default function Home () {
    return (
<>
<Helmet>  
  <title>X</title>
  </Helmet>   

<h1 style= {generalStyle}> <b> Home Page </b> </h1>
<li>
<Link to='/Competency'> Competency </Link>
</li>

<div style={{textAlign: "justify", paddingRight:200, paddingLeft: 200}}>


</div>
</>

    )}

