
## 📌 Sobre o Projeto

✅ Objetivo Geral

Criar um aplicativo móvel inovador para o agendamento inteligente de consultas odontológicas, com foco na prevenção e no gerenciamento automatizado de atendimentos. Diferente dos sistemas tradicionais, o app não espera que o cliente marque a consulta, mas sugere automaticamente agendamentos preventivos, garantindo tratamentos contínuos e evitando problemas futuros. Além disso, as clínicas aumentam sua carteira de clientes, enquanto as seguradoras odontológicas reduzem seus custos com tratamentos emergenciais.


✅ Objetivo para os Clientes

1️⃣ Agendamento Preventivo Automatizado: O sistema analisará o histórico do cliente e sugerirá consultas odontológicas regulares, prevenindo problemas futuros.

2️⃣ Redução de Custos com Tratamentos Caros: Consultas frequentes ajudam a evitar procedimentos emergenciais que podem ser financeiramente pesados.

3️⃣ Maior Conveniência e Controle: O usuário recebe notificações das sugestões de consulta e pode confirmar, reagendar ou cancelar com facilidade.

4️⃣ Programa de Benefícios: Os clientes que mantiverem a regularidade nas consultas preventivas ganharão pontos, descontos e vantagens exclusivas.

5️⃣ Histórico e Personalização: O usuário pode acompanhar todas as consultas realizadas e receber recomendações personalizadas com base no seu perfil odontológico.


✅ Objetivo para as Clínicas

1️⃣ Aumento da Carteira de Clientes: O sistema atrai pacientes para as clínicas de forma automática, reduzindo a dependência de ações de marketing.

2️⃣ Redução de Agendamentos Ociosos: O agendamento preventivo mantém a agenda sempre preenchida, evitando períodos vazios.

3️⃣ Clientes Mais Engajados e Fiéis: Como os pacientes são incentivados a comparecer regularmente, há uma maior retenção e relacionamento a longo prazo.

4️⃣ Gestão Eficiente da Agenda: A clínica pode visualizar, aprovar ou ajustar os agendamentos sugeridos pelo sistema, otimizando seus horários.

5️⃣ Diminuição de Cancelamentos e Faltas: O programa de benefícios incentiva os clientes a comparecerem às consultas, reduzindo as ausências.


✅ Objetivo para as Seguradoras Odontológicas

1️⃣ Redução de Gastos com Tratamentos de Alto Custo: A prevenção reduz a necessidade de procedimentos caros, beneficiando as seguradoras.

2️⃣ Menor Sinistralidade nos Planos Odontológicos: A regularidade das consultas melhora a saúde bucal dos clientes, reduzindo pedidos de reembolsos por emergências.

3️⃣ Análises Inteligentes e Previsões de Risco: O sistema pode identificar padrões de atendimento e sugerir estratégias para melhorar a gestão de planos odontológicos.

4️⃣ Maior Satisfação dos Segurados: Clientes que recebem suporte preventivo tendem a avaliar melhor os serviços oferecidos pela seguradora.

5️⃣ Parceria Estratégica com Clínicas: O app conecta as seguradoras às clínicas parceiras, garantindo um fluxo contínuo de atendimentos.


✅ Agendamentos Preventivos: Como Funciona?

📌 1. O cliente cadastra suas informações e recebe um cronograma preventivo de consultas odontológicas. Essas sugestões serão com base nos dias e horários que ele marcar como prioridade e disponibilidade, além de seu endereço de preferência, assim evita cancelamentos e atenderemos aos requisitos dos clientes.

📌 2. O sistema analisa o perfil do paciente e sugere automaticamente consultas preventivas, baseadas em seu histórico e necessidade.

📌 3. O cliente recebe notificações e pode aceitar ou ajustar a data da consulta sugerida.

📌 4. A clínica aprova e confirma a consulta, garantindo um fluxo constante de atendimentos.

📌 5. Após a consulta, o histórico do cliente é atualizado, garantindo que o ciclo preventivo continue no período ideal.


✅ Programa de Benefícios e Incentivos

Para aumentar o engajamento de clientes e clínicas, o app contará com um programa de benefícios, onde os participantes acumulam pontos e vantagens exclusivas ao manterem consultas regulares.


🎯 Para os Clientes:

✔️ Acúmulo de Pontos: Cada consulta preventiva realizada gera pontos, que podem ser trocados por descontos em procedimentos estéticos, produtos odontológicos ou outros serviços.

