const h3Element = document.getElementById("userName")

function fetchDataFromServer(callBack) {
  setTimeout(() => {
    const data = { userName: "john_doe" };

    callBack(data);
  }, 2000);
}

function handleData(data) {
  const userName = data.userName;

  return h3Element.innerText = userName;
}

// fetchDataFromServer(handleData);
