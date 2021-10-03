<template>
    <main>
        <div class="container">
            <vs-button :active="active == 1" @click="active = 1">
                S’inscrire
            </vs-button>
            <br />
            <br />

            <vs-button
                class="secondary w-100"
                :active="active == 1"
                @click="active = 1"
            >
                S’inscrire
            </vs-button>
            <br />
            <br />

            <vs-button disabled>Disabled</vs-button>
            <br />
            <br />

            <a class="action-link" href="#">
                <i class="kiv-pen icon-4"></i>
                <span>Compléter</span>
            </a>
            <br />
            <br />

            <br />
            <a class="action-link" href="#">
                <i class="kiv-pen icon-4"></i>
                <span>Compléter</span>
            </a>

            <br />
            <br />

            <br />
            <a class="action-link" href="#">
                <i class="fas fa-eye"></i>
                <span>Voir toutes les fiches</span>
            </a>
            <br />
            <br />

            <br />
            <a class="action-link green" href="#">
                <i class="kiv-accept icon-22"></i>
                <span>Accepter</span>
            </a>
            <br />
            <br />

            <br />
            <a class="action-link red" href="#">
                <i class="kiv-decline icon-6"></i>
                <span>Refuser</span>
            </a>
            <br />
            <br />
            <br />
            <br />

            <vs-input
                type="password"
                v-model="value"
                label-placeholder="Password"
                :progress="getProgress"
                :visiblePassword="hasVisiblePassword"
                icon-after
                @click-icon="hasVisiblePassword = !hasVisiblePassword"
            >
                <template #icon>
                    <i v-if="!hasVisiblePassword" class="fas fa-eye"></i>
                    <i v-else class="fas fa-eye-slash"></i>
                </template>

                <template v-if="getProgress >= 100" #message-success>
                    Secure password
                </template>
            </vs-input>
            <br />
            <br />
            <vs-input label-placeholder="Name" v-model="value2" />
            <br />
            <br />

            <vs-input
                label-placeholder="Error"
                v-model="value3"
                icon-after
                :class="{ error: true }"
            >
                <template #icon>
                    <i class="kiv-error icon-24"></i>
                </template>

                <template #message-danger> Required </template>
            </vs-input>
            <br />

            <br />
            <vs-checkbox v-model="option"> Option </vs-checkbox>
            <br />
            <br />
            <br />
            <br />
            <vs-switch v-model="active2" />
            <br />
            <br />

            <vs-select placeholder="Select" v-model="value">
                <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
                <vs-option label="Vue" value="2"> Vue </vs-option>
                <vs-option label="Javascript" value="3"> Javascript </vs-option>
                <vs-option disabled label="Sass" value="4"> Sass </vs-option>
                <vs-option label="Typescript" value="5"> Typescript </vs-option>
                <vs-option label="Webpack" value="6"> Webpack </vs-option>
                <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
            </vs-select>
            <br />
            <br />
            <br />
            <br />

            <vs-button-group>
                <vs-button :active="active == 0" @click="active = 0" flat>
                    Jour
                </vs-button>
                <vs-button :active="active == 1" @click="active = 1" flat>
                    Semaine
                </vs-button>
                <vs-button :active="active == 2" @click="active = 2" flat>
                    Mois
                </vs-button>
                <vs-button :active="active == 3" @click="active = 3" flat>
                    Année
                </vs-button>
            </vs-button-group>
            <br />
            <br />
            <br />
            <br />

            <vs-button size="mini" class="tag"> Tag </vs-button>

            <br />
            <br />
            <vs-button size="mini" class="tag secondary"> Tag </vs-button>

            <br />
            <br />

            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/pied.svg"
                    alt="Icone Pied"
                    class="icon-pied"
                />
                Pied
            </vs-button>

            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/jambe.svg"
                    alt="Icone Jambe"
                    class="icon-jambe"
                />
                Jambe
            </vs-button>
            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/bras.svg"
                    alt="Icone Bras"
                    class="icon-bras"
                />
                Bras
            </vs-button>
            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/main.svg"
                    alt="Icone Main"
                    class="icon-main"
                />
                Main
            </vs-button>
            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/epaule.svg"
                    alt="Icone Épaule"
                    class="icon-epaule"
                />
                Épaule
            </vs-button>
            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/dos.svg"
                    alt="Icone Dos"
                    class="icon-dos"
                />
                Dos
            </vs-button>
            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/cervicales.svg"
                    alt="Icone Cervicales"
                    class="icon-cervicales"
                />
                Cervicales
            </vs-button>
            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/lombaires.svg"
                    alt="Icone Lombaires"
                    class="icon-lombaires"
                />
                Lombaires
            </vs-button>
            <br />
            <br />
            <vs-button size="mini" class="tag part-of-body">
                <img
                    src="../img/icons/part-of-body/thoracique.svg"
                    alt="Icone Thoracique"
                    class="icon-thoracique"
                />
                Thoracique
            </vs-button>

            <br />
            <br />
            <br />
            <br />

            <div class="clearfix mhl ptl">
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-1"></span>
                        <span class="mls"> icon-1</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e96e"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe96e;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-15"></span>
                        <span class="mls"> icon-15</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e96f"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe96f;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-2"></span>
                        <span class="mls"> icon-2</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e970"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe970;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-31"></span>
                        <span class="mls"> icon-31</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e971"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe971;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-3"></span>
                        <span class="mls"> icon-3</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e972"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe972;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-4"></span>
                        <span class="mls"> icon-4</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e973"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe973;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-5"></span>
                        <span class="mls"> icon-5</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e974"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe974;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-6"></span>
                        <span class="mls"> icon-6</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e975"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe975;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-25"></span>
                        <span class="mls"> icon-25</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e976"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe976;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-24"></span>
                        <span class="mls"> icon-24</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e977"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe977;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-8"></span>
                        <span class="mls"> icon-8</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e978"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe978;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-9"></span>
                        <span class="mls"> icon-9</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e979"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe979;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-7"></span>
                        <span class="mls"> icon-7</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e97a"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe97a;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-10"></span>
                        <span class="mls"> icon-10</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e97b"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe97b;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-11"></span>
                        <span class="mls"> icon-11</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e97c"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe97c;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-12"></span>
                        <span class="mls"> icon-12</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e97d"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe97d;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-13"></span>
                        <span class="mls"> icon-13</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e97e"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe97e;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-14"></span>
                        <span class="mls"> icon-14</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e97f"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe97f;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-16"></span>
                        <span class="mls"> icon-16</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e980"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe980;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-17"></span>
                        <span class="mls"> icon-17</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e981"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe981;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-18"></span>
                        <span class="mls"> icon-18</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e982"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe982;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-19"></span>
                        <span class="mls"> icon-19</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e983"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe983;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-20"></span>
                        <span class="mls"> icon-20</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e984"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe984;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-22"></span>
                        <span class="mls"> icon-22</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e985"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe985;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-23"></span>
                        <span class="mls"> icon-23</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e986"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe986;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-26"></span>
                        <span class="mls"> icon-26</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e987"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe987;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-27"></span>
                        <span class="mls"> icon-27</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e988"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe988;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-28"></span>
                        <span class="mls"> icon-28</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e989"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe989;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-29"></span>
                        <span class="mls"> icon-29</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e98a"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe98a;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-30"></span>
                        <span class="mls"> icon-30</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e98b"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe98b;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
                <div class="glyph fs1">
                    <div class="clearfix bshadow0 pbs">
                        <span class="icon-21"></span>
                        <span class="mls"> icon-21</span>
                    </div>
                    <fieldset class="fs0 size1of1 clearfix hidden-false">
                        <input
                            type="text"
                            readonly
                            value="e98c"
                            class="unit size1of2"
                        />
                        <input
                            type="text"
                            maxlength="1"
                            readonly
                            value="&#xe98c;"
                            class="unitRight size1of2 talign-right"
                        />
                    </fieldset>
                    <div class="fs0 bshadow0 clearfix hidden-true">
                        <span class="unit pvs fgc1">liga: </span>
                        <input
                            type="text"
                            readonly
                            value=""
                            class="liga unitRight"
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import f from "./services/function";
import ClickOutside from "vue-click-outside";

