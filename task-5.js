const country = prompt('Введіть країну доставки:').toLowerCase();
let price;
switch (country) {
  case 'Китай':
    price = 100;
    break;
  case 'Чилі':
    price = 250;
    break;
  case 'Австралія':
    price = 170;
    break;
  case 'Індія':
    price = 80;
    break;
  case 'Ямайка':
    price = 120;
    break;
  default:
    alert('У вашій країні доставка недоступна');
}

if (price) {
  alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
}
