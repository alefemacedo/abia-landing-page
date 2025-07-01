<template>
    <div class="trade-plus-case w500">
        <div class="presentation">
            <div class="case">
                <img src="@/assets/svg/icon_star.svg" />
                <span class="type">{{ $t('trade_plus.presentation.type') }}</span>
            </div>

            <img src="@/assets/svg/trade_plus_logo.svg" class="logo" />

            <span class="description">
                {{ $t('trade_plus.presentation.description') }}
            </span>

            <span class="tools">
                {{ $t('trade_plus.presentation.tool') }}  
                <img src="@/assets/svg/figma_logo.svg" />
            </span>

            <img src="@/assets/img/trade_plus_iphone.png" class="iphone" />

            <div class="bubble">
                <img src="@/assets/svg/bubble.svg" />
            </div>
        </div>

        <div class="contextualization section">
            <span class="title w700">{{ $t('trade_plus.contextualization.title') }}</span>
            <br />

            <div class="text">
                {{ $t('trade_plus.contextualization.text1') }}
                <span class="highlight">{{ $t('trade_plus.contextualization.text2') }}</span>
                {{ $t('trade_plus.contextualization.text3') }}
            </div>

            <img src="@/assets/img/character_1.png" class="character-1" />
        </div>

        <div class="problem-definition section">
            <span class="title w700">{{ $t('trade_plus.problem_definition.title') }}</span>
            <br />

            <div class="text">
                <span class="highlight w700">{{ $t('trade_plus.problem_definition.po_meeting') }}</span>
                <ul>
                    <li>
                        {{ $t('trade_plus.problem_definition.po_items.item1_1') }}
                        <span class="highlight">{{ $t('trade_plus.problem_definition.po_items.item1_2') }}</span>
                        {{ $t('trade_plus.problem_definition.po_items.item1_3') }}
                    </li>
                    <li>
                        {{ $t('trade_plus.problem_definition.po_items.item2_1') }}
                        <span class="highlight">{{ $t('trade_plus.problem_definition.po_items.item2_2') }}</span>.
                    </li>
                </ul>

                <span class="highlight w700">{{ $t('trade_plus.problem_definition.ux_collaboration') }}</span>
                <ul>
                    <li>
                        {{ $t('trade_plus.problem_definition.ux_items.item1_1') }}
                        <span class="highlight">{{ $t('trade_plus.problem_definition.ux_items.item1_2') }}</span>
                    </li>
                    <li>
                        {{ $t('trade_plus.problem_definition.ux_items.item2_1') }}
                        <span class="highlight">{{ $t('trade_plus.problem_definition.ux_items.item2_2') }}</span>
                    </li>
                </ul>
            </div>

            <img src="@/assets/img/character_2.png" class="character-2" />
        </div>

        <div class="identifying-problem section">
            <span class="title w700">{{ $t('trade_plus.identifying_problem.title') }}</span>
            <br />

            <div class="text">
                {{ $t('trade_plus.identifying_problem.text1') }}
                <span class="highlight">{{ $t('trade_plus.identifying_problem.text2') }}</span>
                {{ $t('trade_plus.identifying_problem.text3') }}

                <ul>
                    <li>{{ $t('trade_plus.identifying_problem.data_items.item1') }}</li>
                    <li>{{ $t('trade_plus.identifying_problem.data_items.item2') }}</li>
                    <li>{{ $t('trade_plus.identifying_problem.data_items.item3') }}</li>
                    <li>{{ $t('trade_plus.identifying_problem.data_items.item4') }}</li>
                </ul>

                <img src="@/assets/svg/stars_plus_2.svg" class="stars-plus" />
            </div>

            <img src="@/assets/img/trade_plus_reunions.png" class="trade-plus-reunions" />

            <div class="text">
                <span class="highlight w700">{{ $t('trade_plus.identifying_problem.research_phase') }}</span>
                <ul>
                    <li>{{ $t('trade_plus.identifying_problem.research_items.item1') }}</li>
                    <li>{{ $t('trade_plus.identifying_problem.research_items.item2') }}</li>
                    <li>{{ $t('trade_plus.identifying_problem.research_items.item3') }}</li>
                    <li>{{ $t('trade_plus.identifying_problem.research_items.item4') }}</li>
                    <li>{{ $t('trade_plus.identifying_problem.research_items.item5') }}</li>
                </ul>
            </div>
        </div>

        <div class="persona section">
            <span class="title w700">{{ $t('trade_plus.persona.title') }}</span>
            <br />

            <div class="persona-content">
                <div class="persona-profile">
                    <img src="@/assets/img/trade_plus_persona.png" style="border-radius: 53px;" />
                    <span class="quote w400">
                        "{{ $t('trade_plus.persona.quote') }}"
                    </span>
                </div>

                <div class="text">
                    <div class="sub-text" style="margin-bottom: 17px;">
                        <span class="title3 w700" style="margin-bottom: 22px; display: inline-block;">
                            {{ $t('trade_plus.persona.presentation.title') }}
                        </span>
                        <br />
                        {{ $t('trade_plus.persona.presentation.text') }}
                    </div>

                    <div class="sub-text">
                        <span class="title3 w700">{{ $t('trade_plus.persona.interests.title') }}</span>

                        <ol style="list-style-type: lower-latin;">
                            <li>
                                {{ $t('trade_plus.persona.interests.credit') }}
                            </li>
                            <li>
                                {{ $t('trade_plus.persona.interests.technology') }}
                            </li>
                        </ol>
                    </div>

                    <div class="sub-text">
                        <span class="title3 w700">{{ $t('trade_plus.persona.objectives.title') }}</span>

                        <ul>
                            <li>
                                {{ $t('trade_plus.persona.objectives.credit_solutions') }}
                            </li>
                            <li>{{ $t('trade_plus.persona.objectives.increase_sales') }}</li>
                            <li>
                                {{ $t('trade_plus.persona.objectives.integrated_solutions') }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div class="insights">
                <img src="@/assets/svg/icon_star.svg" />
                <div class="text">
                    <span class="highlight">{{ $t('trade_plus.persona.insights1') }}</span>
                    {{ $t('trade_plus.persona.insights2') }}
                </div>
            </div>
        </div>

        <div class="csd-matrix section">
            <span class="title w700">{{ $t('trade_plus.csd_matrix.title') }}</span>
            <br />

            <div class="text">
                {{ $t('trade_plus.csd_matrix.text1') }}
                <span class="highlight">{{ $t('trade_plus.csd_matrix.text2') }}</span>
                {{ $t('trade_plus.csd_matrix.text3') }}
            </div>
            <br />

            <div class="csd-images">
                <figure>
                    <img src="@/assets/img/trade_plus_csd_1.png" />
                    <figcaption>{{ $t('trade_plus.csd_matrix.images.matrix_ready') }}</figcaption>
                </figure>

                <figure>
                    <img src="@/assets/img/trade_plus_csd_2.png" />
                    <figcaption style="width: 270px;">
                        {{ $t('trade_plus.csd_matrix.images.meeting') }}
                    </figcaption>
                </figure>

                <figure>
                    <img src="@/assets/img/trade_plus_csd_3.png" />
                    <figcaption>{{ $t('trade_plus.csd_matrix.images.participants') }}</figcaption>
                </figure>
            </div>

            <div class="text">
                <span class="highlight w700">{{ $t('trade_plus.csd_matrix.problems_identified') }}</span>
                <ul>
                    <li>
                        {{ $t('trade_plus.csd_matrix.problems.item1_1') }}
                        <span>{{ $t('trade_plus.csd_matrix.problems.item1_2') }}</span>.
                    </li>
                    <li>{{ $t('trade_plus.csd_matrix.problems.item2') }}</li>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.csd_matrix.problems.item3_1') }}</span>
                        {{ $t('trade_plus.csd_matrix.problems.item3_2') }}
                        <span class="highlight">{{ $t('trade_plus.csd_matrix.problems.item3_3') }}</span>
                    </li>
                    <li>{{ $t('trade_plus.csd_matrix.problems.item4') }}</li>
                    <li>
                        {{ $t('trade_plus.csd_matrix.problems.item5_1') }}
                        <span class="highlight">{{ $t('trade_plus.csd_matrix.problems.item5_2') }}</span>.
                    </li>
                </ul>
            </div>
        </div>

        <div class="data-analysis section">
            <span class="title w700">{{ $t('trade_plus.data_analysis.title') }}</span>
            <br />

            <div class="text">
                {{ $t('trade_plus.data_analysis.text') }}
                <br />
                <br />

                <span class="highlight w700">{{ $t('trade_plus.data_analysis.main_points') }}</span>
                <ol>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.data_analysis.points.excess_info1') }}</span>
                        {{ $t('trade_plus.data_analysis.points.excess_info2') }}
                        <span class="highlight">{{ $t('trade_plus.data_analysis.points.excess_info3') }}</span>.
                    </li>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.data_analysis.points.long_registration1') }}</span>
                        {{ $t('trade_plus.data_analysis.points.long_registration2') }}.
                    </li>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.data_analysis.points.different_interest1') }}</span>
                        {{ $t('trade_plus.data_analysis.points.different_interest2') }}.
                    </li>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.data_analysis.points.few_features1') }}</span>
                        {{ $t('trade_plus.data_analysis.points.few_features2') }}.
                    </li>
                    <li>
                        {{ $t('trade_plus.data_analysis.points.lorem_ipsum') }}
                    </li>
                </ol>
            </div>

            <div class="objectives">
                <span class="title w700">{{ $t('trade_plus.data_analysis.objectives.title') }}</span>
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

        <div class="wireflow section">
            <span class="title w700">{{ $t('trade_plus.wireflow.title') }}</span>
            <br />

            <div class="text">
                {{ $t('trade_plus.wireflow.text') }}
            </div>
            <br />

            <div class="image-wrapper" @click="openModal">
                <img 
                    src="@/assets/img/trade_plus_wireflow.png" 
                    class="wireflow-image"
                />
                <div class="expand-overlay">
                    <font-awesome-icon :icon="['fas', 'expand']" />
                </div>
            </div>
        </div>

        <div class="insights-improvements section">
            <span class="title w700">{{ $t('trade_plus.insights_improvements.title') }}</span>
            <br />

            <div class="text">
                <ol>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.insights_improvements.improvements.two_steps1') }}</span>
                        {{ $t('trade_plus.insights_improvements.improvements.two_steps1') }}.
                    </li>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.insights_improvements.improvements.optimize_fields1') }}</span>
                        {{ $t('trade_plus.insights_improvements.improvements.optimize_fields2') }}.
                    </li>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.insights_improvements.improvements.accessible_texts1') }}</span>
                        {{ $t('trade_plus.insights_improvements.improvements.accessible_texts2') }}.
                    </li>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.insights_improvements.improvements.validation_flow1') }}</span>
                        {{ $t('trade_plus.insights_improvements.improvements.validation_flow2') }}.
                    </li>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.insights_improvements.improvements.mapping_documentation1') }}</span>
                        {{ $t('trade_plus.insights_improvements.improvements.mapping_documentation2') }}.
                    </li>
                    <li>
                        <span class="highlight">{{ $t('trade_plus.insights_improvements.improvements.new_features1') }}</span>
                        {{ $t('trade_plus.insights_improvements.improvements.new_features2') }}.
                    </li>
                </ol>
            </div>
            <br />
        </div>

        <div class="wireframes-idea section">
            <span class="title w700">{{ $t('trade_plus.wireframes_idea.title') }}</span>
            <br />

            <div class="text">
                {{ $t('trade_plus.wireframes_idea.text') }}
            </div>

            <div class="scrollimage">
                <img src="/src/assets/svg/trade_plus_wireframe.svg" />
            </div>
        </div>

        <div class="final-thoughts section">
            <span class="title2 w700">{{ $t('trade_plus.final_thoughts.title') }}</span>
            <br />

            <div class="text">
                <span class="highlight w700">{{ $t('trade_plus.final_thoughts.challenges') }}</span>
                <ul>
                    <li>
                        {{ $t('trade_plus.final_thoughts.challenges_items.item1') }}
                    </li>
                    <li>
                        {{ $t('trade_plus.final_thoughts.challenges_items.item2') }}
                    </li>
                </ul>
                
                <span class="highlight w700">{{ $t('trade_plus.final_thoughts.design_routines') }}</span>
                <ul>
                    <li>
                        {{ $t('trade_plus.final_thoughts.routines_items.item1') }}
                    </li>
                    <li>
                        {{ $t('trade_plus.final_thoughts.routines_items.item2') }}
                    </li>
                </ul>
                
                <span class="highlight w700">{{ $t('trade_plus.final_thoughts.missed_opportunities') }}</span>
                <ul>
                    <li>
                        {{ $t('trade_plus.final_thoughts.opportunities_items.item1') }}
                    </li>
                    <li>
                        {{ $t('trade_plus.final_thoughts.opportunities_items.item2') }}
                    </li>
                </ul>

                <span class="highlight w700">{{ $t('trade_plus.final_thoughts.predictions_results') }}</span>
                <ul>
                    <li>
                        {{ $t('trade_plus.final_thoughts.results_items.item1') }}
                    </li>
                    <li>
                        {{ $t('trade_plus.final_thoughts.results_items.item2') }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <image-modal
        v-model="showModal"
        :image-src="wireflowImage"
        alt="Trade Plus Wireflow"
    />
</template>

<script setup>
    import MainTemplate from '@/templates/MainTemplate';
    import ImageModal from '@/components/ImageModal.vue';
    import { ref, computed } from 'vue';
    import { useI18n } from 'vue-i18n';
    import wireflowImage from '@/assets/img/trade_plus_wireflow.png';

    import helpers from '@/mixins/helpers';

    const { t } = useI18n();

    defineOptions({
        name: 'ui-trade-plus-case',

        components: {
            'main-template': MainTemplate
        },

        mixins: [helpers]
    });

    const objectives = computed(() => [
        {
            icon: 'svg/clock_icon.svg',
            label: t('trade_plus.data_analysis.objectives.optimize')
        },
        {
            icon: 'svg/doc_icon.svg',
            label: t('trade_plus.data_analysis.objectives.document')
        },
        {
            icon: 'svg/star_icon.svg',
            label: t('trade_plus.data_analysis.objectives.insights')
        }
    ]);

    const showModal = ref(false);

    const openModal = () => {
        showModal.value = true;
    };
</script>

<style lang="stylus" scoped>
    @import './style.styl';

</style>