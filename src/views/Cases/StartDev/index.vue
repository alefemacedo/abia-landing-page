<template>
    <div class="start-dev-case w500">
        <div class="presentation">
            <div class="case">
                <img src="@/assets/svg/icon_star.svg" />
                <span class="type">UI/UX Case</span>
            </div>

            <img src="@/assets/svg/start_dev_logo.svg" class="logo" />

            <span class="description">
                Startdev é uma plataforma de ensino para desenvolvedores, com o objetivo de ir além da simples educação. 
            </span>

            <span class="tools">
                Ferramenta usada  
                <img src="@/assets/svg/figma_logo.svg" />
            </span>

            <img src="@/assets/img/start_dev_iphone.png" class="iphone" />

            <div class="bubble">
                <img src="@/assets/svg/bubble.svg" />
            </div>
        </div>

        <div class="contextualization section">
            <span class="title w700">Entendendo a demanda</span>
            <br />

            <div class="text">
                Startdev é uma plataforma de ensino voltada para desenvolvedores,
                com o objetivo de ir além da simples educação. A ideia é criar uma
                comunidade forte e colaborativa, onde os usuários se ajudam a aprender juntos.
                A plataforma oferece uma experiência gamificada, permitindo que os
                participantes acumulem pontos sempre que ajudam uns aos outros, e que
                podem ser trocados por cursos ou descontos em novas compras dentro da
                plataforma.
            </div>

            <img src="@/assets/svg/stars_plus.svg" class="stars-plus-1" />

            <div class="objectives">
                <span class="title w700">Objetivos do projeto</span>
                <div class="item-list">
                    <div
                        v-for="(objective, index) of objectives"
                        :key="index"
                        class="item"
                    >
                        <img :src="getAsset(objective.icon)" class="item-icon" />
                        <span class="w500">{{ objective.label }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="continuing section">
            <span class="title w700">E agora?</span>
            <br />

            <div class="text">
                Meu primeiro passo foi revisar o documento com as especificações e
                expectativas para a plataforma. <span class="highlight w700">Anotei pontos
                de dúvida, curiosidades e criei um roteiro de entrevista para
                conversar com o cliente usando o google docs.</span> Durante a entrevista,
                procurei entender o que ele esperava tanto em termos de negócio quanto
                de visual. Perguntei se já havia uma paleta de cores definida e solicitei
                exemplos de sites com referências visuais que o cliente curtia.
            </div>
        </div>

        <div class="research section">
            <span class="title w700">Pesquisa</span>
            <br />

            <div class="text">
                Iniciei uma análise dos sites de concorrentes diretos e indiretos utilizando
                o <span class="highlight w700">Google Sheets</span> para organizar e detalhar as
                informações. Registrei os pontos de interesse e o que poderia ser relevante
                para o projeto, buscando referências que agregassem valor. O objetivo foi
                identificar oportunidades de melhoria e insights, usando essas plataformas
                como fonte de inspiração para desenvolver <span class="highlight w700">soluções
                mais inovadoras e eficientes</span>.
                <br />
                <br />

                <span class="w700">Durante esta fase de pesquisa, também procurei:</span>
                <ul>
                    <li>Inspirações visuais de plataformas de tecnologia</li>
                    <li>Empresas do mesmo ramo internacionais</li>
                    <li>As plataformas que os desenvolvedores mais gostam e usam</li>
                    <li>Referências de gameficação para ensino</li>
                </ul>

                <img src="@/assets/svg/stars_plus_2.svg" class="stars-plus-2" />
            </div>

            <img src="@/assets/img/start_dev_research.png" class="desk-research" />
            <img src="@/assets/img/start_dev_research_table.png" class="research-table" />
        </div>

        <div class="style-guide section">
            <span class="title w700">Style Guide e Persona</span>
            <br />

            <div class="text">
                Nosso time de marketing já havia desenvolvido uma proto-persona para o projeto
                (infelizmente, não encontrei o arquivo para adicionar ao case). Utilizei essa
                direção inicial para dar início ao processo de design. <br/>
                <span class="highlight w700">O cliente já possuía a logomarca, paleta de cores e as
                fontes que desejava usar no projeto</span>. Com essas informações em mãos, meu
                primeiro passo antes de começar os wireframes foi definir um <span class="highlight w700">
                style guide no Figma</span>. Isso ajudou a padronizar os elementos visuais e
                facilitou o processo de criação e consistência ao longo do projeto.
            </div>
            <br />

            <img src="@/assets/img/start_dev_style-guide.jpg" />
        </div>

        <div class="user-flow section">
            <span class="title w700">User Flow</span>
            <br />

            <div class="text">
                Antes de iniciar o desenvolvimento dos wireframes, foi feito  o user flow. Esse
                passo foi importante para mapear de forma clara todas as etapas que o usuário
                percorreria dentro da plataforma. O user flow não só me ajudou a entender melhor
                a jornada do usuário, mas também a ter uma noção melhor  sobre o tempo de
                desenvolvimento e a quantidade de telas necessárias, permitindo um planejamento
                mais assertivo para o próximo estágio do projeto que é de fato o wireframe.
            </div>
            <br />

            <img src="@/assets/img/start_dev_user-flow.png" />
        </div>

        <div class="wireframe section">
            <span class="title w700">Wireframe</span>
            <br />

            <div class="text">
                Depois de definir o user flow e ter uma visão clara da jornada do usuário, o
                próximo passo foi trabalhar nos wireframes antes de chegar a uma versão final
                do design. Optei estrategicamente por usar wireframes nesse estágio, pois
                eles permitem visualizar a estrutura e a funcionalidade da plataforma sem
                focar tanto nos detalhes visuais. Isso me ajudou a:

                <ul>
                    <li>
                        Garantir que o layout fosse intuitivo e funcional, assegurando que
                        todas as interações do usuário estivessem alinhadas com os objetivos do
                        projeto.
                    </li>
                    <li>
                        Fazer ajustes rápidos e iterativos no fluxo de navegação, sem o
                        comprometimento de tempo com detalhes visuais que só seriam trabalhados
                        mais tarde.
                    </li>
                    <li>
                        Alinhar com o cliente as expectativas de usabilidade e funcionalidades,
                        antes de seguir para o design final.
                    </li>
                </ul>
            </div>
            <br />

            <div class="images">
                <img src="@/assets/svg/start_dev_wireframe_2.svg" />
                <img src="@/assets/img/start_dev_wireframe_1.png" />
            </div>
        </div>

        <div class="high-fidelity section">
            <span class="title w700">Alta fidelidade</span>
            <br />

            <div class="text">
                Após a validação com o cliente, aumentei a fidelidade dos wireframes, incorporando
                mais detalhes visuais e interativos. <br />
                Além disso, sugeri a implementação da plataforma em dark mode, levando em consideração
                que nosso público-alvo principal são desenvolvedores, que geralmente preferem
                interfaces com menos luminosidade, tornando a experiência mais confortável e alinhada
                às suas preferências.
            </div>
            <br />

            <div class="images">
                <img src="@/assets/svg/start_dev_high-fidelity.svg" />
            </div>
        </div>

        <div class="final-thoughts section">
            <span class="title2 w700">Reflexões finais</span>
            <br />

            <div class="text">
                Este foi um projeto muito divertido de trabalhar, especialmente porque me desafiou
                pelo prazo curto — cerca de 20 dias — para entregar tanto a versão web quanto a mobile.
                <br />    
                <span class="highlight w700">Gestão de Tempo e Criatividade:</span>
                <ul>
                    <li>Gerenciei outros projetos em paralelo e auxiliei a estagiária.</li>
                    <li>
                        Aprimorei minha gestão de tempo e utilizei minha criatividade de forma
                        eficaz no UI.
                    </li>
                </ul>
                
                <span class="highlight w700">Gamificação:</span>
                <ul>
                    <li>Implementamos incentivos que bonificam os alunos por interações.</li>
                    <li>
                        Recompensas por completar cursos, avaliar aulas, responder atividades e
                        interagir nos fóruns.
                    </li>
                </ul>
                
                <span class="highlight w700">Satisfação do Cliente:</span>
                <ul>
                    <li>
                        A plataforma ainda não foi lançada, mas o cliente ficou extremamente satisfeito
                        com o resultado.
                    </li>
                </ul>

                <span class="highlight w700">Realização Pessoal e Profissional:</span>
                <ul>
                    <li>
                        A experiência de transformar ideias em produtos trouxe grande realização
                        pessoal e profissional.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import MainTemplate from '@/templates/MainTemplate';

    import helpers from '@/mixins/helpers';

    defineOptions({
        name: 'ui-start-dev-case',

        components: {
            'main-template': MainTemplate
        },

        mixins: [helpers]
    });

    const objectives = [
        {
            icon: 'svg/icon_build-tool.svg',
            label: 'Criar uma plataforma para ensino de devs'
        },
        {
            icon: 'svg/icon_muscle.svg',
            label: 'Trazer uma forma de interação entre os estudantes'
        },
        {
            icon: 'svg/icon_noise-aware.svg',
            label: 'Interface amigável e simples'
        }
    ];
</script>

<style lang="stylus">
    @import './style.styl';

</style>