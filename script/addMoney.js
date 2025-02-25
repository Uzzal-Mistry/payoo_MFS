document.getElementById('add_Money').addEventListener('click',
    function (event) {
        event.preventDefault();

        const amount = document.getElementById('addAmount').value;
        const amountConvert = parseInt(amount);

        const mainAmount = document.getElementById('main_amount').innerText;
        const mainAmountConvert = parseInt(mainAmount);

        const pinNumber = document.getElementById('pin_number').value;
        const pinNumberConvert = parseInt(pinNumber);

        const accountNumber = document.getElementById('account_Number').value;
        const accountNumberLength = accountNumber.length;



        if(accountNumberLength === 11 && pinNumberConvert ===1234 && amountConvert>0){
            const sum = amountConvert + mainAmountConvert;
            document.getElementById('main_amount').innerHTML = sum;

        }

        else{
            if(accountNumberLength !== 11){
                alert('Please provide provide valid Account Number')
            }
            if(pinNumberConvert !== 1234){
                alert('Please provide valid Pin Number')
            }
            if(amountConvert<=0){
                alert('Money should be more then $1')
            }
        }
         


    }
)