import { Helmet } from "react-helmet";
import video from './react_video.mp4'

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

<Helmet>  
  <title>React Native Components</title>
</Helmet>   

<header style = {{backgroundColor: 'black', color: 'white', height: heighty, margin: 5, fontFamily: 'Fira Sans'}}> <a href = "https://ntuthukohlela.github.io/webapp/#/" style={{margin: 8, color: 'white', textDecoration: 'none'}}> cd ..</a> </header>



 <h2 style  = {generalStyle}> Dynamically Creating React Native Components </h2>

 <div style={{textAlign: "justify", paddingRight:widthx, paddingLeft: widthx}}>

 <p>
The purpose of this article is to demonstrate how to create React Native Components dynamically. 
By this I mean creating components based on given data instead of hardcoding them. I found myself 
needing to do this in multiple parts of the program that I am currently creating, and I could not 
find an out-of-the-box solution – which then led me to design the logic from scratch. </p>

<p> I will mainly focus on creating a Chip – which is a component from the <a href="https://callstack.github.io/react-native-paper/docs/components/Chip/"> 
react-native-paper library</a>. You can think of this component as a button. 
</p>

<p>
For simplicity, instead of showing the whole program that I am creating, I have written a short script that will
 generate the components dynamically. More specifically, the script’s goal is to enable one to log hours of the
  workday at which they will be available/unavailable. See the video below for a visual description of what the
   code aims to do <b>(the full code is at the end of the article)</b>. Please note that I am assuming that the reader already knows how to set up a React Native App 
   and have at least working knowledge of JavaScript. If not, see the <a href="https://reactnative.dev/"> React Native Website</a>.
</p>

    <video src = {video} style={{width: widthx*8}} controls> 
    </video>


    <p> I first import the libraries that I need to create the program 
  (you will need to install these before importing them. More specifically, I import, </p>

  <li> <code>View</code> – where I will contain all my components. </li>
<li> <code>Text</code> – for showing text </li>
<li> <code>Stylesheet</code> – for styling my components.  </li>
<li>  <code>ScrollView</code> – for making the chips scrollable when the screen width or height is relatively small. </li>
<li> <code>UseState</code> -  this hook will be used for tracking the states of some of the variables. </li>
<li> <code>Chip</code> – this is the core component. </li>
<li> <code>Card</code> - this will contain the chip. It is not necessary, I only used it because it makes the chips look compact. </li>

<p> 
Then, I create the <code> time </code> variable – which is an array with strings. The goal is to have a chip for every element in the array.
 The next two variables are created using the useState hook. The <code> available </code> array will help update the array that will hold times
  at which the user is free. The <code> status </code> array's purpose is to update the chip Icon. It will show a <i>tick</i> when the user is available 
  and an <i>x</i> when the user is not available. The latter state is the default state.
 </p>

<p> 
Following the creation of the variables, I return the view, scroll and card components. This is rather generic. For each component, I declare values 
to relevant properties. 
</p> 

<p>
The third part/section of the code is where everything happens. It is worth remembering the main goal of this program at this stage: 
I want to render chips dynamically based on the elements in an array. To achieve this, I first map the time array so that I can get each
 element and its index. Note that you can use a for-loop here, but I would advise otherwise since it is not only verbose but also complicates
 the whole program. 
</p>

<p> 
I then push “close” to the status array. This is for the chip icon property. The "close" will be the default value of the icon 
(this will render a small 'x'). One might argue that I should have just created a string instead of an array of strings. Doing this makes the 
chip icon states' homogenous – which is the very thing we are trying to avoid.</p>

<p>   
After this, I return the chip component itself. It has multiple properties but I chose to use style, key and onPress. 
Style is mainly for styling, I create an object at the end of the script that describes how this component should look.
 The key property is purely for differentiation purposes. React needs to know which component to call, especially since I
  am creating them dynamically. For this, I simply used the element index. However, one should be free to use anything. 
  The key is to have that “thing” unique to the component in question (pun intended). 
</p>

<p>
The onPress property takes a callback function which I use to declare what should happen when the chip is pressed.
 I do this via two conditional statements.
</p>

<p>
The first conditional statement tests whether the chip has been pressed or not. If the answer is false, I update the available state 
to include the fact that the chip/hour in question has been pressed. Then, I update the status state to include the fact that I am 
available during the hour in question. For this, I use the splice function which helps alter or remove specific elements in an array.
 It takes the following as parameters/arguments: index of the element that you wish to start at; number of elements to remove or alter 
 from the start index; and the value you want to add. 
</p>

<p>
The second conditional statement is literally the mirror of the previous statement. It aims is to catch situations where the chip has
 been pressed. In this case, since we have already logged the chip/hour in question as available, when the user presses the chip again,
  it changes the state back to unavailable. In simple terms, here is what happen,
</p>

<li> Default – unavailable (shows a small x) </li>
<li> Press once – changes to available (shows a small tick) </li> 
<li> Press twice – changes back to unavailable (shows a small x). </li>



    <h4>Full code</h4>

    <pre style= {{fontFamily: "monospace", overflow: "scroll", backgroundColor: "white"}}> 
      {`import {View,  StyleSheet, ScrollView } from "react-native"
import { useState } from "react"
import {Chip, Card, Text} from 'react-native-paper'

export default function () {
    let time = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "17:00"]
    let [available, setAvalaible] = useState([])
    let [status, setStatus] = useState([])
    
     return (
        <View style={{width:900, paddingLeft: 300, paddingVertical:200}}>
            <Text style = {{fontSize:30, paddingLeft: 250}}>Demo</Text>

            <br></br>

            <ScrollView horizontal={true}>
                <Card style={{flexWrap: "wrap", paddingHorizontal: 12, borderRadius:30}} >
                    <View style={{flexDirection: "row"}}>

            
                {time.map((element, index) => {
                    status.push("close")
                    return(
                    <Chip  style ={style.chip} key = {index} icon= {status[index]} onPress={() => {
                            
                            if (available.includes(element) === false) {
                                setAvalaible([...available, element])
                                status.splice(index, 1, "check")
                                setStatus([...status])
                            }
                                

                            else if (available.includes(element) === true) {
                                available.splice(available.indexOf(element), 1)
                                setAvalaible([...available])
                                status.splice(index, 1, "close")
                                setStatus([...status])
                                
                            } 
                            }}
                            
                            > {element}  </Chip>
                )})}

                </View>
            </Card>
        </ScrollView>


    </View>
    )}

let style = StyleSheet.create({
    chip:
     {
        backgroundColor: "grey",
        margin: 4,
        borderRadius:30
     }
})`}</pre>

<h4>Summary</h4>
<p>
The goal of this article was to show how to create a react component that incorporates some functionality dynamically.  
This was done by mapping elements of an array and then returning the Chip component that has two functionalities. 
First, change the icon of the chip being pressed to either available or unavailable. Then, push or pop the hour in question 
to or from an array based on how many times the button in question has been pressed. 
</p>



</div>
</>
)}
