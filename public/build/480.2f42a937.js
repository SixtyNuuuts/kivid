(self.webpackChunk=self.webpackChunk||[]).push([[480],{4098:function(t,e,s){"use strict";s(4747),s(8309),s(6699),s(2023),s(7327),s(7941),s(1249),s(2707),s(4916),s(3123),s(9600),s(2222),s(6833),s(5306),s(1539),s(9714),s(2526),s(1817),s(2165),s(6992),s(8783),s(3948);var n=s(538),o=s(381),r=s.n(o);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.Z={getTagsFromAllVideos:function(t){return t.reduce((function(t,e){e.tags.forEach((function(e){e&&e.tagGroup&&!(e.tagGroup.name in t)&&(t[e.tagGroup.name]=[]),e&&e.tagGroup&&!t[e.tagGroup.name].includes(e.name)&&t[e.tagGroup.name].push(e.name)}));var s={};return["Objectif","Cible","Type de contraction","Type de mouvement","Spécialité"].forEach((function(e){t[e]&&(s[e]=t[e])})),s}),{})},getLibrariesFromAllVideos:function(t){return t.reduce((function(t,e){return t.filter((function(t){return t.reference===e.videoLibrary.reference})).length||t.push(e.videoLibrary),t}),[])},getTagsFromAll:function(t){return t.reduce((function(t,e){Object.keys(e).forEach((function(s){var n=e[s];n.tagGroup&&!(n.tagGroup.name in t)&&(t[n.tagGroup.name]=[]),n.tagGroup&&!t[n.tagGroup.name].includes(n.name)&&t[n.tagGroup.name].push(n.name)}));var s={};return["Objectif","Cible","Type de contraction","Type de mouvement","Spécialité"].forEach((function(e){t[e]&&(s[e]=t[e])})),s}),{})},generateTagsFromExercises:function(t){return t.map((function(t){return t.exercisesTags=t.exercises.reduce((function(t,e){return e.video.tags.forEach((function(e){e&&!(e.name in t)&&(t[e.name]=e)})),t}),{})}))},getTimeLeftBeforeNextSession:function(t){var e=r()().format("DD/MM/YYYY HH:mm:ss"),s=r()(t).format("DD/MM/YYYY HH:mm:ss");return{days:this.getDiffBetweenTwoDates(e,s).asDays(),hours:this.getDiffBetweenTwoDates(e,s).asHours(),minutes:this.getDiffBetweenTwoDates(e,s).asMinutes(),seconds:this.getDiffBetweenTwoDates(e,s).asSeconds()}},getDiffBetweenTwoDates:function(t,e){return r().duration(r()(e,"DD/MM/YYYY HH:mm:ss").diff(r()(t,"DD/MM/YYYY HH:mm:ss")))},openSuccessNotification:function(t,e){n.default.prototype.$vs.notification({progress:"auto",icon:"<i class='far fa-check-circle text-success'></i>",color:null,position:"top-right",title:"<strong class='text-success'>".concat(t,"</strong>"),text:"".concat(e)})},openPrimaryNotification:function(t,e){n.default.prototype.$vs.notification({progress:"auto",icon:"<i class='far fa-check-circle text-primary'></i>",color:null,position:"top-right",title:"<strong class='text-primary'>".concat(t,"</strong>"),text:"".concat(e)})},openErrorNotification:function(t,e){n.default.prototype.$vs.notification({progress:"auto",icon:"<i class='far fa-times-circle text-danger'></i>",color:null,position:"top-right",title:"<strong class='text-danger'>".concat(t,"</strong>"),text:"".concat(e)})},openSuccessNotificationStay:function(t,e){n.default.prototype.$vs.notification({duration:"none",classNotification:"fullpage",icon:"<i class='far fa-check-circle text-success'></i>",color:null,position:"top-right",title:"<strong class='text-success'>".concat(t,"</strong>"),text:"".concat(e)})},openErrorNotificationStay:function(t,e){n.default.prototype.$vs.notification({duration:"none",classNotification:"fullpage",icon:"<i class='far fa-times-circle text-danger'></i>",color:null,position:"top-right",title:"<strong class='text-danger'>".concat(t,"</strong>"),text:"".concat(e)})},generateAgeFromDateOfBirth:function(t){if(!t)return null;var e=new Date,s=new Date(t),n=e.getFullYear()-s.getFullYear(),o=e.getMonth()-s.getMonth();return(o<0||0===o&&e.getDate()<s.getDate())&&n--,n},sortByPosition:function(t){return t.sort((function(t,e){return t.position-e.position})),t},sortByCreatedAtDesc:function(t){return t.sort((function(t,e){return new Date(e.createdAt)-new Date(t.createdAt)})),t},sortByCreatedAtAsc:function(t){return t.sort((function(t,e){return new Date(t.createdAt)-new Date(e.createdAt)})),t},hexToRgbA:function(t,e){var s;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(t))return 3==(s=t.substring(1).split("")).length&&(s=[s[0],s[0],s[1],s[1],s[2],s[2]]),"rgba("+[(s="0x"+s.join(""))>>16&255,s>>8&255,255&s].join(",")+", "+e+")";throw new Error("Bad Hex")},getCivility:function(t){return t?"male"===t?"M. ":"Mme ":""},getUserName:function(t){if(1==t.id)return t.firstname?t.firstname:t.lastname?t.lastname:"---";var e=t.firstname?t.firstname:"",s=t.firstname&&t.lastname?" ":"",n=t.lastname?t.lastname:"",o="".concat(e).concat(s).concat(n),r=t.firstname||t.lastname?"".concat(o):t.email,a=this.getCivility(t.gender);return""!=a?"".concat(a," ").concat(r):"".concat(r)},getPage:function(t,e,s){void 0===s&&(s=5);var n=Math.ceil(e*s),o=n-s,r=[];return t.forEach((function(t,e){e>=o&&e<n&&r.push(t)})),r},getLength:function(t,e){return void 0===e&&(e=5),Math.ceil(t.length/e)},checkAll:function(t,e){return t.length!==e.length?(t=[],e.forEach((function(e){t.push(e)})),t):[]},getSearch:function(t,e,s,n){function o(t){return Object.values(t||[]).reduce((function(t,e){return"object"===a(e)?t.concat(o(e)):t.concat(e)}),[])}function r(t){var e=["firstname","lastname","email","title","name","worksheet","patient","doctor"];return"doctor"===s&&(e=["firstname","lastname","email","title","name","worksheet","patient"]),"ffmkr_adhesion"===n&&(e=["numcli","lastname","email"]),o(Object.keys(t).reduce((function(s,n){return e.includes(n)&&(s[n]=t[n]),s}),{})).filter((function(t){return"string"==typeof t||"number"==typeof t}))}function i(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}void 0===e&&(e="");var c=e.replace(/\s+/g," ").split(" ").map((function(t){return i(t)})).filter((function(t){return""!=t}));return t.filter((function(t){var e=!0;return c.forEach((function(s){i(r(t).toString()).includes(s)||(e=!1)})),e}))},sortData:function(t,e,s){e=[].concat(e).sort(r);var n="desc",o=t.target;function r(t,e){return t["vsOriginalIndex"+s]-e["vsOriginalIndex"+s]}return"desc"==o.dataset["sortType"+s]?n="asc":"asc"==o.dataset["sortType"+s]&&(n=null),"desc"==n&&e.map((function(t,e){t["vsOriginalIndex"+s]=e})),o.dataset["sortType"+s]=n,o.dataset.sortType=n,o.dataset.sortKey="sortType"+s,o.closest(".vs-table__tr").querySelectorAll("th.sort").forEach((function(t){t!=o&&(t.dataset.sortType=null,t.dataset[t.dataset.sortKey]=null)})),null!==n?[].concat(e).sort((function(t,e){"numcli"===s&&(t[s]=parseInt(t[s]),e[s]=parseInt(e[s]));var o=s,r=s,a=s.split("."),i=s.split(".");2===a.length&&null===t[a[0]]&&(o=(a=[a[0]])[0]),2===i.length&&null===e[i[0]]&&(r=(i=[i[0]])[0]);var c=2===a.length?t[a[0]][a[1]]:t[o],u=2===i.length?e[i[0]][i[1]]:e[r];"exercises"===s&&(c=c.length,u=u.length);var l=null!==c?c:"z",f=null!==u?u:"z",m="boolean"==typeof l||"number"==typeof l?l:l.toLowerCase(),p="boolean"==typeof f||"number"==typeof f?f:f.toLowerCase();return m<p?"desc"!==n?1:-1:m>p?"desc"!==n?-1:1:0})):[].concat(e).sort(r)}}},6700:function(t,e,s){var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6737,"./ar-kw.js":6737,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":7060,"./it-ch":150,"./it-ch.js":150,"./it.js":7060,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":7930,"./se.js":7930,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function o(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id=6700},7771:function(t,e,s){"use strict";s.d(e,{Z:function(){return a}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-tooltip",{staticClass:"kiv-help",scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v("\n        "+t._s(t.partOfBody.name)+"\n    ")]},proxy:!0}])},[n("vs-button",{staticClass:"tag part-of-body",attrs:{size:"mini"}},["pied"===t.partOfBody.icon?n("img",{staticClass:"icon-pied",attrs:{src:s(1351),alt:"Icone Pied"}}):t._e(),t._v(" "),"jambe"===t.partOfBody.icon?n("img",{staticClass:"icon-jambe",attrs:{src:s(8189),alt:"Icone Jambe"}}):t._e(),t._v(" "),"bras"===t.partOfBody.icon?n("img",{staticClass:"icon-bras",attrs:{src:s(7932),alt:"Icone Bras"}}):t._e(),t._v(" "),"main"===t.partOfBody.icon?n("img",{staticClass:"icon-main",attrs:{src:s(6098),alt:"Icone Main"}}):t._e(),t._v(" "),"epaule"===t.partOfBody.icon?n("img",{staticClass:"icon-epaule",attrs:{src:s(2890),alt:"Icone Épaule"}}):t._e(),t._v(" "),"dos"===t.partOfBody.icon?n("img",{staticClass:"icon-dos",attrs:{src:s(6910),alt:"Icone Dos"}}):t._e(),t._v(" "),"cervicales"===t.partOfBody.icon?n("img",{staticClass:"icon-cervicales",attrs:{src:s(1135),alt:"Icone Cervicales"}}):t._e(),t._v(" "),"lombaires"===t.partOfBody.icon?n("img",{staticClass:"icon-lombaires",attrs:{src:s(2894),alt:"Icone Lombaires"}}):t._e(),t._v(" "),"thoracique"===t.partOfBody.icon?n("img",{staticClass:"icon-thoracique",attrs:{src:s(4114),alt:"Icone Thoracique"}}):t._e(),t._v(" "),"global"===t.partOfBody.icon?n("img",{staticClass:"icon-global",attrs:{src:s(7425),alt:"Icone Thoracique"}}):t._e(),t._v(" "),n("span",{staticClass:"text wsnw"},[t._v(t._s(t.partOfBody.name))]),t._v(" "),n("i",{staticClass:"kiv-completed icon-22"})])],1)};n._withStripped=!0;var o={props:{partOfBody:Object}},r=(0,s(1900).Z)(o,n,[],!1,null,"75703e24",null);r.options.__file="assets/vue/components/TagPartOfBody.vue";var a=r.exports},7932:function(t,e,s){"use strict";t.exports=s.p+"images/bras.0ec10e9f.svg"},1135:function(t,e,s){"use strict";t.exports=s.p+"images/cervicales.3807c4cb.svg"},6910:function(t,e,s){"use strict";t.exports=s.p+"images/dos.2ff55e67.svg"},2890:function(t,e,s){"use strict";t.exports=s.p+"images/epaule.2d0fdb16.svg"},7425:function(t,e,s){"use strict";t.exports=s.p+"images/global.d470a9f7.svg"},8189:function(t,e,s){"use strict";t.exports=s.p+"images/jambe.27f0f2a4.svg"},2894:function(t,e,s){"use strict";t.exports=s.p+"images/lombaires.6c2b23f9.svg"},6098:function(t,e,s){"use strict";t.exports=s.p+"images/main.9628705f.svg"},1351:function(t,e,s){"use strict";t.exports=s.p+"images/pied.0c8ed858.svg"},4114:function(t,e,s){"use strict";t.exports=s.p+"images/thoracique.b97689fc.svg"}}]);