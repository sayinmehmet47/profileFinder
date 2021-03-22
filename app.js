$('input').on('keyup', function (e) {
  ui.clear();

  var input = $(this).val();

  if (input !== '') {
    profile.getProfile(input).then((res) => {
      if (res.profile.length !== 0) {
      
        ui.showProfile(res.profile[0]);
        ui.showToDo(res.todo)


      } else {
        ui.warning();
      }
     
    }).catch(err=>{
        ui.showAlert(text)
    })

  }

  e.preventDefault();
});
