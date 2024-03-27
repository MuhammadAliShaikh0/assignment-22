// chap 26(rrounding number)

// Q1
// num = 2.87
// num2 = Math.round(num)
// document.write(num2)

// Q2
// origNum = 2.87
// roundNum = Math.round(origNum)
// document.write(roundNum)

// Q3
// origNum = 5.9
// roundNum = Math.floor(origNum)
// document.write(roundNum)

// Q4
// num = 2.87
// num2 = Math.round(num)
// document.write(num2)

// Q5
// num = 0.5
// roundNum = Math.floor(num)
// document.write(roundNum)

// chap 27(random numbers)

// Q1
// randomNumber = Math.floor(Math.random() * 50)
// document.write(randomNumber)

// Q2
// randomNumber = Math.random()
// document.write(randomNumber)

// Q3
// dice = Math.floor(Math.random() * 6)+1
// document.write("dice value is "+dice)

// Q4
// head = "ali"
// tail = "a"
// randomNum = Math.floor(Math.random() * 2)
// if(randomNum === 1){
//     document.write(head+" won")
// }else{
//     document.write(tail + " won")
// }

// chap 28,29(converting string)

// Q1
// str = "12"
// num = Number(str)
// document.write(num)

// Q2
// str = "123"
// int = Number(str)
// document.write(int)

// Q3
// str = "3.14"
// num = parseFloat(str)
// document.write(num)

// Q4
// typeof

// Q5
// num = 23
// str = num.toString()
// document.write(str)

// Q6
// num = 42
// str = num.toString()
// document.write(str)

// Q7
// decimal= "3.14";
// num = parseFloat(decimal)
// int = Math.round(num)
// document.write(int)

// chapter 30 (controlling the length of decimal)

// Q1
// num = 3.14159265359
// newNum = num.toFixed(4)
// document.write(newNum)

// Q2
// num = 3.14159;
// num = Number(num.toFixed(2))
// document.write(num)

// Q3

// Q4

// chap 26 - 30

// Q1
// num = prompt("Enter positive number")
// document.write("number: "+num +"<br>round of value: "+Math.round(num)+"<br> floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num))

// Q2
// num = prompt("Enter negative number")
// document.write("number: "+num +"<br>round of value: "+Math.round(num)+"<br> floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num))

// Q3
// document.write("Absolute value of -4 is " + Math.abs(-4))

// Q4
// dice = Math.floor(Math.random() * 6)+1
// document.write("dice value is: "+dice)

// Q5
// head = "ali"
// tail = "a"
// randomNum = Math.floor(Math.random() * 2)
// if(randomNum === 1){
//     document.write(head+" won")
// }else{
//     document.write(tail + " won")
// }

// Q6
// randomNum = Math.floor(Math.random() * 100)
// document.write("random number between 1 and 100 is : "+randomNum)

// Q7

// Q8
secretNum = 6
input = prompt("Enter number")
input = parseInt(input)
if(input === secretNum){
    document.write("number matches")
}else{
    document.write("try again")
}