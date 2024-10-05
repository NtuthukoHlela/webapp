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


export default function Ntuthuko () {
    return (
<>
<header style = {{backgroundColor: 'black', color: 'white', height: heighty, margin: 5, fontFamily: 'Fira Sans'}}> <a href = "https://ntuthukohlela.github.io/webapp/#/" style={{margin: 8, color: 'white', textDecoration: 'none'}}>cd ..</a> </header>


<Helmet>  
  <title>Ntuthuko Hlela</title>
  </Helmet>   


<h2 style= {generalStyle}> Ntuthuko Hlela (pronounced: Ntu-thu-ko) </h2>

<div style={{textAlign: "justify", paddingRight:widthx, paddingLeft: widthx}}>

<h3>
Current Positions: 
</h3>

<p>
1. Research Associate - Abdul Latif Jameel Poverty Action Lab (J-PAL)
</p>
<p>
2. Junior Consultant -  World Bank
</p>
<p>
3. Economic Research Assistant - Maya Goldman 
</p>

<h3>
Past Activities/Positions
</h3>

<p>
1. Economic Researcher - Southern Africa Labour And Development Research Unit (SALDRU)
</p>
<p>
2. Quantitative Methods in Economics Tutor - University of Cape Town 
</p>
3. Economics Tutor -  University of KwaZulu Natal
<p>
4. Economics Tutor - South African Institute Of Charted Accountants (SAICA) Thuthuka Program
</p> 

<h3>
(Formal) Education:
</h3>

<p>
1. Master of Commerce Specializing in Economic Development - University of Cape Town  (Waiting for results)
</p>

<p>
1.1. Master of Commerce in Economics - University of Paris Pantheon Sorbonne (Paris, France)  (1 Year Exchange program)
</p>

<p>
2. Bachelor of Commerce (Honours) in Economics - University of KwaZulu Natal (graduated Cum Laude)
</p>

<p>
 3. Bachelor of Art in Economics - University of KwaZulu Natal (graduated Summa Cum Laude)
 </p>

<h3>
Awards
</h3>
<p>
1. Erasmus Mundus Scholarship - University of Paris Pantheon Sorbonne (2022-2023)
</p>

<p>
2. One of the top 10 students in the International Trade / Economics 2022-2023 Class - the University of Paris Pantheon Sorbonne (2022 - 2023)
</p>

<p>
3. National Research Foundation Bursary (2021 - 2023)
</p>

<p>
4. Seven Economic Merit Certificates (2018  -2021)
</p>

<p>
5. Four Deans Commendations  (2018 - 2021)
</p>

<p>
6. Rhodes Scholarship Finalist (KwaZulu Natal Constituency) (2021)
</p>

<p>
7. Golden Key International Honour Society Member  (2019 -  2021)
</p>

<p>
8. Tubingen - South Africa Program - University of Tubingen (Tubingen, Germany) (2020)
</p>

<p>
9. One of the Top 5 students at the University of KwaZulu Natal College of Humanities (2019)
</p>

<h3>
Projects
</h3>
<p>
1. South African Presidency Advisory Team -  I am one of the economists working with the South African Presidency to improve the effectiveness of the  South African Social Relief of Distress Grant (SRD Grant) (Kate Orkin, Maya Goldman, Brynde Kreft,  Ntuthuko Hlela, Ingrid Woolard, and Murray Leibbrandt)  - Ongoing
</p>

<p>
2. Tax financing options for new social protection instruments  (Maya Goldman and Ntuthuko Hlela) - Ongoing 
</p>

<p>
3. The Impact of Fiscal Policy on the Income Distribution in Côte d’Ivoire: 2018 (Maya Goldman, Ian Houts, Ntuthuko Hlela, Eduardo A. Malásquez 1 and Oscar Barriga-Cabanillas) - Ongoing
</p>


</div>
</>
)}

