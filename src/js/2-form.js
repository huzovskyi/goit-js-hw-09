const formData = {
    email: "",
    message: "",
}

const KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener("input", foo);

// ЗАПОВНЕННЯ ФОРМИ

function populateForm() {
    const savedData = localStorage.getItem(KEY);
    
    if (savedData) {
        const parseData = JSON.parse(savedData);

        Object.assign(formData, parseData);

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;

    }
}
    
populateForm();

// ЗБЕРЕЖЕННЯ

function foo(event) {

    const { name, value } = event.target;

    formData[name] = value;

    const saveData = localStorage.setItem(KEY, JSON.stringify(formData));
}


// ВІДПРАВКА

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert('Fill please all fields');
        return;
    }

    console.log(formData)
    localStorage.removeItem(KEY);
    form.reset()
    formData.email = "";
    formData.message = "";

}
