const Ul_Element = document.getElementById("list");
const xhr = new XMLHttpRequest();
const method = "GET";
const API_URL = "https://dummyjson.com/todos?limit=5";

// Configura a requisição (Método, URL e se é assincrono)
xhr.open(method, API_URL, true);

// Define a função de callback que será chamada quando a resposta for recebida
xhr.onreadystatechange = () => {
  try {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response);

      // TODOS iteration and element list creation
      data.todos.forEach(({ id, todo }) => {
        const li = document.createElement("li");
        // const index = todo
        li.textContent = `Task: ${todo}`;
        Ul_Element.appendChild(li);
      });
    }

  } catch (error) {
    console.error(`Error: ${error}`)
  }
};

xhr.send();