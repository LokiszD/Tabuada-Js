function tabuada(){

    var ntxt = window.document.getElementById('numerotxt').value
    var n = Number(ntxt)
    var res = window.document.getElementById('resposta')
    var result

    res.innerHTML = '<h2>Tabuada:</h2>'

    for(let i = 1; i <= 10; i++){
        res.innerHTML += `<p>${n} x ${i} = ${n*i}</p>`
    }

}