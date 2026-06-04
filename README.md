# Nervous Indigo Bacon

## Descrição do Projeto

Este é um projeto mobile desenvolvido em React Native, utilizando o framework Expo. O aplicativo foi projetado para gerenciar diversas funcionalidades, incluindo autenticação de usuários, visualização de um dashboard, registro de ocorrências, gerenciamento de reservas e uma interface específica para síndicos.

## Funcionalidades

O aplicativo oferece as seguintes funcionalidades principais:

*   **Tela de Login (`TelaLogin.js`):** Permite que os usuários se autentiquem no sistema.
*   **Dashboard (`TelaDashboard.js`):** Apresenta uma visão geral e informações importantes para o usuário logado.
*   **Registro de Ocorrências (`TelaOcorrencia.js`):** Funcionalidade para registrar e acompanhar ocorrências.
*   **Gerenciamento de Reservas (`TelaReservas.js`):** Permite a criação e gestão de reservas.
*   **Tela do Síndico (`TelaSindico.js`):** Interface dedicada para síndicos com funcionalidades administrativas.

## Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

*   **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.
*   **Expo:** Ferramenta que facilita o desenvolvimento, teste e implantação de aplicativos React Native.
*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **React Native Paper:** Biblioteca de componentes UI personalizáveis e de alta qualidade para React Native.
*   **@expo/vector-icons:** Conjunto de ícones vetoriais para uso em aplicativos Expo e React Native.

## Instalação e Execução

Para configurar e executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o Expo CLI instalados em sua máquina.

```bash
npm install -g expo-cli
```

### Passos

1.  **Clone o repositório:**

    ```bash
git clone https://github.com/Danilloschwager/nervous-indigo-bacon--1-.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
cd nervous-indigo-bacon--1-/nervous-indigo-bacon
    ```

3.  **Instale as dependências:**

    ```bash
npm install
    ```

4.  **Inicie o aplicativo:**

    ```bash
npm start
    ```

    Isso abrirá o Expo Developer Tools no seu navegador. Você pode escanear o código QR com o aplicativo Expo Go no seu celular (Android ou iOS) ou executar o aplicativo em um emulador.

## Estrutura de Pastas

```
nervous-indigo-bacon/
├── .vscode/
├── Scr/
│   ├── components/
│   ├── data/
│   ├── navigation/
│   ├── screens/
│   │   ├── TelaDashboard.js
│   │   ├── TelaLogin.js
│   │   ├── TelaOcorrencia.js
│   │   ├── TelaReservas.js
│   │   └── TelaSindico.js
│   └── styles/
├── assets/
├── .gitignore
├── App.js
├── app.json
├── index.js
└── package.json
```

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, por favor, siga os seguintes passos:

1.  Faça um fork do repositório.
2.  Crie uma nova branch (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e commit (`git commit -m 'Adiciona nova feature'`).
4.  Envie para a branch (`git push origin feature/sua-feature`).
5.  Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença 0BSD. Consulte o arquivo `LICENSE` para mais detalhes. (Nota: O arquivo LICENSE não foi encontrado no repositório, mas a licença 0BSD foi especificada no package.json).

## Contato

Para dúvidas ou sugestões, entre em contato com o mantenedor do repositório.
