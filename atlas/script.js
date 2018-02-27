//vanilla javascript
$( document ).ready(function() {
  console.log("ready")
});

//$.ajax({
//  dataType: "json",
////  url: url,
//  data: data,
//  success: success
//});

$.getJSON("test.json", function(json) {
    console.log(json); // this will show the info in firebug console 
    alert(json);
});

//jquery.min.js:2 Failed to load file:///Users/matthew/Desktop/new2017/atlas/test.json: