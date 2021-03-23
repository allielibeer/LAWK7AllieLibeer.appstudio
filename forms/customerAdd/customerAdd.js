let nameAdd = ""
let street = ""
let city = ""
let state = ""
let zip = ""



customerAdd.onshow = function() {
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are: \n ${results}`)
        if (results.length == 0)
            txtaCustomers4.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][0] + "\n"
            txtaCustomers4.value = message
        } 

    } else 
        txtaCustomers4.value = "Error code: " + req.status


}

btnSubmit.onclick=function(){
    nameAdd = inptName.value
    street = inptStreet.value
    city = inptCity.value
    state = inptState.value
    zip = inptZip.value
    query = "INSERT INTO customer (`name`,`street`,`city`, `state`,`zipcode`) VALUES ('" + nameAdd + "', '" + street + "', '" + city + "', '" + state + "', '" + zip + "')"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblAdd.textContent = "You have successfully added the customer!"
        else
            lblAdd.textContent= "There was a problem with adding the customer to the database."
    } else 
        lblAdd.textContent = "Error: " + req.status
}
