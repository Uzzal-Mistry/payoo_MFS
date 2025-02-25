document.getElementById('cash_out_btn').addEventListener('click',
    function (event) {

        event.preventDefault();

        const mainAmount = document.getElementById('main_amount').innerText;
        const mainAmountConvert = parseInt(mainAmount);

        const withdrawAmount = document.getElementById('withdraw_Amount').value;
        const withdrawAmountConvert = parseInt(withdrawAmount);

        const pinNumber = document.getElementById('pin_number').value;
        const pinNumberConvert = parseInt(pinNumber);
        

        const agentId = document.getElementById('agent_id').value;
        const agentIdLength = agentId.length;

        if(pinNumberConvert === 1234 && agentIdLength===11 && withdrawAmountConvert>0 ){
            
            const sub=mainAmountConvert-withdrawAmountConvert;
            document.getElementById('main_amount').innerText=sub;


        }
        else{
           
            if(pinNumberConvert !== 1234)
            {
                alert('Please provide valid Pin Number');
            }
            if(agentIdLength !== 11){
                alert('Please provide valid Account Number');
            }
            if(withdrawAmountConvert<=0){
                alert('Money should be mort then $1');
            }
        }




    }
)