document.getElementById('login_btn').addEventListener('click',
    function(event){
        event.preventDefault();

        const accountNumber=document.getElementById('Account-number').value;
        const pinNumber=document.getElementById("Pin-number").value;

        if(accountNumber.length === 11){
            if(pinNumber === "1234"){
                window.location.href='./main.html'
            }
            else{
                alert("Please Insert Valid Pin Number");
            }
           
        }
        else{
            alert('Please Insert Valid Account Number');
        }

      
   

    }
)