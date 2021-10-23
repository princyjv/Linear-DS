// 1.How do you find all pairs of an integer array whose sum is equal to a given number?
console.log("Printing all pairs of an array whose sum equals to given number")
document.write("***Printing all pairs of an array whose sum equals to given number ***<br />")
function printPairs(arr, n1, sum)
{
    let count = 0; 
   
    for (let i = 0; i < n1; i++)
        for (let j = i + 1; j < n1; j++)
            if (arr[i] + arr[j] == sum)
              
              
//      console.log("(" + arr[i] + ", "
//                     + arr[j] + ")" );
  
  document.write("(" + arr[i] + ", "
                    + arr[j] + ")" );
          
  }
 
 
    let arr = [ 1, 5, 7, -1, 5 ];
    let n1 = arr.length;
    let sum = 6;
  printPairs(arr, n1, sum);

    console.log("---------------------------------------------")
      document.write("<br />--------------------------------------------------<br />");


//2. How do you reverse an array in place in JavaScript? In place means you cannot create a new array. You have to update the original array.

console.log("Reverse an array in place, means you cannot create a new array. You have to update the original array");
document.write("*** Reverse an array in place, means you cannot create a new array. You have to update the original array*** <br />")
function reverseArrayInPlace(array) {

    for (var z = 0; z < Math.floor(array.length / 2); z++) {

        var temp = array[z];
        array[z] = array[array.length-1-z];
        array[array.length-1-z] = temp;

    }

    return array;
}
document.write(reverseArrayInPlace([1,9,10]))

console.log(reverseArrayInPlace([1,9,10]))
console.log("---------------------------------------------")
  document.write("<br />--------------------------------------------------<br />");


// 3.Javascript program to check if two given strings are rotations of
// each other
 
document.write("***  A program to check if two strings are a rotation of each other ***<br />")

    /* Function checks if passed strings (str1 and str2)
       are rotations of each other */


    function areRotations( str1,  str2)
    {
        // There lengths must be same and str2 must be
        // a substring of str1 concatenated with str1. 
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
    }
     
    // Driver method
 
        var str1 = "AACD";
        var str2 = "ACDA";
 
        if (areRotations(str1, str2))
            document.write("Strings are rotations of each other");
        else
            document.write("Strings are not rotations of each other");
  document.write("<br />--------------------------------------------------<br />");


 //4.How do you print the first non-repeated character from a string?

document.write("***print the first non-repeated character from a string***<br />")

   console.log("***print the first non-repeated character from a string***")
     function firstNonRepeatedCharacter(string) {
     for (var i = 0; i < string.length; i++) {
       var c = string.charAt(i);
           if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
                return c;
      }
   }
    return null;
                                
  }
    console.log(firstNonRepeatedCharacter("aabbnnmj"))
    document.write(firstNonRepeatedCharacter("aabbnnmj"))

    console.log("---------------------------------------------")

  
  document.write("<br />--------------------------------------------------<br />");


// 5 javascript recursive function to solve tower of hanoi puzzle

