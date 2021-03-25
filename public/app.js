
// transfer all info to env
var firebaseConfig = {
    apiKey: "AIzaSyAu0pNoEMxSd7QcZqFSLJ1ZBqbUrRdRJ3Q",
    authDomain: "lifestories-9f02d.firebaseapp.com",
    projectId: "lifestories-9f02d",
    storageBucket: "lifestories-9f02d.appspot.com",
    messagingSenderId: "1021556811843" ,
    appId: "1:1021556811843:web:838bb4a566fabe98108cf6",
    measurementId: "G-6DVRJ3KRP8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var storyData = firebase.database();

// receive entries
function submitEntry() {

    // resetting values
    function valueReset() {
        document.getElementById("age").value = "age";
        document.getElementById("email").value = "";
    }

    // story age
    let age = document.getElementById("age").value;
    // email
    let email = document.getElementById("email").value;
    // story
    let story = document.getElementById("story").value.trim();
    
    if (story === "") {
        valueReset();

        let repeat = "";

        for(var i = 0; i < 24; i++) {
            repeat+= "Please enter text!\n";        
        }
        document.getElementById("story").value = repeat;
        setTimeout(function() {document.getElementById("story").value = ""}, 3000);
    }

    else{   

        if (email === "") {
            if (age === "Age") {
                age = "Adult";
            }
                let newStory = {
                    lifeStory : {
                        age: age,
                        story: story
                    }
                }
                storyData.ref().push(newStory);
        }

        else {
            if (age === "Age") {
                age = "Adult";
            }

            let newStory = {
                lifeStory: {
                    age: age,
                    story: story
                },
                email: email
            };
            storyData.ref().push(newStory);
        }

        valueReset();
        let thankYou = "";
        for (var i = 0; i < 24; i++) {
            thankYou+= "Thank you for your submission!\n";
        }
        document.getElementById("story").value = thankYou;
    }
    
}
