<template>
    <vs-tooltip class="kiv-help">
        <vs-button size="mini" class="tag part-of-body">
            <img
                v-if="partOfBody.icon === 'pied'"
                src="../../img/icons/part-of-body/pied.svg"
                alt="Icone Pied"
                class="icon-pied"
            />
            <img
                v-if="partOfBody.icon === 'jambe'"
                src="../../img/icons/part-of-body/jambe.svg"
                alt="Icone Jambe"
                class="icon-jambe"
            />
            <img
                v-if="partOfBody.icon === 'bras'"
                src="../../img/icons/part-of-body/bras.svg"
                alt="Icone Bras"
                class="icon-bras"
            />
            <img
                v-if="partOfBody.icon === 'main'"
                src="../../img/icons/part-of-body/main.svg"
                alt="Icone Main"
                class="icon-main"
            />
            <img
                v-if="partOfBody.icon === 'epaule'"
                src="../../img/icons/part-of-body/epaule.svg"
                alt="Icone Épaule"
                class="icon-epaule"
            />
            <img
                v-if="partOfBody.icon === 'dos'"
                src="../../img/icons/part-of-body/dos.svg"
                alt="Icone Dos"
                class="icon-dos"
            />
            <img
                v-if="partOfBody.icon === 'cervicales'"
                src="../../img/icons/part-of-body/cervicales.svg"
                alt="Icone Cervicales"
                class="icon-cervicales"
            />
            <img
                v-if="partOfBody.icon === 'lombaires'"
                src="../../img/icons/part-of-body/lombaires.svg"
                alt="Icone Lombaires"
                class="icon-lombaires"
            />
            <img
                v-if="partOfBody.icon === 'thoracique'"
                src="../../img/icons/part-of-body/thoracique.svg"
                alt="Icone Thoracique"
                class="icon-thoracique"
            />
            <span class="text wsnw">{{ partOfBody.name }}</span>
            <i class="kiv-completed icon-22"></i>
        </vs-button>
        <template #tooltip>
            {{ partOfBody.name }}
        </template>
    </vs-tooltip>
</template>

<script>
export default {
    props: {
        partOfBody: Object,
    },
};
</script>

<style lang="scss" scoped>
    .btn-light
    {
        position: absolute;
        right: 0.1rem !important;
        top: 0.25rem !important;

        @media (max-width: 991px) 
        {
            top: -0.35rem !important;
        }

        .vs-button--size-mini.tag.part-of-body
        {
            background: #ffffff;
            
            @media (max-width: 991px) 
            {
                border-radius: 50%;
                width: 3.1rem;
                height: 3.1rem;

                img {
                    margin-right: 0;
                }

                .text 
                {
                    display: none;
                }
            }
        }

        &.btn-light-plus
        {
            .vs-button--size-mini.tag.part-of-body
            {
                @media (max-width: 991px) 
                {
                    width: 3.5rem;
                    height: 3.5rem;
                }
            }
        }

        &.btn-light-full-page
        {
            @media (min-width: 992px) 
            {
                top: -0.35rem !important;
            }

            .vs-button--size-mini.tag.part-of-body
            {                
                @media (min-width: 992px) 
                {
                    border-radius: 50%;
                    width: 3.1rem;
                    height: 3.1rem;

                    img {
                        margin-right: 0;
                    }

                    .text 
                    {
                        display: none;
                    }
                }
            }

            &.btn-light-plus
            {
                .vs-button--size-mini.tag.part-of-body
                {
                    @media (min-width: 992px) 
                    {
                        width: 3.5rem;
                        height: 3.5rem;
                    }
                }
            }
        }
    }
</style>
