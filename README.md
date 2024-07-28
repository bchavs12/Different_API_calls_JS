# Glossary > Ajax

- Asynchronous JavaScript and XML (AJAX)
- Web development technique in which a web app fetches content from the server by making asynchronous HTTP requests,
- Ajax can be used to create **Single-page Applications**, in which the entire web app consists of a single document, which uses Ajax to update its content as needed.

## Ajax Utility

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
