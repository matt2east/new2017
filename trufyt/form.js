

function sendForm(){
    var api = "http://api.screenshotmachine.com/?key=2df3a8&dimension=1024xfull&format=png&url=";
    var userLink = document.getElementById("linkValue").value;
    var fullUrl = api.concat(userLink);
//    alert("the full url is" + fullUrl)
    document.getElementById("linkValue").value = fullUrl;
    alert(document.getElementById("linkValue").value)
    
    

   
    
}