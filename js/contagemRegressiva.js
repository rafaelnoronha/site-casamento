function iniciarContagemRegressiva(dataAlvo) {
    const intervalo = setInterval(() => {
        const agora = new Date().getTime();
        const diferenca = dataAlvo.getTime() - agora;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        const elDias = document.getElementById("reg-dias");
        const elHoras = document.getElementById("reg-horas");
        const elMinutos = document.getElementById("reg-minutos");
        const elSegundos = document.getElementById("reg-segundos");

        elDias.innerHTML = dias;
        elHoras.innerHTML = horas;
        elMinutos.innerHTML = minutos;
        elSegundos.innerHTML = segundos;

        if (diferenca < 0) {
            clearInterval(intervalo);

            elDias.innerHTML = 0;
            elHoras.innerHTML = 0;
            elMinutos.innerHTML = 0;
            elSegundos.innerHTML = 0;
        }
    }, 1000);
}

iniciarContagemRegressiva(new Date(2025, 11, 13, 15, 30, 0));