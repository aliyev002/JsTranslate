const englishData = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Engineer",
    company: "TechCorp",
    phone: "+1 555 1234",
    email: "john.doe@example.com",
    address: "123 Elm St",
    education: "Bachelor's Degree",
    hobby: "Photography",
    favorite_food: "Pizza",
    favorite_color: "Blue",
    favorite_movie: "Inception",
    favorite_book: "1984",
    language: "English",
    nationality: "American",
    marital_status: "Single",
    has_pets: true,
    children: 0,
    car: "Tesla Model S"
};

const russianData = {
    name: "Джон",
    age: 30,
    city: "Нью-Йорк",
    occupation: "Инженер",
    company: "ТехКорп",
    phone: "+1 555 1234",
    email: "john.doe@пример.com",
    address: "ул. Эльм, 123",
    education: "Степень бакалавра",
    hobby: "Фотография",
    favorite_food: "Пицца",
    favorite_color: "Синий",
    favorite_movie: "Начало",
    favorite_book: "1984",
    language: "Английский",
    nationality: "Американец",
    marital_status: "Не женат",
    has_pets: true,
    children: 0,
    car: "Тесла Модель S"
};

function getLanguageFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || 'en'; 
}

function loadData(language) {
    let data; 

if (language === 'ru') {
    
    data = russianData; 
} else {
    
    data = englishData; 
}


    
    document.getElementById('name').textContent = data.name;
    document.getElementById('age').textContent = data.age;
    document.getElementById('city').textContent = data.city;
    document.getElementById('occupation').textContent = data.occupation;
    document.getElementById('company').textContent = data.company;
    document.getElementById('phone').textContent = data.phone;
    document.getElementById('email').textContent = data.email;
    document.getElementById('address').textContent = data.address;
    document.getElementById('education').textContent = data.education;
    document.getElementById('hobby').textContent = data.hobby;
    document.getElementById('favorite_food').textContent = data.favorite_food;
    document.getElementById('favorite_color').textContent = data.favorite_color;
    document.getElementById('favorite_movie').textContent = data.favorite_movie;
    document.getElementById('favorite_book').textContent = data.favorite_book;
    document.getElementById('language').textContent = data.language;
    document.getElementById('nationality').textContent = data.nationality;
    document.getElementById('marital_status').textContent = data.marital_status;
    document.getElementById('has_pets').textContent = data.has_pets ? 'Yes' : 'No';
    document.getElementById('children').textContent = data.children;
    document.getElementById('car').textContent = data.car;
}


function switchLanguage(newLanguage) {
    
    const params = new URLSearchParams(window.location.search);
    params.set('lang', newLanguage);
 
    const currentPath = window.location.pathname;
    const queryString = params.toString();
    const newURL = `${currentPath}?${queryString}`; 
    window.history.replaceState({}, '', newURL);
 
    loadData(newLanguage);
}


const currentLanguage = getLanguageFromURL();
loadData(currentLanguage);


document.getElementById('english-btn').addEventListener('click', () => switchLanguage('en'));
document.getElementById('russian-btn').addEventListener('click', () => switchLanguage('ru'));
