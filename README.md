<p align="center">
  <img src="https://github.com/felipe-dr/assets/blob/main/alura/escola-front-end.png?raw=true" alt="Alura cursos: front-end" />
  <img src="public/logo-alfabit-branco.png" height="150" alt="Alfabit Design System" />
  <hr>
  <h1 align="center">Alfabit Design System</h1>
  <p align="center">Biblioteca de componentes web da <strong>Alfabit</strong></p>
</p>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/felipe-dr/alfabit-ds?style=for-the-badge&color=4e5acf" alt="Repository size" />
  <a aria-label="Last Commit" href="https://github.com/felipe-dr/alfabit-ds/commits/main">
    <img src="https://img.shields.io/github/last-commit/felipe-dr/alfabit-ds?style=for-the-badge&color=4e5acf" alt="Last commit on GitHub" />
  </a>
  <img src="https://img.shields.io/badge/license-GNU-4e5acf?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge" alt="Status" />
</p>

<p align="center">
  <a target="_blank" href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Typescript&message=TS&logo=Typescript" alt="Typescript" />
  </a>
  <a target="_blank" href="https://nextjs.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Next&message=TS&logo=Next.js" alt="Next.js" />
  </a>
  <a target="_blank" href="https://react.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=React&message=TS&logo=React" alt="React.js" />
  </a>
  <a target="_blank" href="https://github.com/JedWatson/classnames">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Classnames&message= &" alt="Classnames" />
  </a>
  <a target="_blank" href="https://cva.style/docs">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=CVA&message= &" alt="CVA" />
  </a>
  <a target="_blank" href="https://headlessui.com/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Headless&message=UI" alt="Headless UI" />
  </a>
  <a target="_blank" href="https://tailwindcss.com/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=red&label=Tailwind&message=CSS&logo=TailwindCSS" alt="TailwindCSS" />
  </a>
  <a target="_blank" href="https://storybook.js.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=ff4785&label=Storybook&message= &logo=Storybook" alt="Storybook" />
  </a>
  <a target="_blank" href="https://www.figma.com/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=f24e1e&label=Figma&message= &logo=Figma" alt="Figma" />
  </a>
</p>

## Índice

<ol>
  <li><a href="#-sobre">Sobre</a></li>
  <li><a href="#-como-instalar">Como instalar?</a></li>
  <li><a href="#-como-usar">Como usar?</a></li>
  <li><a href="#-quais-cores-foram-utilizadas-no-padrão-da-biblioteca">Quais cores foram utilizadas no padrão da biblioteca?</a></li>
  <li><a href="#-quais-dependências-são-usadas-nesta-biblioteca">Quais dependências são usadas nesta biblioteca?</a></li>
  <li><a href="#-documentação">Documentação</a></li>
  <li><a href="#-desenvolvedores--contribuintes">Desenvolvedores / Contribuintes</a></li>
  <li><a href="#-licença">Licença</a></li>
</ol>

## 📑 Sobre

A Alfabit é uma empresa de tecnologia inovadora dedicada a fornecer soluções criativas e eficientes para seus clientes. Reconhecendo a importância do design consistente e intuitivo em todas as suas plataformas e produtos, a Alfabit decidiu investir em um design system de ponta.

## 👨‍💻 Como instalar?

- Utilizando `pnpm`

```bash
pnpm add alfabit-ds
```

- Utilizando `yarn`

```bash
yarn add alfabit-ds
```

- Utilizando `npm`

```bash
npm install alfabit-ds
```

## 🚀 Como usar?

A biblioteca Alfabit-ds foi criada para funcionar em aplicações Next.js + TailwindCSS. Portanto, para usá-la lembre-se de criar suas aplicações com essa estrutura. Para que você consiga usar todos os componentes da biblioteca sem problemas é necessário uma configuração adicional no seu projeto. Vamos fazer isso passo a passo:

1. No mesmo arquivo que você importa as camadas do tailwind (geralmente o arquivo `globals.css` ou `styles.css` ) importe o arquivo CSS da biblioteca Alfabit também

   ```tsx
   import './globals.css';
   import 'alfabit-ds/styles/globals.css';
   ```

2. Dentro do arquivo de configuração do Tailwind, o `tailwind.config.js`, adicione as configurações da biblioteca Alfabit como `preset`:

   ```tsx
   const config = {
     presets: [require('alfabit-ds/tailwind.config')],
     // ... demais configurações ...
   };
   ```

