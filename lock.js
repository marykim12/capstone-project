const loanForm= document.getElementById('loanForm');
loanForm.addEventListener('submit', function(event) { 
    event.preventDefault();


});

function takeLoan(){
    const customerEmail = document.getElementById("customerEmail").value;
    const amountBorrowed = document.getElementById("amountBorrowed").value;
    const loanDate = document.getElementById("loanDate").value;

    const loanData= {
        customerEmail,
         amountBorrowed,
         loanDate

   
    };

    localStorage.setItem('loan', JSON.stringify(loanData));
    displayLoanDetails();
};

   function displayLoanDetails(){
    const savedLoan= localStorage.getItem('loan');
    

    if (savedLoan){
        const loanData= JSON.parse(savedLoan);

        document.getElementById('loanDetails').innerHTML=`
        <h2>loan Details:</h2>
        <p> customer Email:${loanData.customerEmail}</p>
        <p> amount Borrowed:${loanData.amountBorrowed}</p>
        <p> loanDate:${loanData.loanDate}</p>
        `;

    }

    else {
        document.getElementById('loanDetails').innerText='no loan data';
    }
    
}
displayLoanDetails();

console.log(JSON.parse(savedLoan));


    




document.getElementById('loanForm').reset();

console.log(localStorage.getItem(loanData));

alert('Saved');


