// //1 https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// class Movie{
//     constructor(title,studio,rating){
//         this.title = title;
//         this.studio = studio;
//        if(rating==undefined){
//         this.rating="PG"
//        }else{
//         this.rating=rating;
//        }
        
//     }
//     getPG(array){
//         var result=[];
//         for(var i=0;i<array.length;i++){
//             if(array[i].rating=="PG"){
//                 result.push(array[i]);
//     }
//         }
//         return result;
//     }
// }
// var movie = new Movie("Casino Royale", "Eon Productions", "PG13");
// var movie1 = new Movie("Casino Royale", "Eon Productions");
// var arr=[movie,movie1]
// console.log(movie1.getPG(arr));
// //////////////////////////////////
// //2 https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// class Circle {
//     constructor(radius, color) {
//       this.radius = radius;
//       this.color = color;
//     }
//     get radiusCircle() {
//       return this.radius;
//     }
//     get colorCircle() {
//       return this.color;
//     }
//     set radiusCircle(radius) {
//       this.radius = radius;
//     }
//     set colorCircle(color) {
//       this.color = color;
//     }
//     get toString() {
//       return `"Circle[radius=${this.radius}, color=${this.color}]"`;
//     }
//     get areaCircle() {
//       return Math.PI * this.radius * this.radius;
//     }
//     get circumferenceCircle() {
//       return 2 * Math.PI * this.radius;
//     }
//   }
//   var obj1 = new Circle(1.0, "red");
//   console.log(obj1.radiusCircle); //get radiusCircle
  
//   obj1.radiusCircle = 1.2;
//   console.log(obj1.radiusCircle); //set radiusCircle

//   console.log(obj1.colorCircle); //get colorCircle)
  
//   obj1.colorCircle = "blue";
//   console.log(obj1.colorCircle); //set colorCircle

//   console.log(obj1.toString); //get toString)
//   console.log(obj1.areaCircle); //get areaCircle
//   console.log(obj1.circumferenceCircle); //get circumferenceCircle
//   ////////////////////////////////////////

// //3 Write a “person” class to hold all the details.
// class Person{
//     constructor(name,age,salary,gender){
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//         this.gender = gender;
//     }
// }
// var test = new Person("pradeep","23","30000","male");
// console.log(test.name);
// console.log(test.age);
// console.log(test.salary);
// console.log(test.gender);
// //////////////////////////////////////////////////////////////
// //4 write a class to calculate the uber price.
// class Uber{
//     constructor(car,distance,costfor1km){
//             this.car = car;
//             this.distance = distance;
//             this.costfor1km = costfor1km;
// }
// }
// var prize = new Uber("Audi",10,50);
// var a = prize.car;
// var b = prize.distance;
// var c = prize.costfor1km;
// console.log (a+"="+b*c);

