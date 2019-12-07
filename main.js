//1
let car ={
  manufacture: 'germany',
  model :'bmw',
  year: 1992,
  speed: 50,
  getCar: function (){
    for (let key in this){
      if(typeof this[key]== 'number'||typeof this[key]== 'string'){
      console.log(this[key]);}
    }
  },
  getTime: function(s)
{
let time =s / this.speed;
for(let i =4;i<time;i+=4){
time++;
}
  console.log(time);
}
}
//Функция для вывода на экран информации об автомобиле;
car.getCar();
//Функция для подсчета необходимого времени для преодоления 
// переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
// car.getTime(600);

//2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

let float = {
  numenator :3,
  denominator: 12
}
let newFloat ={};
for (let key in float){
  newFloat [key]=float[key];
}
newFloat.numenator = 15;
newFloat.denominator= 4;
// console.log(newFloat);
// console.log(float);

//Функция сложения 2-х объектов-дробей;

sum =() =>{
  if(!(float.denominator ==newFloat.denominator)){
float.denominator *= newFloat.denominator;
newFloat.denominator *=float.denominator;
console.log(float.numenator + newFloat.numenator);
console.log( float.denominator);
  }else{
console.log(float.numenator + newFloat.numenator);
console.log( float.denominator);
}}
// sum();
//Функция вычитания 2-х объектов-дробей;

difference =() =>{
  if(!(float.denominator ==newFloat.denominator)){
    float.denominator *= newFloat.denominator;
    newFloat.denominator *=float.denominator;
    console.log(float.numenator - newFloat.numenator);
    console.log( float.denominator);
  }else{    
    console.log(float.numenator -newFloat.numenator);
    console.log( float.denominator);
  }
}
  // difference();

  //Функция умножения 2-х объектов-дробей;

multiplication =()=> {
  console.log(float.numenator * newFloat.numenator);
  console.log(float.denominator * newFloat.denominator);
}
  // multiplication();
//Функция деления 2-х объектов-дробей;
div = ()=> {
 console.log(float.denominator * newFloat.numenator);
  console.log(float.numenator * newFloat.denominator);
}
  // div();
  
  //Функция сокращения объекта-дроби.
  
reduction = ()=> {
  let result;
  if(float.numenator< float.denominator){
    if(Math.trunc(float.denominator / float.numenator )==float.denominator / float.numenator){
        console.log(float.numenator / float.numenator)
        console.log(float.denominator / float.numenator);
    }else{
      let i = 1;
      for( i = float.numenator; i > 0 ; i--){
        if( float.numenator % i == 0 && float.denominator % i == 0){
          console.log(float.numenator / i);
          console.log(float.denominator / i);
          break;
        }
      }
    }
  }
  if(float.numenator>= float.denominator){
    if(!(float.numenator % float.denominator)){
       result= float.numenator / float.denominator;
    }else{ 
       result = (float.numenator / float.denominator);
    }
    console.log( result);
  }
}
// reduction();

//3
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

let time ={
  hour: 10,
  minute: 12,
  second: 15,
  show: function(){
    for (let key in this){
      if(typeof this[key]== 'number'){
        }
    }console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

}

//Функция вывода времени на экран;
// time.show();
//Функция измене ния времени на переданное количество секунд;
changeSecond =(moveSecond) =>{
  let newSecond =time.second +moveSecond;
  let result;
  if(newSecond>60){
    newSecond=newSecond-60;
    time.minute++;
    result =(`${time.hour}:${time.minute}:${newSecond}`);
  } else {
    result =(`${time.hour}:${time.minute}:${newSecond}`);
  }
  if( newSecond<10){
    result =(`${time.hour}:${time.minute}:0${newSecond}`);
  }
  return result;
}
// console.log(changeSecond(55));

//Функция изменения времени на переданное количество минут;
changeMinute =(moveMinute) =>{
  let newMinute =time.minute +moveMinute;
  let result;
  if(newMinute>60){
    newMinute=newMinute-60;
    time.hour++;
    result =(`${time.hour}:${newMinute}:${time.second}`);
  } else {
      result =(`${time.hour}:${newMinute}:${time.second}`);
  }
  if( newMinute<10){
    result =(`${time.hour}:0${newMinute}:${time.second}`);
  }
  return result;
}

// console.log(changeMinute(65));

    //Функция изменения времени на переданное количество часов. 
changeHour =(moveHour) =>{
  let newHour =time.hour + moveHour;
  let result;
  if(newHour>24){  
    while(newHour>24){
      newHour= newHour - 24;
      result =(`${newHour}:${time.minute}:${time.second}`);
    }
  }else if(newHour<24){
    newHour =time.hour +moveHour;
    result =(`${newHour}:${time.minute}:${time.second}`);
  }else if(newHour==24){
    newHour=0;
    result =(`0${newHour}:${time.minute}:${time.second}`);
  }
  if(newHour<10){
    result =(`0${newHour}:${time.minute}:${time.second}`);
  }
  return result;
}

// console.log(changeHour(14));