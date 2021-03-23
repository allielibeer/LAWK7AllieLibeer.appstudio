let newName = ""
let oldName = ""

customerUpdate.onshow = function() {

    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            txtaCustomerUpdate.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][0] + "\n"
            txtaCustomerUpdate.value = message
        }

    } else
        txtaCustomerUpdate.value = "Error code: " + req.status
}


btnUpdate.onclick = function() {
        newName = inptNewName.value
        oldName = inptOldName.value
        query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"

        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
        if (req.status == 200) {
            customerData = JSON.parse(req.responseText)
            if (customerData.length > 0) {
                query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
                req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
                if (req.status == 200)
                    if (req.responseText == 500)
                        lblUpdate.textContent = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblUpdate.textContent = `There was a problem updating ${oldName} to ${newName}.`
                else
                    lblUpdate.textContent = `Error: ${req.status}`
            }
        }
        
}