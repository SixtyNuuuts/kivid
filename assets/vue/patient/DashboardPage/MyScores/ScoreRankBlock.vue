<template>
    <div
        class="score-rank-block score-block"
        :class="{
            nouveau: 'nouveau' === rank,
            debutant: 'debutant' === rank,
            amateur: 'amateur' === rank,
            intermediaire: 'intermediaire' === rank,
            confirme: 'confirme' === rank,
            expert: 'expert' === rank,
        }"
    >
        <transition name="fade" mode="out-in">
            <div v-if="!loading && 'nouveau' === rank" key="nouveau">
                <h4>
                    <span v-if="!doctorView">Votre</span
                    ><span v-if="doctorView">Son</span> niveau
                </h4>
                <i class="rank-img">
                    <img
                        src="../../../../img/icons/colored/hand.svg"
                        alt="Icone du rang nouveau patient"
                    />
                </i>
                <p class="rank-label">Nouveau Patient</p>
                <p class="rank-result">C’est parti pour aller mieux&nbsp;!</p>
            </div>
            <div v-if="!loading && 'debutant' === rank" key="debutant">
                <h4>Votre niveau</h4>
                <i class="rank-img">
                    <img
                        src="../../../../img/icons/colored/bras.svg"
                        alt="Icone du rang débutant"
                    />
                </i>
                <p class="rank-label">Patient Débutant</p>
                <p class="rank-result">Muscle ton jeu "Robert"&nbsp;!</p>
            </div>
            <div v-if="!loading && 'amateur' === rank" key="amateur">
                <h4>Votre niveau</h4>
                <i class="rank-img">
                    <img
                        src="../../../../img/icons/smiley/61.svg"
                        alt="Icone du rang amateur"
                    />
                </i>
                <p class="rank-label">Patient Amateur</p>
                <p class="rank-result">La tête dans le guidon&nbsp;!</p>
            </div>
            <div
                v-if="!loading && 'intermediaire' === rank"
                key="intermediaire"
            >
                <h4>Votre niveau</h4>
                <i class="rank-img">
                    <img
                        src="../../../../img/icons/colored/reward.svg"
                        alt="Icone du rang intermédiaire"
                    />
                </i>
                <p class="rank-label">Patient Intermédiaire</p>
                <p class="rank-result">Bien dans tes Baskets&nbsp;!</p>
            </div>
            <div v-if="!loading && 'confirme' === rank" key="confirme">
                <h4>Votre niveau</h4>
                <i class="rank-img">
                    <img
                        src="../../../../img/icons/colored/reward.svg"
                        alt="Icone 1 du rang confirmé"
                    />
                    <img
                        src="../../../../img/icons/colored/reward.svg"
                        alt="Icone 2 du rang confirmé"
                    />
                </i>
                <p class="rank-label">Patient Confirmé</p>
                <p class="rank-result">Pas le temps de niaiser&nbsp;!</p>
            </div>
            <div v-if="!loading && 'expert' === rank" key="expert">
                <h4>Votre niveau</h4>
                <i class="rank-img">
                    <img
                        src="../../../../img/icons/colored/reward.svg"
                        alt="Icone 1 du rang expert"
                    />
                    <img
                        src="../../../../img/icons/colored/reward.svg"
                        alt="Icone 2 du rang expert"
                    />
                    <img
                        src="../../../../img/icons/colored/reward.svg"
                        alt="Icone 3 du rang expert"
                    />
                </i>
                <p class="rank-label">Patient Expert</p>
                <p class="rank-result">Prêt pour le prochain Iron Man&nbsp;!</p>
            </div>
        </transition>
        <div v-if="loading" class="loading-block" key="loading">
            <div class="loading h4 w-65"></div>
            <div class="loading i"></div>
            <div class="loading rank-label"></div>
            <div class="loading rank-result w-85"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        rank: String,
        loading: Boolean,
        doctorView: Boolean,
    },
};
</script><style lang="scss" scoped>
@import "../../../../scss/variables";

