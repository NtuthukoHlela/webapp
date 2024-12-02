import { Helmet } from "react-helmet";

let generalStyle = {
    color: "black",
    padding: 24,
    fontFamily: "Sans-Serif",
    textAlign: "center"
  }

  let x = window.innerWidth
  let widthx = x*(10/100)

  let y = window.innerHeight
  let heighty = y*(0.04)


export default function Notes () {
    return (
<>
<header style = {{backgroundColor: 'black', color: 'white', height: heighty, margin: 5, fontFamily: 'Fira Sans'}}> <a href = "https://ntuthukohlela.github.io/webapp/#/" style={{margin: 8, color: 'white', textDecoration: 'none'}}>cd ..</a> </header>


<Helmet>  
  <title>Principles</title>
  </Helmet>   


<h2 style= {generalStyle}> Principles: Things to Remember   </h2>

<div style={{textAlign: "justify", paddingRight:widthx, paddingLeft: widthx}}>
<ul>
<li>When you feel stuck, revisit the problem definition and try to visualize the desired outcome. Always ensure that you understand what you are trying to solve and how the solution should look. </li>
<li> Do not be too busy for everything. </li>
<li> Do hard things, be brave. </li>
<li> Sometimes you just have to deal with the cards you are  dealt, make them work. </li>
<li> When creating algorithms, try to code as many checks and balances as possible in order to increase your confidence in the program's output.  </li>
<li> Always take the soft coding route (instead of hard coding stuff). The former is indeed harder than the latter but it minimizes the number of bugs. This is definitely the case for large codebases. </li>
<li> Once you get tired of coding, take a break. Any additional code written in this state is often of lower quality.  </li>
<li>Once you start copying and pasting your code, there is a scope for a loop/function.  </li>
<li>Always strive to make your code lean and simple. Be clear in your documentation, it always helps. Always.  </li>
<li> Measure 'hard work' by the tasks you complete, not just by the time you spend working.  </li>
<li>It’s better to actually try something than to spend a lot of time thinking about it. Tinker with things. Hack things. </li>
<li>Sometimes the best way to solve an algorithmic problem is to use a completely different approach/algorithm. </li>
<li>When your code does not run, always read the error message first. It's astonishing how often coders (myself included) attempt to debug before doing so.   </li>
<li>Have a goal, aim at something specific.</li>
<li>Do what makes you like and respect yourself, not just what you enjoy.</li>
<li>Nothing great is easy. </li>
</ul>

</div>
</>
)}

