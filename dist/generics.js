"use strict";
//This is the function that returns last element.
function lastFn(array) {
    return array[array.length - 1];
}
//This is the function that adds item at the begining.
function prependFn(array, item) {
    return [item, ...array];
}
