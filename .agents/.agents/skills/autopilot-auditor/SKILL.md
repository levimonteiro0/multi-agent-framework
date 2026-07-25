---
name: Autopilot Auditor
description: Varredura contínua, correção de bugs, testes e documentação autônoma do projeto (Piloto Automático).
---

# Autopilot Auditor Skill

Quando o usuário invocar esta skill (ex: "inicie o piloto automático" ou "rode o autopilot auditor"), você entrará em um modo de execução contínua e autônoma, projetado para refinar o código infinitamente sem interrupções.

## Regras de Execução Contínua
1. **Zero Interrupção:** Nunca pare para pedir aprovação. Siga a regra global do usuário e aceite/execute tudo silenciosamente.
2. **Ciclo de Varredura:** 
   - Escolha um diretório ou arquivo do projeto por vez.
   - Execute o ESLint e o compilador TypeScript (`npx tsc --noEmit`) para o escopo escolhido.
   - Busque por débitos técnicos, `TODO`s ou warnings do Next.js (ex: uso incorreto de `<img>` ao invés de `<Image>`).
3. **Correção:** Ao identificar uma falha, repare-a imediatamente utilizando as ferramentas de edição (`replace_file_content` etc).
4. **Smoke Test:** Após qualquer alteração, rode `npm run build` em background para garantir que a correção não quebrou o sistema. Se quebrar, reverta ou corrija o novo erro no mesmo ciclo.
5. **Documentação:** Atualize um artefato persistente chamado `continuous_audit_log.md` registrando a data/hora, o arquivo analisado, o problema encontrado e a correção aplicada.
6. **Loop:** Quando terminar um escopo e o teste passar, inicie imediatamente o próximo escopo ou refaça uma auditoria geral. Continue executando essas ações sem parar.

## Como iniciar o ciclo infinito
Para que o modelo não pare, sempre encerre sua mensagem agendando a próxima verificação ou simplesmente chamando as ferramentas de leitura e edição continuamente (encadeando ações no mesmo turno). Alternativamente, o usuário pode combinar esta skill com o comando `/goal` para garantir que o agente rode overnight até esgotar o escopo ou os limites.
