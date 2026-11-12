# RestoBI: contexto do projeto

## O que tem neste repositório

| Pasta | O que é |
|---|---|
| `landing/` | Nova landing page do RestoBI (HTML único, cores da marca) |
| `login/` | Tela de login, réplica da original (acesso de demonstração) |
| `painel/` | Réplica do painel interno com dados de exemplo |
| `src/` | Projeto Next.js |

Fluxo: `landing` → **Entrar** → `login` → `painel` → **Conta › Sair** → `login`.

Para testar, abra `landing/index.html` no navegador ou sirva a pasta com qualquer servidor estático.

## Painel (réplica)

- **Barra lateral** com os grupos Dashboards e Administracao, recolhível, que vira gaveta no celular.
- **Seletor "Empresa ativa"** na barra superior. Cada empresa tem a sua cor de barra.
- **Filtros:** mês, ano, turno, unidade, modalidade, categoria, dia do mês, dia exato e dia da semana.
- **Dashboards:** Faturamento Geral, Categorias e Produtos, Mapa de Calor, Faturamento Semanal, Ticket Médio, Vendedores e **Curva ABC** (nova).
- **Administracao:** Usuarios, Metas, Empresas e Docs RestoBI Live.
- **Curva ABC:** classificação de Pareto por produto, categoria ou vendedor, com faixas ajustáveis, gráfico de Pareto e ranking. Exporta em **PDF** (jsPDF + AutoTable) e **Excel .xlsx** (SheetJS), com as bibliotecas carregadas do cdnjs só na hora de exportar.

## Importante

- Todos os números são **gerados** a partir dos filtros, e as empresas são **fictícias**. Nada está ligado à API real.
- O login é de demonstração: qualquer email válido e senha entram. A sessão fica no `localStorage`.
- Criar usuário, salvar metas e criar empresa só funcionam na memória da página.

## Próximos passos

1. Ligar o painel à API real do RestoBI no lugar dos dados de exemplo.
2. Levar a Curva ABC para o sistema de produção.
3. Definir o destino do botão "Agendar demonstração" da landing (WhatsApp ou formulário).
