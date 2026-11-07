export class AdminClientes {

  clientes = [
    {
      id: 1,
      nome: 'Enzo',
      sobrenome: 'Silva',
      dataNascimento: '10/01/2005'
    },
    {
      id: 2,
      nome: 'Valentina',
      sobrenome: 'Guimaraes',
      dataNascimento: '14/08/2007'
    }
  ];

  editar(id: number) {
    console.log('Editar cliente:', id);
  }

  excluir(id: number) {
    console.log('Excluir cliente:', id);
  }

}