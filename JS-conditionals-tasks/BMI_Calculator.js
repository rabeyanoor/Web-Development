let w = 70;
let h = 1.75;

let bmi = w / (h * h);
let catagori;
if (bmi < 18.5) {
  catagori = "underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  catagori = "normal";
} else if (bmi >= 25 && bmi <= 29.9) {
  catagori = "overweight";
} else {
  catagori = "obese";
}
console.log("BMI :", bmi.toFixed(2));
console.log("catagori :", catagori);