#my-scores .content .score-block.score-rank-block {
    grid-area: scorerangblock;
    background-color: $orange;
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 2rem 1rem;
    min-height: 21rem;

    @media (min-width: 576px) {
        padding: 2rem;
    }

    > * {
        position: relative;
        z-index: 3;
    }

    &::before {
        content: "";
        background: url(../../../../img/ball-4.svg) top -8.1rem right -7.3rem
                no-repeat,
            url(../../../../img/ball-4.svg) bottom -15.4rem left -9.4rem
                no-repeat;
        background-size: 17.7rem, 26.7rem;
        display: block;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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
    }

    &.nouveau {
        background-image: url(../../../../img/icons/colored/hand.svg);
        background-position: top 0rem left -4rem;
        background-repeat: no-repeat;

        i.rank-img {
            img {
                width: 27%;
                margin: 0 0.5rem;
            }
        }
    }

    &.debutant {
        background-image: url(../../../../img/icons/colored/bras.svg);
        background-position: top 0rem left -4rem;
        background-repeat: no-repeat;

        i.rank-img {
            img {
                width: 27%;
                margin: 0 0.5rem;
            }
        }
    }

    &.amateur {
        background-image: url(../../../../img/icons/smiley/61.svg);
        background-position: top 0rem left -4rem;
        background-repeat: no-repeat;

        i.rank-img {
            img {
                width: 27%;
                margin: 0 0.5rem;
            }
        }

        &::after {
            opacity: 0.95;
        }
    }

    &.intermediaire {
        background-image: url(../../../../img/icons/colored/reward.svg);
        background-position: top 0rem left -4rem;
        background-repeat: no-repeat;

        i.rank-img {
            img {
                width: 27%;
                margin: 0 0.5rem;
            }
        }
    }

    &.confirme {
        background-image: url(../../../../img/icons/colored/reward.svg);
        background-position: top 0rem left -4rem;
        background-repeat: no-repeat;

        i.rank-img {
            img {
                width: 27%;
                margin: 0 0.5rem;
            }
        }
    }

    &.expert {
        background-image: url(../../../../img/icons/colored/reward.svg);
        background-position: top 0rem left -4rem;
        background-repeat: no-repeat;

        i.rank-img {
            img {
                width: 27%;
                margin: 0 0.5rem;
            }
        }
    }

    .loading-block {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .loading {
            -webkit-animation-duration: 1.2s;
            animation-duration: 1.2s;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            -webkit-animation-name: placeHolderShimmer;
            animation-name: placeHolderShimmer;
            -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
            background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0.01) 8%,
                rgba(240, 101, 65, 0.4) 38%,
                rgba(255, 255, 255, 0.01) 54%
            );
            background-size: 1000px 640px;
            position: relative;
        }

        > * {
            border-radius: 0.4rem;
        }

        .h4 {
            height: 2rem;
            margin-bottom: 2rem;
        }

        .i {
            height: 4rem;
            width: 4rem;
            max-height: 4rem;
            max-width: 4rem;
            margin-bottom: 2rem;
            border-radius: 50%;
        }

        .rank-label {
            width: 90%;
            height: 2.55rem;
        }

        .rank-result {
            height: 1.5rem;
        }
    }

    h4 {
        line-height: 1.1;
        margin-bottom: 2rem;
    }

    i.rank-img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 18rem;
        margin-bottom: 2rem;

        img {
            width: 23%;
            margin: 0 0.5rem;
        }
    }

    .rank-label {
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 1rem;
        background: $white;
        border-radius: 0.4rem;
        color: $black;
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0;
        margin-bottom: 2rem;

        @media (min-width: 450px) {
            font-size: 1.4rem;
        }
    }

    .rank-result {
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0;

        @media (min-width: 450px) {
            font-size: 1.3rem;
        }
    }
}
</style>