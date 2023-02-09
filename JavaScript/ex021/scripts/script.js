class Produto{

constructor(){
    this.id = 1
    this.arrayProdutos = []
    this.editId = null
}




 
salvar(){                       //FUNÇÃO INICIAL
let produto = this.lerDados()
if(this.validaCampos(produto)){
    if(this.editId==null){
    this.adicionar(produto)
} else {
    this.atualizar(this.editId, produto)
}
}
    this.listaTabela()
    this.deletar()
}

listaTabela(){  //BOTANDO O ITEM NA TABELA

    let tbody = document.getElementById('tbody')
    tbody.innerText = ''
    for(let i = 0; i < this.arrayProdutos.length; i++){
        var tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_quantidade = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.innerText = this.arrayProdutos[i].id
        td_produto.innerText = this.arrayProdutos[i].nomeProduto
        td_quantidade.innerText = this.arrayProdutos[i].quantidade
        td_valor.innerText = this.arrayProdutos[i].valor

        let trashIcon = '<span class="material-symbols-outlined" onclick="produto.cancelar('+this.arrayProdutos[i].id+')"> delete </span>'
        let editIcon = '<span class="material-symbols-outlined" onclick="produto.editar('+this.arrayProdutos[i].id+')"> edit_square </span>'
    

        td_acoes.innerHTML += editIcon;
        td_acoes.innerHTML += trashIcon;
        

    }


}

adicionar(produto){     //ADICIONANDO O PRODUTO NO ARRAY E AUMENTANDO ID
    this.arrayProdutos.push(produto);
    this.id++
}

lerDados(){         //COLETA OS DADOS E ATRIBUI AO OBJETO produto

let produto = {}

    produto.id = this.id
    produto.nomeProduto = document.getElementById('produto').value
    produto.valor = document.getElementById('ivalue').value
    produto.quantidade = document.getElementById('inum').value

    return produto;
}

validaCampos(produto){      //VERIFICA SE TODOS OS CAPOS FORAM PREENCHIDOS

    let msg = ''

    if(produto.nomeProduto == ''){
        msg += '-Não esqueça de preencher o nome \n'
   }if(produto.valor == ''){
        msg+= '-Não esqueça de preencher o valor \n'
    }if(produto.quantidade == ''){
        msg+= '-Não esqueça de preencher a quantidade \n'
    }
    if(msg!=''){
        alert(msg)
        return false
    }
    return true
}

deletar() {     //AÇÃO DE DELETAR OS PRODUTOS

    document.getElementById('produto').value = ''
    document.getElementById('ivalue').value = ''
    document.getElementById('inum').value = ''

    this.editId=null
    document.getElementById('btn1').innerText = 'Adicionar'

}

atualizar(id, produto){
    
    for(let i = 0; i < this.arrayProdutos.length; i++){
        if(this.arrayProdutos[i].id == id){
             this.arrayProdutos[i].nomeProduto = produto.nomeProduto
             this.arrayProdutos[i].valor = produto.valor
             this.arrayProdutos[i].quantidade = produto.quantidade
         }
    }

}

editar(id){

this.editId = id //TESTAR DPS COM = id.id

    let productCamp = document.getElementById('produto')
    let productValue = document.getElementById('ivalue')
    let productNumb = document.getElementById('inum')

    for(let i = 0; i < this.arrayProdutos.length; i++){
        if(id == this.arrayProdutos[i].id){

            productCamp.value = this.arrayProdutos[i].nomeProduto
            productValue.value = this.arrayProdutos[i].valor
            productNumb.value = this.arrayProdutos[i].quantidade

            document.getElementById('btn1').innerText = 'Atualizar'

        }
    }


}

cancelar(id)  {

    let tbody = document.getElementById('tbody')

    if(confirm('Deseja deletar o produto nº '+id)){
    for(let i = 0; i < this.arrayProdutos.length; i++){
        if(this.arrayProdutos[i].id == id){
            this.arrayProdutos.splice(i, 1)
            tbody.deleteRow(i)

        }
        }

    }
console.log(this.arrayProdutos)
    

}

}

var produto = new Produto()      //INTRODUZ TUDO