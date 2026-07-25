<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Framework Multi-Agente Autônomo (por `levimonteiro0`)

Este repositório está equipado com o **Framework Multi-Agente de Desenvolvimento Autônomo de `levimonteiro0`**, composto por **5 Subagentes Especializados** e **1 Skill Orquestradora**, permitindo execução contínua em loop (overnight dev) em qualquer cliente de IA (**Antigravity, Codex, Claude Code, Cursor, VS Code**).

## 🛡️ Guardrails Obrigatórios de Engenharia
1. **Apresentação Inicial Obrigatória**: Todo agente acionado DEVE se apresentar em 1 linha (ex: `🤖 [Architect - Tech Lead]: Assumindo a especificação...`) confirmando sua ativação.
2. **SSoT (Single Source of Truth)**: Schemas, validações (Zod) e contratos de dados unificados para eliminar inconsistências.
3. **Tailwind CSS & Design System Tokens**: Qualquer desenvolvimento Web utiliza obrigatoriamente Tailwind CSS e Tokens do Design System (variáveis CSS de cores, fontes e temas).
4. **Documentação Padronizada & Centralizada (`docs/`)**: Todo recurso, arquitetura ou bug corrigido DEVE ser documentado na pasta `docs/` (`docs/PRD.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/specs/`, `docs/audit/`).
5. **Execução Autônoma em Loop**: Após o alinhamento de perguntas do PRD, o Orquestrador detém 100% da autoridade de decisão e gerencia a equipe até a conclusão dos testes.

---

## 1. Agentes Especializados (`.agents/skills/orchestrator/prompts/`)
- **`Architect`**: Responsável por ler o PRD, criar especificações técnicas de baixo nível em `docs/specs/`, modelos de dados, schemas Zod/Prisma e assinar funções.
- **`Backend Specialist`**: Responsável por implementar Prisma ORM, Server Actions (`action-utils.ts` com RBAC), rotas de API, webhooks e i18n.
- **`Frontend Specialist`**: Responsável por construir a UI/UX em Next.js App Router usando **Tailwind CSS**, Tokens do Design System, Framer Motion e suporte dark/light mode.
- **`QA Tester`**: Responsável por escrever e executar testes (`vitest`), checagem de tipos (`npx tsc --noEmit`) e validação de build (`npm run build`).
- **`Auditor & Docs`**: Chief Documentation Officer e scanner de vulnerabilidades, responsável por linter (`eslint`), auditoria estática e garantia da estrutura padronizada em `docs/`.

---

## 2. Skill Orquestradora (`.agents/skills/orchestrator/SKILL.md`)
A Skill Orquestradora gerencia a ordem, agendamentos e autoridade de decisão:
- **Fase de Alinhamento**: Lê o PRD, faz as perguntas iniciais de alinhamento ao desenvolvedor e inicializa `.agents/state/orchestration_state.json`.
- **Handoff em Loop**: Encadeia as entregas do `Architect` -> `Backend` -> `Frontend` -> `QA` -> `Auditor`. Se o `QA` reprovar a build ou algum teste, a tarefa retorna automaticamente para correção.
- **Modo Overnight**: Utiliza a infraestrutura de background/timers para manter a suíte trabalhando de forma autônoma sem interrupções até a conclusão do PRD.

---

## 3. Gerenciamento de Estado Persistente (`scripts/orchestrator/orchestrator.js`)
Para inspecionar ou gerenciar a fila de tarefas dos agentes:
```bash
node scripts/orchestrator/orchestrator.js status
node scripts/orchestrator/orchestrator.js add-task "<titulo>" "<agente>" "[descricao]"
node scripts/orchestrator/orchestrator.js update-task "<taskId>" "<status>" "[resumo]"
```
