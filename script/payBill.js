document.getElementById('pay_money_button').addEventListener('click',function(event){

    event.preventDefault();

    const mainAmount = document.getElementById('main_amount').innerText;
    const mainAmountConvert = parseInt(mainAmount);

    const payAmount = document.getElementById('pay_Amount').value;
    const payAmountConvert = parseInt(payAmount);

    const pinNumber = document.getElementById('pin_number').value;
    const pinNumberConvert = parseInt(pinNumber);

    const billId = document.getElementById('bill_id').value;
    const billIdLength = billId.length;


    if (pinNumberConvert === 1234 && billIdLength === 11 && payAmountConvert > 0) {
        const sub = mainAmountConvert - payAmountConvert;
        document.getElementById('main_amount').innerText = sub;

    }

    else {
        if (pinNumberConvert !== 1234) {
            alert('Please provide valid Pin Number');

        }
        if (billIdLength !== 11) {
            alert('Please provide valid Account Number');

        }
        if (payAmountConvert<=0 ) {
            alert('Money should be mort then $1');

        }
       
    }
})