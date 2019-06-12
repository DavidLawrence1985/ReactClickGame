# ReactClickGame

Click game where the user clicks images on the page and if the images has yet to be clicked the users score increases by 1.
Once a user clicks thet first image the images will shuffle their location on the page and the score will register 1.
If the user clicks the same image twice, the user is sent an alert telling them they have lost and the images shuffle and reset the score to 0.

## Tech

This is a react app 
For styling purposes bootstrap was used for cards. All other style is CSS.
All logic for the app is writted in javascript. 


### App logic
Once an image is clicked, the value of its name is compared to an array to see whether it exists in the array.
If the name of the image doesn't exist it is added to the array and the users score is incremented. 
If the name of the image does exist in the array the user is alerted they have lost. 
The array is then set to an empty array and the score is set back to zero.
To win array lenght is compared to the total number of imgages on the page, once they are equal the user is alerted they have won.
The array is then emptied and the score returned to zero.


