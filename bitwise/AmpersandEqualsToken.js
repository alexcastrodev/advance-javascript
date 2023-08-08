// The &= operator is a bitwise AND assignment operator. It performs a bitwise AND operation between the left operand (in this case, len) and the right operand (in this case, 5), and then assigns the result back to the left operand (len).

// Let's break down the binary representation of the numbers involved:

// 25 in binary: 11001
// 5 in binary: 00101
// Performing a bitwise AND operation between 25 and 5:

// Let's break down the binary representation of the numbers involved:

// 25 in binary: 11001
// 5 in binary:  00101

let len = 25
len &= 5

//   11001
// & 00101
// ---------
//   00001

len // 1

// The result of the bitwise AND operation is 00001, which is 1 in decimal.
// So, after the operation, the value of len is updated to 1.