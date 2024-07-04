/*const loanForm= document.getElementById('loanform');
loanForm.addEventListener('submit', function(event) { 
    event.preventDefault();
    takeLoan();


});*/

document.addEventListener('DOMContentLoaded', function() {
    const loanForm = document.getElementById('loanForm');

    if (loanForm) {
        loanForm.addEventListener('submit', function(event) {
            event.preventDefault();
            takeLoan();
        });
    } else {
        console.error('Element with ID "loanForm" not found.');
    }

function takeLoan(){
    const customerName = document.getElementById("customerName").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const amountBorrowed = document.getElementById("amountBorrowed").value;
    const loanDate = document.getElementById("loanDate").value;

    //console.log(takeLoan());

    const loanData= {
        customerName,
        customerEmail,
         amountBorrowed,
         loanDate

   
    };
fetch('https://httpbin.org/post',{
    method:"POST",
    body:JSON.stringify(loanData),
})
    .then(res => res.json())
    .then(res =>console.log(res));



    localStorage.setItem('loan', JSON.stringify(loanData));
    displayLoanDetails();
    

};
const templateParams ={
    customer_name:customerName,
    customer_email:customerEmail,
    amount_borrowed:amountBorrowed,
    loan_date:loanDate
};
emailjs.send("service_a5ha7va", "template_2u3ois8",templateParams)
    .then(function(response){
        console.log('Email sent',response);
    },function(error) {
        console.error('Error:', error);

    });

    loanForm.reset();

   function displayLoanDetails() {
    
   const savedLoan= localStorage.getItem('loan');
    

    if (savedLoan){
        const loanData= JSON.parse(savedLoan);

        document.getElementById('loanDetails').innerHTML=`
        <h2>loan Details:</h2>
        <P>customer name:${loanData.customerName}<p>
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
//console.log(JSON.parse(savedLoan));


});

