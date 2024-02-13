function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/342e78157082487a8917dd0e76d3958f/appointmentData",
        userDetails
      )
      .then((response) => {
        displayUserOnScreen(response.data);
        console.log(response.data);
        })
      .catch((err) => {
        document.body.innerHTML += "<h4> Something Went Wrong </h4>";
        console.log(err);
      })

      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
  }


document.addEventListener('DOMContentLoaded',function() {
  axios.get("https://crudcrud.com/api/342e78157082487a8917dd0e76d3958f/appointmentData")
  .then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      displayUserOnScreen(response.data[i]);
    }
  })
  .catch((err) => {
    document.body.innerHTML += "<h4> Something Went Wrong </h4>";
    console.log(err);
  })
})


  function displayUserOnScreen(userDetails) {

    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      axios.delete(`https://crudcrud.com/api/342e78157082487a8917dd0e76d3958f/appointmentData/${userDetails._id}`);
    });
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      axios.delete(`https://crudcrud.com/api/342e78157082487a8917dd0e76d3958f/appointmentData/${userDetails._id}`);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
  }
  


  
