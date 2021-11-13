# Spiral Matrix
*Medium*

Given an m x n matrix, return all elements of the matrix in spiral order.
 

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

**Example 2:**

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 
 **Example 3:**
 
 Input: matrix = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,36]]
 Output: [1,2,3,4,5,6,12,18,24,30,36,35,34,33,32,31,25,19,13,7,8,9,10,11,17,23,29,28,27,26,20,14,15,16,22,21]

*Constraints:*

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100