document.write("***javascript recursive function to solve tower of hanoi puzzle***<br />")
function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 1)
        {
            document.write("Move disk 1 from rod " + from_rod +
            " to rod " + to_rod+"<br/>");
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        document.write("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod+"<br/>");
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
 
    // Driver code
    var n = 4; // Number of disks
    towerOfHanoi(n, 'A', 'C', 'B'); // A, B and C are names of rods
  document.write("<br />--------------------------------------------------<br />");

 // 6. ***Javascript Program to convert postfix to prefix***
 document.write(" Javascript Program to convert postfix to prefix <br />");
     
    // function to check if character
    // is operator or not
    function isOperator(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
  
    // Convert postfix to Prefix expression
    function postToPre(post_exp)
    {
        let s = [];
  
        // length of expression
        let length = post_exp.length;
  
        // reading from right to left
        for (let i = 0; i < length; i++) {
  
            // check if symbol is operator
            if (isOperator(post_exp[i])) {
  
                // Pop two operands from stack
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
                // concat the operands and operator
                let temp = post_exp[i] + op2 + op1;
  
                // Push String temp back to stack
                s.push(temp);
            }
  
            // if symbol is an operand
            else {
  
                // Push the operand to the stack
                s.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    }
     
    let post_exp = "ABC/-AK/L-*";
        
    // Function call
    document.write("Prefix : " + postToPre(post_exp));
  document.write("<br />--------------------------------------------------<br />");


//7. Javascript program to convert prefix to Infix

   document.write("***Javascript program to convert prefix to Infix ***<br />");     
    // Function to check if character
    // is operator or not   
    function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
        }
        return false;
    }
 
    // Convert prefix to Infix expression
    function convert(str)
    {
        let stack = [];
 
        // Length of expression
        let l = str.length;
 
        // Reading from right to left
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
 
                // Concat the operands and operator
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
 
                // To make character to string
                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
     
    let exp = "*-A/BC-/AKL";
      
    document.write("Infix : " + convert(exp));
  document.write("<br />--------------------------------------------------<br />");

//8. Javascript program for checking balanced brackets
 
document.write("***Javascript program for checking balanced brackets ***<br />");
// Function to check if brackets are balanced
function areBracketsBalanced(expr)
{
     
    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];
 
    // Traversing the Expression
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
             
            // Push the element in the stack
            stack.push(x);
            continue;
        }
 
        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    // Check Empty Stack
    return (stack.length == 0);
}
 
// Driver code
let expr = "([{}])";
 
// Function call
if (areBracketsBalanced(expr))
    document.write("Balanced ");
else
    document.write("Not Balanced ");
    document.write("<br />--------------------------------------------------<br />");


//9. JavaScript code to reverse a stack using recursion
 
 document.write("***JavaScript code to reverse a stack using recursion***<br />");
// using Stack class for
// stack implementation
let st = [];
 
// Below is a recursive function
// that inserts an element
// at the bottom of a stack.
function insert_at_bottom(x)
{
    if(st.length==0)
        st.push(x);
    else
    {
        // All items are held in Function
            // Call Stack until we reach end
            // of the stack. When the stack becomes
            // empty, the st.size() becomes 0, the
            // above if part is executed and
            // the item is inserted at the bottom
            let a = st.pop();
            insert_at_bottom(x);
  
            // push allthe items held
            // in Function Call Stack
            // once the item is inserted
            // at the bottom
            st.push(a);
    }
     
     
}
 
// Below is the function that
    // reverses the given stack using
    // insert_at_bottom()
function reverse()
{
    if(st.length > 0)
        {
              
            // Hold all items in Function
            // Call Stack until we
            // reach end of the stack
            let x = st.pop();
            reverse();
              
            // Insert all the items held
            // in Function Call Stack
            // one by one from the bottom
            // to top. Every item is
            // inserted at the bottom
            insert_at_bottom(x);
        }
}
 
// Driver Code
 
// push elements into
// the stack
st.push('1');
st.push('2');
st.push('3');
st.push('4');
 
document.write("Original Stack<br>");
 
document.write(st.join(" ")+"<br>");

 
// function to reverse
// the stack
reverse();

 
document.write("Reversed Stack<br>");
 
document.write(st.join(" "));
  document.write("<br />--------------------------------------------------<br />");




//10. Javascript program to implement a stack that supports
    // getMaximum() in O(1) time and O(1) extra space.
document.write("***Javascript program to implement a stack that supports ***<br   />")
     
    let s = [];
    let minEle;
  
    // Prints minimum element of MyStack
    function getMin()
    {
        if (s.length == 0)
            document.write("Stack is empty" + "</br>");
  
        // variable minEle stores the maximum element
        // in the stack.
        else
            document.write("Minimum Element in " +
                        "the stack is: "+minEle + "</br>");
  
    }
  
    // Prints top element of MyStack
    function peek()
    {
        if (s.length == 0)
        {
              
            document.write("Stack is empty ");
            return;
        }
  
        let t = s[s.length - 1]; // Top element.
  
        document.write("Top Most Element is: ");
  
        // If t > minEle means maxEle stores
        // value of t.
        if(t < minEle)
            document.write(minEle);
        else
            document.write(t);
    }
  
    // Remove the top element from MyStack
    function pop()
    {
        if (s.length == 0)
        {
            document.write("Stack is empty" + "</br>");
            return;
        }
  
        document.write("Top Most Element Removed: ");
        let t = s[s.length - 1];
        s.pop();
  
        // Minimum will change as the minimum element
        // of the stack is being removed.
        if (t < minEle)
        {
            document.write(minEle + "</br>");
            minEle = 2 * minEle - t;
        }
  
        else
            document.write(t + "</br>");
    }
  
    // Removes top element from MyStack
    function push(x)
    {
        // Insert new number into the stack
        if (s.length == 0)
        {
            minEle = x;
            s.push(x);
            document.write("Number Inserted: " + x + "</br>");
            return;
        }
  
        // If new number is less than minEle
        if (x < minEle)
        {
            s.push(2 * x - minEle);
            minEle = x;
        }
  
        else
            s.push(x);
  
        document.write("Number Inserted: " + x + "</br>");
    }
     
    push(3);
    push(5);
    getMin();
    push(7);
    push(19);
    getMin();
    pop();
    getMin();
    pop();
