//
//
//$('ul').on('click', 'li', function(){
//  $(this).toggleClass('completed');
//});
//// put request
//
//
//$('ul').on('click', 'span', function(event){
//  $(this).parent().remove();
//})
////delete reqest (propogation / bubbling)
//
//$('input').keypress(function(event){
//  if(event.which === 13) {
//    var todoItem = $(this).val();
//    $('ul').append(
//      "<li>" +
//      "<span>" +
//      "<i class='fa fa-times fa-2x'></i>" +
//      "</span>" +
//      todoItem +
//      "</li>"
//      );
//      $('input').val("");
//  }
//});
//post request

//either use data-id or empty div


var url = 'http://localhost:3000/todos/';



$('document').ready(function(){
    //vs .onload
    $.ajax({
        url : url,
        method: "GET"
    })
    .fail(function(obj, err) {
//        console.log( "Something wrong. Err is " + err );
        return false;
    })
    .done(function(obj){
       // console.log(obj)
        // removes all pre-existing to do s, e.g. sample to do s
        // $('ul').empty();

        // loop over each list item
        obj.forEach(function(o){
            // console.log(o); each object shows up in "o"

            var className = o.completed ? " class="+"'completed'" : "";
            //ternary operator "if __ then
            // We need to hide the id of the todo in the li element, so we may
            // retrieve it later and call the api with the /:id call
            $('ul').append(
                "<li" + className + " " + "data-id='"+ o.id+ "'>" +
                "<span>" +
                "<i class='fa fa-times'></i>" +
                "</span> " +
                   o.description +
                "</li>"
            );
        })
    });
});

// PUT route - toggles completed state of to do item
//
$('ul').on('click', 'li', function(){
    var id = $(this).attr("data-id");
    console.log('in the PUT block ' + id);
        //assign the list item to a variable so it's available in the ajax call
    var itemToComplete = $(this);
        //ajax call to the completed route on the server
    $.ajax({
        url: 'http://localhost:3000/todos/' + id,
        type: 'PUT',
        success: function(result){
            itemToComplete.toggleClass('completed');
        },
        error: function(jqXhr, textStatus, errorThrown){
            alert(textStatus);
        }
    });
});


//DELETE item from list
$('ul').on('click', 'span', function(event){
    //stop event from bubbling
    event.stopPropagation()
        //assign the id of the li clicked on to a variable
    var id = this.parentNode.getAttribute("data-id");
    //var id = $(this).parent().attr('data-id').text();
    //this.parentNode.getAttribute("data-element");
    console.log("test DELETE " +id);
        //assign the list item to a variable so it's available in the ajax call
    var itemToRemove = $(this);
        //ajax call to the delete route on the server
    $.ajax({
        url: 'http://localhost:3000/todos/' + id,
        type: 'DELETE',
        success: function(result){
            itemToRemove.parent().remove();
        },
        error: function(jqXhr, textStatus, errorThrown){
                alert(errorThrown.responseText);
            }
    });
});

//add item to list on enter key event
$('input').keypress(function(event){
  if(event.which === 13) {
      //assign item entered to a variable
    var todoItem = $(this).val();
      //add the item to a json object
    var dataToSend = {description: todoItem, completed: false};
      //ajax call to the post route on the server
    $.ajax({
            url: 'http://localhost:3000/todos/',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dataToSend),
            processData: false,
            success: function(result){
                    $('ul').append(
                    "<li data-id=" + result.id + ">" +
                    "<span>" +
                    "<i class='fa fa-times fa-2x'></i>" +
                    "</span>" + todoItem + "</li>");
                

            },
            error: function(jqXhr, textStatus, errorThrown){
                alert(errorThrown.responseText);
            }
      });
    $('input').val("");
  }
});
