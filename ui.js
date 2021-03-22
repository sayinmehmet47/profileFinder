class UI {
  constructor() {
    this.profileContainer = $('#profileContainer');
    this.alert = $('#alert');
  }

  showProfile(profile) {
    var inner = `
        
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                <a href="https://placeholder.com"><img
                 src="https://via.placeholder.com/250x100" class""img-thumbnail></a>


                </div>

                <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group">
                    <li class="list-group-item">
                        name:${profile.name}
                    </li>
                    <li class="list-group-item">
                   username:${profile.username}
                </li>
                <li class="list-group-item">
                email:${profile.email}
            </li>
            <li class="list-group-item">
            address:${profile.address.street}
            ${profile.address.city}
            ${profile.address.zipcode}
            ${profile.address.suite}
             </li>

            <li class="list-group-item">
             phone:${profile.phone}
            </li>
            <li class="list-group-item">
            website:${profile.website}
                /li>
            <li class="list-group-item">
            company:${profile.company.name}
            </li>


            <ul>
            <h4>Todo list</h4>
            <ul id="todo" class="list-group">
            
            
            
            
            </ul>
                
                
     </div>
        </div>
            </div>        
        `;

    this.profileContainer.html(inner);
  }
  showToDo(todo) {
    console.log(todo);

    let html = '';
    todo.forEach((item) => {
      if (item.completed) {
        html += `
           <li class="list-group-item bg-success">
                ${item.title}

           </li>
           
           `;
      } else {
        html += `
        <li class="list-group-item bg-secondary">
             ${item.title}

        </li>
        
        `;
      }
    });

    this.profileContainer.find('#todo').html(html);
  }

  warning() {
    this.alert.text('not founded');
  }

  clear() {
    this.profileContainer.html('');
    this.alert.html('');
  }
}

const ui = new UI();
