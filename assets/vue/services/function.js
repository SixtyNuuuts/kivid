import Vue from 'vue';
import moment from "moment";

export default {

  getTagsFromAllVideos(videos) {
    return videos.reduce((r, video) => {
      video.tags.forEach((tag) => {
        if (!r.includes(tag.name)) {
          r.push(tag.name);
        }
      });
      return r;
    }, []);
  },

  getTagsFromAll(tagsFromExercises) {
    return tagsFromExercises.reduce((r, exercise) => {
      exercise.forEach((tag) => {
        if (!r.includes(tag)) {
          r.push(tag);
        }
      });
      return r;
    }, []);
  },

  generateTagsFromExercises(worksheets) {
    return worksheets.map((worksheet) => {
      return (worksheet.exercisesTags = worksheet.exercises.reduce(
        (r, exercise) => {
          exercise.video.tags.forEach((tag) => {
            if (!r.includes(tag.name)) {
              r.push(tag.name);
            }
          });
          return r;
        },
        []
      ));
    });
  },

  getTimeLeftBeforeNextSession(endDateCurrentSession) {
    const start = moment().format("DD/MM/YYYY HH:mm:ss");

    const end = moment(endDateCurrentSession).format(
      "DD/MM/YYYY HH:mm:ss"
    );

    const days = this.getDiffBetweenTwoDates(start, end).asDays();

    const hours = this.getDiffBetweenTwoDates(start, end).asHours();

    const minutes = this.getDiffBetweenTwoDates(start, end).asMinutes();

    const seconds = this.getDiffBetweenTwoDates(start, end).asSeconds();

    return { days, hours, minutes, seconds };
  },

  getDiffBetweenTwoDates(start, end) {
    return moment.duration(
      moment(end, "DD/MM/YYYY HH:mm:ss").diff(
        moment(start, "DD/MM/YYYY HH:mm:ss")
      )
    );
  },

  openSuccessNotification(titleText, messageText) {
    Vue.prototype.$vs.notification({
      progress: "auto",
      icon: "<i class='far fa-check-circle text-success'></i>",
      color: null,
      position: "top-right",
      title: `<strong class='text-success'>${titleText}</strong>`,
      text: `${messageText}`,
    });
  },

  openPrimaryNotification(titleText, messageText) {
    Vue.prototype.$vs.notification({
      progress: "auto",
      icon: "<i class='far fa-check-circle text-primary'></i>",
      color: null,
      position: "top-right",
      title: `<strong class='text-primary'>${titleText}</strong>`,
      text: `${messageText}`,
    });
  },

  openErrorNotification(titleText, messageText) {
    Vue.prototype.$vs.notification({
      progress: "auto",
      icon: "<i class='far fa-times-circle text-danger'></i>",
      color: null,
      position: "top-right",
      title: `<strong class='text-danger'>${titleText}</strong>`,
      text: `${messageText}`,
    });
  },

  openSuccessNotificationStay(titleText, messageText) {
    Vue.prototype.$vs.notification({
      duration: 'none',
      classNotification: 'fullpage',
      icon: "<i class='far fa-check-circle text-success'></i>",
      color: null,
      position: "top-right",
      title: `<strong class='text-success'>${titleText}</strong>`,
      text: `${messageText}`,
    });
  },

  openErrorNotificationStay(titleText, messageText) {
    Vue.prototype.$vs.notification({
      duration: 'none',
      classNotification: 'fullpage',
      icon: "<i class='far fa-times-circle text-danger'></i>",
      color: null,
      position: "top-right",
      title: `<strong class='text-danger'>${titleText}</strong>`,
      text: `${messageText}`,
    });
  },

  generateAgeFromDateOfBirth(dateString) {
    if (!dateString) {
      return null;
    }
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  },

  sortByPosition(array) {
    array.sort(function (a, b) {
      return a.position - b.position
    })
    return array
  },

  sortByCreatedAtDesc(array) {
    array.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return array;
  },

  hexToRgbA(hex, alpha) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ', ' + alpha + ')';
    }
    throw new Error('Bad Hex');
  },

  // timeForNotification(notificationDate) {
  //   const timeNow = new Date().getTime();
  //   const timeNotification = new Date(notificationDate).getTime();

  //   const msDiff = timeNow - timeNotification;

  //   const dayDiff = msDiff / 86400 / 1000;
  //   const nbDays = Math.round(dayDiff);

  //   const restInHours = (msDiff - 86400 * nbDays * 1000) / 3600 / 1000;
  //   const nbHours = Math.round(restInHours);

  //   const restInMin =
  //     (msDiff - (3600 * nbHours * 1000 + 86400 * nbDays * 1000)) /
  //     60 /
  //     1000;
  //   const nbMin = Math.round(restInMin);

  //   let minutes = nbMin > 0 ? `${nbMin} min.` : `À l'instant`;

  //   const hoursOrMinutes = nbHours >= 1 ? `${nbHours} h.` : minutes;

  //   const timeForNotif =
  //     nbDays > 1 ? this.formatDate(notificationDate) : hoursOrMinutes;

  //   return timeForNotif;
  // },

  getCivility(gender) {
    return "male" === gender ? "M." : "Mme";
  },

  // Vuesax functions

  getPage(data, page, maxItems) {
    if (maxItems === void 0) {
      maxItems = 5;
    }

    var max = Math.ceil(page * maxItems);
    var min = max - maxItems;
    var items = [];
    data.forEach(function (item, index) {
      if (index >= min && index < max) {
        items.push(item);
      }
    });
    return items;
  },

  getLength(data, maxItems) {
    if (maxItems === void 0) {
      maxItems = 5;
    }

    var length = Math.ceil(data.length / maxItems);
    return length;
  },

  checkAll(selected, data) {
    if (selected.length !== data.length) {
      selected = [];
      data.forEach(function (item) {
        selected.push(item);
      });
      return selected;
    } else {
      return [];
    }
  },

  getSearch(data, search, exclude) {
    if (search === void 0) {
      search = '';
    }

    function flattenDeep(val) {
      return Object.values(val || []).reduce(function (acc, val) {
        return typeof val === 'object' ? acc.concat(flattenDeep(val)) : acc.concat(val);
      }, []);
    }

    function getValues(obj) {
      let searchFields = ["firstname", "lastname", "email", "title", "name", "worksheet", "patient", "doctor"];
      if ('doctor' === exclude) {
        searchFields = ["firstname", "lastname", "email", "title", "name", "worksheet", "patient"];
      }

      const objFilteredBySearchField = Object.keys(obj).reduce((r, key) => {
        if (searchFields.includes(key)) {
          r[key] = obj[key];
        }
        return r;
      }, {});

      return flattenDeep(objFilteredBySearchField).filter(function (item) {
        return typeof item === 'string' || typeof item === 'number';
      });
    }

    function normalize(text) {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }

    const searchTerms = search.replace(/\s+/g, ' ').split(' ').map(t => normalize(t)).filter(t => t != "")

    // var searchNormalize = normalize(search);
    return data.filter(function (item) {
      let result = true;
      searchTerms.forEach(term => {
        if (!normalize(getValues(item).toString()).includes(term)) {
          result = false;
        }
      });

      return result;
    });
  },

  sortData(evt, data, sortKey) {
    data = [].concat(data).sort(returnOriginalIndex);
    let sortType = 'desc';
    const el = evt.target;

    if (el.dataset["sortType" + sortKey] == 'desc') {
      sortType = 'asc';
    } else if (el.dataset["sortType" + sortKey] == 'asc') {
      sortType = null;
    }

    if (sortType == 'desc') {
      data.map(function (item, i) {
        item["vsOriginalIndex" + sortKey] = i;
      });
    }

    el.dataset["sortType" + sortKey] = sortType;
    el.dataset["sortType"] = sortType;
    el.dataset["sortKey"] = "sortType" + sortKey;
    const parent = el.closest('.vs-table__tr');
    const ths = parent.querySelectorAll('th.sort');
    ths.forEach(function (th) {
      if (th != el) {
        th.dataset.sortType = null;
        th.dataset[th.dataset["sortKey"]] = null;
      }
    });

    function compare(a, b) {
      let sortKeyA = sortKey;
      let sortKeyB = sortKey;
      let sortKeySplitA = sortKey.split('.');
      let sortKeySplitB = sortKey.split('.');

      if (sortKeySplitA.length === 2 && a[sortKeySplitA[0]] === null) {
        sortKeySplitA = [sortKeySplitA[0]];
        sortKeyA = sortKeySplitA[0];
      }

      if (sortKeySplitB.length === 2 && b[sortKeySplitB[0]] === null) {
        sortKeySplitB = [sortKeySplitB[0]];
        sortKeyB = sortKeySplitB[0];
      }

      let valueA = sortKeySplitA.length === 2 ? a[sortKeySplitA[0]][sortKeySplitA[1]] : a[sortKeyA];
      let valueB = sortKeySplitB.length === 2 ? b[sortKeySplitB[0]][sortKeySplitB[1]] : b[sortKeyB];

      if ('exercises' === sortKey) {
        valueA = valueA.length;
        valueB = valueB.length;
      }

      let valueAOrNull = valueA !== null ? valueA : 'z';
      let valueBOrNull = valueB !== null ? valueB : 'z';

      let valueAToLowerCaseOrBool = ('boolean' == typeof valueAOrNull) || ('number' == typeof valueAOrNull) ? valueAOrNull : valueAOrNull.toLowerCase();
      let valueBToLowerCaseOrBool = ('boolean' == typeof valueBOrNull) || ('number' == typeof valueBOrNull) ? valueBOrNull : valueBOrNull.toLowerCase();

      if (valueAToLowerCaseOrBool < valueBToLowerCaseOrBool) {
        return sortType !== 'desc' ? 1 : -1;
      }
      if (valueAToLowerCaseOrBool > valueBToLowerCaseOrBool) {
        return sortType !== 'desc' ? -1 : 1;
      }

      return 0;
    }

    function returnOriginalIndex(a, b) {
      return a["vsOriginalIndex" + sortKey] - b["vsOriginalIndex" + sortKey];
    }

    return sortType !== null ? [].concat(data).sort(compare) : [].concat(data).sort(returnOriginalIndex);
  },

}