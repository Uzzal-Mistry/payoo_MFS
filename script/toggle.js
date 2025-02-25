document.getElementById('add_Money_form').style.display='none';
document.getElementById('cash_out_form').style.display='none';



document.getElementById('addMoneyBox').addEventListener('click',
    function(){
        document.getElementById('add_Money_form').style.display='block';
        document.getElementById('cash_out_form').style.display='none';

    }
)

document.getElementById('cashOutBox').addEventListener('click',
    function(){
        document.getElementById('add_Money_form').style.display='none';
        document.getElementById('cash_out_form').style.display='block';

    }
)