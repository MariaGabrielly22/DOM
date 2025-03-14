document.getElementById('btnquery').addEventListener('click', function() {
    let circulo = document.querySelector(".circulos .circulo");
    circulo.classList.toggle("ativo");
});

document.getElementById('btnqueryAll').addEventListener('click', function() {
    let todosCirculos = document.querySelectorAll('.circulo');
    tudoAtivos = true;
    tudoAtivos = Array.from(todosCirculos).every(el => el.classList.contains('ativo'));
    
    todosCirculos.forEach(cipc => {
        cipc.classList.toggle("ativo", !tudoAtivos);
    });
});
