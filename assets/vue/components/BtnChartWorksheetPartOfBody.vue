<template>
    <vs-button size="mini" class="btn-chart part-of-body">
        <img
            v-if="groupPOB[0].includes(worksheet.partOfBody.toLowerCase())"
            src="../../img/icons/part-of-body/pied.svg"
            alt="Icone Pied"
            class="icon-pied"
        />
        <img
            v-if="groupPOB[1].includes(worksheet.partOfBody.toLowerCase())"
            src="../../img/icons/part-of-body/jambe.svg"
            alt="Icone Jambe"
            class="icon-jambe"
        />
        <img
            v-if="groupPOB[2].includes(worksheet.partOfBody.toLowerCase())"
            src="../../img/icons/part-of-body/bras.svg"
            alt="Icone Bras"
            class="icon-bras"
        />
        <img
            v-if="groupPOB[3].includes(worksheet.partOfBody.toLowerCase())"
            src="../../img/icons/part-of-body/main.svg"
            alt="Icone Main"
            class="icon-main"
        />
        <img
            v-if="groupPOB[4].includes(worksheet.partOfBody.toLowerCase())"
            src="../../img/icons/part-of-body/epaule.svg"
            alt="Icone Épaule"
            class="icon-epaule"
        />
        <img
            v-if="groupPOB[5].includes(worksheet.partOfBody.toLowerCase())"
            src="../../img/icons/part-of-body/dos.svg"
            alt="Icone Dos"
            class="icon-dos"
        />
        <img
            v-if="groupPOB[6].includes(worksheet.partOfBody.toLowerCase())"
            src="../../img/icons/part-of-body/cervicales.svg"
            alt="Icone Cervicales"
            class="icon-cervicales"
        />
        <img
            v-if="groupPOB[7].includes(worksheet.partOfBody.toLowerCase())"
            src="../../img/icons/part-of-body/lombaires.svg"
            alt="Icone Lombaires"
            class="icon-lombaires"
        />
        <img
            v-if="groupPOB[8].includes(worksheet.partOfBody.toLowerCase())"
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
    data() {
        return {
            iconsForPOB: {
                pied: "pied",
                cheville: "pied",
                jambe: "jambe",
                cuisse: "jambe",
                genou: "jambe",
                bras: "bras",
                coude: "bras",
                avantbras: "bras",
                main: "main",
                epaule: "epaule",
                dos: "dos",
                dorsales: "dos",
                cervicales: "cervicales",
                lombaires: "lombaires",
                bassin: "lombaires",
                hanche: "lombaires",
                thoracique: "thoracique",
                abdominal: "thoracique",
            },
            groupPOB: [
                ["pied", "cheville"],
                ["jambe", "cuisse", "genou"],
                ["bras", "coude", "avantbras"],
                ["main"],
                ["epaule"],
                ["dos", "dorsales"],
                ["cervicales"],
                ["lombaires", "bassin", "hanche"],
                ["thoracique", "abdominal"],
            ],
        };
    },
};
</script>