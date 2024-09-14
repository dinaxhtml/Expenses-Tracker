let total=0;

const addBtn= document.getElementById("addBtn");
const expenseList= document.getElementById("list");
const totalExpense=document.getElementById("total");

addBtn.addEventListener("click",()=>{
    let name= prompt("Enter The Expense Title");
    let amount= parseFloat(prompt("Enter The Expense Amount"));
    total+=amount;

    let liName=document.createElement("div");
    liName.innerText= name;
    liName.classList.add("expense-item-desc");

    let liAmount=document.createElement("div");
    liAmount.innerText=amount;
    liAmount.classList.add("expense-item-amount");

    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="X";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", ()=>{
        total-=amount;
        li.remove();
        totalExpense.innerHTML=`<h3>Total Expenses: $${total}</h3>`;
        /*
        When you click the delete button, only the code inside that event listener is executed.
        So, if the logic to update the total isn't there, it won’t run when the delete action happens.
        */
    });

    let li=document.createElement("li");
    li.classList.add("expense-item");
    li.appendChild(liName);
    li.appendChild(liAmount);
    li.appendChild(deleteBtn);

    expenseList.appendChild(li);

    totalExpense.innerHTML=`<h3>Total Expenses: $${total}</h3>`;
});