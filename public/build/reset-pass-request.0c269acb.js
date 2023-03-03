(self.webpackChunk=self.webpackChunk||[]).push([[967],{7355:function(t,e,s){"use strict";var n=s(538),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container fullpage"},[t._m(0),t._v(" "),s("section",{staticClass:"kiv-block",attrs:{id:"request-reset-pass"}},[s("h2",[t._v("Réinitialisez votre mot de passe")]),t._v(" "),s("div",{staticClass:"register-form"},[s("div",{staticClass:"text"},[t._v("\n                Entrez votre adresse mail et nous vous enverrons un lien\n                pour réinitialiser votre mot de passe.\n            ")]),t._v(" "),s("vs-input",{class:{error:t.validationMessage.email&&t.email},attrs:{danger:null!=t.validationMessage.email,"label-placeholder":"Email",autocomplete:"email",type:"email","icon-after":""},on:{keyup:t.validationEmail},scopedSlots:t._u([t.validationMessage.email&&t.email?{key:"icon",fn:function(){return[s("i",{staticClass:"kiv-error error icon-24"})]},proxy:!0}:null,t.validationMessage.email&&t.email?{key:"message-danger",fn:function(){return[t._v("\n                    "+t._s(t.validationMessage.email)+"\n                ")]},proxy:!0}:null],null,!0),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("div",{staticClass:"btn-container",class:{disabled:t.btnLoadingResetPassRequest}},[s("vs-button",{staticClass:"w-100",attrs:{disabled:t.validationMessage.email||t.btnLoadingResetPassRequest||!t.email,loading:t.btnLoadingResetPassRequest,type:"submit"},on:{click:t.validResetPassRequest}},[t._v("Envoyer un e-mail de réinitialisation")])],1)],1)])])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:s(2830),alt:"Logo Kivid"}})])}];a._withStripped=!0;s(2526),s(1817),s(1539),s(2165),s(6992),s(8783),s(3948);var i=s(4098);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c={data:function(){return{csrfTokenResetPassRequest:null,email:"",btnLoadingResetPassRequest:!1,validationMessage:{email:null}}},methods:{validResetPassRequest:function(){var t=this;this.btnLoadingResetPassRequest=!0,this.axios.post("/reset-password",{_token:this.csrfTokenResetPassRequest,email:this.email.toLowerCase()}).then((function(e){i.Z.openSuccessNotificationStay("Email de réinitialisation envoyé",e.data),t.btnLoadingResetPassRequest=!1})).catch((function(e){var s="object"===r(e.response.data)?e.response.data.detail:e.response.data;i.Z.openErrorNotificationStay("Erreur",s),t.btnLoadingResetPassRequest=!1}))},validationEmail:function(){this.validationMessage.email=null;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.email).toLowerCase())||(this.validationMessage.email="Merci d'entrer un email valide.")}},created:function(){n.default.prototype.$vs=this.$vs,document.body.classList.add("fuzzy-balls"),document.body.classList.add("animated");var t=JSON.parse(document.getElementById("vueData").innerHTML);this.csrfTokenResetPassRequest=t.csrfTokenResetPassRequest}},l=(0,s(1900).Z)(c,a,o,!1,null,"703c979e",null);l.options.__file="assets/vue/fullpage/resetpassword/ResetPassRequest.vue";var u=l.exports,f=s(9669),m=s.n(f),d=s(2346),j=s(1370),g=s.n(j);n.default.use(d.Z,m()),n.default.use(g()),new n.default({render:function(t){return t(u)}}).$mount("#vue")},4098:function(t,e,s){"use strict";s(4747),s(6699),s(2023),s(8309),s(1249),s(2707),s(4916),s(3123),s(9600),s(2222),s(6833),s(7941),s(7327),s(5306),s(1539),s(9714),s(2526),s(1817),s(2165),s(6992),s(8783),s(3948);var n=s(538),a=s(381),o=s.n(a);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.Z={getTagsFromAllVideos:function(t){return t.reduce((function(t,e){return e.tags.forEach((function(e){t.includes(e.name)||t.push(e.name)})),t}),[])},getTagsFromAll:function(t){return t.reduce((function(t,e){return e.forEach((function(e){t.includes(e)||t.push(e)})),t}),[])},generateTagsFromExercises:function(t){return t.map((function(t){return t.exercisesTags=t.exercises.reduce((function(t,e){return e.video.tags.forEach((function(e){t.includes(e.name)||t.push(e.name)})),t}),[])}))},getTimeLeftBeforeNextSession:function(t){var e=o()().format("DD/MM/YYYY HH:mm:ss"),s=o()(t).format("DD/MM/YYYY HH:mm:ss");return{days:this.getDiffBetweenTwoDates(e,s).asDays(),hours:this.getDiffBetweenTwoDates(e,s).asHours(),minutes:this.getDiffBetweenTwoDates(e,s).asMinutes(),seconds:this.getDiffBetweenTwoDates(e,s).asSeconds()}},getDiffBetweenTwoDates:function(t,e){return o().duration(o()(e,"DD/MM/YYYY HH:mm:ss").diff(o()(t,"DD/MM/YYYY HH:mm:ss")))},openSuccessNotification:function(t,e){n.default.prototype.$vs.notification({progress:"auto",icon:"<i class='far fa-check-circle text-success'></i>",color:null,position:"top-right",title:"<strong class='text-success'>".concat(t,"</strong>"),text:"".concat(e)})},openPrimaryNotification:function(t,e){n.default.prototype.$vs.notification({progress:"auto",icon:"<i class='far fa-check-circle text-primary'></i>",color:null,position:"top-right",title:"<strong class='text-primary'>".concat(t,"</strong>"),text:"".concat(e)})},openErrorNotification:function(t,e){n.default.prototype.$vs.notification({progress:"auto",icon:"<i class='far fa-times-circle text-danger'></i>",color:null,position:"top-right",title:"<strong class='text-danger'>".concat(t,"</strong>"),text:"".concat(e)})},openSuccessNotificationStay:function(t,e){n.default.prototype.$vs.notification({duration:"none",classNotification:"fullpage",icon:"<i class='far fa-check-circle text-success'></i>",color:null,position:"top-right",title:"<strong class='text-success'>".concat(t,"</strong>"),text:"".concat(e)})},openErrorNotificationStay:function(t,e){n.default.prototype.$vs.notification({duration:"none",classNotification:"fullpage",icon:"<i class='far fa-times-circle text-danger'></i>",color:null,position:"top-right",title:"<strong class='text-danger'>".concat(t,"</strong>"),text:"".concat(e)})},generateAgeFromDateOfBirth:function(t){if(!t)return null;var e=new Date,s=new Date(t),n=e.getFullYear()-s.getFullYear(),a=e.getMonth()-s.getMonth();return(a<0||0===a&&e.getDate()<s.getDate())&&n--,n},sortByPosition:function(t){return t.sort((function(t,e){return t.position-e.position})),t},sortByCreatedAtDesc:function(t){return t.sort((function(t,e){return new Date(e.createdAt)-new Date(t.createdAt)})),t},hexToRgbA:function(t,e){var s;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(t))return 3==(s=t.substring(1).split("")).length&&(s=[s[0],s[0],s[1],s[1],s[2],s[2]]),"rgba("+[(s="0x"+s.join(""))>>16&255,s>>8&255,255&s].join(",")+", "+e+")";throw new Error("Bad Hex")},getCivility:function(t){return t?"male"===t?"M. ":"Mme ":""},getUserName:function(t){var e=t.firstname?t.firstname:"",s=t.firstname&&t.lastname?" ":"",n=t.lastname?t.lastname:"",a="".concat(e).concat(s).concat(n),o=t.firstname||t.lastname?"".concat(a):t.email,i=this.getCivility(t.gender);return""!=i?"".concat(i," ").concat(o):"".concat(o)},getPage:function(t,e,s){void 0===s&&(s=5);var n=Math.ceil(e*s),a=n-s,o=[];return t.forEach((function(t,e){e>=a&&e<n&&o.push(t)})),o},getLength:function(t,e){return void 0===e&&(e=5),Math.ceil(t.length/e)},checkAll:function(t,e){return t.length!==e.length?(t=[],e.forEach((function(e){t.push(e)})),t):[]},getSearch:function(t,e,s){function n(t){return Object.values(t||[]).reduce((function(t,e){return"object"===i(e)?t.concat(n(e)):t.concat(e)}),[])}function a(t){var e=["firstname","lastname","email","title","name","worksheet","patient","doctor"];return"doctor"===s&&(e=["firstname","lastname","email","title","name","worksheet","patient"]),n(Object.keys(t).reduce((function(s,n){return e.includes(n)&&(s[n]=t[n]),s}),{})).filter((function(t){return"string"==typeof t||"number"==typeof t}))}function o(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}void 0===e&&(e="");var r=e.replace(/\s+/g," ").split(" ").map((function(t){return o(t)})).filter((function(t){return""!=t}));return t.filter((function(t){var e=!0;return r.forEach((function(s){o(a(t).toString()).includes(s)||(e=!1)})),e}))},sortData:function(t,e,s){e=[].concat(e).sort(o);var n="desc",a=t.target;function o(t,e){return t["vsOriginalIndex"+s]-e["vsOriginalIndex"+s]}return"desc"==a.dataset["sortType"+s]?n="asc":"asc"==a.dataset["sortType"+s]&&(n=null),"desc"==n&&e.map((function(t,e){t["vsOriginalIndex"+s]=e})),a.dataset["sortType"+s]=n,a.dataset.sortType=n,a.dataset.sortKey="sortType"+s,a.closest(".vs-table__tr").querySelectorAll("th.sort").forEach((function(t){t!=a&&(t.dataset.sortType=null,t.dataset[t.dataset.sortKey]=null)})),null!==n?[].concat(e).sort((function(t,e){"numcli"===s&&(t[s]=parseInt(t[s]),e[s]=parseInt(e[s]));var a=s,o=s,i=s.split("."),r=s.split(".");2===i.length&&null===t[i[0]]&&(a=(i=[i[0]])[0]),2===r.length&&null===e[r[0]]&&(o=(r=[r[0]])[0]);var c=2===i.length?t[i[0]][i[1]]:t[a],l=2===r.length?e[r[0]][r[1]]:e[o];"exercises"===s&&(c=c.length,l=l.length);var u=null!==c?c:"z",f=null!==l?l:"z",m="boolean"==typeof u||"number"==typeof u?u:u.toLowerCase(),d="boolean"==typeof f||"number"==typeof f?f:f.toLowerCase();return m<d?"desc"!==n?1:-1:m>d?"desc"!==n?-1:1:0})):[].concat(e).sort(o)}}},6700:function(t,e,s){var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6737,"./ar-kw.js":6737,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":7060,"./it-ch":150,"./it-ch.js":150,"./it.js":7060,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":7930,"./se.js":7930,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id=6700},2830:function(t,e,s){"use strict";t.exports=s.p+"images/logo-kivid.c02b836f.svg"}},function(t){t.O(0,[429],(function(){return e=7355,t(t.s=e);var e}));t.O()}]);