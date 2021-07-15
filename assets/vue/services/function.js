export default {

  setLoaderToBtnValidationForm() {
    setTimeout(() => {
      const btnsValidForm =
        document.querySelectorAll(".valid-form-btn");
      btnsValidForm.forEach((btn) => {
        btn.addEventListener("click", () => {
          const loadingDiv = document.createElement("div");

          loadingDiv.classList.add("vs-button__loading");

          btn.appendChild(loadingDiv);

          setTimeout(() => {
            btn.removeChild(loadingDiv);
          }, 3000);
        });
      });
    }, 500);

  },

  getAllVideoTags(videos) {
    return videos.reduce((r, video) => {
      video.tags.forEach((tag) => {
        if (!r.includes(tag.name)) {
          r.push(tag.name);
        }
      });
      return r;
    }, []);
  },

  generationTagsFromExercises(doctorWorksheets) {
    return doctorWorksheets.map((worksheet) => {
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

  getTagsFromAll(exercisesTags) {
    return exercisesTags.reduce((r, exercise) => {
      exercise.forEach((tag) => {
        if (!r.includes(tag)) {
          r.push(tag);
        }
      });
      return r;
    }, []);
  },

  formatDate(datetime) {
    let date = new Date(Date.parse(datetime));
    return new Intl.DateTimeFormat('fr-FR').format(date);
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

  getSearch(data, search) {
    if (search === void 0) {
      search = '';
    }

    function flattenDeep(val) {
      return Object.values(val || []).reduce(function (acc, val) {
        return typeof val === 'object' ? acc.concat(flattenDeep(val)) : acc.concat(val);
      }, []);
    }

    function getValues(obj) {
      const searchFields = ["title", "firstname", "lastname", "name"]

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

  sortedByPosition(array) {
    array.sort(function (a, b) {
      return a.position - b.position
    })
    return array
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
      const sortKeySplit = sortKey.split('.');

      let valueA = sortKeySplit.length === 2 ? a[sortKeySplit[0]][sortKeySplit[1]] : a[sortKey];
      let valueB = sortKeySplit.length === 2 ? b[sortKeySplit[0]][sortKeySplit[1]] : b[sortKey];

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