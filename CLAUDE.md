# Diretrizes do Projeto — Shipex

## Objetivo
Construir a landing page da Shipex (rastreamento de cargas, histórico de envios e gestão)[cite: 1, 2, 3, 4] com camada de dados simulada (*mock*) e estrutura pronta para encaixar novas páginas e funcionalidades depois.

## Estrutura de Pastas
- `src/app/(marketing)` -> Landing page e futuras páginas públicas (/about, /blog, /contact)
- `src/app/(auth)` -> Futuro: /login e /register
- `src/app/(dashboard)` -> Futuro: área logada
- `src/components/ui` -> Botões, inputs, cards, modais e skeletons reutilizáveis
- `src/components/layout` -> Header/Navbar e Footer
- `src/features/tracking` -> Widget e lógica de rastreio por TNO ID[cite: 1, 3]
- `src/features/landing` -> Seções da landing page[cite: 1, 2, 3, 4, 5, 6]
- `src/mocks` -> Dados falsos/simulados para testes locais
- `src/services` -> Funções que buscam dados (hoje leem de `mocks/`, depois podem chamar uma API real)

## Regras de Organização
1. Componentes visuais não devem importar `mocks/` diretamente; sempre devem chamar funções em `src/services/`.
2. Cada etapa concluída deve ser marcada no `PLAN.md` antes de passar para a próxima.
3. Manter layout responsivo (mobile e desktop) sem estourar a tela na horizontal.

## Ajustes Visuais do Layout (Figma)
- Cor principal azul: `#0A58CA`
- Gradiente do topo (Hero): de `#C8D7F0` para `#B8EAE0`[cite: 2]
- Destaque laranja: `#F58220`[cite: 2]
- Corrigir *"Patners around the globe."* para *"Partners around the globe."*[cite: 5]
- Não copiar a linha azul cortando o título de feedbacks, nem a seta azul solta perto do rodapé, nem o tamanho `1440 x 7766`[cite: 6].
