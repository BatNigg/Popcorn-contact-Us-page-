document.addEventListener("DOMContentLoaded", function() {
   let writeUsButton = 
   document.getElementById("writeUsButton");
   writeUsButton.addEventListener("click", 
   function toggleContent() {
    var content = document.querySelector('.content');
    content.classList.toggle('show');
  });

let backButton = document.getElementById("backButton");
backButton.addEventListener("click",
  function slideback() {
    var content = document.querySelector('.content');
    content.classList.toggle('slideback');
  });

  let sendButton = document.getElementById("sendButton");
  sendButton.addEventListener("click", 
  function() {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("messageInput").value;
    if(nameInput.value === "" && messageInput.value === "" && emailInput.value === ""){
      alert("All fields are required");
      }else{
        alert("Thank you " + name + " for writing us");
        }
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("messageInput").value = "";
  });
});