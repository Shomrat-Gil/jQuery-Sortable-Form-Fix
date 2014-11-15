

 /*
 Form elements inside jQuery sortable not editable - simple way to fix it: 
 */
 $(function() {
  $( "#sortable" ).sortable({
   cancel: 'input,button,select,a,textarea,checkbox'
  }).disableSelection();
 });
 


