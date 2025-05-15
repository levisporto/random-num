




function getNum(){

  let num1 = parseInt(document.getElementById("num-1").value);
  let num2 = parseInt(document.getElementById("num-2").value);
  







  let thirdNum = (1 + num2 - num1);

  let myRandomNum = Math.floor(Math.random()*thirdNum);
  let myFinalNum = myRandomNum + (num1);
  let displayFinal = myFinalNum;
 
  const answer = document.getElementById("answer");
  return answer.innerHTML = `Your random number is: ${displayFinal}`;

}

