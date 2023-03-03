//@ts-check

function alertBtnHandler(){
    let dialog = document.getElementById('alert_dia');
    dialog.showModal();
}

function confirmBtnHandler(){
    let dialog = document.getElementById('confirm_dia');
    dialog.showModal();
}

let noInput = 'User didn\'t enter anything';

function safePromptBtnHandler(){
    let dialog = document.getElementById('prompt_dia');
    dialog.showModal();
}

function alertOkHandler(){
    let dialog = document.getElementById('alert_dia');
    dialog.close();
}

function yesBtnHandler(){
    let dialog = document.getElementById('confirm_dia');
    let out = document.getElementById('btn_out');
    out.value = "Confirmed!";
    dialog.close();
}

function noBtnHandler(){
    let dialog = document.getElementById('confirm_dia');
    let out = document.getElementById('btn_out');
    out.value = "Not confirmed.";
    dialog.close();
}

function enterBtnHandler(){
    let inputField = document.getElementById('in_field');
    let dialog = document.getElementById('prompt_dia');
    let out = document.getElementById('btn_out');
    let str = inputField.value;
    let clean = DOMPurify.sanitize(str);
    out.innerHTML = clean;
    dialog.close();
}

function cancelBtnHandler(){
    let inputField = document.getElementById('in_field');
    let dialog = document.getElementById('prompt_dia');
    let out = document.getElementById('btn_out');
    out.innerHTML = "Prompt Cancelled";
    dialog.close();
}

export function init(){
    let abtn = document.getElementById('alert_btn');
    abtn.addEventListener('click', alertBtnHandler);

    let cbtn = document.getElementById('confirm_btn');
    cbtn.addEventListener('click', confirmBtnHandler);

    let spbtn = document.getElementById('safe_prompt_btn');
    spbtn.addEventListener('click', safePromptBtnHandler);

    let okbtn = document.getElementById('ok_alert');
    okbtn.addEventListener('click', alertOkHandler);

    let ybtn = document.getElementById('yes_btn');
    ybtn.addEventListener('click', yesBtnHandler);

    let nbtn = document.getElementById('no_btn');
    nbtn.addEventListener('click', noBtnHandler);

    let ebtn = document.getElementById('enter_btn');
    ebtn.addEventListener('click', enterBtnHandler);

    let cancelbtn = document.getElementById('cancel_btn');
    cancelbtn.addEventListener('click', cancelBtnHandler);
}