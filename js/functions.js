/*COOKIES MANIPULATION*/
function setCookie(cname, cvalue, exHours) {
    var d = new Date();
    d.setTime(d.getTime() + (exHours*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*COOKIES MANIPULATION*/

function normalizarNumero(precio){
    if (typeof(precio) == 'string') {
        precio = precio.replace("$","");
        precio = precio.replace(".","");
        if (precio.replace(",","") != precio) {
            return  parseFloat(precio.replace(",","."));
        }else{
            return  parseInt(precio);
        }
    }else{
        return precio;
    }
}

function redondearDecimales(nro,cantDecimales){
    var exp = Math.pow(100,cantDecimales);
    return Math.round(nro*exp)/exp;
}

function fadeElement(element,delaySeconds){    
    element.style.transition="opacity 0.5s ease-in-out";
    element.style.display = "initial";
    element.style.opacity = 1;
    setTimeout(next,delaySeconds);
    function next(){
        element.style.opacity = 0;            
    }
}

