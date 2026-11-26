
let reservasSala = JSON.parse(localStorage.getItem("reservas_sala1")) || {
9: [],
10: [],
11: []
};

let lembretesEnviados = JSON.parse(localStorage.getItem("lembretes_sala1")) || {};

[9, 10, 11].forEach((hora) => {
if (!Array.isArray(reservasSala[hora])) {
    reservasSala[hora] = reservasSala[hora] ? [reservasSala[hora]] : [];
}
});

const salvarEstado = () => {
localStorage.setItem("reservas_sala1", JSON.stringify(reservasSala));
localStorage.setItem("lembretes_sala1", JSON.stringify(lembretesEnviados));
};

const dispararLembrete = (hora, estudantes) => {
const mensagem = `Lembrete: faltam menos de 1 hora para a reserva da Sala-1 às ${hora}h (${estudantes.join(" e ")}).`;

if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Lembrete de Reserva - Sala-1", {
        body: mensagem,
        icon: "favicon.png"
    });
}

alert(mensagem);
};

const verificarLembretes = () => {
const agora = new Date();
const horaAtual = agora.getHours();
const dataHoje = agora.toISOString().split("T")[0];

[9, 10, 11].forEach((horaReservada) => {
    const estudantes = reservasSala[horaReservada];
    const horaAviso = horaReservada - 1;
    const chaveAviso = `${dataHoje}_${horaReservada}h_${estudantes.join(",")}`;

    if (estudantes.length > 0 && horaAtual === horaAviso && !lembretesEnviados[chaveAviso]) {
        lembretesEnviados[chaveAviso] = true;
        salvarEstado();
        dispararLembrete(horaReservada, estudantes);
    }
});
};

const atualizarEstado = () => {
let totalReservas = 0;

[9, 10, 11].forEach((hora) => {
    const elementoStatus = document.getElementById(`status_${hora}h`);
    const estudantes = reservasSala[hora];

    if (estudantes.length === 0) {
        elementoStatus.innerText = "Livre";
    } else if (estudantes.length === 1) {
        elementoStatus.innerText = `1/2 (${estudantes[0]})`;
        totalReservas++;
    } else {
        elementoStatus.innerText = `Ocupado (${estudantes.join(" e ")})`;
        totalReservas++;
    }
});

document.getElementById("reservas_feitas").style.display = totalReservas > 0 ? "block" : "none";
};

const alterarReserva = (hora) => {
const estudantes = reservasSala[hora];

if (estudantes.length >= 2) {
    alert(`O horário das ${hora}h já atingiu o limite de 2 estudantes (${estudantes.join(" e ")}).`);
    return;
}

const entrada = prompt("Digite o seu nome para reservar:");
if (entrada === null) return;

const nomeLimpo = entrada.trim();
if (!nomeLimpo) {
    alert("É necessário informar um nome.");
    return;
}

const jaReservouEsseHorario = estudantes.some(
    (nome) => nome.toLowerCase() === nomeLimpo.toLowerCase()
);

if (jaReservouEsseHorario) {
    alert(`${nomeLimpo}, você já reservou o horário das ${hora}h.`);
    return;
}

if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
}

estudantes.push(nomeLimpo);
salvarEstado();
atualizarEstado();
alert(`Sala reservada para ${nomeLimpo} às ${hora}h (${estudantes.length}/2 vagas ocupadas).`);
verificarLembretes();
};

const cancelar_reserva = (hora) => {
const estudantes = reservasSala[hora];

if (estudantes.length === 0) {
    alert("A sala já está livre nesse horário.");
    return;
}

const entrada = prompt("Digite o seu nome para cancelar:");
if (entrada === null) return;

const nomeLimpo = entrada.trim();
if (!nomeLimpo) {
    alert("É necessário informar um nome.");
    return;
}

const indiceEstudante = estudantes.findIndex(
    (nome) => nome.toLowerCase() === nomeLimpo.toLowerCase()
);

if (indiceEstudante === -1) {
    alert(`Nenhuma reserva encontrada no nome de "${nomeLimpo}" às ${hora}h.`);
    return;
}

estudantes.splice(indiceEstudante, 1);
salvarEstado();
atualizarEstado();
alert(`Reserva de ${nomeLimpo} às ${hora}h cancelada com sucesso.`);
};

atualizarEstado();
verificarLembretes();
setInterval(verificarLembretes, 30000);
