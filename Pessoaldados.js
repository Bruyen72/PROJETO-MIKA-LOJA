document.addEventListener("DOMContentLoaded", function() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const resumoItensElement = document.getElementById('resumo-itens');
    const subtotalElement = document.getElementById('subtotal-valor');
    const totalElement = document.getElementById('total-valor');

    let subtotal = 0;

    carrinho.forEach(item => {
        const resumoItem = document.createElement('div');
        resumoItem.classList.add('resumo-item');

        const imgElement = document.createElement('img');
        imgElement.src = item.imagem;

        const detailsElement = document.createElement('div');

        const nomeElement = document.createElement('span');
        nomeElement.innerText = item.nome;

        const precoElement = document.createElement('span');
        precoElement.innerText = `R$ ${item.preco.toFixed(2)}`;

        detailsElement.appendChild(nomeElement);
        detailsElement.appendChild(precoElement);

        resumoItem.appendChild(imgElement);
        resumoItem.appendChild(detailsElement);

        resumoItensElement.appendChild(resumoItem);

        subtotal += item.preco;
    });

    subtotalElement.innerText = `R$ ${subtotal.toFixed(2)}`;
    totalElement.innerText = `R$ ${(subtotal + 1.97).toFixed(2)}`;
});
