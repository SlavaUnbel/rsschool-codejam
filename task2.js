function make(...arguments) {
    const argumentsToWorkWith = [...arguments];

    return function innerFunction(...innerArguments) {
        const firstArg = innerArguments[0];

        if (typeof firstArg === 'function') {
            return argumentsToWorkWith.reduce(firstArg, 0);
        } else {
            argumentsToWorkWith.push(...innerArguments);
            return innerFunction;
        }
    }
}

function sum(a, b) {
    return a + b;
}