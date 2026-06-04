# SindCat: Gestão Condominial Inteligente e Simplificada

## Visão Geral do Projeto

O **SindCat** é um aplicativo móvel desenvolvido com **React Native** e **Expo**, projetado para ser o braço direito de moradores e síndicos. A ideia central do projeto é oferecer **facilidade de uso e alta usabilidade** para simplificar a rotina dentro de um condomínio, transformando problemas complexos em soluções rápidas através de uma interface intuitiva.

Em muitos ambientes condominiais, a comunicação é lenta e os processos de resolução de problemas são burocráticos. O **SindCat** nasce para quebrar essas barreiras, oferecendo uma plataforma onde a **facilitação de problemas** é a prioridade, permitindo que tudo — desde um aviso importante até a reserva de um espaço — seja resolvido com apenas alguns toques na tela do celular.

## Problema Resolvido com Usabilidade

O **SindCat** foca em resolver gargalos comuns através de uma experiência de usuário (UX) fluida:

*   **Resolução Ágil de Problemas:** Registro de ocorrências direto pelo app, eliminando papéis e garantindo que o síndico receba a demanda instantaneamente.
*   **Comunicação Direta:** Mural de avisos digital que garante que o morador esteja sempre atualizado sobre o que acontece no condomínio.
*   **Autonomia do Morador:** Facilidade para consultar disponibilidades e realizar reservas de áreas comuns sem precisar contatar a administração manualmente.
*   **Gestão Centralizada para o Síndico:** Uma visão clara de todas as demandas do condomínio em um único painel administrativo.

## Público-Alvo

*   **Moradores:** Pessoas que buscam praticidade, transparência e agilidade para viver melhor em comunidade.
*   **Síndicos:** Gestores que precisam de organização e ferramentas que facilitem a administração e o atendimento aos moradores.

## Funcionalidades Principais

O **SindCat** divide suas ferramentas para atender às necessidades específicas de cada perfil:

### 1. Central de Login
Acesso seguro e rápido, identificando automaticamente se o usuário é um morador ou o síndico para carregar as ferramentas adequadas.

### 2. Dashboard de Facilidades (`TelaDashboard.js`)
A "sala de estar" do app. Aqui, o usuário encontra:
*   **Mural de Avisos:** Comunicados urgentes e informativos importantes.
*   **Atalhos Inteligentes:** Botões rápidos para as funções mais usadas, como "Reservar Espaço" ou "Relatar Problema".
*   **Contato Direto:** Acesso imediato aos contatos da portaria e administração.

### 3. Facilitador de Ocorrências (`TelaOcorrencia.js`)
Focado na **usabilidade de facilitação**, permite:
*   **Registrar Problemas:** O morador descreve a situação e envia direto para o síndico.
*   **Acompanhamento em Tempo Real:** Status claro (aberto, em andamento, resolvido) para que o morador saiba que seu problema está sendo tratado.

### 4. Gestão de Reservas (`TelaReservas.js`)
Um sistema de agendamento simplificado para salão de festas, churrasqueiras e outras áreas, evitando conflitos de datas e horários.

### 5. Painel Administrativo do Síndico (`TelaSindico.js`)
Ferramentas exclusivas para o síndico gerenciar o condomínio com eficiência, aprovar reservas e responder ocorrências com rapidez.

## Estrutura Técnica e Arquitetura

O projeto é organizado para ser fácil de manter e evoluir:

SindCat/
├── Scr/                 # Código fonte principal
│   ├── components/      # Componentes visuais reutilizáveis
│   ├── navigation/      # Fluxo de navegação entre telas
│   ├── screens/         # Telas do aplicativo (Dashboard, Login, Ocorrências, etc.)
│   └── styles/          # Identidade visual e cores do app
├── assets/              # Recursos visuais (ícones e imagens)
├── App.js               # Arquivo principal de inicialização
└── package.json         # Dependências do projeto


## Tecnologias Utilizadas

*   **React Native & Expo:** Para uma experiência fluida e nativa em Android e iOS.
*   **React Native Paper:** Componentes de interface que seguem padrões de usabilidade modernos.
*   **@expo/vector-icons:** Ícones intuitivos que facilitam a navegação visual.

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Danilloschwager/nervous-indigo-bacon--1-.git
    ```
2.  **Instale as dependências:**
    ```bash
    cd nervous-indigo-bacon/
    npm install
    ```
3.  **Inicie o SindCat:**
    ```bash
    npx expo start
    ```
    Use o app **Expo Go** no seu celular para escanear o QR Code e testar a usabilidade do sistema.

## Contribuição

Contribuições que foquem em melhorar ainda mais a **usabilidade** e a **facilitação de problemas** são muito bem-vindas!
1. Faça um Fork.
2. Crie sua Feature Branch.
3. Envie um Pull Request.

