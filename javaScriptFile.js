function alertUser()
{
    if (confirm('Are you sure you want to go to this website?')) 
    {
        if (confirm('Are you REALLY sure? It is extremely bad.'))
        {
           if (confirm('ITS THE WORST EVER TURN BACK WHILE YOU CAN. LAST CHANCE?'))
            {
                document.location = 'http://www.worlds-worst-website.com/'
            } 
            else
            {
                // Do nothing
            }
        }
        else
        {
            // Do nothing
        }
    } 
    else 
    {
        // Do nothing!
    }
}

function validateForm()
{
    var first = document.getElementById("firstname");
    var last = document.getElementById("lastname");
    var game = document.getElementById("game");
    var reason = document.getElementById("reason");
    var inputArray = [first,last,game,reason];
    var errorArray = [];
    var i = 0;
    // Check for nulls in input. Then add the list of IDs to an array.
    for(i = 0, length = inputArray.length; i < length; i++ )
    {
        if(inputArray[i].value == "")
        {
            errorArray.push(inputArray[i].id);
        }
    }
    // If there is an error in the error list, print out an error to the user telling then which is invalid.
    if(errorArray.length > 0)
    {
        var errorList = errorArray.toString();
        alert("One of the text boxes are empty. Please fix it. See below. \n" + errorList);
    }
    else
    {
        alert("Data Successfuly submitted.")
        var div = document.getElementById("mainform");
        document.getElementById("mainform").textContent="Data Submitted. Please refresh page to submit again.";
    }   
    return false;
}