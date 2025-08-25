👮‍♂️ Sistema de Cadastro de Policiais — Frontend Angular 19
Este projeto é um frontend desenvolvido com Angular 19 utilizando Standalone Components, com o objetivo de fornecer uma interface limpa, responsiva e funcional para o cadastro e visualização de policiais.

🚀 Tecnologias Utilizadas
- Angular 19 (Standalone Components)
- TypeScript
- RxJS
- Angular HttpClient
- CSS Flex/Grid para responsividade

📦 Estrutura de Componentes
📝 Cadastro de Policiais
Componente responsável por registrar novos policiais no sistema.
Campos do formulário:
- rg_civil (string)
- rg_militar (string)
- cpf (string)
- data_nascimento (date)
- matricula (string)
Validações:
- CPF válido (com verificação de dígitos)
- Todos os campos obrigatórios
- Feedback visual para erros (mensagens e estilos)
Funcionalidade:
- Botão de envio que dispara requisição POST /policiais via serviço Angular

📋 Listagem de Policiais
Componente que exibe os policiais cadastrados.
Exibição:
- Tabela ou cards com:
- RG Civil
- RG Militar
- CPF
- Data de Nascimento
- Matrícula (descriptografada)
Extras:
- Botão para atualizar a lista
- Filtro por CPF ou RG (opcional)
- Layout responsivo para desktop e mobile
