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