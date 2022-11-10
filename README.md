
# PP2-Collective-Nouns-Quiz
A fun, educational quiz based on collective nouns of the English language

## The Collective Nouns Quiz
### Aim of this Quiz

Collective nouns are names given to groups of things, people, birds and animals.
They are a fun part of the English language, with many of them being funny or unusual, such as a 'crash' of rhinoceroses, or a 'horde' of hamsters.
The Collective Noun Quiz is easy enough for children and adults alike to navigate and have fun while learning.

### Responsive Mock-up of The Collective Noun Quiz
![Image of Quiz on Different Size Screens](README.Images/reponsive.PNG)


### Link to Live Deployed Collective Noun Quiz Page
[The Collective Noun Quiz](https://shellybrady.github.io/PP2-Collective-Nouns-Quiz/)


## Features of The Collective Noun Quiz

### The Heading
The heading is a call to action-an invitation to the viewer to catch their attention.
The next line is a challenge to the viewer to test their skills and interact with the quiz.

### The Question Area
The middle part of the quiz is taken up by the question and, underneath it, the current collective noun. The user must decide whether the collective noun is right or not.

### The Answer Buttons
Immediately below the question are the two answer buttons-basically true and false. The true button is labelled "I think that's right" whereas the false button is labelled "I don't think so". The buttons change colour when the pointer is hovered over it. 

### The Score Area
If the user clicks the button labelled with the correct answer for the current question, the number on the left of the score will increase by one point. If they choose the wrong answer, it will not change. The number on the right indicates how many questions there are to answer in the quiz.

### The Controls
The latter part of the quiz is taken up by the control buttons- prev/next, restart and submit. The restart button resets the quiz to its original view. The submit button submits the user's score and delivers feedback on the user's performance.
If the user gets less than three questions correct, they will see a message that says, "Maybe you should try again!" An image of a litter of kittens with sad faces will show under the feedback.
If the user gets 7 or more points, they will see a message that says, "Well done, you did great!" accompanied by a photo of dolphins that look like they are smiling.



## Features I Would Implement in the Future

If I were to develop this quiz further, I might add some of the features in the list below:

* Add levels of difficulty to make the quiz more challenging for those that find it too easy.
* Add instructions in a pop box or in clickable menu.
* Add ability for the user to enter their name.
* Add a high score board showing users' names.
* Add fun images to each question to make it more attractive.
* Add sounds that can be turned on if the user wishes.

# UX

## User Stories
+ As a user, I would like:
   1. to enjoy testing my knowledge.
   2. to find it easy to get around the quiz.
   3. to have educational games for my child to play.
   4. to enjoy the aesthetics of apps i use.

+ As a site owner, I want:
   1. for users to enjoy my quiz.
   2. for children to be able to use it.
   3. for it to be educational but not boring.   

## Structure and Surface


![View of Quiz](README.Images/Colour%20and%20Layout.PNG)


* The layout of the headings are large and bold in a fun font. It is black against a pale beige background for contrast and easy legibility.
* The current question is surrounded by a border and shaded with a very pale background to make the question stand out for the user.
* The buttons are in a vibrant shade of pink/purple for easy viewing. The colour of the buttons change colour when the pointer hovers over them to make it more obvious that the pointer is over that button. The buttons are also usable with keyboard navigation keys and/or tab key.
* Behind the quiz, the background is filled with pale blue to pale pink gradient for some fun colour pop.
* Fonts used are Secular One, Poppins and Fugaz One which I downloaded from Google Fonts. I chose these for easy reading and large, clear letters.


## Responsiveness


* The project is responsive sized up and down, however I chose to make two media queries at 600 px screen width and below, and 601 px and above. I felt the headings were too imposing on the smaller screens and I also made the images more responsive.


![600px and below](README.Images/Below%20600px%20screen%20width.PNG)   


![601px and above](README.Images/Above%20600%20px%20screen%20width.PNG)


# Wireframes


![Wireframe of The Collective Noun Quiz](README.Images/Wireframe%20for%20Quiz.PNG)


* I used Balsamiq to make  a basic wireframe of the quiz outline I wanted to have. 


# Testing

## Manual Testing

* Desktop
    * Pages all load and all page features are working.
    * Tested and working as intended on Firefox and Chrome browsers.

* Mobile
    * Tested and working as intended on iPhone SE, iPhone 12, Samsung Galaxy S8 and Note.

* Google Chrome Dev Tools
    * Tested and working responsively on all available devices.

* Links 
    * All links clicked and all resulting in expected results.  

## Automated Testing

![CSS Validation](README.Images/CSS%20W3%20Validation%20Passed.PNG)

![lighthouse testing](README.Images/lighthouse%20testing.PNG)

![HTML Validation](README.Images/Nu%20HTML%20Validation.PNG)

![JS Validation](README.Images/JSHint%20JavaScript%20Validation%20Passed.PNG)

## Validator Testing

* Html
Issue with the image link for the results images on JavaScript. Empty src and alt not allowed, but I couldn't get the images working another way in the time I had left. If I had more time, I would have fixed it or removed images altogether if I could not figure it out.

* CSS
Passed validation.

* JavaScript
Passed validation, besides warnings for const use and to use ES6.

* Lighthouse
Passed, see screenshot.


# Deployment

The site was deployed to GitHub pages. 
The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab and choose Pages.
From the source section drop-down menu, select the Master Branch
Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here -[Collective Noun Quiz](https://shellybrady.github.io/PP2-Collective-Nouns-Quiz/)

### To Fork and Clone the repository
<br>

If you need instructions to fork or clone the repo please see the following links:
- [fork repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

- [clone repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository)
<br>


# Credits 

## Content
- The fonts used were imported from Google Fonts https://fonts.google.com

## Media
- Images are open source and from Pixabay. I ended up not using these second time around.

## Code
Credit and Acknowledgment to the following sites for help with code or inspiration:
- W3Schools for general information.
- www.codingninjas.com for a lot of basic code help to start my project off with.
- I have really struggled with JavaScript and have not yet conquered it. 
  I used the following tutorial as the basis for my project. Although I spent days and days 
  changing the code to make it my own, everything kept breaking. I realise I may have failed again and if I have to repeat this project again I would choose a completely different project.
  So in saying that, huge credit must go to https://www.codingninjas.com/codestudio/library/how-to-create-a-quiz-app-using-javascript.
- Stack Overflow, Geeks4Geeks and Code Institute for tips, etc.
- amiresponsive? for image of deployed website of different devices.
- Balsamiq for making wireframes.

# Acknowledgments

I would like to thank everyone at Code Institute for the support and guidance, my cohort on Slack and the wider Slack community.
As above, I must acknowledge www.codingninjas.com for their tutorial which I used to get any kind of project in JS sent in.
I would also like to thank my family and my cats for not giving up on me when JavaScript made me want to give up on myself.

