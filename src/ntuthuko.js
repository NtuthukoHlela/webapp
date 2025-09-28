import { Helmet } from "react-helmet";

let generalStyle = {
    color: "black",
    padding: 24,
    fontFamily: " -apple-system",
    textAlign: "center"
  }

  let x = window.innerWidth
  let widthx = x*(10/100)

  let y = window.innerHeight
  let heighty = y*(0.04)


export default function Ntuthuko () {
    return (
<>
<header style = {{backgroundColor: 'black', color: 'white', height: heighty, margin: 5, fontFamily: ' -apple-system'}}> <a href = "https://ntuthukohlela.github.io/webapp/#/" style={{margin: 8, color: 'white', textDecoration: 'none'}}>Home</a> </header>

<Helmet>  
  <title>Ntuthuko Hlela</title>
  </Helmet>   


<h2 style= {generalStyle}> Ntuthuko Hlela (pronounced: Ntu-too-koh) </h2>



<div style={{textAlign: "justify", paddingRight:widthx, paddingLeft: widthx, fontFamily: "-apple-system"}}>

<h3>
Current Positions: 
</h3>

<p>
1. Research Associate - Abdul Latif Jameel Poverty Action Lab (J-PAL)
</p>

<p>
2. Data Analyst - Children's Institute at the University of Cape Town
</p>

<p>
3. Economic Research Assistant - Maya Goldman 
</p>

<h3>
Past Activities/Positions
</h3>

<p>
1. Junior Economic Consultant - World Bank
</p>
<p>
2. Economic Researcher - Southern Africa Labour And Development Research Unit (SALDRU)
</p>
<p>
3. Quantitative Methods in Economics Tutor - University of Cape Town 
</p>
4. Economics Tutor -  University of KwaZulu Natal
<p>
5. Economics Tutor - South African Institute Of Charted Accountants (SAICA) Thuthuka Program
</p> 

<h3>
Education/Training (Selected):
</h3>

<p>
1. Master of Commerce Specializing in Economic Development - University of Cape Town  
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

 <p>
 4. Mathematics for Machine Learning: Linear Algebra Course - Imperial College London (via Coursera)
 </p>


 <p>
 5. Applied Machine Learning in Python Course - University of Michigan (via Coursera)
 </p>

<h3>
Awards (Selected)
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
1. InFact - A simple mobile application that shows facts, jokes and interesting questions: <a href="https://play.google.com/store/apps/details?id=org.infact.myapp"> Google Play Link </a>
</p>
<p>
  2. Job and Degree Search Helper - In progress: <a href="https://searchhelper-145058681244.africa-south1.run.app/">Link</a>
</p>
<p>
  3. GovDocs - SA Government Document Database: <a href="https://www.govdocs.co.za/">Link</a>
</p>


</div>
</>
)}

