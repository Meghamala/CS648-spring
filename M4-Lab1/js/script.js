// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const table = document.getElementById('employees');
const form = document.getElementById('addForm');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

var count = document.getElementById('empCount');

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    var header, html, required, empID, name, extension, email, department;

    header = "";
    html = "";
    //required = "<span>Required field</span>";
    //msg = "Please review your entries and complete all required fields";
    empID = $('id').value;
    name = $('name').value;
    extension = $('extension').value;
    email = $('email').value;
    department = $('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    const row = document.createElement('tr');
    //var row = table.insertRow(-1);
    //var cell = row.insertCell(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    const idCell = document.createElement('td');
    idCell.textContent = empID;

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const extensionCell = document.createElement('td');
    extensionCell.textContent = extension;

    
    const emailCell = document.createElement('td');
    emailCell.textContent = email;

    const departmentCell = document.createElement('td');
    departmentCell.textContent = department;

    // CREATE THE DELETE BUTTON
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    actionCell.appendChild(deleteButton);

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(extensionCell);
    row.appendChild(emailCell);
    row.appendChild(departmentCell);
    row.appendChild(actionCell);

    table.querySelector('tbody').appendChild(row);

    // RESET THE FORM
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.reset();
    $('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count = table.querySelectorAll('tbody tr').length - 1;
    $('empCount').value = count;

});

// DELETE EMPLOYEE

table.addEventListener('click', (event) => {

    const confirmed = confirm('Are you sure you want to delete employee?');

    // Only delete employees when the delete button is clicked
    if (confirmed && event.target.classList.contains('delete-button')) {
      var newCount = table.querySelectorAll('tbody tr').length - 1;
      const row = event.target.closest('tr');
      row.parentNode.removeChild(row);
      $('empCount').value = newCount;
    }
  });