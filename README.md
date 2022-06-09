## Tipos de uma aplicação

- Static Site Generation (HTML/CSS/JS) - GatsbyJS, Hexo
- Client Side Rendering (Single Page Application - SPA) - Create React App
- Server Side Rendering (SSR) - NextJS

Vídeos explicando de forma simplificada o processo de cada solução na perspectiva do usuário.

- [Static Site Generation](https://www.youtube.com/embed/1zhT23VDVDc)

- [Client Side Rendering (CSR)](https://www.youtube.com/embed/4-Lel1oaV7M)

- [Server Side Rendering (SSR)](https://www.youtube.com/embed/0bvo6UKkNDA)

### Vantagens e Desvantagens de cada solução

#### Static Site Generation (SSG)

| Vantagens                                 | Desvantagens                                      |
| ----------------------------------------- | ------------------------------------------------- |
| Uso quase nulo do servidor                | Tempo de build pode ser muito alto                |
| Pode ser servido numa CDN (melhor cache)  | Dificuldade para escalar em aplicações grandes    |
| Melhor performance entre todos            | Dificuldade para realizar atualizações constantes |
| Flexibilidade para usar qualquer servidor |                                                   |

#### Single Page Application (SPA)

| Vantagens                                          | Desvantagens                         |
| -------------------------------------------------- | ------------------------------------ |
| Permite páginas ricas em interações sem recarregar | Load inicial pode ser muito grande   |
| Site rápido após o load inicial                    | Performance imprevisível             |
| Ótimo para aplicações web                          | Dificuldades no SEO                  |
| Possui diversas bibliotecas                        | A maioria do conteúdo não é indexado |

#### Server Side Rendering (SSR)

| Vantagens                                                                | Desvantagens                                                                           |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Ótimo em SEO                                                             | TTFB (Time to first byte) maior, o servidor vai preparar todo o conteúdo para entregar |
| Meta tags com previews mais adequados                                    | HTML maior                                                                             |
| Melhor performance para o usuário (o conteúdo vai ser visto mais rápido) | Reload completo nas mudanças de rota                                                   |
| Código compartilhado com o backend em Node                               |                                                                                        |
| Menor processamento no lado do usuário                                   |                                                                                        |

## O que o NextJS tem/faz?

**O NextJS tem suporte para SSG, SSR e até SPA!**

- Renderização no servidor (Server Side Rendering - SSR)

- Geração de estáticos (Static Site Generation - SSG)

- CSS-in-JS (Styled-jsx, Styled Components, Emotion, etc)

- Zero Configuration (rotas, hot reloading, code splitting…)

- Completamente extensível (controle completo do Babel/Webpack, plugins, etc)

- Otimizado para produção

## Quando usar cada uma das soluções

### Static Site Generation (Gatsby, NextJS)

- Site simples sem muita interação do usuário
- Se você é a única pessoa que publica conteúdo
- Se o conteúdo muda pouco
- Se o site é simples, sem tantas páginas
- Quando a performance é extremamente importante

**Exemplos: Landing Page, Blogs, Portfólios**

### Single Page Application (SPA) - CRA

- Quando não tem tanta necessidade de indexar informações no Google
- Quando o usuário faz muitas interações na página e não quero refreshes
- Quando as informações vão ser diferentes para cada usuário (autenticação, por exemplo)

**Exemplos: Twitter Web, Facebook Web, Spotify Web**

### Server Side Rendering (SSR) - NextJS

- Quando tem necessidades de um SPA, mas precisa de um loading mais rápido
- Quando o conteúdo muda frequentemente
- Quando trabalha com um número muito grande de páginas
- Quando precisa de uma boa indexação no Google

**Exemplos: Ecommerce, Sites de Notícias**

## Saber mais

[Explicações sobre quando usar um ou outro](https://marinaaisa.com/blog/cook-websites-based-on-your-needs/)

[Animações do processo de cada solução](https://dev.to/kefranabg/demystifying-ssr-csr-universal-and-static-rendering-with-animations-m7d)

[Vários exemplos oficiais do NextJS com outras tecnologias](https://github.com/vercel/next.js/tree/canary/examples)

[Tutorial oficial passo-a-passo](https://nextjs.org/learn/basics/create-nextjs-app)