✔️ Descontos em Seguros e Planos Odontológicos: Os clientes mais assíduos podem ter descontos progressivos nas mensalidades dos planos odontológicos.

✔️ Brindes e Experiências Exclusivas: Parcerias com marcas e estabelecimentos para oferecer vantagens especiais.


🎯 Para os Dentistas e Clínicas:

✔️ Ranking de Engajamento: Profissionais que mantêm maior taxa de atendimentos preventivos recebem destaque no app e benefícios em campanhas de marketing.

✔️ Bônus Financeiros: Parcerias com seguradoras podem gerar incentivos financeiros para clínicas que mantêm altos índices de prevenção.

✔️ Indicação de Pacientes: Clínicas mais bem avaliadas e engajadas no programa recebem maior fluxo de clientes pelo app.


💡 Conclusão:

Nosso aplicativo não é apenas um sistema de marcação de consultas, mas uma plataforma inteligente para a gestão preventiva da saúde bucal. Com um modelo inovador de agendamentos automáticos, benefícios para clientes e clínicas e redução de custos para seguradoras, criamos um ecossistema sustentável, onde todos saem ganhando.


📢 Resultado esperado:

🚀 Mais pacientes engajados + Clínicas com agenda cheia + Seguradoras reduzindo custos com emergências = Revolução na Odontologia Preventiva!


# 📌 Estrutura de Rotas do Projeto

Este documento descreve as principais rotas do projeto, explicando sua finalidade e onde são utilizadas.

## 📂 Estrutura de Pastas

O projeto está organizado da seguinte forma:

```bash
   APP
   ├── (auth)
   ├── (authPartners)
   ├── (home)
   ├── componentes
   ├── homeclient
   ├── homepartners
   ├── onboarding
   ├── settings
   ├── sugestion
   ├── layout
   └── assets
```

## 🔹 Descrição das Rotas

### 1️⃣ **auth/**
📌 Responsável pela autenticação de usuários no aplicativo e terá outras rotas voltada para uso do usuário de forma restrita.
- Gerencia login, cadastro e recuperação de senha.
- Integração com Firebase Authentication para autenticação segura.
- Atualização do cadastro, inserir novos dados, excluir dados, entre outros.
- Visualizar sugestão de consultas.
- Visualizar agendamentos
- Programa de beneficios
--- Essa pasta vai gerenciar as rotas citadas acima.

### 2️⃣ **authPartners/**
📌 Gerencia a autenticação para usuários parceiros.
- Estrutura similar à `auth`, mas voltada para parceiros da plataforma.

### 3️⃣ **home/**
📌 Contém as telas principais da aplicação.
- Exibe a página inicial antes do Login ou cadastro para todos os usuários, explicando a ideia do projeto.
- Redireciona para outras áreas do app que serão destinadas a clientes ou parceiros.

### 4️⃣ **componentes/**
📌 Reúne os componentes reutilizáveis do projeto.
- Botões, inputs, modais, cards e outros elementos de UI.
- Facilita a manutenção e padronização do design.

### 5️⃣ **homeclient/**
📌 Tela principal para clientes.
- Exibe funcionalidades e opções específicas para clientes cadastrados.
- Será a página responsável por direcionar o cliente para o Login ou Cadastro da sessão de clientes.

### 6️⃣ **homepartners/**
📌 Tela principal para parceiros.
- Exibe recursos e informações exclusivas para parceiros.
- Será a página responsável por direcionar as clínicas para o Login ou Cadastro da sessão de clientes.

### 7️⃣ **onboarding/**
📌 Responsável pelo fluxo inicial de apresentação do app.
- Mostra tutoriais ou slides de introdução antes do primeiro login.

### 8️⃣ **settings/**
📌 Configurações do usuário e personalização da conta.
- Permite ajustes como notificações, idioma, tema e privacidade.
- Área ainda em desenvolvimento.

### 9️⃣ **sugestion/**
📌 Sistema de feedbacks.
- Permite que usuários enviem opiniões e melhorias sobre o app.
- Área ainda em desenvolvimento.

### 🔟 **layout/**
📌 Gerencia a estrutura visual do aplicativo.
- Contém arquivos relacionados ao design, estilos e organização de telas. Responsável pela navegação.

### 🏞️ **assets/**
📌 Armazena imagens, ícones e outros recursos estáticos.
- Mantém a organização de mídias utilizadas no projeto.

---
### 🛠 **Manutenção e Atualizações**
- Sempre que uma nova rota for adicionada, este documento deve ser atualizado.
- Manter a estrutura organizada facilita a escalabilidade e colaboração no projeto.




