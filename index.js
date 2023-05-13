const array = [[12,3,4],[0,0,0],[23,5,6],[123,'6',-5],[0,'0','O',1],['test']]

// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже
 
// выведите итоговый массив в консоль

const strNormalizeToZero = (num) => {
  if(typeof num === "string"){
    if(Number.isNaN(Number(num))){
      return 0;
    }
    return Number(num);
  }
  return num;
} 

const sumArray = (array) => {
  const result = array.map((arr) => {
      const sum = arr.reduce((acc, num) => {
        return (acc += strNormalizeToZero(num));
      }, 0);
      return sum;
    });
  return result;
};
console.log(sumArray(array));