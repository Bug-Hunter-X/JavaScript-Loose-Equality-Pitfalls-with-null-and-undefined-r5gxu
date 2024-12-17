# JavaScript Loose Equality Pitfalls with null and undefined
This repository demonstrates a common error in JavaScript stemming from the loose equality operator (==) when dealing with null and undefined values.

The `bug.js` file contains code that uses loose equality to check for null. This leads to unexpected results when the input is undefined. The `bugSolution.js` file provides a corrected version using strict equality (===).

## Understanding the Problem
JavaScript's loose equality (==) performs type coercion before comparison. While null == null is true, null == undefined is also true, which can be problematic if you need to distinguish between these two values.

## Solution
Using strict equality (===) avoids type coercion, providing a more accurate and predictable comparison.  This ensures that null is only equal to null, and undefined is only equal to undefined.