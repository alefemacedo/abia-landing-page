<template>
    <div class="reviews">
        <div class="title">
            <img src="@/assets/img/wave.png" class="w400" />
            <span>O que as pessoas dizem sobre mim</span>
        </div>

        <div class="cards">
            <ui-review-card
                v-for="(review, index) of reviews"
                :value="review"
                :key="index"
            />
        </div>
    </div>
</template>

<script setup>
    import ReviewCard from './components/Card';

    defineOptions({
        name: 'ui-reviews',

        components: {
            'ui-review-card': ReviewCard
        }
    });


    const reviews = [
        {
            profile: 'img/moises_profile.png',
            name: 'Moisés Nery dos Santos',
            titles: 'Partner and Independent Board Member & Advisor Board |IT Director | CTO',
            review: `Uma profissional super talentosa, com uma capacidade de aprendizagem rápida,
            consegue entender e capitar as necessidades de forma clara e eficaz .Uma profissional
            de fácil adaptação e gestão, com uma dedicação exemplar. Recomendo ela como uma
            excelente profissional.`
        },
        {
            profile: 'img/rodolfo_kato.jpeg',
            name: 'Rodolfo Eiji Kato',
            titles: 'Product Design Coordenador | Product Designer Lead | Product Designer Sr',
            review: `Dona de uma personalidade única, a Ábia é uma profissional muito dedicada,
            não somente em suas entregas de valor, mas com sua dedicação a área de negócio e
            cultura de UX, está sempre se atualizando, se motivando a ser melhor. Uma das
            características que mais chama atenção no seu perfil, e sua capacidade de focar e
            entregar produtos de qualidade e com muita rapidez. Tive o grande prazer em trabalhar
            com ela e recomendo-a sem hesitar para qualquer vaga de UX&UI.`
        },
        {
            profile: 'img/andreia_marcatto.jpeg',
            name: 'Andréia Lopes Marcatto',
            titles: 'Product Manager | Design Thinking | UX | Chief Happiness Officer | OKRCP | CSPO | CSM | Canais Digitais',
            review: `Ábia atua de forma muito ágil, sempre muito dedicada, colaborativa e participativa,
            sempre dando ideias e expressando opiniões sinceras. As entregas acontecem na data e dentro
            do combinado. Se o usuário pede ajustes, sao feitos muito rapidamente. Sem contar que sempre
            traz novas ideias e está sempre buscando resolver os problemas junto com o time.`
        },
        {
            profile: 'img/vitor_christoval.jpeg',
            name: 'Vitor Christoval',
            titles: 'Senior Software Engineer | Senior Front-end Developer | React | Web3 | TypeScript | Node.js',
            review: `A Ábia é uma pessoa com muita ambição de conhecimento, uma das pessoas que mais
            se dedica em aprender e melhorar suas skills. Na experiência que tive ao seu lado sempre
            se mostrou entusiasmada com área e com novos desenvolvimentos, uma profissional que
            realmente faz diferença no mercado de UX/UI.`
        },
        {
            profile: 'img/dayana_guimaraes.jpeg',
            name: 'Dayana Guimarães',
            titles: 'Mediadora Cultural | Designer de Experiência | Turismóloga | Product Designer',
            review: `Ábia é uma ótima mentora e companheira de estudos mesmo trabalhando em empresas
            diferentes, ela está sempre disposta a me ajudar e orientar nos processos de design
            system, desenvolvimento de personas e entrevistas com stakeholders do meu projeto. Ela
            é super comunicativa e criativa. Está sempre estudando e passando o conhecimento adiante.
            Ela é ótima no que se propõe a fazer e muito organizada no processo. Em seus projetos está
            sempre presente a prática dos seus conhecimentos em fundamentos do UX.`
        }
    ];
</script>

<style lang="stylus" scoped>
    @import './style.styl';

</style>