# Plano de Teste — Shortz-App
## 1. Identificação
- **Projeto:** Shortz-App
- **Versão:** 1.0 (Módulo de Usuários e Autenticação)
- **Grupo:** [Nome dos integrantes]
- **Data de criação:** [Data]
- **Objetivo:** [Descreva o objetivo do plano em 2-3 frases]
## 2. Escopo
### O que SERÁ testado
- [Feature 1]
- [Feature 2]
### O que NÃO será testado (nesta fase)
- [Feature fora do escopo]
## 3. Estratégia
### Níveis de Teste
- **Unitários:** [o que será testado unitariamente]
- **Integração:** [rotas/endpoints a testar com Supertest]
### Ferramentas
- Vitest, Supertest, c8/coverage, GitHub Actions
## 4. Riscos Identificados
| ID | Descrição | Categoria | Prob. | Impacto | Prioridade |
|------|------------------------------------|-----------|-------|---------|--------|
| R-01 | FALHA NO CADASTRO                  |  FUNC.    | ME.   | CRI.    | CRI.   |
| R-02 | LOGIN FALHO COM CADASTRO CERTO     |  FUNC.    | BA.   | AL.     | ME.    |
| R-03 |  SENHAS FRACAS PERM.               |  NF.      | BA.   | AL.     |  ME.   |
| R-04 |  INSTABILIDADE PO MT ACESSO        |  NF.      | AL.   |  ME.    | AL.    |
| R-05 | VAZAMENTO DE DADOS                 |  NF.      |  AL.  | CR.     |  CR.   |
| R-06 | SESSAO EXPIRA MUITO RAPIDO         |  NF.      | BA.   | BA.     | BA.    |
| R-07 | SESSAO NAO EXPIRA                  |  NF.      | ME.   | ME.     | ME.    |
| R-08 | PERDA DE INFO. DOS USERS           |  NF.      | CR.   | CR.     | CR.    |
| R-09 | LENTIDAO NO LOGIN                  |  NF.      |  ME.  | BA.     | BA.    |
| R-10 | CONFLITO DE SESSOES ENTRE DISP.    |  FUNC.    | AL.   | ME.     |  AL.   |
|------|------------------------------------|-----------|-------|---------|--------|
## 5. Recursos e Ambiente
- **Ambiente:** Node.js 20+, MySQL local, Vitest + Supertest
- **Dados de teste:** [seeds / fixtures planejados]
- **CI:** GitHub Actions (npm test em cada push)
## 6. Cronograma
| Semana | Atividade | Entrega |
|--------|-----------|---------|
| 4 | Protótipo do Plano (esta aula) | plano-de-teste.md |
| 5 | Casos de teste manuais | tests/manuais/casos-de-teste.md |
| 6 | Plano de Teste finalizado | Entrega 1 |
## 7. Critérios de Entrada e Saída
- **Entrada:** Ambiente configurado + migration ok + build passando
- **Saída:** Cobertura ≥ 70% + zero falhas em riscos Críticos/Altos
- **Suspensão:** Falha grave no ambiente que impede execução dos testes