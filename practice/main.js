function getUserinfo() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(response => getTable(response))
    .catch(e => console.log(e));
    
}


function getTable(data) {
    for (let index = 0; index < data.length; index++) {
        const user = data[index];

        const h1 = document.createElement("h1");
        h1.innerText= user.name;
        document.getElementById("cont").append(h1);
        
    }
    
}


getUserinfo();


function sera() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: document.getElementById("title1").value,
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => addRow(json));
}

function addRow() {
    // Get the input values
    var name = document.getElementById("title1").value;
    var username = document.getElementById("userId").value;

    // Get the table body
    var tableBody = document.querySelector("#userTable tbody");

    // Create a new row and cells
    var newRow = tableBody.insertRow();
    var nameCell = newRow.insertCell(0);
    var usernameCell = newRow.insertCell(1);

    // Set the cell values
    nameCell.innerHTML = name;
    usernameCell.innerHTML = username;

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("username").value = "";
}