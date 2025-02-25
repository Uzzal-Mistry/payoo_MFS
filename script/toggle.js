document.getElementById('add_Money_form').style.display = 'none';
document.getElementById('cash_out_form').style.display = 'none';
document.getElementById('transfer_money_form').style.display = 'none';
document.getElementById('pay_Bill_form').style.display = 'none';




document.getElementById('addMoneyBox').addEventListener('click',
    function () {
        document.getElementById('add_Money_form').style.display = 'block';
        document.getElementById('cash_out_form').style.display = 'none';
        document.getElementById('transfer_money_form').style.display = 'none';
        document.getElementById('pay_Bill_form').style.display = 'none';
    }
)

document.getElementById('cashOutBox').addEventListener('click',
    function () {

        document.getElementById('cash_out_form').style.display = 'block';
        document.getElementById('add_Money_form').style.display = 'none';
        document.getElementById('transfer_money_form').style.display = 'none';
        document.getElementById('pay_Bill_form').style.display = 'none';
    }
)

document.getElementById('transferMoney').addEventListener('click',
    function () {

        document.getElementById('transfer_money_form').style.display = 'block';
        document.getElementById('add_Money_form').style.display = 'none';
        document.getElementById('cash_out_form').style.display = 'none';
        document.getElementById('pay_Bill_form').style.display = 'none';

    }
)

document.getElementById('payBill').addEventListener('click',
    function () {
        document.getElementById('pay_Bill_form').style.display = 'block';
        document.getElementById('transfer_money_form').style.display = 'none';
        document.getElementById('add_Money_form').style.display = 'none';
        document.getElementById('cash_out_form').style.display = 'none';

    }
)

