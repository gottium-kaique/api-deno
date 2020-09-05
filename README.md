# API com Deno

Eu desenvolvi esse CRUD com deno, afim de testar a ferramenta, o novo runtime,
eu tive uma experiência muito boa com o Deno, eu uso o Node que tem alguns pro-
blemas,o deno resolve muito bem esses problemas do Node,
como a pasta node_modules/, que é uma pasta muito grande e volumosos que contém
todas as dependências do Node, já as dependências do Deno, são baixadas de maneira
global.

Outra coisa é que já vem com o TypeScript, no Node, você precisa configurar manual-
mente, também quando você precisa usar por exemplo: uma função autoexecutável assíncrona,
no Deno, não precisa só de você colocar o await no escopo global, ele não necessita de uma função
autoexecutável.

O Deno também é seguro por padrão, toda vez que você for usar o Deno, você precisa, liberar as 
permissões com flags: --allow-read para ler arquivos, --allow-write para escrever arquivos, 
--allow-net para permitir o acesso a rede entre outras.

O Deno usa a importação do ES6, import/export.

# Bibliotecas usadas

Opine é usado para fazer um server local de 
modo muito semelhante ao ExpressJS do Node.

opine - https://deno.land/x/opine@0.21.2/mod.ts


SQLite foi usado para criar um banco de dados.

sqlite - https://deno.land/x/sqlite/mod.ts

# Comando para rodar projeto

`deno run --allow-net --allow-write --allow-read src/server.ts`

# Comando para criar tabela

`deno run --allow-read --allow-write src/database/migrations/01_createUser.ts`

## Autor

👤**Kaique Araújo**

<h4>Feito com ♥ e TypeScript.</h4>