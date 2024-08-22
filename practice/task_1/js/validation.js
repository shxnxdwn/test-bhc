const PHONE_PATTERN = /^\+?[78][-( ]?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/;
const FILE_TYPES = ['.jpg', '.jpeg', '.png'];

const form = document.querySelector('.form');


const isCorrectOrganizationName = () => form.querySelector('.form__organization-name').value.trim().length >= 3;

const isCorrectPhoneNumber = () => PHONE_PATTERN.test(form.querySelector('.form__phone').value.trim());

const isCorrectEmail = () => form.querySelector('.form__email').value.trim().includes('@') &&
                             form.querySelector('.form__email').value.trim().includes('.');

const isCorrectLogo = () => {
    const isCorrectFileType = (file) => FILE_TYPES.some((extension) => file.name.toLowerCase().endsWith(extension));

    const logo = form.querySelector('.form__logo');
    const [ file ] = logo.files;
    return file && isCorrectFileType(file);
};

const isActivityChosen = () => Boolean(form.querySelector('.form__activity').value);


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const validators = [
        { check: isCorrectOrganizationName(), error: 'Название организации должно содержать не менее 3 символов' },
        { check: isCorrectPhoneNumber(), error: 'Пожалуйста, введите корректный номер телефона' },
        { check: isCorrectEmail(), error: 'Пожалуйста, введите корректный email' },
        { check: isCorrectLogo(), error: 'Логотип обязателен. Выберите файл .jpg, .jpeg или .png' },
        { check: isActivityChosen(), error: 'Пожалуйста, выберите направление деятельности' }
    ];

    for (const validator of validators) {
        if (!validator.check) {
            console.error(validator.error);
            return;
        }
    }

    form.submit();
    console.log('Форма отправлена');
});
