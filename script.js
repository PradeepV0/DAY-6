// //1
// class Movie{
//     constructor(title,studio,rating){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
        
//     }
// }
// var test = new Movie("Casino Royale", "Eon Productions", "PG13");
// console.log(test.title);
// console.log(test.studio);
// console.log(test.rating);
// //////////////////////////////////
// //2
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

// //3
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
// //4
// class Uber{
//     constructor(briyani,chicken65,shawarma){
//             this.briyani = briyani;
//             this.chicken65 = chicken65;
//             this.shawarma = shawarma;
// }
// var test = new Uber("180","80","120");
// var sum = 0;
// for (var i = 0; i <test.length; i++)
// {
// sum = sum +parseInt(test[i]);
// }
// console.log(sum);