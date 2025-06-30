<template>
    <div class="start-dev-case w500">
        <div class="presentation">
            <div class="case">
                <img src="@/assets/svg/icon_star.svg" />
                <span class="type">UI/UX Case</span>
            </div>

            <img src="@/assets/svg/start_dev_logo.svg" class="logo" />

            <span class="description">
                {{ t('start_dev.presentation.description') }}
            </span>

            <span class="tools">
                {{ t('start_dev.presentation.tool') }}
                <img src="@/assets/svg/figma_logo.svg" />
            </span>

            <img src="@/assets/img/start_dev_iphone.png" class="iphone" />

            <div class="bubble">
                <img src="@/assets/svg/bubble.svg" />
            </div>
        </div>

        <div class="contextualization section">
            <span class="title w700">{{ t('start_dev.contextualization.title') }}</span>
            <br />

            <div class="text">
                {{ t('start_dev.contextualization.text') }}
            </div>

            <img src="@/assets/svg/stars_plus.svg" class="stars-plus-1" />

            <div class="objectives">
                <span class="title w700"></span>
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
            <span class="title w700">{{ t('start_dev.continuing.title') }}</span>
            <br />

            <div class="text">
                {{ t('start_dev.continuing.text1') }}
                <span class='highlight w700'>{{ t('start_dev.continuing.text2') }}</span>
                {{ t('start_dev.continuing.text3') }}
            </div>
        </div>

        <div class="research section">
            <span class="title w700">{{ t('start_dev.research.title') }}</span>
            <br />

            <div class="text">
                {{ t('start_dev.research.text1') }}
                <span class="highlight w700">{{ t('start_dev.research.text2') }}</span>
                {{ t('start_dev.research.text3') }}
                <span class="highlight w700">{{ t('start_dev.research.text4') }}</span>.
                <br />
                <br />

                <span class="w700">{{ t('start_dev.research.objectives.title') }}</span>
                <ul>
                    <li>{{ t('start_dev.research.objectives.inspirations') }}</li>
                    <li>{{ t('start_dev.research.objectives.companies') }}</li>
                    <li>{{ t('start_dev.research.objectives.platforms') }}</li>
                    <li>{{ t('start_dev.research.objectives.references') }}</li>
                </ul>

                <img src="@/assets/svg/stars_plus_2.svg" class="stars-plus-2" />
            </div>

            <img src="@/assets/img/start_dev_research.png" class="desk-research" />
            <img src="@/assets/img/start_dev_research_table.png" class="research-table" />
        </div>

        <div class="style-guide section">
            <span class="title w700">{{ t('start_dev.style_guide.title') }}</span>
            <br />

            <div class="text">
                {{ t('start_dev.style_guide.text1') }} <br/>
                <span class="highlight w700">{{ t('start_dev.style_guide.text2') }}</span>
                {{ t('start_dev.style_guide.text3') }}
                <span class="highlight w700">{{ t('start_dev.style_guide.text4') }}</span>
                {{ t('start_dev.style_guide.text5') }}
            </div>
            <br />

            <img src="@/assets/img/start_dev_style-guide.jpg" />
        </div>

        <div class="user-flow section">
            <span class="title w700">{{ t('start_dev.user_flow.title') }}</span>
            <br />

            <div class="text">
                {{ t('start_dev.user_flow.text') }}
            </div>
            <br />

            <div class="image-wrapper user-flow" @click="openModal('userFlow')">
                <img 
                    src="@/assets/img/start_dev_user-flow.png" 
                    class="flow-image"
                />
                <div class="expand-overlay">
                    <font-awesome-icon :icon="['fas', 'expand']" />
                </div>
            </div>
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

            <div class="wireframes-m">
                <div
                    v-for="index of Object.keys(wireframeMImages)"
                    :key="index"
                    class="wireframe-item"
                    @click="openModal('wireframesM', index)"
                >
                    <img :src="`/src/assets/img/start_dev_wireframe_mobile_${parseInt(index)+1}.png`" />
                    <div class="expand-overlay">
                        <font-awesome-icon :icon="['fas', 'expand']" />
                    </div>
                </div>
            </div>

            <div class="wireframes-d">
                <div
                    v-for="index of Object.keys(wireframeDImages)"
                    :key="index"
                    class="wireframe-item"
                    @click="openModal('wireframesD', index)"
                >
                    <img :src="`/src/assets/img/start_dev_wireframe_desktop_${parseInt(index)+1}.png`" />
                    <div class="expand-overlay">
                        <font-awesome-icon :icon="['fas', 'expand']" />
                    </div>
                </div>
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

            <div class="wireframes-m">
                <div
                    v-for="index of Object.keys(wireframeHighMImages)"
                    :key="index"
                    class="wireframe-item"
                    @click="openModal('wireframesHM', index)"
                >
                    <img :src="`/src/assets/img/start_dev_high-fidelity_mobile_${parseInt(index)+1}.png`" />
                    <div class="expand-overlay">
                        <font-awesome-icon :icon="['fas', 'expand']" />
                    </div>
                </div>
            </div>

            <div class="wireframes-d">
                <div
                    v-for="index of Object.keys(wireframeHighDImages)"
                    :key="index"
                    class="wireframe-item"
                    @click="openModal('wireframesHD', index)"
                >
                    <img :src="`/src/assets/img/start_dev_high-fidelity_desktop_${parseInt(index)+1}.png`" />
                    <div class="expand-overlay">
                        <font-awesome-icon :icon="['fas', 'expand']" />
                    </div>
                </div>
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

    <image-modal
        v-model="showModal"
        :images="currentImages"
        :initial-index="currentImageIndex"
    />
