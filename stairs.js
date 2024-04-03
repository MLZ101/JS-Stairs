const table = document.getElementById("stairs-table");
const select = document.getElementById("select-input");
const form = document.getElementById("stairs-form");
const build = document.getElementById("build-button");
const append = document.getElementById("append-button");
const destroy = document.getElementById("destroy-button");

append.disabled = true;
destroy.disabled = true;

form.addEventListener("submit", function(event){
    event.preventDefault();

    let htmlDef = '';

    for (let i = 0 ; i < select.value; i++){
        htmlDef += '<tr>';
        for (let j = 0; j <= i; j++)
              htmlDef += '<td></td>';
        htmlDef += '<td style="border: none;"><button class="btn btn-outline-dark w-auto delete-button">Delete</button></td>';
        htmlDef += '</tr>'; 
    }

    table.innerHTML = htmlDef;
    build.disabled = true;
    append.disabled = false;
    destroy.disabled = false;


    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentNode.parentNode.remove();
            if (table.rows.length == 0){
                build.disabled = false;
                append.disabled = true;
                destroy.disabled = true;

            }
        });
    });

});

append.addEventListener("click", function(){
    const selectedValue = parseInt(select.value);
    const tableRowsCount = table.rows.length;

    for (let i = 1; i <= selectedValue; i++) {
        const newRow = table.insertRow(tableRowsCount + i-1);
        for (let j = 0; j < tableRowsCount + i; j++) {
            newRow.insertCell(j);
        }
        const buttonCell = newRow.insertCell(tableRowsCount + i); 
        buttonCell.innerHTML = '<button class="btn btn-outline-dark w-auto delete-button">Delete</button>';
        buttonCell.style.border = "None"; 
    }
    

});


destroy.addEventListener("click", function(){
    table.innerHTML = "";
    build.disabled = false;
    destroy.disabled = true;
    append.disabled = true;
})
