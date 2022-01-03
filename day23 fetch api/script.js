document.body.innerHTML=`<section class="user-list">
</section>`

async function getAllUsers(){
    const data=await fetch("https://61681515ba841a001727c589.mockapi.io/users");
    const users=await data.json();
    const userContainer=document.querySelector(".user-list")

    
users.forEach((a)=>{
    userContainer.innerHTML+=`
    <div class="user-container">
    <img  class="user-avatar" src="${a.avatar}" />
    <p class="user-name">${a.name}</p>
    </div> `;
});

console.log(users);
}
getAllUsers();