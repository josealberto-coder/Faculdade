document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form_petshop");
    const tabelaCorpo = document.querySelector("#tabela_animais tbody");
    const precoTotalEl = document.getElementById("preco_total");
    const listaHistoricoEl = document.getElementById("lista_historico");
    const btnLimparHistorico = document.getElementById("botao_limpar_historico");

    
    let historicoAtendimentos = JSON.parse(localStorage.getItem("petshop_historico")) || [];

   
    function formatarMoeda(valor) {
        return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }

   
    function calcularTotal() {
        let total = 0;
        const celulasPreco = tabelaCorpo.querySelectorAll(".celula_preco");

        celulasPreco.forEach(celula => {
        
            const textoLimpo = celula.textContent.replace("R$", "").replace(/\./g, "").replace(",", ".").trim();
            const valor = parseFloat(textoLimpo);

            if (!isNaN(valor)) {
                total += valor;
            }
        });

        precoTotalEl.textContent = formatarMoeda(total);
        return total;
    }

  
    tabelaCorpo.addEventListener("input", calcularTotal);

    function renderizarHistorico() {
        listaHistoricoEl.innerHTML = "";

        if (historicoAtendimentos.length === 0) {
            listaHistoricoEl.innerHTML = '<p class="aviso_vazio">Nenhum atendimento registrado ainda.</p>';
            return;
        }

     
        historicoAtendimentos.slice().reverse().forEach((registro, indexInvertido) => {
            const indexReal = historicoAtendimentos.length - 1 - indexInvertido;

            const card = document.createElement("div");
            card.className = "card_atendimento";

            const listaAnimaisHTML = registro.animais.map(animal => `
                <li>
                    <strong>${animal.nome}</strong> (${animal.porte || "Porte não inf."}) — 
                    ${animal.servico || "Serviço não inf."} : 
                    <span>${formatarMoeda(animal.preco)}</span>
                </li>
            `).join("");

            card.innerHTML = `
                <div class="card_topo">
                    <div>
                        <strong>Tutor:</strong> ${registro.tutor} | 
                        <strong>Tel:</strong> ${registro.telefone}
                    </div>
                    <small>${registro.data}</small>
                </div>
                <ul class="card_animais">
                    ${listaAnimaisHTML}
                </ul>
                <div class="card_rodape">
                    <strong>Total Pago: ${formatarMoeda(registro.total)}</strong>
                    <button type="button" class="btn_excluir" data-index="${indexReal}">Excluir</button>
                </div>
            `;

            listaHistoricoEl.appendChild(card);
        });
    }


    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const tutor = document.getElementById("tutor").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const linhas = tabelaCorpo.querySelectorAll("tr");
        const animais = [];

        linhas.forEach(linha => {
            const celulas = linha.querySelectorAll("td");
            const nome = celulas[0].textContent.trim();
            const porte = celulas[1].textContent.trim();
            const servico = celulas[2].textContent.trim();
            const precoTexto = celulas[3].textContent.replace("R$", "").replace(/\./g, "").replace(",", ".").trim();
            const preco = parseFloat(precoTexto) || 0;

     
            if (nome !== "" || servico !== "") {
                animais.push({ nome: nome || "Sem nome", porte, servico, preco });
            }
        });

        if (animais.length === 0) {
            alert("Preencha pelo menos um animal na tabela antes de registrar.");
            return;
        }

        const novoRegistro = {
            tutor,
            telefone,
            data: new Date().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }),
            animais,
            total: calcularTotal()
        };

        historicoAtendimentos.push(novoRegistro);
        localStorage.setItem("petshop_historico", JSON.stringify(historicoAtendimentos));

      
        form.reset();
        tabelaCorpo.querySelectorAll("td").forEach(td => td.textContent = "");
        calcularTotal();

        renderizarHistorico();
    });

    
    listaHistoricoEl.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn_excluir")) {
            const index = parseInt(event.target.getAttribute("data-index"));
            historicoAtendimentos.splice(index, 1);
            localStorage.setItem("petshop_historico", JSON.stringify(historicoAtendimentos));
            renderizarHistorico();
        }
    });

    btnLimparHistorico.addEventListener("click", () => {
        if (historicoAtendimentos.length > 0 && confirm("Deseja realmente apagar todo o histórico?")) {
            historicoAtendimentos = [];
            localStorage.removeItem("petshop_historico");
            renderizarHistorico();
        }
    });

  
    renderizarHistorico();
});