3. Adicione no mesmo arquivo de configuração a referência dos arquivos da biblioteca Alfabit para serem cobertas pelo Tailwind e processadas no PostCSS. Para isso, basta adicionar o caminho dos componentes da biblioteca Alfabit dentro da propriedade `content`, no mesmo arquivo de configuração do tailwind do passo anterior:

   ```tsx
   const config = {
     content: [
       './pages/**/*.{js,ts,jsx,tsx,mdx}',
       './components/**/*.{js,ts,jsx,tsx,mdx}',
       './app/**/*.{js,ts,jsx,tsx,mdx}',
       './node_modules/alfabit-ds/components/**/*.{js,ts,jsx,tsx,mdx}',
     ],
     // ... demais configurações ...
   };
   ```

4. Configure o transpile do Next.js no arquivo `next.config.js`. Na nova versão do Next 13 temos um recurso que vai ajudar a transpilar a nossa biblioteca. Sem isso vamos ficar recebendo sucessivos erros de compilação porque o Next não vai entender nossa biblioteca.

   ```jsx
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     transpilePackages: ['alfabit-ds'],
   };

   module.exports = nextConfig;
   ```

   E agora você pode usar os componentes da biblioteca em suas páginas:

   ```tsx
   'use client';
   import { Typograph } from 'alfabit-ds/components';

   export default function Home() {
     return (
       <main className="flex min-h-screen flex-col items-center justify-center   p-24 gap-5">
         <div className="px-8 py-5 rounded-md flex flex-col gap-3 text-center   text-gray-950 bg-gray-800">
           <Typograph
             element="h3"
             size="title3"
             className="font-black   text-white"
           >
             Olá mundo!
           </Typograph>
         </div>
       </main>
     );
   }
   ```

## 🎨 Quais cores foram utilizadas no padrão da biblioteca?

Toda a identidade visual da biblioteca, como os componentes, espaçamentos e cores, você pode acessar no [Figma clicando aqui neste link](https://www.figma.com/file/h86gUvqUXTKwgr6tVYinLT/React%3A-Design-System-com-Tailwind?type=design&node-id=0-1&t=GuaFV9cp30SS2di9-0).

> Confira também a documentação da biblioteca para mais detalhes de uso [Documentação](https://alfabit-ds.vercel.app/?path=/docs/design-tokens-colors--docs).

## 📚 Quais dependências são usadas nesta biblioteca?

- [Typescript](https://www.typescriptlang.org)
- [Next.js](https://nextjs.org/)
- [React.js](https://react.dev/)
- [Classnames](https://github.com/JedWatson/classnames)
- [Class Variance Authority (CVA)](https://cva.style/docs)
- [HeadlessUI](https://headlessui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Chromatic](https://www.chromatic.com/)

> Veja o arquivo [package.json](./package.json) na íntegra.

## 📄 Documentação

Para verificar a documentação click [aqui](https://alfabit-ds.vercel.app/?path=/docs/design-tokens-colors--docs)

Para Verificar a documentação em desenvolvimento faça:

- Utilizando `pnpm`

```bash
pnpm storybook
```

- Utilizando `yarn`

```bash
yarn storybook
```

- Utilizando `npm`

```bash
npm run storybook
```

## 🦸 Desenvolvedores / Contribuintes

Esta é a equipe responsável pela criação desta biblioteca de componentes

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/NeiltonSeguins">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/77410403?v=4" width="100px;" alt="Avatar do autor" />
        <br />
        <sub>
          <b>Neilton Seguins</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/cardozov">
        <img style="border-radius: 50%;" src="https://github.com/cardozov.png" width="100px;" alt="Avatar do autor" />
        <br />
        <sub>
          <b>Neilton Seguins</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

Esse é o criador deste repositório

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/felipe-dr">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62888625?s=96&v=4" width="100px;" alt="Avatar do autor" />
        <br />
        <sub><b>Felipe DR</b></sub>
      </a>
      <br />
      <a href="mailto:felipe.corp7@gmail.com" title="E-mail">📩</a>
    </td>
  </tr>
</table>

## 📝 Licença

The [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html) (GPL)

Copyright :copyright: 2023 - Alfabit Design System
