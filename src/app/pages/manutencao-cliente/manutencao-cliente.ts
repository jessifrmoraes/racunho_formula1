export class cliente {

  cliente = {
    cpf: '',
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  cadastrar() {

    if (this.cliente.senha !== this.cliente.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);

    console.log(this.cliente);
  }

}