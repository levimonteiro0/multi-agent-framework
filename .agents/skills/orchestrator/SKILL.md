---
name: Orchestrator Framework (by levimonteiro0)
description: Framework Multi-Agente Autônomo e Universal por levimonteiro0. Orquestra 5 agentes especializados (Architect, Frontend, Backend, QA, Auditor) em loop contínuo com suporte multi-cliente (Antigravity, Codex, Claude, Cursor) e diretrizes obrigatórias de SSoT, Tailwind/Tokens e Documentação Centralizada.
---

# Framework Multi-Agente Autônomo por `levimonteiro0`

Este é o framework de desenvolvimento autônomo criado por **`levimonteiro0`**, projetado para ser **universal, portátil e instalável em qualquer ambiente de desenvolvimento ou cliente de IA** (**Antigravity, OpenAI Codex, Claude Code, Cursor, VS Code**).

Ele coordena uma equipe de 5 agentes especializados sob autoridade centralizada da Skill Orquestradora:

1. **`Architect`**: Especificação técnica, arquitetura de software e contratos SSoT.
2. **`Backend Specialist`**: Serviços, modelos de dados, Server Actions, APIs e validação Zod.
3. **`Frontend Specialist`**: Interfaces Web utilizando obrigatoriamente Tailwind CSS e Tokens do Design System.
4. **`QA Tester`**: Suíte de testes, validação de compilação/build e auto-correção de falhas.
5. **`Auditor & Docs`**: Linter, auditoria estática e garantia de documentação 100% atualizada.

---

## 4 Diretrizes Obrigatórias de Engenharia

Em qualquer projeto ou contexto onde este framework for utilizado, os agentes cumprem 4 regras invioláveis:

1. **SSoT (Single Source of Truth)**: Schemas, validações e tipos devem ser definidos em uma única fonte central para impedir inconsistências entre Frontend, Backend e Banco de Dados.
2. **Tailwind CSS & Design Tokens**: Em todo desenvolvimento Web, é obrigatório utilizar Tailwind CSS e os Tokens de Design System centralizados.
3. **Documentação Centralizada & Completa**: Tudo o que for construído (arquitetura, APIs, componentes, telas) deve ser documentado de forma clara e rigorosa.
4. **Execução Autônoma em Loop (Overnight Dev)**: Após o alinhamento inicial (perguntas do PRD), o Orquestrador detém 100% da autoridade de decisão e trabalha em loop até a aprovação total dos testes.

---

## Fluxo de Operação Universal

```
[PRD / Especificações] ➔ Perguntas de Alinhamento (Usuário) ➔ 1. Architect ➔ 2. Backend ➔ 3. Frontend ➔ 4. QA Tester ➔ 5. Auditor ➔ [Loop / Conclusão]
```

### Fase 1: Alinhamento Interativo Inicial
- O Orquestrador lê o `PRD.md` (ou especificação fornecida).
- Apresenta as perguntas essenciais de alinhamento ao desenvolvedor.
- Grava o estado inicial em `.agents/state/orchestration_state.json`.

### Fase 2: Execução e Handoff entre Agentes
- **Architect** ➔ Define contratos SSoT e especificações.
- **Backend Specialist** ➔ Constrói serviços, banco e APIs.
- **Frontend Specialist** ➔ Constrói telas com Tailwind CSS e Design Tokens.
- **QA Tester** ➔ Roda testes e build. Se falhar, retorna com os logs para auto-correção.
- **Auditor & Docs** ➔ Valida qualidade e atualiza a documentação centralizada.

### Fase 3: Modo Overnight (Execução Contínua)
- O Orquestrador roda autonomamente gerenciando tarefas até a conclusão do PRD.

---

## Gerenciamento de Estado Persistente

O progresso é mantido no arquivo `.agents/state/orchestration_state.json`.
Para inspecionar ou adicionar tarefas no terminal:
```bash
node scripts/orchestrator/orchestrator.js status
node scripts/orchestrator/orchestrator.js add-task "<titulo>" "<agente>" "[descricao]"
```
