
// Alterar o endereço para condizer com o endereço real.

const url = "http://localhost:3000/personagens";
let database = [];


carregarDados().then(dados => {
    database = dados;
    //preencherDados(database);     Retirado para não exibir os dados no 1o carregamento da página.
})


function preencherDados(dados) {
    let base = document.querySelector("#resultados");
    let p;
    let span;

    base.innerHTML = "";
    if (dados.length == 0) {
        p = document.createElement("p");
        p.innerText = "Nenhum encontrado!!!";
        p.classList.add("alerta");
        base.append(p);
        return;
    }

    for (let item of dados) {
        let article = document.createElement("article");

        p = document.createElement("p");
        span = document.createElement("span");
        span.innerText = "ID: ";
        p.append(span);
        p.append(item.id);
        article.append(p);

        p = document.createElement("p");
        span = document.createElement("span");
        span.innerText = "Nome: ";
        p.append(span);
        p.append(item.nome);
        article.append(p);

        p = document.createElement("p");
        span = document.createElement("span");
        span.innerText = "Raça: ";
        p.append(span);
        p.append(item.raca);
        article.append(p);

        base.append(article);
    }
}

async function carregarDados() {
    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error("Houve algum problema!");
        }
        const json = await res.json();
        return json;
    } catch (e) {
        console.log(e.message);
    }
}


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let id = document.querySelector("input").value;


    if (id == "") {
        preencherDados(database);
        return;
    }

    let tmp = database.filter((v) => {
        return v.id == id;
    });
    preencherDados(tmp);
});