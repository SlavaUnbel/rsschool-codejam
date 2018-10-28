function make(...arguments) {
    const argumentsToWorkWith = [];

    return function innerFunction(...arguments) {
        const firstArg = arguments[0];

        if (typeof firstArg === 'function') {
            return argumentsToWorkWith.reduce(firstArg, 0);
        } else {
            argumentsToWorkWith.push(...arguments);
            return innerFunction;
        }
    
        function sum(a, b) {
            return a + b;
        }
    }
}
make(15)(34, 21, 666)(41)(sum);