</template>

<script setup>
    import MainTemplate from '@/templates/MainTemplate';
    import ImageModal from '@/components/ImageModal.vue';
    import { ref, computed } from 'vue';
    import { useI18n } from 'vue-i18n';

    import userFlowImage from '@/assets/img/start_dev_user-flow.png';
    import wireframeM1Image from '@/assets/img/start_dev_wireframe_mobile_1.png';
    import wireframeM2Image from '@/assets/img/start_dev_wireframe_mobile_2.png';
    import wireframeM3Image from '@/assets/img/start_dev_wireframe_mobile_3.png';
    import wireframeM4Image from '@/assets/img/start_dev_wireframe_mobile_4.png';
    import wireframeM5Image from '@/assets/img/start_dev_wireframe_mobile_5.png';
    import wireframeM6Image from '@/assets/img/start_dev_wireframe_mobile_6.png';
    import wireframeD1Image from '@/assets/img/start_dev_wireframe_desktop_1.png';
    import wireframeD2Image from '@/assets/img/start_dev_wireframe_desktop_2.png';
    import wireframeD3Image from '@/assets/img/start_dev_wireframe_desktop_3.png';
    import wireframeD4Image from '@/assets/img/start_dev_wireframe_desktop_4.png';
    import wireframeD5Image from '@/assets/img/start_dev_wireframe_desktop_5.png';
    import wireframeD6Image from '@/assets/img/start_dev_wireframe_desktop_6.png';
    import wireframeHighM1Image from '@/assets/img/start_dev_high-fidelity_mobile_1.png';
    import wireframeHighM2Image from '@/assets/img/start_dev_high-fidelity_mobile_2.png';
    import wireframeHighM3Image from '@/assets/img/start_dev_high-fidelity_mobile_3.png';
    import wireframeHighM4Image from '@/assets/img/start_dev_high-fidelity_mobile_4.png';
    import wireframeHighM5Image from '@/assets/img/start_dev_high-fidelity_mobile_5.png';
    import wireframeHighM6Image from '@/assets/img/start_dev_high-fidelity_mobile_6.png';
    import wireframeHighM7Image from '@/assets/img/start_dev_high-fidelity_mobile_7.png';
    import wireframeHighM8Image from '@/assets/img/start_dev_high-fidelity_mobile_8.png';
    import wireframeHighM9Image from '@/assets/img/start_dev_high-fidelity_mobile_9.png';
    import wireframeHighM10Image from '@/assets/img/start_dev_high-fidelity_mobile_10.png';
    import wireframeHighM11Image from '@/assets/img/start_dev_high-fidelity_mobile_11.png';
    import wireframeHighM12Image from '@/assets/img/start_dev_high-fidelity_mobile_12.png';
    import wireframeHighD1Image from '@/assets/img/start_dev_high-fidelity_desktop_1.png';
    import wireframeHighD2Image from '@/assets/img/start_dev_high-fidelity_desktop_2.png';
    import wireframeHighD3Image from '@/assets/img/start_dev_high-fidelity_desktop_3.png';
    import wireframeHighD4Image from '@/assets/img/start_dev_high-fidelity_desktop_4.png';
    import wireframeHighD5Image from '@/assets/img/start_dev_high-fidelity_desktop_5.png';
    import wireframeHighD6Image from '@/assets/img/start_dev_high-fidelity_desktop_6.png';
    import wireframeHighD7Image from '@/assets/img/start_dev_high-fidelity_desktop_7.png';
    import wireframeHighD8Image from '@/assets/img/start_dev_high-fidelity_desktop_8.png';
    import wireframeHighD9Image from '@/assets/img/start_dev_high-fidelity_desktop_9.png';
    import wireframeHighD10Image from '@/assets/img/start_dev_high-fidelity_desktop_10.png';
    import wireframeHighD11Image from '@/assets/img/start_dev_high-fidelity_desktop_11.png';
    import wireframeHighD12Image from '@/assets/img/start_dev_high-fidelity_desktop_12.png';

    import helpers from '@/mixins/helpers';

    const { t } = useI18n();

    defineOptions({
        name: 'ui-start-dev-case',

        components: {
            'main-template': MainTemplate,
            'image-modal': ImageModal
        },

        mixins: [helpers]
    });

    const objectives = computed(() => [
        {
            icon: 'svg/icon_build-tool.svg',
            label: t('start_dev.contextualization.objectives.build')
        },
        {
            icon: 'svg/icon_muscle.svg',
            label: t('start_dev.contextualization.objectives.bring')
        },
        {
            icon: 'svg/icon_noise-aware.svg',
            label: t('start_dev.contextualization.objectives.friendly')
        }
    ]);

    const showModal = ref(false);
    const currentImageIndex = ref(0);
    const currentImageSet = ref('');

    const userFlowImages = [
        { src: userFlowImage, alt: 'Start Dev User Flow' }
    ];

    const wireframeMImages = [
        { src: wireframeM1Image, alt: 'Start Dev Wireframe Mobile 1' },
        { src: wireframeM2Image, alt: 'Start Dev Wireframe Mobile 2' },
        { src: wireframeM3Image, alt: 'Start Dev Wireframe Mobile 4' },
        { src: wireframeM4Image, alt: 'Start Dev Wireframe Mobile 4' },
        { src: wireframeM5Image, alt: 'Start Dev Wireframe Mobile 5' },
        { src: wireframeM6Image, alt: 'Start Dev Wireframe Mobile 6' }
    ];

    const wireframeHighMImages = [
        { src: wireframeHighM1Image, alt: 'Start Dev High Fidelity Wireframe Mobile 1' },
        { src: wireframeHighM2Image, alt: 'Start Dev High Fidelity Wireframe Mobile 2' },
        { src: wireframeHighM3Image, alt: 'Start Dev High Fidelity Wireframe Mobile 4' },
        { src: wireframeHighM4Image, alt: 'Start Dev High Fidelity Wireframe Mobile 4' },
        { src: wireframeHighM5Image, alt: 'Start Dev High Fidelity Wireframe Mobile 5' },
        { src: wireframeHighM6Image, alt: 'Start Dev High Fidelity Wireframe Mobile 6' },
        { src: wireframeHighM7Image, alt: 'Start Dev High Fidelity Wireframe Mobile 7' },
        { src: wireframeHighM8Image, alt: 'Start Dev High Fidelity Wireframe Mobile 8' },
        { src: wireframeHighM9Image, alt: 'Start Dev High Fidelity Wireframe Mobile 9' },
        { src: wireframeHighM10Image, alt: 'Start Dev High Fidelity Wireframe Mobile 10' },
        { src: wireframeHighM11Image, alt: 'Start Dev High Fidelity Wireframe Mobile 11' },
        { src: wireframeHighM12Image, alt: 'Start Dev High Fidelity Wireframe Mobile 12' }
    ];

    const wireframeDImages = [
        { src: wireframeD1Image, alt: 'Start Dev Wireframe Desktop 1' },
        { src: wireframeD2Image, alt: 'Start Dev Wireframe Desktop 2' },
        { src: wireframeD3Image, alt: 'Start Dev Wireframe Desktop 4' },
        { src: wireframeD4Image, alt: 'Start Dev Wireframe Desktop 4' },
        { src: wireframeD5Image, alt: 'Start Dev Wireframe Desktop 5' },
        { src: wireframeD6Image, alt: 'Start Dev Wireframe Desktop 6' }
    ];

    const wireframeHighDImages = [
        { src: wireframeHighD1Image, alt: 'Start Dev High Fidelity Wireframe Desktop 1' },
        { src: wireframeHighD2Image, alt: 'Start Dev High Fidelity Wireframe Desktop 2' },
        { src: wireframeHighD3Image, alt: 'Start Dev High Fidelity Wireframe Desktop 4' },
        { src: wireframeHighD4Image, alt: 'Start Dev High Fidelity Wireframe Desktop 4' },
        { src: wireframeHighD5Image, alt: 'Start Dev High Fidelity Wireframe Desktop 5' },
        { src: wireframeHighD6Image, alt: 'Start Dev High Fidelity Wireframe Desktop 6' },
        { src: wireframeHighD7Image, alt: 'Start Dev High Fidelity Wireframe Desktop 7' },
        { src: wireframeHighD8Image, alt: 'Start Dev High Fidelity Wireframe Desktop 8' },
        { src: wireframeHighD9Image, alt: 'Start Dev High Fidelity Wireframe Desktop 9' },
        { src: wireframeHighD10Image, alt: 'Start Dev High Fidelity Wireframe Desktop 10' },
        { src: wireframeHighD11Image, alt: 'Start Dev High Fidelity Wireframe Desktop 11' },
        { src: wireframeHighD12Image, alt: 'Start Dev High Fidelity Wireframe Desktop 12' }
    ];

    const currentImages = computed(() => {
        switch (currentImageSet.value) {
            case 'userFlow':
                return userFlowImages;
            case 'wireframesM':
                return wireframeMImages;
            case 'wireframesD':
                return wireframeDImages
            case 'wireframesHM':
                return wireframeHighMImages;
            case 'wireframesHD':
                return wireframeHighDImages
            default:
                return [];
        }
    });

    const openModal = (set, index = 0) => {
        currentImageSet.value = set;
        currentImageIndex.value = index;
        showModal.value = true;
    };
</script>

<style lang="stylus">
    @import './style.styl';

</style>