import { Helmet } from "react-helmet"
import program_image from "./Program_Structure.png"

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
  

  //let width_p = x*(70/100)
  
export default function PythonBot () {

    return (
<>
<Helmet>  
  <title> Python Bot </title>
  </Helmet>   

  <header style = {{backgroundColor: 'black', color: 'white', height: heighty, margin: 5, fontFamily: ' -apple-system'}}> <a href = "https://ntuthukohlela.github.io/webapp/#/" style={{margin: 8, color: 'white', textDecoration: 'none'}}> Home</a> </header>


<h1 style= {generalStyle}> <b> Creating a python bot </b> </h1>

<div style={{textAlign: "justify", paddingRight:widthx, paddingLeft: widthx, fontFamily: " -apple-system"}}>
<p>
The rise of artificial intelligence has inspired a lot of programmers to create chatbots. A chatbot is simply a software program that simulates human conversation. The goal of this article is to show how to create a simple chatbot using python. 
</p>

<p> <b>We need to first install two modules: </b> </p>
<p>

1) Json  –   a json is a common and convenient file format to store data in. We will use it to store the chatbot’s data.
</p>
<p>
2) Difflib – this is the module that the bot will use to match questions “to answers”. I will expand below. First, install this module. 
</p>
<p>
2.1) Run: pip install difflib in the terminal
</p>

<p>

<b>Whenever programming, always try to picture what you actually want the code/program to do. The following diagram does that:</b>
</p>

<img style={{width:"100%"}} src= {program_image} alt="Program"  />


<h4> Import the required modules </h4>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
  import difflib
  import json

    `}</pre>
</div>

<p> 
  The difflib module is the core of this bot. More specifically, I use the get_close_matches function to try and match the question prompted by the user to the questions that I already have in my database. If the prompted question matches the one in my database, I use the corresponding answer in the latter to answer the user’s question. 
</p>



<h4> Creating a JSON file </h4>

<p>
1)	Create a Json file in the same folder as your main.py (this just make things easier). 
</p>

<p>
2)	Open the file and create a template.
</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
  {"Data": [
    {
      "question": "Hey",
      "answer": "How are you?"
    },
    
    {
      "question": "Good",
      "answer": "What are you talking about?"
    }
  ]}
  

    `}</pre>
</div>

<p>You can think of this as a dictionary. “Data” is the key and the list is the value. Inside the list there are multiple dictionaries which is where the data is stored. </p>

<p> <b> Creating a function that pulls data from the JSON file: </b> </p>

<div style={{backgroundColor: "lightgray", color: "black"}}>
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
  # pulling the json file where we will store our dataset
  def pulling_data(file_path):
      with open(file_path, 'r') as file_read:
          jpal_data= json.load(file_read)
          return jpal_data
  

    `}</pre>
</div>

<p> 
  In cases where the model does not know the answer, the bot will inform the user about
   this fact and then ask the user to give the best possible answer. In this case, the following
    function will be used to add the user’s answer to the database. 
  </p>

  <div style={{backgroundColor: "lightgray", color: "black"}}>
  <pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
  # this functions writes the json file when the user inputs 
  # a question/answer
  def teaching_model(database, file_path):
      with open(file_path, 'w') as data_to_write:
          json.dump(database, data_to_write,  indent=4)
  
    `}</pre>
</div>

  <p> <b> Importing data stored in a JSON file. </b> </p>

  <div style={{backgroundColor: "lightgray", color: "black"}}>

  <pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
  #importing the data and then storing it in a list
  database = pulling_data("jpal.json")
  list_data =  []
  for i in database["Data"]:
      list_data.append(i["question"])
  
