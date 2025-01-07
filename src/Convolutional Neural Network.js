import { Helmet } from "react-helmet"
import knife_test from "./Knife_test.jpeg"
import pistol_test from "./pistol_test.jpeg"

import knife_pred from "./knife_pred_output.png"
import pistol_pred from "./pistol_pred_output.png"
import CNN_diagram from "./Neural Network.png"




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
  

  //let width_p = x*(70/100)
  
export default function CNN () {

    return (
<>
<Helmet>  
  <title> Convolutional Neural Network:   </title>
  </Helmet>   

  <header style = {{backgroundColor: 'black', color: 'white', height: heighty, margin: 5, fontFamily: 'Fira Sans'}}> <a href = "https://ntuthukohlela.github.io/webapp/#/" style={{margin: 8, color: 'white', textDecoration: 'none'}}> cd ..</a> </header>


<h1 style= {generalStyle}> <b> Training a Convolutional Neural Network </b> </h1>

<div style={{textAlign: "justify", paddingRight:widthx, paddingLeft: widthx}}>

<p>
The purpose of this article is to show how to train a Deep Learning model. More specifically, I will train a gun-versus-knife (binary) classifier using the 2D Convolutional Neural Network (CNN) in the Keras framework. The fundamental goal of the model will be to predict if a picture is showing a gun or a knife. To follow this article, you should have at least a basic understanding of Python.
</p>

<p>
The following CNN can be diagramatically depicted as follows (except that we also have flattening layer - which is essentially irrelevant when one uses a Global Max Pooling layer after the Conv2d layer). It is also worth noting that our model has a 1 output neuron/node not three:
</p>

<img style={{marginLeft:"24%"}} src= {CNN_diagram} alt="Program"/>
<p> Source: (Sharma, 2024) </p>


<p>
  The most important and time-consuming part of training a Machine Learning (ML) or Deep Learning model (which is a branch of ML) is data preprocessing. This is simply because the data does not always come in a usable format.
</p>

<p> 
Case in point, below I create a function that takes images of guns and knives in the JPEG format and then returns them as arrays holding the pixels of the picture. (It is not possible to train raw images, hence we change everything to numbers.)
</p>

<p> First, import the following modules/libraries/frameworks:</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
import keras
import numpy as np
import os
from PIL import Image
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

    `}</pre>
</div>


<p>
Keras is the deep learning framework I use to train the model; numpy is the library for creating multidimensional arrays—which play a crucial role in Machine Learning; os is a Python module I use to access my operating system; PIL is the library I use to read images; I use matplotlib to convert arrays into images; lastly, I use sklearn—which is another powerful ML library—to split my training and test data. Before importing these tools, you have to install them first, except for os, which comes with Python.
</p>

<p>
After importing the relevant tools, I make the directories where I will store the pictures:
</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
!mkdir knives_folder
!mkdir pistols_folder
    `}</pre>
</div>

<p>
It is common in the ML community to have separate training and testing folders, as we try to prevent training on testing data. Another way of doing this is to simply split the data before training—which is the approach I have taken.
</p>

<p>
Now that everything is installed and the directories are created, the next step is to create the data preprocessing function:
</p>.

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
def image_to_array(image_folder):
    object_folder = os.listdir(image_folder)
    object_folder_len = len(object_folder)


    images_array = []
    counter =  0
    while counter < object_folder_len:
        counter = counter + 1
        try:
            image = Image.open(image_folder + "/" + object_folder[counter])
            image = image.convert('L')
            image = image.resize([227, 227])
            image_array = (np.asarray(image))
            image_array = image_array/255
            image_array = image_array.reshape(227, 227, 1)

            images_array.append(image_array)


        except:
            print("Skip")       #Some images do not open or fail to resize, hence skip.


    images_array = np.array(images_array)
    return images_array    `}</pre>
</div>


<p>
The function has one parameter: the image folder. In other words, given the folder path, the function should be able to prepare the data that will be used by the model.
</p>

<p>
Using the os module, I get all the pictures in the folder and then count them. Then I create an array (or a list, to be technically correct) that I will use to append all the image arrays created during the while loop. The loop first tries to open the image and then converts it into a grayscale image. This not only simplifies the input—by collapsing the depth of the image from three channels for every pixel to just one—but also minimizes the negative effect that color might have on the model. Another way of thinking about this is that, by making all the pictures one color (gray), the model can focus its computational power on identifying patterns and features in each image.
</p>

<p>
Next, I resize the images because not all images have the same size. This is followed by converting the image into an array so that the model can read the patterns. I then normalize each image array by dividing by 255 (which scales the values between 0 and 1 instead of 0 and 255—this makes it easier for the model to learn patterns). The reshape line reshapes the picture into 3D so that it can be processed by the model. One might ask why we need to represent the picture in 3D when we are using a 2D convolutional neural network. The third dimension is simply the depth of the image. Normally, one would have three channels (Red, Green, and Blue). However, since we converted the images to grayscale, as explained above, the depth is now one. In our case, the image will be represented by a 3D array, with the third dimension indicating the grayscale channel.
The except block is there to account for cases where the image fails to open, resize, or reshape.
</p>

<p>
  Calling the function:
</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
knives_array = (image_to_array("/content/knives_folder"))
pistol_array = (image_to_array("/content/pistols_folder"))

y_knives_array = np.zeros(len(knives_array))
y_pistols_array = np.ones(len(pistol_array))

X_array = np.concatenate((knives_array, pistol_array), axis=0)
y_array = np.concatenate((y_knives_array, y_pistols_array), axis=0)
#print(y_array)
permuter = np.random.permutation(len(X_array))
X_array = X_array[permuter]
y_array = y_array[permuter]

#Splitting the Data
X_train, X_test, y_train, y_test = train_test_split(X_array, y_array,train_size=0.8, random_state=2025)
return images_array    `}</pre>
</div>



