/**
 * Created by JFCS on 3/15/16.
 */
var peopleArray = [];

$(document).ready(function(){
init();
});

function init(){
    enable();
    getPeople();
}
function enable(){
    $('form').on('submit',grabForm);
    $('.people').on('click','.btn-danger',removePerson);
}

function grabForm (event){
    event.preventDefault();

    var values = {};
    $.each($('form').serializeArray(), function(i,field){
        values[field.name] = field.value;
    });
    console.log(values);

    postData(values);
}


function postData(values){
    $.ajax({
        type:'POST',
        url:"/people",
        data: values,
        success: function(response){
            console.log(response);
            getPeople();
        }
    });
}

function getPeople(){
    $.ajax({
        type:'GET',
        url:"/people",
        success: function(response){
            console.log(response);
            peopleArray = response;
            appendDom(peopleArray);
        }
    });
}


function appendDom(peopleArray){
    $('.people').empty();

    for(var i = 0; i < peopleArray.length; i ++) {
        $('.people').append('<div class="container well"></div>');
        $el = $('.people').children().last();
        $el.data('id',peopleArray[i].id);
        $el.append('<p>Name : ' + peopleArray[i].name + '</p>');
        $el.append('<p>Address : ' + peopleArray[i].address + '</p>');
        $el.append('<p>City : ' + peopleArray[i].city + '</p>');
        $el.append('<p>State : ' + peopleArray[i].state + '</p>');
        $el.append('<p>Zip code : ' + peopleArray[i].zip + '</p>');
        $el.append('<button class="btn btn-danger">Delete</button>');

    }
}

function removePerson(){
    console.log('clicked');
    id = $(this).parent().data('id');
    $(this).parent().remove();
    $.ajax({
        type:"DELETE",
        url:"/people",
        data: {
            person:id
        },
        success:function (response){
       console.log(response);
        }
    });
}