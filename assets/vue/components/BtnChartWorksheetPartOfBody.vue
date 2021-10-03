<template>
    <vs-button size="mini" class="btn-chart part-of-body">
        <img
            v-if="worksheet.partOfBody.icon === 'pied'"
            src="../../img/icons/part-of-body/pied.svg"
            alt="Icone Pied"
            class="icon-pied"
        />
        <img
            v-if="worksheet.partOfBody.icon === 'jambe'"
            src="../../img/icons/part-of-body/jambe.svg"
            alt="Icone Jambe"
            class="icon-jambe"
        />
        <img
            v-if="worksheet.partOfBody.icon === 'bras'"
            src="../../img/icons/part-of-body/bras.svg"
            alt="Icone Bras"
            class="icon-bras"
        />
        <img
            v-if="worksheet.partOfBody.icon === 'main'"
            src="../../img/icons/part-of-body/main.svg"
            alt="Icone Main"
            class="icon-main"
        />
        <img
            v-if="worksheet.partOfBody.icon === 'epaule'"
            src="../../img/icons/part-of-body/epaule.svg"
            alt="Icone Épaule"
            class="icon-epaule"
        />
        <img
            v-if="worksheet.partOfBody.icon === 'dos'"
            src="../../img/icons/part-of-body/dos.svg"
            alt="Icone Dos"
            class="icon-dos"
        />
        <img
            v-if="worksheet.partOfBody.icon === 'cervicales'"
            src="../../img/icons/part-of-body/cervicales.svg"
            alt="Icone Cervicales"
            class="icon-cervicales"
        />
        <img
            v-if="worksheet.partOfBody.icon === 'lombaires'"
            src="../../img/icons/part-of-body/lombaires.svg"
            alt="Icone Lombaires"
            class="icon-lombaires"
        />
        <img
            v-if="worksheet.partOfBody.icon === 'thoracique'"
            src="../../img/icons/part-of-body/thoracique.svg"
            alt="Icone Thoracique"
            class="icon-thoracique"
        />
        {{
            worksheet.title.length > 20
                ? worksheet.title.substring(0, 20) + "..."
                : worksheet.title
        }}
    </vs-button>
</template>

<script>
export default {
    props: {
        worksheet: Object,
    },
};
</script>