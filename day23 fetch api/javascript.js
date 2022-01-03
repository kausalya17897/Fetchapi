document.body.innerHTML=`
<div class="user-form">
<input class="add-user-name" placeholder="Enter name"/>
<input class="add-user-avatar" placeholder="Enter picurl"/>
<button onclick="addUser()">ADD USER</button>
</div>
<section class="user-list">
</section>`;

async function getAllUsers(){
    const data=await fetch("https://61681515ba841a001727c589.mockapi.io/users",{method:"GET"});
    const users=await data.json();
    const userContainer=document.querySelector(".user-list");
    userContainer.innerHTML="";

    users.forEach((user)=>{
        userContainer.innerHTML+=`
        <div class="user-container">
        <img class="user-avatar" src="${user.avatar}" alt=${user.name}/>
        <div>
        <p class="user-name">${user.name}</p>
        <button onclick="toggleEdit(${user.id})">EDIT</button>
        <button onclick="deleteUser(${user.id})">DELETE</button>
        <div class="edit-user-form edit-${user.id}">
          <input value=${user.name} class="edit-${user.id}-user-name" placeholder="Enter name"/>
          <input value=${user.avatar} class="edit-${user.id}-user-avatar" placeholder="Enter pic"/>
          <button onclick="saveUser()">Save</button>
          </div>
          </div>
          </div>
        `;

    });
    console.log(users);
}
getAllUsers();