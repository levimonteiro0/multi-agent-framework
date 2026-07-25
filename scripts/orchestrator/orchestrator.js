const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATE_FILE = path.join(__dirname, '../../.agents/state/orchestration_state.json');

function getProjectName() {
  try {
    const pkgPath = path.join(__dirname, '../../package.json');
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      return pkg.name || path.basename(path.join(__dirname, '../../'));
    }
  } catch (e) {
    // fallback to folder name
  }
  return path.basename(path.join(__dirname, '../../'));
}

function loadState() {
  if (!fs.existsSync(STATE_FILE)) {
    const defaultState = {
      project: getProjectName(),
      framework: "levimonteiro0 Multi-Agent Framework",
      version: "1.0.0",
      status: "IDLE",
      activeCycle: 0,
      currentAgent: "orchestrator",
      prdSource: "PRD.md",
      guardrails: {
        ssot: true,
        tailwindAndTokens: true,
        documentationRequired: true
      },
      alignmentQuestions: [],
      userAnswers: {},
      tasks: [],
      history: []
    };
    fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
    fs.writeFileSync(STATE_FILE, JSON.stringify(defaultState, null, 2), 'utf-8');
    return defaultState;
  }
  const content = fs.readFileSync(STATE_FILE, 'utf-8');
  return JSON.parse(content);
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf-8');
}

function printStatus() {
  const state = loadState();
  console.log('====================================================');
  console.log(` PROJETO: ${state.project || getProjectName()}`);
  console.log(` FRAMEWORK: ${state.framework || 'levimonteiro0 Multi-Agent'}`);
  console.log(` STATUS DO CICLO: ${state.status}`);
  console.log(` AGENTE ATUAL: ${state.currentAgent}`);
  console.log(` CICLO ATIVO: ${state.activeCycle}`);
  console.log('====================================================');
  console.log(' GUARDRAILS OBRIGATÓRIOS:');
  console.log('  ✓ SSoT (Single Source of Truth)');
  console.log('  ✓ Tailwind CSS & Design System Tokens');
  console.log('  ✓ Documentação Rigorosa & Centralizada');
  console.log('====================================================');
  console.log(' TAREFAS NA FILA:');
  if (!state.tasks || state.tasks.length === 0) {
    console.log('  (Nenhuma tarefa cadastrada)');
  } else {
    state.tasks.forEach((t, i) => {
      console.log(`  [${t.status}] ${i + 1}. [${t.assignedAgent}] ${t.title}`);
    });
  }
  console.log('====================================================');
}

function addTask(title, assignedAgent, description = '') {
  const state = loadState();
  const newTask = {
    id: `task-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    title,
    assignedAgent,
    description,
    status: 'PENDING',
    outputSummary: ''
  };
  state.tasks.push(newTask);
  state.history.push({
    timestamp: new Date().toISOString(),
    agent: 'orchestrator',
    action: 'add_task',
    result: `Adicionada tarefa "${title}" atribuída ao agente ${assignedAgent}`
  });
  saveState(state);
  console.log(`Tarefa adicionada com sucesso [ID: ${newTask.id}]`);
}

function updateTaskStatus(taskId, status, outputSummary = '') {
  const state = loadState();
  const task = state.tasks.find(t => t.id === taskId);
  if (!task) {
    console.error(`Tarefa com ID "${taskId}" não encontrada.`);
    process.exit(1);
  }
  task.status = status;
  if (outputSummary) {
    task.outputSummary = outputSummary;
  }
  state.history.push({
    timestamp: new Date().toISOString(),
    agent: task.assignedAgent,
    action: 'update_task_status',
    result: `Status da tarefa "${task.title}" alterado para ${status}`
  });
  saveState(state);
  console.log(`Status da tarefa "${taskId}" atualizado para ${status}`);
}

function runHealthCheck() {
  console.log('Iniciando checagem de saúde do projeto...');
  try {
    console.log('1. Compilador TypeScript (tsc)...');
    execSync('npx tsc --noEmit', { stdio: 'inherit' });
    console.log('✓ TypeScript verificado sem erros!');

    console.log('2. Suíte de Testes...');
    execSync('npm test -- --run', { stdio: 'inherit' });
    console.log('✓ Testes concluídos com sucesso!');

    return true;
  } catch (error) {
    console.error('❌ Falha na checagem de saúde:', error.message);
    return false;
  }
}

const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];
const arg3 = process.argv[5];

switch (command) {
  case 'status':
    printStatus();
    break;
  case 'add-task':
    if (!arg1 || !arg2) {
      console.log('Uso: node orchestrator.js add-task "<titulo>" "<agente>" "[descricao]"');
      process.exit(1);
    }
    addTask(arg1, arg2, arg3 || '');
    break;
  case 'update-task':
    if (!arg1 || !arg2) {
      console.log('Uso: node orchestrator.js update-task "<taskId>" "<status>" "[resumo]"');
      process.exit(1);
    }
    updateTaskStatus(arg1, arg2, arg3 || '');
    break;
  case 'health-check':
    runHealthCheck();
    break;
  default:
    console.log('Comandos disponíveis: status | add-task | update-task | health-check');
}
