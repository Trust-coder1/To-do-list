const userList = document.querySelector(".user-list");

const signList = document.querySelector(".sign-list");

const mainList = document.querySelector(".main-list");

const removeList = document.querySelector(".remove");

signList.addEventListener("click", () => {

   const newLi = document.createElement("LI")

   const liContent = document.createTextNode(userList.value);

   newLi.appendChild(liContent)

   mainList.appendChild(newLi);

   userList.value = "";

})

//remove main list

removeList.addEventListener("click", () => {

   mainList.removeChild(mainList.childNodes[1])

})
