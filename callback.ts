function parentFunction(func: () => void) {
    console.log("I'm the parent function");
    func();
}

function childFunction() {
    console.log("I'm the child function");
}

parentFunction(childFunction);