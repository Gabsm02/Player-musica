# Player-musica
Este projeto é uma aplicação web interativa de reprodução de música, desenvolvida utilizando a biblioteca React. Este projeto foi desenvolvido em um desafio da Cubos Academy. Através desta aplicação, os usuários podem explorar e reproduzir uma lista de músicas disponíveis. A interface do usuário é organizada de forma intuitiva e oferece diversas funcionalidades relacionadas à reprodução de música, incluindo controle de reprodução, seleção de faixas, exibição de informações sobre a música em reprodução e uma barra de progresso para acompanhar o tempo de reprodução.

Aqui está uma descrição detalhada dos principais componentes e recursos do projeto:

Componentes Visuais:

A página apresenta um logotipo no cabeçalho, que pode ser visto no topo da tela.
Uma seção de apresentação exibe uma imagem de perfil (perfil.jpg) e uma saudação personalizada, onde é dada as boas-vindas ao usuário (no caso, "Bem vindo, Gabriel.").
A seção principal exibe uma lista de cartões de música. Cada cartão de música apresenta uma capa de álbum (cover), título (title) e botão de reprodução.
A parte inferior da página exibe um reprodutor de música, que inclui os controles de reprodução (play, pause, stop, next, previous), uma barra de progresso para mostrar o progresso da reprodução e o tempo decorrido/tempo total da música em reprodução.


Funcionalidades e Interação:

Os usuários podem clicar nos cartões de música para iniciar a reprodução da faixa correspondente.
Os botões de controle permitem pausar, reproduzir, parar, avançar para a próxima faixa e voltar para a faixa anterior.
A barra de progresso permite que os usuários acompanhem visualmente o progresso da reprodução e cliquem nela para pular para uma posição específica na música.
As informações da música atualmente em reprodução, como nome da música (musicName) e nome do artista (artistName), são exibidas acima dos controles de reprodução.
O tempo decorrido e a duração total da música são exibidos abaixo da barra de progresso.
O projeto utiliza o conceito de "estado" para controlar a reprodução da música, informações da faixa atual e tempo de reprodução.


Lógica de Reprodução:

O projeto utiliza o elemento HTML5 audio para reproduzir as faixas de música.
O hook useRef é utilizado para referenciar o elemento audio.
Os hooks useState são usados para controlar o estado da reprodução (isPlaying), informações da música atual (artistName, musicName), índice da música atual (currentMusicIndex), tempo atual de reprodução (currentTime) e duração total da música (duration).
Os eventos timeupdate e loadedmetadata são usados para atualizar o tempo atual de reprodução e a duração total da música à medida que a música é reproduzida.



Lógica de Navegação entre Músicas:

Os botões "Next" e "Previous" permitem que os usuários naveguem para a próxima ou anterior faixa na lista.
A lógica de navegação é implementada para evitar índices inválidos e garantir que a reprodução continue de forma cíclica.


Interatividade e Manipulação de Eventos:

Os eventos de clique são utilizados para interagir com os elementos da interface, como os botões de controle, os cartões de música e a barra de progresso.
A função handleBarClick permite que os usuários cliquem na barra de progresso para pular para uma posição específica na música.


![Player-musica](https://github.com/Gabsm02/Player-musica/assets/129795081/25e04687-193d-4f27-862d-3cbe337e3ac4)



Em resumo, este projeto React oferece uma experiência de reprodução de música amigável e interativa, permitindo aos usuários explorar e curtir uma seleção de músicas enquanto têm controle total sobre a reprodução e a navegação entre faixas. Além disso, ele demonstra a utilização de hooks, manipulação de eventos e a integração de elementos HTML5 em uma aplicação web moderna.


Para executar o projeto em sua máquina, siga estas etapas:

1- Clone o repositório para sua máquina usando o seguinte comando no terminal:

git clone https://github.com/Gabsm02/Player-musica

2- Abra a pasta do projeto em seu editor de texto preferido, como o Visual Studio Code.

3-No terminal, navegue até a pasta do projeto e execute o comando a seguir para instalar todas as dependências necessárias:


npm install


4- Após a conclusão da instalação das dependências, inicie um servidor local executando o seguinte comando:

npm start


Isso iniciará a aplicação e abrirá uma janela do seu navegador padrão exibindo o projeto em funcionamento.

Agora você está pronto para explorar o reprodutor de música interativo em sua própria máquina! Se tiver alguma dúvida ou problema, sinta-se à vontade para entrar em contato. Divirta-se! 🎵🎶
