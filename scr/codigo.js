const url = "personagens.json"; // novo nome do arquivo JSON
let database = [];

// Carrega os dados ao iniciar
carregarDados().then(dados => {
    database = dados.personagens; // agora ele acessa o array 'personagens' do JSON
});

function preencherDados(dados) {
    const base = document.querySelector("#resultados");
    base.innerHTML = "";

    if (dados.length === 0) {
        const p = document.createElement("p");
        p.innerText = "Nenhum encontrado!!!";
        p.classList.add("alerta");
        base.appendChild(p);
        return;
    }

    for (let item of dados) {
        const article = document.createElement("article");

        let p = document.createElement("p");
        let span = document.createElement("span");
        span.innerText = "ID: ";
        p.appendChild(span);
        p.append(item.id);
        article.appendChild(p);

        p = document.createElement("p");
        span = document.createElement("span");
        span.innerText = "Nome: ";
        p.appendChild(span);
        p.append(item.nome);
        article.appendChild(p);

        p = document.createElement("p");
        span = document.createElement("span");
        span.innerText = "Raça: ";
        p.appendChild(span);
        p.append(item.raca);
        article.appendChild(p);

        base.appendChild(article);
    }
}

async function carregarDados() {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao carregar os dados.");
        return await res.json();
    } catch (e) {
        console.error("Erro ao buscar dados:", e.message);
    }
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const id = document.querySelector("input").value.trim();

    if (id === "") {
        preencherDados(database);
        return;
    }

    const resultado = database.filter((p) => p.id == id);
    preencherDados(resultado);
});
