---
name: Orchestrator Framework (by levimonteiro0)
description: Framework Multi-Agente Autônomo e Universal por levimonteiro0. Orquestra 5 agentes especializados (Architect, Frontend, Backend, QA, Auditor) em loop contínuo com suporte multi-cliente (Antigravity, Codex, Claude, Cursor) e diretrizes obrigatórias de SSoT, Tailwind/Tokens e Documentação Centralizada na pasta docs/.
---

# Framework Multi-Agente Autônomo por `levimonteiro0`

Este é o framework de desenvolvimento autônomo criado por **`levimonteiro0`**, projetado para ser **universal, portátil e instalável em qualquer ambiente de desenvolvimento ou cliente de IA** (**Antigravity, OpenAI Codex, Claude Code, Cursor, VS Code**).

Ele coordena uma equipe de 5 agentes especializados sob autoridade centralizada da Skill Orquestradora:

1. **`Architect`**: Especificação técnica, arquitetura de software e contratos SSoT.
2. **`Backend Specialist`**: Serviços, modelos de dados, Server Actions, APIs e validação Zod.
3. **`Frontend Specialist`**: Interfaces Web utilizando obrigatoriamente Tailwind CSS e Tokens do Design System.
4. **`QA Tester`**: Suíte de testes, validação de compilação/build e auto-correção de falhas.
5. **`Auditor & Docs`**: Chief Documentation Officer, varredura contínua de erros/vulnerabilidades e padronização da pasta `docs/`.

---

## 5 Diretrizes Obrigatórias de Engenharia

Em qualquer projeto onde este framework for utilizado, os agentes cumprem 5 regras invioláveis:

1. **Apresentação Inicial Obrigatória**: Sempre que qualquer agente for acionado, ele DEVE se apresentar brevemente em 1 linha (ex: `🤖 [Architect - Tech Lead]: Assumindo a especificação...`) para confirmar ao usuário que foi acionado corretamente.
2. **SSoT (Single Source of Truth)**: Schemas, validações e tipos devem ser definidos em uma única fonte central (Zod em `src/schemas/`) para impedir inconsistências.
3. **Tailwind CSS & Design Tokens**: Em todo desenvolvimento Web, é obrigatório utilizar Tailwind CSS e os Tokens de Design System centralizados.
4. **Documentação Padronizada & Centralizada (`docs/`)**: Tudo o que for construído ou corrigido deve ser documentado na pasta `docs/` (`docs/PRD.md`, `docs/ROADMAP.md`, `docs/ARCHITECTURE.md`, `docs/specs/`, `docs/audit/`).
5. **Execução Autônoma em Loop (Overnight Dev)**: Após o alinhamento inicial (perguntas do PRD), o Orquestrador detém 100% da autoridade de decisão e trabalha em loop até a aprovação total dos testes.

---

## 🔄 Piloto Automático & Varredura de Vulnerabilidades

O subagente **`Auditor & Docs`** atua como scanner automático e auditor contínuo do projeto:
- Ele varre o código buscando vulnerabilidades de segurança (chaves expostas, chamadas inseguras), `TODO`s esquecidos, linter (`eslint`) e erros de tipo (`tsc`).
- Sempre que encontra uma falha, ele registra o diagnóstico em `docs/audit/continuous_audit_log.md` e aplica ou instrui a correção em loop.

---

## Gerenciamento de Estado Persistente

O progresso é mantido no arquivo `.agents/state/orchestration_state.json`.
Para inspecionar ou adicionar tarefas no terminal:
```bash
node scripts/orchestrator/orchestrator.js status
node scripts/orchestrator/orchestrator.js add-task "<titulo>" "<agente>" "[descricao]"
```
