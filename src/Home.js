import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"



  let x = window.innerWidth
  let widthx = x/20
  
export default function Home () {
    return (
<>
<Helmet>  
  <title>Home</title>
  </Helmet>   

<h3 style={{textAlign: "center", paddingRight: widthx, paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 
Ntuthuko Hlela 
</h3>
<h4 style={{textAlign: "justify", paddingRight: widthx, paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 

      I like being at the forefront of research, being deeply engaged in meaningful and practical work makes me happy!
        Therefore, this website will mainly focus on research or tech tools that I find interesting.
        I also like life hacks that make me more productive, effective and efficient, so, I will also be writing about these.
         <br/> </h4>

        <hr/>


<h4 style={{paddingLeft: widthx, fontFamily: 'Fira Sans'}}> 1.
<Link to='/Competency' > Competency </Link>
</h4>

<div>

</div>
</>

    )}

