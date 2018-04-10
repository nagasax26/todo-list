
$('[type="submit"]').click(function(){
  var inputTextValue = $('#todo-list').val();
  if(inputTextValue === ''){
      alert('Please enter a some text...');
      return;
    }

  var name = 'todo-list';

  var newCheckbox = '<input data-checked="false" type="checkbox" name='+name+'>'+
  '<span style="color:red;">'+inputTextValue+'</span><br>';
  $('.list').append(newCheckbox);



  $('.list').off(); //binding off the event

  $('.list').on('click','input[type="checkbox"]',checkedOn);
});


// TODO: need to add event listiner when checked on checkbox
function checkedOn(){

 $(this).data().checked = !$(this).data().checked;

  if($(this).data().checked){
    $(this).next().css('text-decoration','line-through');
    $(this).next().css('color','green');
    $(this).attr('disabled',true);
  }


}


//this is a comment for the new branch called develop
