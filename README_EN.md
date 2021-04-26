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

### :link: Go to [https://pomotraining.vercel.app/](https://pomotraining.vercel.app/).

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

## :bookmark_tabs: Summary

1.  [What is the project?](#abstract)
2.  [Improvements to the original project](#improvements)
3.  [Project's layout](#images)
4.  [Technologies](#stack)
5.  [How to run the code](#how-to-run)
6.  [License](#license)

<div id='abstract'/>

## :computer: What is the project PomoTraning?

> PomoTraining is a Pomodoro application with physical activity in short break interval. It is based on MoveIt project of the NLW 4.0 by Rocketseat. But, I made many improvements and changes.

<div id='improvements'/>

## :clap: Improvements to the original project

-   :star2: Use of More efficient Timeout, because it doen't run exactly every second (1sec), it depends of browser, so it needed correction to count exactly.
-   :star2: Use of Web worker for background counter update;
-   :wrench: Name and Logo changed, both thinked and created by me ([@arthurassuncao](http://github.com/arthurAssuncao));
-   :waning_crescent_moon: Dark and Light theme added;
-   :up: Login screen added with github username;
-   :octocat: Loading Github data from github username;
-   :cookie: Data are saved in cookies;
-   :up: Settings screen added with three options: 1) pomodoro time; 2) number of physical activities per circle; and 3) github username;
-   :up: Sidebar menu added;
-   :up: Change in challenges with the inclusion of illustrative images to facilitate execution;
-   :heavy_check_mark: Challenges were thought from easy exercises, including exercises that I do on a daily basis;
-   :up: Animation were added in some components;
-   :heavy_check_mark: I used SASS with CSS Modules instead simple CSS;

<div id='images'/>

## :camera: Project's layout

#### :iphone: Tela mobile

<table align="center">
	<tr>
    	<td align="center"><strong>Login Screen</strong></td>
        <td align="center"><strong>Home Screen</strong></td>
        <td align="center"><strong>Home Screen with Dark theme</strong></td>
    </tr>
    <tr>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile.png" alt="Tela mobile" width="75%" /></td>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile-home.png"  alt="Tela mobile home" width="75%" /></td>
        <td align="center"><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile-home-dark.png" alt="Tela mobile home dark" width="75%" /></td>
    </tr>
</table>

#### :computer: Tablet login screen

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-login.png" height="500px" alt="Tela de Login em Tablet" />
</p>

#### :computer: Tablet home screen

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-home.png" height="500px" alt="Tela Home em Tablet" />
</p>

#### :computer: Tablet home screen with Dark theme

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-home-dark.png" height="500px" alt="Tela Home em Tablet no tema Dark" />
</p>

#### :computer: Tablet settings screen

<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-config.png" height="500px" alt="Tela de Configurações em Tablet" />
</p>

<div id='stack'/>

## :sparkles: Technologies

Website Front-end is made using:

-   **Nextjs** with Server Side Rendering (SSR);
-   **ReactJS**: many packages are used.
-   **CSS Modules com SASS**: To isolate component styles in React and have more control.
-   **Variáveis CSS** to keep consistency in properties values;
-   **Temas light e dark**: dark and light themes are made with CSS variable, thus improving the use and code maintenance.

<div id='how-to-run'/>

## :runner: How to run the code

Runs the app in development mode, use the command:

```bash
yarn dev
```

Builds the app for production to the build folder, use the command:

```bash
yarn build
```

Open http://localhost:3000 to view it in the browser.

# :memo: License

This project is under the MIT license. See the LICENSE file for more details.

<hr>

Made with :hearts: by Arthur Assuncao.
