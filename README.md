# Glossary --> Ajax

- Asynchronous JavaScript and XML (AJAX)
- Web development technique in which a web app fetches content from the server by making asynchronous HTTP requests,
- Ajax can be used to create **Single-page Applications**, in which the entire web app consists of a single document, which uses Ajax to update its content as needed.

## Ajax summary

    - Nowadays Fetch()API Is more suitable for modern web applications
    - But learn AJAX still be usefull for fundamentals concepts

## XMLHttpRequest: readyState property

```js
console.log("UNSENT", xhr.readyState) // readyState will be 0

xhr.open("GET", "/api", true)
console.log("OPENED", xhr.readyState) // readyState will be 1

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState) // readyState will be 3
}

xhr.onload = () => {
  console.log("DONE", xhr.readyState) // readyState will be 4
}

xhr.send(null)
```

# Fetch Request

```js
function fetchUserData(callback) {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`)
      }

      return response.json()
    })
    .then((users) => {
      users.forEach((user) => {
        callback(user)
      })
    })
}

function userNameList(data) {
  const userName = data.name
  const li = document.createElement("li")
  htmlElementList.appendChild(li)

  li.textContent = userName
}

fetchUserData(userNameList)
```
