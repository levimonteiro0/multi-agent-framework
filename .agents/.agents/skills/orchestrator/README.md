# Framework Multi-Agente de Desenvolvimento Autônomo (por `levimonteiro0`)

Um framework universal e portátil de desenvolvimento de software autônomo com **5 Agentes Especializados** coordenados por uma **Skill Orquestradora**, compatível com qualquer cliente ou assistente de IA (**Google Antigravity, OpenAI Codex, Claude Code, Cursor, VS Code**).

---

## 🎯 Visão Geral

Este framework permite passar um `PRD.md` ou especificação de requisitos, responder a algumas perguntas iniciais de alinhamento com o Orquestrador e deixar a equipe de agentes trabalhando em **loop contínuo (overnight dev)** até a conclusão completa da funcionalidade ou produto.

### 👥 A Equipe de Agentes
1. **`Architect` (Tech Lead)**: Analisa requisitos, cria especificações técnicas e contratos SSoT.
2. **`Backend Specialist`**: Constrói modelos de dados, serviços, Server Actions e APIs.
3. **`Frontend Specialist`**: Constrói interfaces Web ricas utilizando **Tailwind CSS e Design System Tokens**.
4. **`QA Tester`**: Executa suítes de teste (`vitest`), checagem de tipos estáticos e validação de build.
5. **`Auditor & Docs`**: Roda linter, realiza análises de segurança e mantém a documentação 100% atualizada.

---

## ⚡ Diretrizes Obrigatórias de Engenharia

Qualquer projeto construído com este framework segue 4 pilares invioláveis:

- **SSoT (Single Source of Truth)**: Schemas e validações centralizados.
- **Tailwind CSS & Tokens**: Todo desenvolvimento Web utiliza Tailwind CSS e tokens do Design System.
- **Documentação Rigorosa**: Tudo o que é desenvolvido deve ser documentado.
- **Execução Autônoma**: O Orquestrador coordena e toma decisões sem interrupções após o alinhamento inicial.

---

## 🚀 Como Instalar em Qualquer Repositório

Basta copiar a pasta `.agents/` e a pasta `scripts/orchestrator/` para a raiz do seu repositório:

```bash
# Copiar para outro projeto local
cp -r .agents /caminho/do/seu/projeto/
cp -r scripts/orchestrator /caminho/do/seu/projeto/scripts/
```

### Comandos de Inspeção de Estado

```bash
# Verificar o status atual das tarefas
node scripts/orchestrator/orchestrator.js status

# Adicionar uma nova tarefa à fila
node scripts/orchestrator/orchestrator.js add-task "Criar Módulo X" "architect" "Descrição da tarefa"

# Atualizar status de uma tarefa
node scripts/orchestrator/orchestrator.js update-task "<taskId>" "COMPLETED" "Resumo da entrega"
```

---

## 💻 Compatibilidade Multi-Cliente

- **Google Antigravity**: Reconhecido automaticamente via `.agents/skills/orchestrator/SKILL.md`.
- **Claude Code**: Carregado como skill/rule via `.agents/skills/orchestrator/SKILL.md`.
- **Cursor / VS Code / Codex**: Basta acionar o Orquestrador no chat apontando para a pasta `.agents/skills/orchestrator/`.

---

**Desenvolvido por [levimonteiro0](https://github.com/levimonteiro0)**
