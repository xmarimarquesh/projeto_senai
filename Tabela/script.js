function adicionarItem(){
    //Obter valores dos campos digitados
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var ml = document.getElementById("ml").value;
    var quantidade = document.getElementById("quantidade").value;
    
    if(!nome || !valor || !ml || !quantidade){
        alert("Preencha os campos!!!");
        return;
    }

    //criar a tabela, mais precisamente uma linha na tabela
    var tabela = document.getElementById("tabela")
    .getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaMl = novaLinha.insertCell(2);
    var celulaQuantidade = novaLinha.insertCell(3);
    

    //Colocar valores nas celulas
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;
    celulaMl.innerHTML = ml;

    //limpar os dados
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("ml").value = "";
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela");
    var nomeArquivo = 'tabela_produtos.xlsx'
    var wb = XLSX.utils.table_to_book(tabela, {sheet:"Tabela de produtos"});
    XLSX.writeFile(wb, nomeArquivo);
}