export default {
    data() {
        return {
            active: 0,
            value: "",
            hasVisiblePassword: false,
            option: true,
            active2: true,
            value2: "",
            value3: "sqdsdq",
        };
    },
    computed: {
        getProgress() {
            let progress = 0;

            // at least one number
            if (/\d/.test(this.value)) {
                progress += 20;
            }

            // at least one capital letter
            if (/(.*[A-Z].*)/.test(this.value)) {
                progress += 20;
            }

            // at menons a lowercase
            if (/(.*[a-z].*)/.test(this.value)) {
                progress += 20;
            }

            // more than 5 digits
            if (this.value.length >= 6) {
                progress += 20;
            }

            // at least one special character
            if (/[^A-Za-z0-9]/.test(this.value)) {
                progress += 20;
            }

            return progress;
        },
    },
    methods: {},
    created() {},
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.container {
    max-width: 400px;
    margin: 5rem auto;

    font-size: 1.5rem;

    .w-100 {
        width: 100%;
    }

    .action-link {
        display: inline-block;
        padding: 0.5rem;
        color: $black;
        text-decoration: none;
        transition: all 0.15s;
        position: relative;
        top: 0;

        &:hover {
            color: darken($black, 5%);
            top: -0.2rem;
        }

        &.green {
            color: $green;

            &:hover {
                color: darken($green, 5%);
                top: -0.2rem;
            }
        }

        &.red {
            color: $red;

            &:hover {
                color: darken($red, 5%);
                top: -0.2rem;
            }
        }

        i {
            font-size: 1.9rem;
            margin-right: 0.2rem;
            position: relative;
            top: 0.1rem;

            &.kiv-eye {
                font-size: 1.75rem;
                position: relative;
                top: 0.1rem;
            }

            &.kiv-accept {
                font-size: 1.7rem;
            }

            &.kiv-decline {
                font-size: 1.95rem;
                margin-right: 0.08rem;
                top: 0.25rem;
            }
        }

        span {
            font-weight: 600;
            text-decoration: underline;
        }
    }
}
</style>