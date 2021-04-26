[comment]: # (Logo)
<p align="center">
    <img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/src/assets/img/icons/pomoTraining-icon.svg" width="100px" />
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/src/assets/img/icons/logo-title.svg" />
</p>

[comment]: # (Badges)

<p align="center">
	<img alt="Vercel" src="http://therealsujitk-vercel-badge.vercel.app/?app=pomoTraining">
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=97C510&labelColor=5A5A5A">
    <!--<img src="https://img.shields.io/static/v1?label=testing&message=yes&color=94c20d&labelColor=5A5A5A" alt="Testing" />-->
</p>

<p align="center">
	<img src="https://img.shields.io/static/v1?label=Arthur%20Assuncao&message=2021&color=8A47F5&labelColor=5A5A5A" alt="Arthur Assuncao 2021" />
    <img src="https://img.shields.io/static/v1?label=ReactJS&message=yes&color=61dbfb&labelColor=5A5A5A" alt="ReactJS" />
    <img src="https://img.shields.io/static/v1?label=NextJS&message=yes&color=000000&labelColor=5A5A5A" alt="NextJS" />
    <img src="https://img.shields.io/static/v1?label=types&message=typescript&color=0f80c0&labelColor=5A5A5A" alt="Typescript" />
    <img src="https://img.shields.io/static/v1?label=SASS&message=yes&color=cc6699&labelColor=5A5A5A" alt="SASS" />
</p>

<p align="center">
	<a href="README.md" alt="README em Português">PT-BR</a>
     |
    <a href="README_EN.md" alt="README in English">EN</a>
</p>

### :link: Acesse em [https://pomotraining.vercel.app/](https://pomotraining.vercel.app/).

[comment]: # (Foto do app)
[comment]: # (Mockup IPhone https://mockuphone.com/device/iphone12black)
[comment]: # (Mockup IPad https://mockuphone.com/device/ipadsilver)
[comment]: # (Emoji list https://gist.github.com/rxaviers/7360908)

<table align="center">
    <tr>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile.png" alt="Tela mobile" width="75%" /></td>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile-home.png"  alt="Tela mobile home" width="75%" /></td>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile-home-dark.png" alt="Tela mobile home dark" width="75%" /></td>
    </tr>
</table>

## :bookmark_tabs: Índice

1.  [O que é o projeto?](#abstract)
2.  [Melhorias realizadas no projeto original](#improvements)
3.  [Layout do projeto](#images)
4.  [Tecnologias utilizadas](#stack)
5.  [Como executar o código](#how-to-run)
6.  [Licença](#license)

<div id='abstract'/>

## :computer: O que é PomoTraning

> O projeto pomoTraining é uma aplicação que une Pomodoro e Exercícios físicos, nasceu com base no projeto MoveIt da NLW 4.0 da Rockeatseat. Porém, passou por diversas melhorias e alterações.

<div id='improvements'/>

## :clap: Melhorias realizadas no projeto original

-   :star2: Uso mais eficiência do Timeout, pois ele não executa exatamente a cada 1s, depende do navegador, assim foi preciso ajustar para contar de forma exata;
-   :star2: Uso de web worker para atualização do contador em background;
-   :wrench: Alteração do nome e logo do projeto, ambos pensados e criados por mim ([@arthurassuncao](http://github.com/arthurAssuncao));
-   :waning_crescent_moon: Adição de tema dark e light;
-    :up: Adição de uma tela de login para o usuário indicar o username do seu github;
-   :octocat: Carregamento de informações do Github do usuário com base no username do usuário;
-   :cookie: Dados são salvos em cookie ;
-   :up: Adição de tela de configurações para configurar tempo do pomodoro, numero de atividades físicas por ciclo e usuário do github;
-   :up: Adição de menu lateral;
-   :up: Alteração nos desafios com a inclusão de imagens ilustrativas para facilitar a execução;
-   :heavy_check_mark: Os desafios utilizados foram pensados com base em exercícios fáceis e que eu já faço no dia a dia;
-   :up: Adição de animação em alguns componentes;
-   :heavy_check_mark: Uso de SASS em vez de CSS no CSS Modules;

<div id='images'/>

## :camera: Layout do projeto

#### :iphone: Tela mobile

<table align="center">
	<tr>
    	<td align="center"><strong>Tela de Login</strong></td>
        <td align="center"><strong>Tela Home</strong></td>
        <td align="center"><strong>Tela Home no tema Dark</strong></td>
    </tr>
    <tr>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile.png" alt="Tela mobile" width="75%" /></td>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile-home.png"  alt="Tela mobile home" width="75%" /></td>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile-home-dark.png" alt="Tela mobile home dark" width="75%" /></td>
    </tr>
</table>

#### :computer: Tela de Login em Tablet

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-login.png" height="500px" alt="Tela de Login em Tablet" />
</p>

#### :computer: Tela Home em Tablet

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-home.png" height="500px" alt="Tela Home em Tablet" />
</p>

#### :computer: Tela Home em Tablet no tema Dark

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-home-dark.png" height="500px" alt="Tela Home em Tablet no tema Dark" />
</p>

#### :computer: Tela de Configurações em Tablet

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-config.png" height="500px" alt="Tela de Configurações em Tablet" />
</p>

<div id='stack'/>

## :sparkles: Tecnologias utilizadas

O Front-end do site é feito utilizando:

-   **Nextjs** com o uso de renderização no lado servidor (SSR - Server Side Rendering);
-   **ReactJS**: diversos pacotes são utilizados;
-   **CSS Modules com SASS**: para isolar os componentes e ter maior controle;
-   **Variáveis CSS** para manter consistência nos valores de propriedades;
-   **Temas light e dark**: os temas claro e escuro são criados com o uso de variáveis css, facilitando o uso e manutenção;

<div id='how-to-run'/>

## :runner: Como executar o código

Para rodar localmente utilize o comando abaixo:

```bash
yarn dev
```

Para realizar o build local, utilize o comando:

```bash
yarn build
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.



# :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

<hr>

Feito com :hearts: por Arthur Assuncao.
