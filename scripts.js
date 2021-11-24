$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});



$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});

function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

$(".submit").click(function(){
return false;
})

var maxField = 10; //Input fields increment limitation
var addButton = $('.add_button'); //Add button selector
var wrapper = $('.field_wrapper'); //Input field wrapper
var fieldHTML = '<div class="input-group-text"><p class="col-3"><input type="text" class="form-control"></p><p class="col-2"><input type="text" class="form-control"></p><p class="col-2"><input type="text" class="form-control"></p><p class="col-1"><input type="text" class="form-control fees" onblur="fees()"></p><p class="col-1"><input type="text" class="form-control paid" onblur="paid()"></p><p class="col-2"><input type="text" class="form-control balance" onblur="balance()"></p><a href="javascript:void(0);" class="remove_button col-1"><i class="fas fa-minus"></i></a></div>'; //New input field html
 var x = 1; //Initial field counter is 1
 var value;

 //Once add button is clicked
$(addButton).click(function(){
    //Check maximum number of input fields
    if(x < maxField){
        x++; //Increment field counter
        $(wrapper).append(fieldHTML); //Add field html
    }
});

//Once remove button is clicked
$(wrapper).on('click', '.remove_button', function(e){
    e.preventDefault();
    $(this).parent('div').remove(); //Remove field html
    x--; //Decrement field counter
});
$(".sidebar-dropdown > a").click(function() {
$(".sidebar-submenu").slideUp(200);
if (
  $(this)
    .parent()
    .hasClass("active")
) {
  $(".sidebar-dropdown").removeClass("active");
  $(this)
    .parent()
    .removeClass("active");
} else {
  $(".sidebar-dropdown").removeClass("active");
  $(this)
    .next(".sidebar-submenu")
    .slideDown(200);
  $(this)
    .parent()
    .addClass("active");
}
});

$("#close-sidebar").click(function() {
$(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
$(".page-wrapper").addClass("toggled");
});
});
