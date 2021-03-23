let customerNameDel = inptNameDel.value
let found = false


btnSubmit.onclick=function(){
query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
if (req.status == 200) //transit worked.
    if (req.responseText == 500)
        lblMessage2.value = `You have successfully deleted the customer named ${customerNameDel}`
else
    lblMessage2.value = `There was a problem deleting ${customerNameDel} from the database.`
else
    lblMessage2.value = `Error: ${req.status}`
}



  