`} </pre>
</div>

  <p>
After importing the JSON data, I store it in a list. Remember, fundamentally, 
the bot will be trying to match the questions in the database with the question prompted by the user.
 Then, if the questions match, the program will pull the corresponding answer. The following block of code does this. 
</p>



<div style={{backgroundColor: "lightgray", overflow: "scroll", color: "black"}}>
<pre> {`
while True:
try:
    user_input = input("You: ")
    if user_input == "EXIT":
        print("I am now exiting the program because you want me to.")
        break
    #this function matches the questions prompted by the user to the
     question in the database 

     match_question = difflib.get_close_matches(user_input, 
                      list_data, n=3, cutoff=0.2)
    for z in list_data:
        if z == match_question[0]:
            for u in database["Data"]:
                if u["question"] == z:
                    print("J-PAL bot: ", u["answer"])

except:
    print("I unfortunately do not know what you are talking about, 
    please teach me. Repeat the question and then write 
          the answer. Otherwise, continue probing.")  


  `} </pre>

</div>


<p>
Firstly, I use a while loop so that I can always prompt the user for a question, 
unless the user decides to exit  the program. Then, I use a try and except block to 
smoothly handle an instance where the user gives a prompt that is not understood by the program. 
In simple terms, the try and except blocks made it easier to handle situations where the prompted
 question does not match any question in the database. 
</p>
<p>
The match_question variable – which is a function of the get_close_matches function, is, as 
aforementioned, the core of this bot. The first parameter is user_input; then the list of 
questions in the database is the second parameter. This is followed by the n, which is the
 maximum number of close matches to return. The last parameter “cutoff” is the match score
  below which the match will not be returned. Put more simply, the cutoff float ranges from 0 to 1.
  And, the higher the cutoff, the more accurate the matches will be vice versa. It is worth noting that
   if you set the cutoff parameter too high, you might get zero matches, unless, of course, all the
    prompted questions are exactly the same as those in the database. The opposite is also true, if you
     set the cutoff parameter too low, you might get weak matches. The default/recommended cutoff is 0.6. 
</p> 

<p>That it, this should work. You can extend this programme by building an app around it. You can use the Kivy framework do this. 
</p>

<h4>Full code: </h4>
<div style={{backgroundColor: "lightgray", color: "black", overflow: "scroll"}}>
  <pre>{`
#Imports
import difflib
import json


# pulling the json file where we will store our dataset
def pulling_data(file_path):
    with open(file_path, 'r') as file_read:
        jpal_data= json.load(file_read)
        return jpal_data

# this functions writes the json file when the user
#  inputs a question/answer
def teaching_model(database, file_path):
    with open(file_path, 'w') as data_to_write:
        json.dump(database, data_to_write,  indent=4)



'''
The idea is to be able to use/match the question prompted by the user 
to query what we already have in the database.  This will be done by 
matching the question prompted to the model question 
in the database, then, we will pull the answer.
'''

#importing the data and then storing it in a list
database = pulling_data("jpal.json")
list_data =  []
for i in database["Data"]:
    list_data.append(i["question"])

#this is the main block of code for the bot
while True:
    try:
        user_input = input("You: ")
        if user_input == "EXIT":
            print("I am now exiting the program because
                   you want me to :(.")
            break

        # this function matches the questions prompted by the user
        # to the question in the database
        match_question = difflib.get_close_matches(user_input, 
                        list_data, n=3, cutoff=0.2)
        for z in list_data:
            if z == match_question[0]:
                for u in database["Data"]:
                    if u["question"] == z:
                        print("J-PAL bot: ", u["answer"])

    except:
        print("I unfortunately do not know what you are talking about, 
              please teach me. Repeat the question and then 
              write the answer. Otherwise, continue probing.")

        input_question = input("Repeat your question or enter
                               No to continue: ")
        if input_question == "No":
            print("Ok, continue")
        else:
            input_answer = input("You're now teaching the bot: ")

            input_confirm = input("Are you sure that you want to  
                                  save this answer? Y or N: ")
                                  
            if input_confirm == "YES" or input_confirm == "y" or 
                                  input_confirm == "yes":

                database["Data"].append({"question": input_question, 
                                "answer":input_answer})

                teaching_model( database,"jpal.json")

                print("Thanks, I have saved this lesson.
                       You can continue probing.")
            else:
                print("We did not save your answer, 
                        you can continue probing.")
                `}
</pre>
</div>
</div>
</>

    )}

