export function * armm() {

    let isArmstrong = (num) => {
        let sum = 0;
        //store the actual number to check later
        let temp = num;
      
        //Extract each digit of number
        while(num > 0){
          //get the last digit of the number
          let d = parseInt(num % 10);
        
          //find the cube
          d = d ** 3;
          sum = sum + d;
        
          //reduce the number
          num = parseInt(num / 10);
        }
        
        //Check if number equals to the cubed sum
        return temp === sum;
      }
      
      //Function to print all the Armstrong number
      let printArmstrong = (start, end) => {
      
        //loop through given range of numbers
        for(let i = start; i <= end; i++){
      
           //If the it is Armstrong then print
           if(isArmstrong(i)){
             console.log(i);
           }
        }
      }

    }

    printArmstrong(100, 200);

