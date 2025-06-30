<template>
    <main-template>
        <div class="contact-form">
            <div class="form-header">
                <span class="title w500">
                    {{ t('contact.title') }}
                </span>
                <span class="subtitle">
                    {{ t('contact.subtitle') }}
                </span>
            </div>

            <div class="form">
                <label :class="{ error: v$.data.name.$errors.length }" for="name">
                    {{ t('contact.form.name') }}
                    <input v-model="v$.data.name.$model" id="name" type="text" />
                    <div
                        v-for="error of v$.data.name.$errors"
                        :key="error.$uid"
                        class="input-errors"
                    >
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </label>
    
                <label :class="{ error: v$.data.email.$errors.length }" for="email">
                    {{ t('contact.form.email') }}
                    <input
                        v-model="v$.data.email.$model"
                        id="email"
                        type="email"
                        :placeholder="t('contact.form.email_placeholder')"
                    />
                    <div
                        v-for="error of v$.data.email.$errors"
                        :key="error.$uid"
                        class="input-errors"
                    >
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </label>
    
                <label
                    :class="{ error: v$.data.serviceType.$errors.length }"
                    for="service-type"
                >
                    {{ t('contact.form.service_type') }}
                    <select v-model="v$.data.serviceType.$model" id="service-type">
                        <option :value="null" disabled selected>
                            {{ t('contact.form.service_type_placeholder') }}
                        </option>
                        <option value="ux">UX</option>
                        <option value="ui">UI</option>
                        <option value="research">{{ t('contact.form.research') }}</option>
                        <option value="product_design">Product Design</option>
                    </select>
                    <div
                        v-for="error of v$.data.serviceType.$errors"
                        :key="error.$uid"
                        class="input-errors"
                    >
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </label>
    
                <label :class="{ error: v$.data.message.$errors.length }" for="name">
                    {{ t('contact.form.message') }}
                    <textarea
                        v-model="v$.data.message.$model"
                        id="name"
                        type="textarea"
                        :placeholder="t('contact.form.message_placeholder')"
                    ></textarea>
                    <div
                        v-for="error of v$.data.message.$errors"
                        :key="error.$uid"
                        class="input-errors"
                    >
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </label>
    
                <button
                    :disabled="v$.$invalid"
                    class="send-button"
                    @click="sendEmail"
                >
                    {{ t('contact.form.send_button') }}
                </button>
            </div>

            <ui-confirmation-modal
                :show="showModal"
                :params="params"
                @clear="clearForm"
                @update:show="showModal = $event"
            />
        </div>
    </main-template>
</template>

<script setup>
    import MainTemplate from '@/templates/MainTemplate';
    import ConfirmationModal from './components/ConfirmationModal';

    import { computed, reactive, ref } from 'vue';
    import { useVuelidate } from '@vuelidate/core';
    import { required, email, helpers } from '@vuelidate/validators';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
    
    const serviceTypeLabels = {
        ux: 'UX',
        ui: 'UI',
        research: 'Research (Pesquisa)',
        product_design: 'Product Design'
    };
    const defaultFormData = {
        name: '',
        email: '',
        serviceType: null,
        message: ''
    };

    defineOptions({
        name: 'ui-contact',

        components: {
            'ui-confirmation-modal': ConfirmationModal,
            MainTemplate
        }
    });

    const form = reactive({
        data: { ...defaultFormData }
    });
    const validType = (value) => [...Object.keys(serviceTypeLabels)].includes(value);
    const rules = computed(() => ({
        data: {
            name: {
                required: helpers.withMessage(() => t('contact.errors.name.required'), required)
            },
            email: {
                required: helpers.withMessage(() => t('contact.errors.email.required'), required),
                email: helpers.withMessage(() => t('contact.errors.email.email'), email)
            },
            serviceType: {
                required: helpers.withMessage(() => t('contact.errors.serviceType.required'), required),
                validType: helpers.withMessage(() => t('contact.errors.serviceType.validType'), validType)
            },
            message: {
                required: helpers.withMessage(() => t('contact.errors.message.required'), required)
            }
        }
    }));
    const v$ = useVuelidate(rules, form);
    const showModal = ref(false);
    const params = reactive({});

    function sendEmail() {
        params.value = {
            ...form.data,
            serviceType: serviceTypeLabels[form.data.serviceType]
        };

        showModal.value = true;
    }

    function clearForm() {
        params.value = {};
        form.data = { ...defaultFormData };
        v$.value.$reset();
    }
</script>

<style lang="stylus" scoped>
    @import "./style.styl";

</style>