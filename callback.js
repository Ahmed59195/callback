"use strict";
function parentFunction(func) {
    console.log("I'm the parent function");
    func();
}
function childFunction() {
    console.log("I'm the child function");
}
parentFunction(childFunction);
