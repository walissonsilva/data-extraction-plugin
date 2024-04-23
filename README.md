# Plugin de Extração de Dados

Este projeto consiste em um plugin de extração de dados de uso de uma página web estática. Os dados coletados são enviados para o `Firebase Realtime Database` através de uma API que se conecta com esse serviço. Os dados coletados podem ser consumidos por meio desta `API`.

O projeto foi subdivido em três subprojetos: a página web estática, o plugin para extração dos dados e a API para comunicação com o Firebase. Sendo assim, temos um monorepo contendo três projetos, os quais são:

1. `page`: projeto para a criação da página estática. Este projeto foi criado utilizando o React.js + Vite + TypeScript.
2. `api`: projeto para o desenvolvimento da API Rest que fornece endpoints para a comunicação com o Firebase. Este projeto foi desenvolvido utilizando o Node.js + TypeScript + Express.
3. `plugin`: projeto para o desenvolvimento do plugin a ser integrado na página estática. Este projeto foi desenvolvido utilizando o Node.js + TypeScript.

![Screenshot da página estática desenvolvida.](./static-page.png)
