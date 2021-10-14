function tabuada(){

    var ntxt = window.document.getElementById('numerotxt').value
    var res = window.document.getElementById('tab')
    var result

    if (ntxt.length == 0) {
        window.alert('[ERRO] Número inválido')
    }else{
        var n = Number(ntxt)

        res.innerHTML = ''

        for(let i = 1; i <= 10; i++){
            res.innerHTML += `<option value="v${i}">${n} x ${i} = ${n*i}</option>`
        }
    }

}
