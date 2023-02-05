window.addEventListener("load", function () {
    window.document.getElementById("empForm").reset();
    window.document.querySelector("form").addEventListener("submit",function(e) {
        e.preventDefault();
        addEmp(); 
    });
});

function addEmp() {
    var id = window.document.getElementById("employeeid").value;
    var name = window.document.getElementById("name").value;
    var extension = window.document.getElementById("extension").value;
    var email = window.document.getElementById("email").value;
    var department = window.document.getElementById("department").value;

    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Extension:", extension);
    console.log("Email:", email);
    console.log("Department:", department);
    window.document.getElementById("empForm").reset();
}

