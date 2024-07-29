const htmlElementList = document.getElementById("list");

const API_URL = "https://jsonplaceholder.typicode.com/users?_limit=5"


function fetchUserData(callback) {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`)
      }

      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        callback(user)
      })
    })

}

function userNameList(data) {
  const userName = data.name;
  const li = document.createElement("li");
  htmlElementList.appendChild(li);

  li.textContent = userName;
}

fetchUserData(userNameList);