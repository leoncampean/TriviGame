export function getSelectedValue (){
    var value = document.getElementById('list').value;
    var btnValue = document.getElementById('quiz1').value;
    var bntValue2 =document.getElementById('quiz2').value;
    var bntValue3 =document.getElementById('quiz3').value;
    var bntValue4 =document.getElementById('quiz4').value;
    var bntValue5 =document.getElementById('quiz5').value;
    var bntValue6 =document.getElementById('quiz6').value
    if(value == btnValue) {
        document.getElementById('quiz1').style.display = 'unset';
    } else {
        document.getElementById('quiz1').style.display = 'none';
    }
    if(value == bntValue2) {
        document.getElementById('quiz2').style.display = 'unset'; 
    }
    else
    {
        document.getElementById('quiz2').style.display = 'none'; 
    }
    if(value == bntValue3) {
        document.getElementById('quiz3').style.display = 'unset'; 
    }
    else
    {
        document.getElementById('quiz3').style.display = 'none'; 
    }if(value == bntValue4) {
        document.getElementById('quiz4').style.display = 'unset'; 
    }
    else
    {
        document.getElementById('quiz4').style.display = 'none'; 
    }if(value == bntValue5) {
        document.getElementById('quiz5').style.display = 'unset'; 
    }
    else
    {
        document.getElementById('quiz5').style.display = 'none'; 
    }if(value == bntValue6) {
        document.getElementById('quiz6').style.display = 'unset'; 
    }
    else
    {
        document.getElementById('quiz6').style.display = 'none'; 
    }
}