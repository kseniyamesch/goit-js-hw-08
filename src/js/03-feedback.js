import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

initForm();

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const formData = new FormData(form);
    formData.forEach((key, value) => {
        console.log(value, key)
    })
    evt.target.reset(); 
    localStorage.removeItem('feedback-form-state');
});

form.addEventListener('input', throttle(onInputChange, 500));

function onInputChange (evt) {
let parsedFilters = localStorage.getItem('feedback-form-state');
parsedFilters = parsedFilters ? JSON.parse(parsedFilters) : {};
parsedFilters[evt.target.name] = evt.target.value;
if (parsedFilters) {
    localStorage.setItem('feedback-form-state', JSON.stringify(parsedFilters))
}
}

function initForm () {
    
    let parsedFilters = localStorage.getItem('feedback-form-state');

    if(parsedFilters) {
        parsedFilters = JSON.parse(parsedFilters);
        Object.entries(parsedFilters).forEach(([name, value]) => {
            form.elements[name].value = value;
                })
    }
    

}




