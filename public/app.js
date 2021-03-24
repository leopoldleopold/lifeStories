
// receive entries
var Submission = {age: "", email: "", story: ""};

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
        valueReset();
        let thankYou = "";
        for (var i = 0; i < 24; i++) {
            thankYou+= "Thank you for your submission!\n";
        }
        document.getElementById("story").value = thankYou;
        
        for(var i = 0; i < 3; i++) {
            if (i === 0) {
                Submission.age = (age);
            }
            else if(i === 1) {
                Submission.email = (email);
            }
            else {
                Submission.story = (story);
            }
        }
        exportSubmission();
    }
    
}
function exportSubmission() {
    console.log(Submission);
    // module.exports = Submission;
}