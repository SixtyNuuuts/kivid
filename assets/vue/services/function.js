export default {

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

  sortData(evt, data, sortKey, type) {
    data = [].concat(data).sort(returnOriginalIndex);
    let sortType = type || 'desc';
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
      let valueA = a[sortKey] !== null ? a[sortKey] : 'z';
      let valueB = b[sortKey] !== null ? b[sortKey] : 'z';

      let valueAToLowerCaseOrBool = 'boolean' == typeof valueA ? valueA : valueA.toLowerCase();
      let valueBToLowerCaseOrBool = 'boolean' == typeof valueB ? valueB : valueB.toLowerCase();

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

  // sortedByOrder(array) {
  //   array.sort(function(a, b) {
  //     return a.order - b.order
  //   })
  //   return array
  // },

  // sortedByDate(array) {
  //   array.sort(function(a, b) {
  //     return new Date(a.release_date) - new Date(b.release_date);
  //   })
  //   return array
  // },

  // sortedByAlphabet(array) {
  //   array.sort(function(a, b) {
  //     return a.original_title.localeCompare(b.original_title)
  //   })
  //   return array
  // },

  // sortedByAlphabetPerson(array) {
  //   array.sort(function(a, b) {
  //     return a.lastname.localeCompare(b.lastname)
  //   })
  //   return array
  // },

  // sortedByKFOriginalLangFr(array) {
  //   array.sort(function(a, b) {
  //     return b.known_for.some((m) => m.original_language == 'fr') - a.known_for.some((m) => m.original_language == 'fr')
  //   })
  //   return array
  // },

  // sortedByAlphabetJobs(array) {
  //   array.sort(function(a, b) {
  //     return a.localeCompare(b)
  //   })
  //   return array
  // },

}