import { Controller } from 'stimulus';

export default class extends Controller {
    static values = {
        formUrl: String,
    }

    triggerModal(event) {
        const modal = document.getElementById('modal');
        const modalBody = modal.querySelector('.modal-body');
        fetch(this.formUrlValue + '?fetch=true')
            .then((response) => {
                return response.text()
            })
            .then((data) => {
                modalBody.innerHTML = data;
                const inputFile = document.querySelector('#current-avatar input');
                if (inputFile) {
                    const avatarImg = document.querySelector('#current-avatar .avatar-img');

                    inputFile.addEventListener("change", () => {
                        if (inputFile.files && inputFile.files[0]) {
                            var reader = new FileReader();

                            reader.onload = function (e) {
                                avatarImg.src = e.target.result;
                            }

                            reader.readAsDataURL(inputFile.files[0]);
                        }
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
