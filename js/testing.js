

$(function() {
    $("#courseName").autocomplete({
      source: data2,
      scroll: true
    });
  });

//load json with all the course information
var data2 = [];
var data1 =  $.ajax({
    dataType: 'json',
    url: "https://jessemadsen1.github.io./course.json",
    success: function(data){
        let i = 0
        for(let f in data.table){
            data2[i] = data.table[i].SUBJ + " " + data.table[i].TITLE + ": CRN " + data.table[i].CRN + ", " + data.table[i].INSTRUCTOR;
            i++;
        }
    }
  });

//Email function, most of this code came from https://www.emailjs.com/docs/tutorial/creating-contact-form/
  $(function() {
    var myform = $("form#contact_form");
    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "template_4tFKQjvP";

    myform.submit(function(event){
  
    if (checkForEmptyFields(event) != false){
      event.preventDefault();

      myform.find("button#submit").text("Sending...");
      emailjs.sendForm(service_id,template_id,myform[0]).then(function(){ 
        alert("You have submitted a new testing schedule!");
         myform.find("button").text("Submit");
      }, function(err) {
         alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
         myform.find("button").text("Submit");
      });    
     return false;
    }
      });
  });
 				
/*	ensures	form	fields	are	not	empty
emailjs.sendForm(service_id,template_id,myform[0])

*/
function	checkForEmptyFields(e)	{				
    var	fields	=	document.querySelectorAll('.required');
    //	loop	thru	the	input	elements	looking	for	empty	values
    var	fieldList	=	[];
    for	(i=0; i < fields.length; i++)	{
        if	(fields[i].value == null||fields[i].value=="")	{
            //	since	a	field	is	empty	prevent	the	form	submission
            e.preventDefault();
            fieldList.push(fields[i]);
        }
      }

//	now	set	up	the	error	message
var	msg	=	" Please fill out the missing fields. \n ";
if	(fieldList.length > 0)	{
    for	(i=0; i<fieldList.length; i++)	{

        document.getElementById(fieldList[i].id).classList.add('error');
    }
    alert(msg);
    return false;
  }				
}


//how to change date format
//https://stackoverflow.com/questions/45545043/how-to-change-the-format-of-input-type-datetime-local
$('.form-control').on('change', function() {
	var parsed = new Date(this.value);
  var ten    = function(x) { return x < 10 ? '0'+x : x};
  var newformat = parsed.getHours() >= 12 ? 'PM' : 'AM'; 
  var date   = (parsed.getMonth() + 1) + '-' + parsed.getDate() + '-' + parsed.getFullYear()  ;
  var time   = ten( parsed.getHours() ) + ':' + ten( parsed.getMinutes() + " " + newformat);
  
  console.log( date + ', ' + time)
});

//computer code check/activate
$("#computer").change(function(){
  if ($('input[name ="computerCode"]').attr("disabled")) {
      $('input[name ="computerCode"]').removeAttr("disabled");
  } 
  else {
    $('input[name ="computerCode"]').attr('disabled', 'disabled');
  }
});

//paper check will deactivate computer access code input
$("#paper").change(function(){
    $('input[name ="computerCode"]').attr('disabled', 'disabled');
});

//If no notes are selected deactivate buttons
$('#inputNotes').change(function(){
  if($('#inputNotes').find("option:selected").val() != ""){
    $('#collect_notes').removeAttr("disabled");
    $('#student_keep').removeAttr("disabled");
  }
  if($('#inputNotes').find("option:selected").val() == ""){
    $('#collect_notes').attr('disabled', 'disabled');
    $('#student_keep').attr('disabled', 'disabled');
  }
});
$('#dark').on('click', function(){



if( $('link[href="css/dark.css"]').prop('disabled') == true){
  $('link[href="css/dark.css"]').prop('disabled', false);
}
else {
    $('link[href="css/dark.css"]').prop('disabled', true);
  }
});