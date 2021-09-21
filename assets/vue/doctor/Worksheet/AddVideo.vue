<template>
    <div class="add-video">
        <transition name="fade">
            <div v-if="loading" class="loading-block">
                <div class="loading-gray block-loading"></div>
            </div>
            <div v-else>
                <div class="block">
                    <i class="img">
                        <img
                            src="../../../img/icons/colored/basket.svg"
                            alt="Icone d'une basket"
                        />
                    </i>
                    <h2 v-if="getCurrentWorksheetSession">Ajout Vidéo</h2>
                    <div
                        v-if="getCurrentWorksheetSession"
                        class="total-sessions"
                    >
                        {{ getTotalWorksheetSessions }} vidéos
                    </div>
                    <h3 v-if="!getCurrentWorksheetSession">Aucune Vidéo</h3>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import f from "../../services/function";

export default {
    data() {
        return {
            // add: 0,
            loading: false,
        };
    },
    computed: {
        // getWorksheet() {
        //     return this.worksheet;
        // },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.add-video {
    width: 100%;
    height: 100%;
    background-color: $white;
    background: url(../../../img/icons/colored/background-icons-sports.svg) top
        center;
    background-size: cover;
    padding: 3rem;

    @media (min-width: 576px) {
        background-size: initial;
        padding: 2.2rem;
    }

    @media (min-width: 650px) {
        padding: 2.35rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        &.loading-block {
            .block-loading {
                height: 13.3rem;
                border-radius: 0.5rem;
            }

            .add-line {
                .progressbar-base {
                    background-color: #e6e1d8;
                }
            }
        }

        .block {
            background-color: $orange;
            background-image: url(../../../img/icons/colored/basket.svg);
            background-position: top 0rem left -4rem;
            background-repeat: no-repeat;
            color: $white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            position: relative;
            padding: 2rem 1rem;
            border-radius: 0.5rem;

            @media (min-width: 576px) {
                padding: 2rem;
            }

            > * {
                position: relative;
                z-index: 3;
            }

            &::before {
                content: "";
                background: url(../../../img/ball-4.svg) top -8.1rem right -7.3rem
                        no-repeat,
                    url(../../../img/ball-4.svg) bottom -15.4rem left -9.4rem
                        no-repeat;
                background-size: 17.7rem, 26.7rem;
                display: block;
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 0.5rem;
            }

            &::after {
                content: "";
                background: $orange;
                opacity: 0.89;
                display: block;
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 0.5rem;
            }

            i.img {
                width: 3.2rem;
                margin-bottom: 0.5rem;

                img {
                    width: 100%;
                }
            }

            h2 {
                font-size: 2.4rem;
                margin: 0;
            }

            .total-sessions {
                font-size: 1.3rem;
            }
        }
    }
}
</style>
