Login validation
- 1. Saber que tem um usuário logado.
- 2. Se tiver, eu tenho que VALIDAR  este usuário.
- 3. Se sim, libera o acesso.

PARA LOGAR:
- 1. Recebe os dados de logins
- 2. Envia uma requisição pára o BACKEND validar estes dados no banco de dados.
- 3. Estando correto, salva-se o TOKEN (Alguma referência ao usuário) no browser.
- 4. Se estiver errado, avisa que está errado.

PARA DESLOGAR:
- 1. Apago a referência que existir no browser.
- 1.1 Enviar uma requisição ao BACKEND avisando para destruir aquela referência.
- 2. Atualizo a página.