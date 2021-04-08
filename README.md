<p align="center">
    <img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/src/assets/img/icons/pomoTraining-icon.svg" width="120px" />
</p>    
<p align="center">
    <img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/src/assets/img/icons/logo-title.svg" />
</p>

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=pomoTraining)

### Acesse em [https://pomotraining.vercel.app/](https://pomotraining.vercel.app/).

## Índice
 1. [O que é o projeto?](#abstract)
 2. [Melhorias realizadas no projeto original](#improvements)
 3. [Imagens do projeto](#images)
 4. [Tecnologias utilizadas](#stack)
 5. [Como rodar o código](#how-to-run)

<div id='abstract'/>

## O que é PomoTraning

> O projeto pomoTraining é uma aplicação que une Pomodoro e Exercícios físicos, nasceu com base no projeto MoveIt da NLW 4.0 da Rockeatseat. Porém, passou por diversas melhorias e alterações.

<div id='improvements'/>

## Melhorias realizadas no projeto original
- Alteração do nome e logo do projeto, ambos pensados e criados por mim ([@arthurassuncao](http://github.com/arthurAssuncao));
- Adição de tema dark e light;
- Adição de uma tela de login para o usuário indicar o username do seu github;
- Carregamento de informações do Github do usuário com base no username do usuário;
- Dados são salvos em cookie;
- Adição de tela de configurações para configurar tempo do pomodoro, numero de atividades físicas por ciclo e usuário do github;
- Adição de menu lateral;
- Alteração nos desafios com a inclusão de imagens ilustrativas para facilitar a execução;
- Os desafios utilizados foram pensados com base em exercícios fáceis e que eu já faço no dia a dia;
- Adição de animação em alguns elementos;
- Uso de SASS em vez de CSS no CSS Modules;

<div id='images'/>

## Imagens do projeto

#### Tela mobile

<table align="center">
	<tr>
    	<td>Tela de Login</td>
        <td>Tela Home</td>
        <td>Tela Home no tema Dark</td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile.png" alt="Tela mobile" width="30%" /></td>

        <td><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile-home.png"  alt="Tela mobile home" width="30%" /></td>

        <td><img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/mobile-home-dark.png" alt="Tela mobile home dark" width="30%" /></td>
    </tr>
</table>


#### Tela de Login em Tablet
<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-login.png" height="500px" alt="Tela de Login em Tablet" />
</p>

#### Tela Home em Tablet
<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-home.png" height="500px" alt="Tela Home em Tablet" />
</p>

#### Tela Home em Tablet no tema Dark
<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-home-dark.png" height="500px" alt="Tela Home em Tablet no tema Dark" />
</p>

#### Tela de Configurações em Tablet
<p align="center">
<img src="https://raw.githubusercontent.com/ArthurAssuncao/pomoTraining/main/docs/screenshots/tablet-config.png" height="500px" alt="Tela de Configurações em Tablet" />
</p>

<div id='stack'/>

## Tecnologias utilizadas
O Front-end do site é feito utilizando:
- **Nextjs** com o uso de renderização no lado servidor (SSR - Server Side Rendering);
- **ReactJS**: diversos pacotes são utilizados;
- **CSS Modules com SASS**: para isolar os componentes e ter maior controle;
- **Variáveis CSS** para manter consistência nos valores de propriedades;
- **Temas light e dark**: os temas claro e escuro são criados com o uso de variáveis css, facilitando o uso e manutenção;

<div id='how-to-run'/>

## Getting Started

Para rodar localmente utilize o comando abaixo:

```bash
yarn dev
```

Para realizar o build local, utilize o comando:
```bash
yarn build
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.
