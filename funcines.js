 $(document).ready(function(){
       $("#Formulario").submit(function( event ){
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: '../php/contacto2.php',
      data: $(this).serialize(),
      success: function(data){
        $("#respuesta").slideDown();
        $("#respuesta").html(data);
                $('#respuesta2').modal('show');
                document.getElementById('Formulario').reset();
      }
    });

    return false;
  });
});

  function prueba1()
  {
   
location.href ="/index.html";
}


 function prueba2()
  {
   
    var div = $('#collapseExample3');
    var num = 0;
if (div.is(':visible')){

 $('#collapseExample2').hide();
  $('#collapseExample4').hide();
 $('#collapseExample3').show();

num = 1;
}
else
 {
num = 2;
$('#collapseExample2').hide();
$('#collapseExample3').show();
$('#collapseExample4').hide();
}
}
 function prueba3()
  {
   

    var div = $('#collapseExample2');
    var num = 0;
if (div.is(':visible')){

 $('#collapseExample3').hide();
 $('#collapseExample4').hide();
 $('#collapseExample2').show();

num = 1;
}
else
 {
num = 2;
$('#collapseExample3').hide();
$('#collapseExample4').hide();
$('#collapseExample2').show();

}
}

 function prueba4()
  {
   

    var div = $('#collapseExample4');
    var num = 0;
if (div.is(':visible')){

 $('#collapseExample3').hide();
 
 $('#collapseExample2').hide();
$('#collapseExample4').show();
num = 1;
}
else
 {
num = 2;
$('#collapseExample3').hide();

$('#collapseExample2').hide();
$('#collapseExample4').show();
}
}

