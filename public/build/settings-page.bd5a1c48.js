(self.webpackChunk=self.webpackChunk||[]).push([[652],{4098:function(e,t,s){"use strict";s(4747),s(6699),s(2023),s(8309),s(7327),s(1249),s(2707),s(4916),s(3123),s(9600),s(2222),s(6833),s(7941),s(5306),s(1539),s(9714),s(2526),s(1817),s(2165),s(6992),s(8783),s(3948);var n=s(538),r=s(381),a=s.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.Z={getTagsFromAllVideos:function(e){return e.reduce((function(e,t){return t.tags.forEach((function(t){e.includes(t.name)||e.push(t.name)})),e}),[])},getLibrariesFromAllVideos:function(e){return e.reduce((function(e,t){return e.filter((function(e){return e.reference===t.videoLibrary.reference})).length||e.push(t.videoLibrary),e}),[])},getTagsFromAll:function(e){return e.reduce((function(e,t){return t.forEach((function(t){e.includes(t)||e.push(t)})),e}),[])},generateTagsFromExercises:function(e){return e.map((function(e){return e.exercisesTags=e.exercises.reduce((function(e,t){return t.video.tags.forEach((function(t){e.includes(t.name)||e.push(t.name)})),e}),[])}))},getTimeLeftBeforeNextSession:function(e){var t=a()().format("DD/MM/YYYY HH:mm:ss"),s=a()(e).format("DD/MM/YYYY HH:mm:ss");return{days:this.getDiffBetweenTwoDates(t,s).asDays(),hours:this.getDiffBetweenTwoDates(t,s).asHours(),minutes:this.getDiffBetweenTwoDates(t,s).asMinutes(),seconds:this.getDiffBetweenTwoDates(t,s).asSeconds()}},getDiffBetweenTwoDates:function(e,t){return a().duration(a()(t,"DD/MM/YYYY HH:mm:ss").diff(a()(e,"DD/MM/YYYY HH:mm:ss")))},openSuccessNotification:function(e,t){n.default.prototype.$vs.notification({progress:"auto",icon:"<i class='far fa-check-circle text-success'></i>",color:null,position:"top-right",title:"<strong class='text-success'>".concat(e,"</strong>"),text:"".concat(t)})},openPrimaryNotification:function(e,t){n.default.prototype.$vs.notification({progress:"auto",icon:"<i class='far fa-check-circle text-primary'></i>",color:null,position:"top-right",title:"<strong class='text-primary'>".concat(e,"</strong>"),text:"".concat(t)})},openErrorNotification:function(e,t){n.default.prototype.$vs.notification({progress:"auto",icon:"<i class='far fa-times-circle text-danger'></i>",color:null,position:"top-right",title:"<strong class='text-danger'>".concat(e,"</strong>"),text:"".concat(t)})},openSuccessNotificationStay:function(e,t){n.default.prototype.$vs.notification({duration:"none",classNotification:"fullpage",icon:"<i class='far fa-check-circle text-success'></i>",color:null,position:"top-right",title:"<strong class='text-success'>".concat(e,"</strong>"),text:"".concat(t)})},openErrorNotificationStay:function(e,t){n.default.prototype.$vs.notification({duration:"none",classNotification:"fullpage",icon:"<i class='far fa-times-circle text-danger'></i>",color:null,position:"top-right",title:"<strong class='text-danger'>".concat(e,"</strong>"),text:"".concat(t)})},generateAgeFromDateOfBirth:function(e){if(!e)return null;var t=new Date,s=new Date(e),n=t.getFullYear()-s.getFullYear(),r=t.getMonth()-s.getMonth();return(r<0||0===r&&t.getDate()<s.getDate())&&n--,n},sortByPosition:function(e){return e.sort((function(e,t){return e.position-t.position})),e},sortByCreatedAtDesc:function(e){return e.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),e},hexToRgbA:function(e,t){var s;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3==(s=e.substring(1).split("")).length&&(s=[s[0],s[0],s[1],s[1],s[2],s[2]]),"rgba("+[(s="0x"+s.join(""))>>16&255,s>>8&255,255&s].join(",")+", "+t+")";throw new Error("Bad Hex")},getCivility:function(e){return e?"male"===e?"M. ":"Mme ":""},getUserName:function(e){var t=e.firstname?e.firstname:"",s=e.firstname&&e.lastname?" ":"",n=e.lastname?e.lastname:"",r="".concat(t).concat(s).concat(n),a=e.firstname||e.lastname?"".concat(r):e.email,i=this.getCivility(e.gender);return""!=i?"".concat(i," ").concat(a):"".concat(a)},getPage:function(e,t,s){void 0===s&&(s=5);var n=Math.ceil(t*s),r=n-s,a=[];return e.forEach((function(e,t){t>=r&&t<n&&a.push(e)})),a},getLength:function(e,t){return void 0===t&&(t=5),Math.ceil(e.length/t)},checkAll:function(e,t){return e.length!==t.length?(e=[],t.forEach((function(t){e.push(t)})),e):[]},getSearch:function(e,t,s,n){function r(e){return Object.values(e||[]).reduce((function(e,t){return"object"===i(t)?e.concat(r(t)):e.concat(t)}),[])}function a(e){var t=["firstname","lastname","email","title","name","worksheet","patient","doctor"];return"doctor"===s&&(t=["firstname","lastname","email","title","name","worksheet","patient"]),"ffmkr_adhesion"===n&&(t=["numcli","lastname","email"]),r(Object.keys(e).reduce((function(s,n){return t.includes(n)&&(s[n]=e[n]),s}),{})).filter((function(e){return"string"==typeof e||"number"==typeof e}))}function o(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}void 0===t&&(t="");var c=t.replace(/\s+/g," ").split(" ").map((function(e){return o(e)})).filter((function(e){return""!=e}));return e.filter((function(e){var t=!0;return c.forEach((function(s){o(a(e).toString()).includes(s)||(t=!1)})),t}))},sortData:function(e,t,s){t=[].concat(t).sort(a);var n="desc",r=e.target;function a(e,t){return e["vsOriginalIndex"+s]-t["vsOriginalIndex"+s]}return"desc"==r.dataset["sortType"+s]?n="asc":"asc"==r.dataset["sortType"+s]&&(n=null),"desc"==n&&t.map((function(e,t){e["vsOriginalIndex"+s]=t})),r.dataset["sortType"+s]=n,r.dataset.sortType=n,r.dataset.sortKey="sortType"+s,r.closest(".vs-table__tr").querySelectorAll("th.sort").forEach((function(e){e!=r&&(e.dataset.sortType=null,e.dataset[e.dataset.sortKey]=null)})),null!==n?[].concat(t).sort((function(e,t){"numcli"===s&&(e[s]=parseInt(e[s]),t[s]=parseInt(t[s]));var r=s,a=s,i=s.split("."),o=s.split(".");2===i.length&&null===e[i[0]]&&(r=(i=[i[0]])[0]),2===o.length&&null===t[o[0]]&&(a=(o=[o[0]])[0]);var c=2===i.length?e[i[0]][i[1]]:e[r],l=2===o.length?t[o[0]][o[1]]:t[a];"exercises"===s&&(c=c.length,l=l.length);var u=null!==c?c:"z",d=null!==l?l:"z",p="boolean"==typeof u||"number"==typeof u?u:u.toLowerCase(),f="boolean"==typeof d||"number"==typeof d?d:d.toLowerCase();return p<f?"desc"!==n?1:-1:p>f?"desc"!==n?-1:1:0})):[].concat(t).sort(a)}}},3012:function(e,t,s){"use strict";var n=s(538),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container nopadding",attrs:{id:"settings"}},[n("header",[n("div",[n("h1",[e._v("Paramètres")]),e._v(" "),n("p",[e._v("\n                "+e._s(e.currentUser.email)+"\n            ")])]),e._v(" "),n("a",{on:{click:function(t){return e.logout()}}},[n("i",{staticClass:"kiv-logout icon-13"}),e._v("\n            Déconnexion\n        ")])]),e._v(" "),n("main",[n("section",{staticClass:"kiv-block",attrs:{id:"menu"}},[n("ul",[n("li",{class:{active:"1"===e.activeTab},on:{click:function(t){return e.myProfil()}}},[e._v("\n                    Mon Profil\n                ")]),e._v(" "),"patient"===e.userType?n("li",{class:{active:"2"===e.activeTab},on:{click:function(t){return e.mySubscription()}}},[e._v("\n                    Mon Abonnement\n                ")]):e._e()])]),e._v(" "),n("transition",{attrs:{name:"fade"}},["1"===e.activeTab?n("section",{staticClass:"kiv-block",attrs:{id:"my-profil"}},[n("h2",[e._v("Mon Profil")]),e._v(" "),n("div",{staticClass:"edit-form"},[n("div",[n("div",[n("vs-select",{attrs:{placeholder:"Civilité"},model:{value:e.currentUser.gender,callback:function(t){e.$set(e.currentUser,"gender",t)},expression:"currentUser.gender"}},[n("vs-option",{attrs:{label:"Inconnu",value:"0"}},[e._v("Inconnu")]),e._v(" "),n("vs-option",{attrs:{label:"M.",value:"1"}},[e._v("M.")]),e._v(" "),n("vs-option",{attrs:{label:"Mme",value:"2"}},[e._v("Mme")])],1),e._v(" "),n("vs-input",{attrs:{"label-placeholder":"Prénom",type:"text"},model:{value:e.currentUser.firstname,callback:function(t){e.$set(e.currentUser,"firstname",t)},expression:"currentUser.firstname"}}),e._v(" "),n("vs-input",{attrs:{"label-placeholder":"Nom",type:"text"},model:{value:e.currentUser.lastname,callback:function(t){e.$set(e.currentUser,"lastname",t)},expression:"currentUser.lastname"}})],1),e._v(" "),n("div",{attrs:{id:"current-avatar"}},[n("vs-avatar",{staticClass:"user-avatar",attrs:{size:"150",circle:""}},[n("img",{attrs:{src:e.getCurrentAvatar,alt:"Avatar de "+e.currentUser.firstname+" "+e.currentUser.lastname}})]),e._v(" "),n("div",[n("button",{on:{click:e.openModalAvatar}},[n("i",{staticClass:"fas fa-image"}),e._v(" Modifier ma\n                                    photo\n                                ")])])],1)]),e._v(" "),n("div",["patient"===e.userType?n("vs-input",{staticClass:"birthdate",attrs:{type:"date",label:"Date de naissance"},model:{value:e.currentUserBirthdateFormated,callback:function(t){e.currentUserBirthdateFormated=t},expression:"currentUserBirthdateFormated"}}):e._e(),e._v(" "),"doctor"===e.userType?n("vs-input",{staticClass:"num-rpps-ameli",attrs:{"label-placeholder":"Numéro RPPS ou ADELI",type:"text"},model:{value:e.currentUser.numRppsAmeli,callback:function(t){e.$set(e.currentUser,"numRppsAmeli",t)},expression:"currentUser.numRppsAmeli"}}):e._e(),e._v(" "),n("vs-input",{class:{error:e.validationMessage.email&&e.currentUser.email},attrs:{danger:null!=e.validationMessage.email,"label-placeholder":"Email",autocomplete:"email",type:"email","icon-after":""},on:{keyup:e.validationEmail},scopedSlots:e._u([e.validationMessage.email&&e.currentUser.email?{key:"icon",fn:function(){return[n("i",{staticClass:"kiv-error error icon-24"})]},proxy:!0}:null,e.validationMessage.email&&e.currentUser.email?{key:"message-danger",fn:function(){return[e._v("\n                                "+e._s(e.validationMessage.email)+"\n                            ")]},proxy:!0}:null],null,!0),model:{value:e.currentUser.email,callback:function(t){e.$set(e.currentUser,"email",t)},expression:"currentUser.email"}})],1),e._v(" "),"doctor"===e.userType?n("div",{staticClass:"doctor-city"},[n("vs-input",{attrs:{"label-placeholder":"Cabinet",type:"text"},model:{value:e.currentUser.entityName,callback:function(t){e.$set(e.currentUser,"entityName",t)},expression:"currentUser.entityName"}}),e._v(" "),n("vs-input",{attrs:{"label-placeholder":"Rue",type:"text"},model:{value:e.currentUser.street,callback:function(t){e.$set(e.currentUser,"street",t)},expression:"currentUser.street"}}),e._v(" "),n("vs-input",{attrs:{"label-placeholder":"Ville",type:"text"},model:{value:e.currentUser.city,callback:function(t){e.$set(e.currentUser,"city",t)},expression:"currentUser.city"}})],1):e._e(),e._v(" "),n("h4",[e._v("Modifier votre mot de passe")]),e._v(" "),n("div",{staticClass:"passwords"},[n("vs-input",{attrs:{type:"password","label-placeholder":"Nouveau mot de passe",visiblePassword:e.hasVisiblePassword,"icon-after":"",required:"",progress:e.getSecurePassProgress,autocomplete:"new-password"},on:{keyup:e.validationPassword,"click-icon":function(t){e.hasVisiblePassword=!e.hasVisiblePassword}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.hasVisiblePassword?n("i",{staticClass:"fas fa-eye-slash"}):n("i",{staticClass:"fas fa-eye"})]},proxy:!0},e.getSecurePassProgress>=100?{key:"message-success",fn:function(){return[e._v("\n                                Mot de passe sécurisé\n                            ")]},proxy:!0}:null],null,!0),model:{value:e.newPass.plainPassword,callback:function(t){e.$set(e.newPass,"plainPassword",t)},expression:"newPass.plainPassword"}}),e._v(" "),n("vs-input",{class:{error:e.validationMessage.password&&e.newPass.plainPassword&&e.newPass.passwordConfirm},attrs:{type:"password","label-placeholder":"Confirmation du nouveau mdp",visiblePassword:e.hasVisiblePasswordConfirm,"icon-after":"",required:"",autocomplete:"new-password"},on:{keyup:e.validationPassword,"click-icon":function(t){e.hasVisiblePasswordConfirm=!e.hasVisiblePasswordConfirm}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.hasVisiblePasswordConfirm?n("i",{staticClass:"fas fa-eye-slash"}):n("i",{staticClass:"fas fa-eye"})]},proxy:!0},e.validationMessage.password&&e.newPass.plainPassword&&e.newPass.passwordConfirm?{key:"message-danger",fn:function(){return[e._v("\n                                "+e._s(e.validationMessage.password)+"\n                            ")]},proxy:!0}:null],null,!0),model:{value:e.newPass.passwordConfirm,callback:function(t){e.$set(e.newPass,"passwordConfirm",t)},expression:"newPass.passwordConfirm"}})],1),e._v(" "),n("div",{staticClass:"btn-container",class:{disabled:e.btnLoadingEdit}},[n("vs-button",{staticClass:"w-100",attrs:{disabled:e.btnLoadingEdit||e.validationMessage.email||e.validationMessage.password||!e.currentUser.email||""!==e.newPass.plainPassword&&""===!e.newPass.passwordConfirm,loading:e.btnLoadingEdit,type:"submit"},on:{click:e.validEdition}},[e._v("Enregistrer les modifications")])],1)])]):e._e(),e._v(" "),"patient"===e.userType&&"2"===e.activeTab?n("section",{staticClass:"kiv-block",attrs:{id:"my-subscription"}},[n("h2",[e._v("Mon Abonnement")]),e._v(" "),n("div",[n("div",{staticClass:"sub-frame",class:{active:e.stripeSubscription}},[e.stripeSubscription?n("h3",{staticClass:"active"},[e._v("\n                            Abonnement en cours\n                        ")]):e._e(),e._v(" "),e.stripeSubscription?e._e():n("h3",[e._v("Aucun abonnement")]),e._v(" "),n("div",[n("div",[e.stripeSubscription?n("div",{staticClass:"sub-details"},[n("div",{staticClass:"sub-name"},[e._v("\n                                        "+e._s(e.stripeSubPlans.find((function(t){return t.planId===e.stripeSubscription.plan.id})).name)+"\n                                    ")]),e._v(" "),n("div",{staticClass:"sub-price"},[e._v("\n                                        "+e._s(e.stripeSubPlans.find((function(t){return t.planId===e.stripeSubscription.plan.id})).price/100)+"\n                                        € "),n("span",[e._v("/ mois")])])]):e._e(),e._v(" "),e.stripeSubscription?e._e():n("div",{staticClass:"sub-details"},[n("div",{staticClass:"sub-name small"},[e._v("\n                                        Pour accéder complètement à mes\n                                        prescriptions :\n                                    ")])]),e._v(" "),e.stripeSubscription&&!e.stripeSubscription.cancel_at_period_end?n("p",[n("i",{staticClass:"kiv-info icon-17"}),e._v("\n                                    Renouvellement automatique activé\n                                ")]):e._e(),e._v(" "),e.stripeSubscription&&e.stripeSubscription.cancel_at_period_end?n("p",[n("i",{staticClass:"kiv-info icon-17"}),e._v("\n                                    Renouvellement automatique désactivé\n                                ")]):e._e(),e._v(" "),e.stripeSubscription?n("p",[n("i",{staticClass:"kiv-info icon-17"}),e._v('\n                                    Pour accéder à vos factures, cliquez sur\n                                    le bouton "Gérer l\'abonnement" et allez\n                                    en bas de page, dans la partie\n                                    "Historique de facturation"\n                                ')]):e._e(),e._v(" "),e.stripeSubscription&&e.stripeSubscription.customer?n("vs-button",{on:{click:function(t){return e.stripeCustomerPortalSession(e.stripeSubscription.customer)}}},[n("i",{staticClass:"fas fa-sliders-h"}),e._v("\n                                    Gérer l'abonnement\n                                ")]):e._e(),e._v(" "),e.stripeSubscription?e._e():n("vs-button",{staticClass:"mt-2",on:{click:function(t){return e.stripeCheckout(0)}}},[n("i",{staticClass:"kiv-subscription icon-20"}),e._v("\n                                    Je m’abonne\n                                ")])],1),e._v(" "),n("div",[n("div",{staticClass:"sub-illus"},[e.stripeSubscription?n("img",{attrs:{src:s(3443),alt:"personnage sur une grosse balle"}}):e._e(),e._v(" "),e.stripeSubscription?e._e():n("img",{attrs:{src:s(3683),alt:"personnage sur une grosse balle"}})]),e._v(" "),e.stripeSubscription&&!e.stripeSubscription.cancel_at_period_end?n("p",[e._v("\n                                    Votre abonnement actuel est valide\n                                    jusqu'au\n                                    "),n("strong",[e._v("\n                                        "+e._s(e.formatDate(new Date(1e3*e.stripeSubscription.current_period_end)))+"\n                                    ")])]):e._e(),e._v(" "),e.stripeSubscription&&e.stripeSubscription.cancel_at_period_end?n("p",[e._v("\n                                    Votre abonnement se terminera le\n                                    "),n("strong",[e._v("\n                                        "+e._s(e.formatDate(new Date(1e3*e.stripeSubscription.current_period_end)))+"\n                                    ")])]):e._e()])])])])]):e._e()])],1),e._v(" "),e.modalAvatar?n("div",{staticClass:"cropper-modal"},[n("div",{staticClass:"content"},[n("section",{staticClass:"kiv-block",attrs:{id:"cropper"}},[n("button",{staticClass:"vs-dialog__close btn-close-modal",on:{click:e.closeModalAvatar}},[n("i",{staticClass:"vs-icon-close vs-icon-hover-x"})]),e._v(" "),n("h2",[e._v("Modifier ma photo")]),e._v(" "),n("div",{staticClass:"avatar-cropper"},[n("cropper",{ref:"cropper",staticClass:"cropper",attrs:{"stencil-component":e.$options.components.CircleStencil,"check-orientation":"",src:e.getCropperAvatar}})],1),e._v(" "),n("div",{staticClass:"btn-container"},[n("vs-button",{staticClass:"w-100 upload-avatar secondary",on:{click:function(t){return e.$refs.file.click()}}},[n("input",{ref:"file",attrs:{type:"file",accept:"image/*"},on:{change:function(t){return e.loadImage(t)}}}),e._v("\n                        Importer une image\n                    ")]),e._v(" "),n("vs-button",{staticClass:"w-100",on:{click:function(t){return e.crop()}}},[e._v("\n                        Valider\n                    ")])],1)])])]):e._e()])};r._withStripped=!0;s(2222),s(6992),s(1539),s(2472),s(2990),s(8927),s(3105),s(5035),s(4345),s(7174),s(2846),s(4731),s(7209),s(249),s(8867),s(7789),s(3739),s(9368),s(4483),s(2056),s(3462),s(678),s(7462),s(3824),s(5021),s(2974),s(5016),s(9714),s(8783),s(3948),s(285),s(6699),s(2023),s(2526),s(1817),s(2165);var a=s(4098),i=s(381),o=s.n(i),c=s(516);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u={components:{Cropper:c.fl,CircleStencil:c.xq},data:function(){return{activeTab:"1",currentUser:null,validationMessage:{email:null,password:null},newPass:{plainPassword:"",passwordConfirm:""},newAvatar:null,hasVisiblePassword:!1,hasVisiblePasswordConfirm:!1,csrfTokenEdit:null,btnLoadingEdit:!1,stripeSubPlans:null,status:null,stripeSubscription:null,modalAvatar:!1,image:{src:null,type:null}}},methods:{openModalAvatar:function(){this.modalAvatar=!0,document.body.classList.add("no-scrollbar")},closeModalAvatar:function(){this.modalAvatar=!1,document.body.classList.remove("no-scrollbar")},validEdition:function(){var e=this;this.btnLoadingEdit=!0,this.axios.post("/parametres",{_token:this.csrfTokenEdit,email:this.currentUser.email.toLowerCase(),plainPassword:""!==this.newPass.plainPassword?this.newPass.plainPassword:null,firstname:this.currentUser.firstname,lastname:this.currentUser.lastname,gender:this.currentUser.gender&&"0"!=this.currentUser.gender?"1"==this.currentUser.gender?"male":"female":"",birthdate:this.currentUser.birthdate?this.currentUser.birthdate:null,numRppsAmeli:this.currentUser.numRppsAmeli?this.currentUser.numRppsAmeli:null,entityName:this.currentUser.entityName?this.currentUser.entityName:null,street:this.currentUser.street?this.currentUser.street:null,city:this.currentUser.city?this.currentUser.city:null,avatar:this.newAvatar}).then((function(t){a.Z.openSuccessNotification("Modifications enregistrées",t.data.message),(e.currentUser.firstname||e.currentUser.lastname)&&(document.getElementById("u-name").innerText="".concat(e.currentUser.firstname," ").concat(e.currentUser.lastname)),e.currentUser.firstname||e.currentUser.lastname||!e.currentUser.email||(document.getElementById("u-name").innerText="".concat(e.currentUser.email.toLowerCase())),t.data.resendEmail&&e.axios.get("/".concat(e.userType,"/").concat(e.currentUser.id,"/resend/verify-email")).then((function(e){a.Z.openSuccessNotification("E-mail de vérification envoyé",e.data)})).catch((function(e){var t="object"===l(e.response.data)?e.response.data.detail:e.response.data;a.Z.openErrorNotification("Erreur",t)})),t.data.avatarUrl&&(document.getElementById("u-avatar").src=t.data.avatarUrl),e.btnLoadingEdit=!1})).catch((function(t){var s="object"===l(t.response.data)?t.response.data.detail:t.response.data;a.Z.openErrorNotification("Erreur",s),e.btnLoadingEdit=!1}))},validationEmail:function(){this.validationMessage.email=null;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.currentUser.email).toLowerCase())||(this.validationMessage.email="Merci d'entrer un email valide.")},validationPassword:function(){this.validationMessage.password=null,this.newPass.plainPassword!==this.newPass.passwordConfirm&&(this.validationMessage.password="Les mots de passe ne correspondent pas.")},logout:function(){document.location.href="/logout"},formatDateBirthdate:function(e){return o()(e).format("YYYY-MM-DD")},formatDate:function(e){return o()(e).format("DD/MM/YYYY")},stripeCheckout:function(e){this.axios.post("/subscription/checkout",{stripeSubPlanId:this.stripeSubPlans[e].planId,stripeCustomerId:this.stripeSubscription?this.stripeSubscription.customer:null,successUrl:"abonnement/success",cancelUrl:"abonnement/cancel",userId:"".concat(this.currentUser.id)}).then((function(e){window.location.href=e.data})).catch((function(e){console.log(e),a.Z.openErrorNotification("Erreur","Erreur lors du processus d'abonnement")}))},stripeCustomerPortalSession:function(e){this.axios.post("/subscription/customer-portal-session",{stripeCustomerId:e}).then((function(e){window.location.href=e.data})).catch((function(e){console.log(e),a.Z.openErrorNotification("Erreur","Erreur lors du processus de modification d'abonnement")}))},myProfil:function(){document.location.href="/parametres"},mySubscription:function(){document.location.href="/abonnement"},getMimeType:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=new Uint8Array(e).subarray(0,4),n="",r=0;r<s.length;r++)n+=s[r].toString(16);switch(n){case"89504e47":return"image/png";case"47494638":return"image/gif";case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffe3":case"ffd8ffe8":return"image/jpeg";default:return t}},crop:function(){this.newAvatar=this.$refs.cropper.getResult().canvas.toDataURL(),this.closeModalAvatar()},reset:function(){this.image={src:null,type:null}},loadImage:function(e){var t=this,s=e.target.files;if(s&&s[0]){this.image.src&&URL.revokeObjectURL(this.image.src);var n=URL.createObjectURL(s[0]),r=new FileReader;r.onload=function(e){t.image={src:n,type:t.getMimeType(e.target.result,s[0].type)}},r.readAsArrayBuffer(s[0])}}},destroyed:function(){this.image.src&&URL.revokeObjectURL(this.image.src)},computed:{currentUserBirthdateFormated:{get:function(){if(this.currentUser.birthdate)return this.formatDateBirthdate(this.currentUser.birthdate)},set:function(e){this.currentUser.birthdate=e}},getCurrentAvatar:function(){return this.newAvatar?this.newAvatar:this.currentUser.avatarUrl?this.currentUser.avatarUrl:"/img/avatar-default.svg"},getCropperAvatar:function(){return this.image.src?this.image.src:this.currentUser.avatarUrl?this.currentUser.avatarUrl:"/img/avatar-default.svg"},getSecurePassProgress:function(){var e=0;return/\d/.test(this.newPass.plainPassword)&&(e+=20),/(.*[A-Z].*)/.test(this.newPass.plainPassword)&&(e+=20),/(.*[a-z].*)/.test(this.newPass.plainPassword)&&(e+=20),this.newPass.plainPassword.length>=9&&(e+=20),/[^A-Za-z0-9]/.test(this.newPass.plainPassword)&&(e+=20),e}},created:function(){n.default.prototype.$vs=this.$vs,document.querySelector(":root").classList.add("black");var e=JSON.parse(document.getElementById("vueData").innerHTML);this.activeTab=e.activeTab,this.currentUser=e.currentUser,this.csrfTokenEdit=e.csrfTokenEdit,null===this.currentUser.firstname&&(this.currentUser.firstname=""),null===this.currentUser.lastname&&(this.currentUser.lastname=""),null===this.currentUser.gender&&(this.currentUser.gender=""),null===this.currentUser.numRppsAmeli&&(this.currentUser.numRppsAmeli=""),null===this.currentUser.entityName&&(this.currentUser.entityName=""),null===this.currentUser.street&&(this.currentUser.street=""),null===this.currentUser.city&&(this.currentUser.city=""),this.currentUser.gender="male"===this.currentUser.gender?1:this.currentUser.gender,this.currentUser.gender="female"===this.currentUser.gender?2:this.currentUser.gender,this.userType=this.currentUser.roles.includes("ROLE_PATIENT")?"patient":"doctor",this.stripeSubPlans=e.stripeSubPlans,this.stripeSubscription=e.stripeSubscription,this.status=e.status,"cancel"===this.status&&a.Z.openPrimaryNotification("Paiement annulé","Le paiement a été annulé"),"success"===this.status&&a.Z.openSuccessNotification("Paiement accepté","Vous pouvez profiter de votre abonnement")}},d=(0,s(1900).Z)(u,r,[],!1,null,null,null);d.options.__file="assets/vue/SettingsPage.vue";var p=d.exports,f=s(9669),m=s.n(f),v=s(2346),h=s(1370),g=s.n(h);n.default.use(v.Z,m()),n.default.use(g()),new n.default({render:function(e){return e(p)}}).$mount("#vue")},6700:function(e,t,s){var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6737,"./ar-kw.js":6737,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":7060,"./it-ch":150,"./it-ch.js":150,"./it.js":7060,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":7930,"./se.js":7930,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function r(e){var t=a(e);return s(t)}function a(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=6700},3683:function(e,t,s){"use strict";e.exports=s.p+"images/boule-seule.4e65ae87.svg"},3443:function(e,t,s){"use strict";e.exports=s.p+"images/perso-boule.6d6bab14.svg"}},function(e){e.O(0,[429,247,735],(function(){return t=3012,e(e.s=t);var t}));e.O()}]);