let req = {}
let query = ""
let results = []
let pw = "0ZeroBlackDogs!" // ***** put your database password here
let netID = "aal78119"



customerSelect.onshow = function() {
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are: \n ${results}`)
        if (results.length == 0)
            lblMessage.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][0] + "\n"
            txtaCustomers.value = message
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status


}