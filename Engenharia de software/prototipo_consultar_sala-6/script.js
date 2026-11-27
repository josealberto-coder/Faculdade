const HORARIOS = [9, 10, 11];
        const LIMITE_ESTUDANTES = 2;

        let reservasSala = JSON.parse(localStorage.getItem("reservas_sala1")) || {
            9: [],
            10: [],
            11: []
        };

        let lembretesEnviados = JSON.parse(localStorage.getItem("lembretes_sala1")) || {};
        let historicoTrocas = JSON.parse(localStorage.getItem("historico_trocas_sala1")) || [];
        let timerFeedback = null;

        HORARIOS.forEach((hora) => {
            if (!Array.isArray(reservasSala[hora])) {
                reservasSala[hora] = reservasSala[hora] ? [reservasSala[hora]] : [];
            }
        });

        const salvarEstado = () => {
            localStorage.setItem("reservas_sala1", JSON.stringify(reservasSala));
            localStorage.setItem("lembretes_sala1", JSON.stringify(lembretesEnviados));
            localStorage.setItem("historico_trocas_sala1", JSON.stringify(historicoTrocas));
        };

        const alternarAba = (aba) => {
            document.getElementById("btn_aba_reservas").classList.toggle("ativa", aba === "reservas");
            document.getElementById("btn_aba_minhas_reservas").classList.toggle("ativa", aba === "minhas_reservas");
            document.getElementById("btn_aba_trocas").classList.toggle("ativa", aba === "trocas");

            document.getElementById("conteudo_aba_reservas").classList.toggle("ativa", aba === "reservas");
            document.getElementById("conteudo_aba_minhas_reservas").classList.toggle("ativa", aba === "minhas_reservas");
            document.getElementById("conteudo_aba_trocas").classList.toggle("ativa", aba === "trocas");

            if (aba === "minhas_reservas") {
                renderizarMinhasReservas();
            } else if (aba === "trocas") {
                renderizarHistorico();
            }
        };

        const mostrarFeedback = (mensagem, tipo = "sucesso") => {
            const box = document.getElementById("alerta_feedback");
            box.textContent = mensagem;
            box.className = `alerta_feedback visivel ${tipo}`;

            if (timerFeedback) clearTimeout(timerFeedback);
            timerFeedback = setTimeout(() => {
                box.classList.remove("visivel");
            }, 5000);
        };

        const obterNomeInput = () => {
            const input = document.getElementById("input_estudante");
            const nome = input.value.trim();

            if (!nome) {
                mostrarFeedback("Informe o nome do estudante para continuar.", "erro");
                input.focus();
                return null;
            }

            return nome;
        };

        const atualizarOpcoesDestino = () => {
            const origem = parseInt(document.getElementById("select_horario_principal").value, 10);
            const selectDestino = document.getElementById("select_horario_destino");

            selectDestino.innerHTML = "";
            HORARIOS.filter((h) => h !== origem).forEach((h) => {
                const option = document.createElement("option");
                option.value = h;
                option.textContent = `${String(h).padStart(2, "0")}:00`;
                selectDestino.appendChild(option);
            });
        };

        const cancelarReservaDireta = (hora, nomeEstudante) => {
            const estudantes = reservasSala[hora];
            const indice = estudantes.findIndex((e) => e.toLowerCase() === nomeEstudante.toLowerCase());
            if (indice === -1) return;

            estudantes.splice(indice, 1);
            salvarEstado();
            atualizarInterface();
            mostrarFeedback(`Reserva de ${nomeEstudante} às ${String(hora).padStart(2, "0")}:00 cancelada.`, "info");
        };

        const renderizarMinhasReservas = () => {
            const lista = document.getElementById("lista_minhas_reservas");
            const contador = document.getElementById("contador_reservas");
            const filtro = (document.getElementById("input_filtro_reservas").value || "").trim().toLowerCase();

            const todasReservas = [];
            HORARIOS.forEach((hora) => {
                reservasSala[hora].forEach((estudante) => {
                    todasReservas.push({ hora, estudante });
                });
            });

            contador.textContent = todasReservas.length;
            lista.innerHTML = "";

            const filtradas = todasReservas.filter(
                (item) => !filtro || item.estudante.toLowerCase().includes(filtro)
            );

            if (filtradas.length === 0) {
                const liVazio = document.createElement("li");
                liVazio.className = "lista_vazia";
                liVazio.textContent = todasReservas.length === 0
                    ? "Nenhuma reserva ativa na Sala-1 no momento."
                    : "Nenhuma reserva encontrada para o nome pesquisado.";
                lista.appendChild(liVazio);
                return;
            }

            filtradas.forEach((item) => {
                const li = document.createElement("li");
                li.className = "item_lista";

                const info = document.createElement("div");
                info.className = "info_item";

                const nomeEl = document.createElement("strong");
                nomeEl.textContent = item.estudante;

                const detalheEl = document.createElement("span");
                detalheEl.textContent = `Sala-1 • Horário ${String(item.hora).padStart(2, "0")}:00`;

                info.appendChild(nomeEl);
                info.appendChild(detalheEl);

                const btnCancelar = document.createElement("button");
                btnCancelar.type = "button";
                btnCancelar.className = "btn_remover_item";
                btnCancelar.textContent = "Cancelar";
                btnCancelar.onclick = () => cancelarReservaDireta(item.hora, item.estudante);

                li.appendChild(info);
                li.appendChild(btnCancelar);
                lista.appendChild(li);
            });
        };

        const renderizarHistorico = () => {
            const lista = document.getElementById("lista_historico_trocas");
            const contador = document.getElementById("contador_trocas");
            const btnLimpar = document.getElementById("btn_limpar_historico");
            const filtro = (document.getElementById("input_filtro_trocas").value || "").trim().toLowerCase();

            contador.textContent = historicoTrocas.length;
            btnLimpar.style.display = historicoTrocas.length > 0 ? "inline-block" : "none";
            lista.innerHTML = "";

            const trocasFiltradas = historicoTrocas
                .map((item, indiceOriginal) => ({ ...item, indiceOriginal }))
                .filter((item) => !filtro || item.estudante.toLowerCase().includes(filtro));

            if (trocasFiltradas.length === 0) {
                const liVazio = document.createElement("li");
                liVazio.className = "lista_vazia";
                liVazio.textContent = historicoTrocas.length === 0
                    ? "Nenhuma troca de horário realizada até o momento."
                    : "Nenhuma troca encontrada para o nome pesquisado.";
                lista.appendChild(liVazio);
                return;
            }

            trocasFiltradas.forEach((item) => {
                const li = document.createElement("li");
                li.className = "item_lista";

                const info = document.createElement("div");
                info.className = "info_item";

                const nomeEl = document.createElement("strong");
                nomeEl.textContent = item.estudante;

                const detalheEl = document.createElement("span");
                detalheEl.textContent = `De ${String(item.origem).padStart(2, "0")}:00 para ${String(item.destino).padStart(2, "0")}:00 • ${item.horarioRegistro}`;

                info.appendChild(nomeEl);
                info.appendChild(detalheEl);

                const btnRemover = document.createElement("button");
                btnRemover.type = "button";
                btnRemover.className = "btn_remover_item";
                btnRemover.textContent = "Remover";
                btnRemover.onclick = () => removerItemHistorico(item.indiceOriginal);

                li.appendChild(info);
                li.appendChild(btnRemover);
                lista.appendChild(li);
            });
        };

        const removerItemHistorico = (index) => {
            historicoTrocas.splice(index, 1);
            salvarEstado();
            renderizarHistorico();
            mostrarFeedback("Registo removido de Minhas Trocas.", "info");
        };

        const limparHistorico = () => {
            if (historicoTrocas.length === 0) return;
            historicoTrocas = [];
            salvarEstado();
            renderizarHistorico();
            mostrarFeedback("Histórico de trocas excluído com sucesso.", "info");
        };

        const dispararLembrete = (hora, estudantes) => {
            const horarioFmt = `${String(hora).padStart(2, "0")}:00`;
            const mensagem = `Lembrete: falta menos de 1 hora para a reserva da Sala-1 às ${horarioFmt} (${estudantes.join(" e ")}).`;

            if ("Notification" in window && Notification.permission === "granted") {
                new Notification("Lembrete de Reserva • Sala-1", {
                    body: mensagem,
                    icon: "favicon.png"
                });
            }

            mostrarFeedback(mensagem, "lembrete");
        };

        const verificarLembretes = () => {
            const agora = new Date();
            const horaAtual = agora.getHours();
            const dataHoje = agora.toISOString().split("T")[0];

            HORARIOS.forEach((horaReservada) => {
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

        const atualizarInterface = () => {
            HORARIOS.forEach((hora) => {
                const estudantes = reservasSala[hora];
                const card = document.getElementById(`card_${hora}h`);
                const pill = document.getElementById(`pill_${hora}h`);
                const vagas = document.getElementById(`vagas_${hora}h`);
                const lista = document.getElementById(`ocupantes_${hora}h`);

                vagas.textContent = `${estudantes.length} de ${LIMITE_ESTUDANTES} vagas ocupadas`;
                lista.innerHTML = "";
                card.classList.remove("parcial", "lotado");

                if (estudantes.length === 0) {
                    pill.textContent = "Livre";
                    const li = document.createElement("li");
                    li.className = "vazio";
                    li.textContent = "Nenhum estudante reservado";
                    lista.appendChild(li);
                } else {
                    if (estudantes.length === 1) {
                        pill.textContent = "1 vaga restante";
                        card.classList.add("parcial");
                    } else {
                        pill.textContent = "Lotado";
                        card.classList.add("lotado");
                    }

                    estudantes.forEach((nome) => {
                        const li = document.createElement("li");
                        li.textContent = nome;
                        lista.appendChild(li);
                    });
                }
            });

            renderizarMinhasReservas();
            renderizarHistorico();
        };

        const reservarSala = () => {
            const nome = obterNomeInput();
            if (!nome) return;

            const hora = parseInt(document.getElementById("select_horario_principal").value, 10);
            const estudantes = reservasSala[hora];

            if (estudantes.length >= LIMITE_ESTUDANTES) {
                mostrarFeedback(`O horário das ${String(hora).padStart(2, "0")}:00 já atingiu o limite de 2 estudantes.`, "erro");
                return;
            }

            if (estudantes.some((e) => e.toLowerCase() === nome.toLowerCase())) {
                mostrarFeedback(`${nome} já possui reserva às ${String(hora).padStart(2, "0")}:00.`, "erro");
                return;
            }

            if ("Notification" in window && Notification.permission === "default") {
                Notification.requestPermission();
            }

            estudantes.push(nome);
            salvarEstado();
            atualizarInterface();
            mostrarFeedback(`Reserva confirmada para ${nome} às ${String(hora).padStart(2, "0")}:00.`, "sucesso");
            verificarLembretes();
        };

        const cancelarReserva = () => {
            const nome = obterNomeInput();
            if (!nome) return;

            const hora = parseInt(document.getElementById("select_horario_principal").value, 10);
            const estudantes = reservasSala[hora];
            const indice = estudantes.findIndex((e) => e.toLowerCase() === nome.toLowerCase());

            if (indice === -1) {
                mostrarFeedback(`Nenhuma reserva encontrada para "${nome}" às ${String(hora).padStart(2, "0")}:00.`, "erro");
                return;
            }

            estudantes.splice(indice, 1);
            salvarEstado();
            atualizarInterface();
            mostrarFeedback(`Reserva de ${nome} às ${String(hora).padStart(2, "0")}:00 cancelada.`, "info");
        };

        const trocarHorario = () => {
            const nome = obterNomeInput();
            if (!nome) return;

            const horaOrigem = parseInt(document.getElementById("select_horario_principal").value, 10);
            const horaDestino = parseInt(document.getElementById("select_horario_destino").value, 10);
            const estudantesOrigem = reservasSala[horaOrigem];
            const indiceOrigem = estudantesOrigem.findIndex((e) => e.toLowerCase() === nome.toLowerCase());

            if (indiceOrigem === -1) {
                mostrarFeedback(`Nenhuma reserva encontrada para "${nome}" às ${String(horaOrigem).padStart(2, "0")}:00.`, "erro");
                return;
            }

            const estudantesDestino = reservasSala[horaDestino];

            if (estudantesDestino.length >= LIMITE_ESTUDANTES) {
                mostrarFeedback(`O horário das ${String(horaDestino).padStart(2, "0")}:00 está lotado.`, "erro");
                return;
            }

            if (estudantesDestino.some((e) => e.toLowerCase() === nome.toLowerCase())) {
                mostrarFeedback(`${nome} já possui reserva às ${String(horaDestino).padStart(2, "0")}:00.`, "erro");
                return;
            }

            const [estudanteMovido] = estudantesOrigem.splice(indiceOrigem, 1);
            estudantesDestino.push(estudanteMovido);

            const agora = new Date();
            historicoTrocas.unshift({
                estudante: estudanteMovido,
                origem: horaOrigem,
                destino: horaDestino,
                horarioRegistro: agora.toLocaleTimeString("pt-br", { hour: "2-digit", minute: "2-digit" })
            });

            salvarEstado();
            atualizarInterface();
            mostrarFeedback(
                `Horário de ${estudanteMovido} alterado de ${String(horaOrigem).padStart(2, "0")}:00 para ${String(horaDestino).padStart(2, "0")}:00.`,
                "sucesso"
            );
            verificarLembretes();
        };

        document.getElementById("select_horario_principal").addEventListener("change", atualizarOpcoesDestino);

        atualizarOpcoesDestino();
        atualizarInterface();
        verificarLembretes();
        setInterval(verificarLembretes, 30000);