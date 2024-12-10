
const searchBar = document.getElementById('search-bar');
const produtos = document.querySelectorAll('.produto');


searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();

    produtos.forEach(produto => {
        const nomeProduto = produto.dataset.nome.toLowerCase();

       
        if (nomeProduto.includes(query)) {
            produto.style.display = 'block'; 
        } else {
            produto.style.display = 'none';     
        }
    });
});