<p>
I call the function twice: once for the knives folder and once for the pistols folder. Then, I create the output variables (y_knives_array and y_pistols_array), which have only one dimension. Since this is a binary classification, I label knife images as zero and pistol images as one. I then concatenate and permute the arrays so that we have one array for all inputs (knives and pistol images) and one array for the outputs (zeros and ones). The permutation step simply shuffles the images (and their output values). The last line of code splits the data into training and test data. As is common in the machine learning community, I use an 80/20 split, where 80% of the data is used for training and the rest for testing/evaluation. The random_state variable ensures the model is replicable.
</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
knives_array = (image_to_array("/content/knives_folder"))
pistol_array = (image_to_array("/content/pistols_folder"))

y_knives_array = np.zeros(len(knives_array))
y_pistols_array = np.ones(len(pistol_array))

X_array = np.concatenate((knives_array, pistol_array), axis=0)
y_array = np.concatenate((y_knives_array, y_pistols_array), axis=0)
#print(y_array)
permuter = np.random.permutation(len(X_array))
X_array = X_array[permuter]
y_array = y_array[permuter]

#Splitting the Data
X_train, X_test, y_train, y_test = train_test_split(X_array, y_array,train_size=0.8, random_state=2025)
 `}</pre>
</div>



<p>
Now that the data has been preprocessed, I train the model. Before diving into the code, it is worth noting that my goal here is not to provide a state-of-the-art model but to show how I can start training the neural network.
</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
#Model Training
model = keras.Sequential([
    keras.layers.Input(shape = (227,227,1)),
    keras.layers.Conv2D(filters=200, kernel_size=(2, 2), strides=(2, 2), activation='relu'),
    keras.layers.MaxPooling2D(pool_size=(2, 2)),
    keras.layers.Flatten(),
    keras.layers.Dense(units = 200, activation='relu'),
    keras.layers.Dense(units = 1, activation='sigmoid')
])

model.compile(optimizer=keras.optimizers.Adam(), metrics=[keras.metrics.binary_accuracy],
                loss=[keras.losses.binary_focal_crossentropy])
model.fit(X_train, y_train, epochs=30)
model.save("./ReLU_model.keras")`}</pre>
</div>


