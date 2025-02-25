document.getElementById('send_money_button').addEventListener('click',
    function (event) {

        event.preventDefault();

        const mainAmount = document.getElementById('main_amount').innerText;
        const mainAmountConvert = parseInt(mainAmount);

        const sendAmount = document.getElementById('send_Amount').value;
        const sendAmountConvert = parseInt(sendAmount);

        const pinNumber = document.getElementById('pin_number').value;
        const pinNumberConvert = parseInt(pinNumber);

        const userId = document.getElementById('user_id').value;
        const userIdLength = userId.length;


        if (pinNumberConvert === 1234 && userIdLength === 11 && sendAmountConvert > 0) {
            const sub = mainAmountConvert - sendAmountConvert;
            document.getElementById('main_amount').innerText = sub;

        }

        else {
            if (pinNumberConvert !== 1234) {
                alert('Please provide valid Pin Number');

            }
            if (userIdLength !== 11) {
                alert('Please provide valid Account Number');

            }
            if (sendAmountConvert<0 ) {
                alert('Money should be mort then $1');

            }
           
        }

    }
)