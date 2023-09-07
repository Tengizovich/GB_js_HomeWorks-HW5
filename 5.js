// Задание 5
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const weekdayObj = {};
if (en.length !== ru.length) {
   console.log('Разная длинна массивов');
} else {
   for (let i = 0; i < en.length; i++) {
      weekdayObj[en[i]] = ru[i];
   }
}
console.log(weekdayObj);
