<template>
    <main-template>
        <div class="contact-form">
            <div class="form-header">
                <span class="title w500">Chega de conversa, vamos construir algo juntos!</span>
                <span class="subtitle">
                    Pronto para dar vida à sua ideia? Se você tem um projeto incrível em mente e
                    precisa de ajuda, conta comigo.
                </span>
            </div>

            <div class="form">
                <label for="name">
                    Nome
                    <input v-model="form.data.name" id="name" type="text" />
                </label>
    
                <label for="email">
                    E-mail
                    <input
                        v-model="form.data.email"
                        id="email"
                        type="email"
                        placeholder="me diz seu melhor e-mail"
                    />
                </label>
    
                <label for="service-type">
                    Qual serviço está buscando?
                    <select
                        v-model="form.data.serviceType"
                        id="service-type"
                        placeholder="Selecione o tipo de serviço"
                    >
                        <option value="ux">UX</option>
                        <option value="ui">UI</option>
                        <option value="research">Research (Pesquisa)</option>
                        <option value="product_design">Product Design</option>
                    </select>
                </label>
    
                <label for="name">
                    Mensagem
                    <textarea
                        v-model="form.data.message"
                        id="name"
                        type="textarea"
                        placeholder="Me conta um pouco do seu projeto e solicite um orçamento"
                    ></textarea>
                </label>
    
                <button class="send-button" @click="sendEmail">
                    Enviar
                </button>
            </div>
        </div>
    </main-template>
</template>

<script setup>
    import MainTemplate from '@/templates/MainTemplate';
    import { ref } from 'vue';
    import emailjs from '@emailjs/browser';

    defineOptions({
        name: 'ui-contact',

        components: [MainTemplate]
    })

    const form = ref({
        data: {
            name: '',
            email: '',
            serviceType: null,
            message: ''
        }
    })

    const serviceTypeLabels = {
        ux: 'UX',
        ui: 'UI',
        research: 'Research (Pesquisa)',
        product_design: 'Product Design'
    };

    async function sendEmail() {
        const params = {
            ...form.value.data,
            serviceType: serviceTypeLabels[form.value.data.serviceType]
        };
        emailjs.send(
            'service_utb4g2w',
            'template_zzhn3le',
            params,
            { publicKey: '2AjaZnkV5b5D1z3I8' }
        )
        .then(
            (response) => {
                console.log('SUCCESS!', response);
            },
            (error) => {
                console.log('FAILED...', error);
            }
        );
    }
</script>

<style lang="stylus" scoped>
    @import "./style.styl";

</style>