<p>
I first instantiate my model using the Keras Sequential class (there are other ways of doing this, for example, using the functional approach—which is a bit more verbose but flexible). The Sequential class allows one to stack the layers of the model sequentially. In the first layer, the input layer, I specify the shape of my images, which is (width=227, height=227, depth=1). This tells the model that each image has 227x227x1 pixels. A more intuitive way to think about it is that each image has 227 pixels horizontally, 227 pixels vertically, and one channel per pixel.
</p>
<p>
The second layer—one of the most important layers in the stack—is the Conv2D (2D Convolution) layer. Filters determine how many patterns/features the model should look for in each pixel. The kernel size specifies the size of the area to analyze at a time (e.g., 2x2 pixels). Strides determine how far the filter moves from one position to the next. In our case, the model moves by two pixels horizontally and two pixels vertically. If you start with a 10x10 image, you end up with a 5x5 output. Lastly, the activation function (ReLU) introduces non-linearity, which is essential because real-world data is non-linear.
</p>
<p>
The MaxPooling2D layer reduces the size of the array, thereby decreasing computational requirements while focusing on clearer patterns/features. Flattening converts the 2D data into a 1D array. The Dense layer is where most of the learning happens. It contains 200 neurons/nodes that process the input data and learn patterns extracted by the Conv2D layer. The final Dense layer is the output layer, which outputs a probability for binary classification. If the value is above 0.5, the model predicts the image is a gun; otherwise, it predicts a knife.
</p>

<p>
Then I compile the model by declaring an optimizer (Adam) and a loss function (binary focal cross-entropy). Binary accuracy measures the model's accuracy. Finally, I train and save the model. 
</p>

<p>
Then I evaluate it as follows:
</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
model2 = keras.models.load_model("./ReLU_model.keras")
results = model2.evaluate(X_test, y_test)
print("cross-entropy loss: ", results[0])
print("binary accuracy: ", results[1])
`}</pre>
</div>


<p>
This produces the following results:
</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
3/3 ━━━━━━━━━━━━━━━━━━━━ 1s 79ms/step - binary_accuracy: 0.7730 - loss: 0.2156
cross-entropy loss:  0.22881366312503815
binary accuracy:  0.7647058963775635

`}</pre>
</div>


<p>
Then, I download two random pictures on the internet to classify. This is  the fun part (or the most excruciating part, dependending on your model’s performance). The following function simply preprocesses these images.
</p> 

<img style={{width:"30%"}} src= {knife_test} alt="Program"  />

<img style={{width:"30%", marginLeft:"30%"}} src= {pistol_test} alt="Program"  />

<p> Function to preprocess these images and then classify:</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
def model_prediction(image_path):
  test_image = Image.open(image_path)
  test_image = test_image.convert('L')
  test_image = test_image.resize([227, 227])
  test_array = (np.asarray(test_image))
  test_array = test_array/255
  test_array = test_array.reshape(1,227, 227, 1)

  probability = (model2.predict(test_array))

  if probability > 0.5:
    print("The following Picture is a Pistol with a probability of => ", probability)
  else:
    print("The following picture is a Knife with a probability of => ", (1 - probability))

  plt.imshow(test_image)
  plt.show()
`}</pre>
</div>

<p>Pistol prediction and output:</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
model_prediction("/content/pistol_test.jpeg")`}</pre>
</div>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
1/1 ━━━━━━━━━━━━━━━━━━━━ 0s 20ms/step
The following Picture is a Pistol with a probability of =>  [[0.9132601]]("/content/pistol_test.jpeg")`}</pre>
</div>
<img style={{width:"30%"}} src= {pistol_pred} alt="Program"/>

<p>Knife prediction and output:</p>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
model_prediction("/content/Knife_test.jpeg")`}</pre>
</div>

<div style={{backgroundColor: "lightgray", color: "black"}}>  
<pre style= {{fontFamily: "monospace", overflow: "scroll"}}> {`
1/1 ━━━━━━━━━━━━━━━━━━━━ 0s 20ms/step
The following picture is a Knife with a probability of =>  [[0.9481707]]`}</pre>
</div>
<img style={{width:"30%"}} src= {knife_pred} alt="Program"/>



<p>
Despite being able to classify these pictures accurately, the model is still far from being the best. This is simply because it has not been fine-tuned. Future articles will explore how to create state-of-the-art models
</p>

</div>
</>

    )}

