const instructions = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
];

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
       const times = getTimes(arr);

       return generateOutput(arr, times);
    }
    throw new Error();
};

function getTimes(arr) {
    const times = arr.map(() => 0);
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (instructions.includes(el)) {
            const [_, op, dir] = el.match(/--(.*)-(.*)/);

            const t = op === 'discard' ? -1 : 1;

            if (dir === 'next' && i < arr.length - 1) {
                times[i + 1] += t;
            }

            if (dir === 'prev' && i > 0) {
                if (times[i - 1] >= 0) times[i - 1] += t;
            }

            times[i] = -1;
        }
        if (times[i] >= 0) times[i] += 1;
    }
    return times;
}

function generateOutput(arr, times) {
    const output = [];
    for (let i = 0; i < times.length; i++) {
        const time = times[i];

        if (time > 0) {
            for (let j = 0; j < time; j++) output.push(arr[i]);
        }
    }

    return output;
}
