const ALLOWED_NUMBERS: {[key: string]: string} = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
}


export function main(string: string) {
    const lines = string.split('\n');
    const trimmedLines = lines.map((str) => str.trim());

    let sum = 0;

    for (let i = 0; i < trimmedLines.length; i++) { // 01
        const line = trimmedLines[i];
        let earliestIndex = line.length - 1; // 1
        let earliestNumber = 0;
        let latestIndex = 0; // 0
        let latestNumber = 0;

        const numbers = [...Object.keys(ALLOWED_NUMBERS), ...Object.values(ALLOWED_NUMBERS)]

        numbers.forEach((number) => {
            const earliestNumberIndex = line.indexOf(number); // 1
            const latestNumberIndex = line.lastIndexOf(number); // 1

            if (earliestNumberIndex !== -1 && earliestNumberIndex <= earliestIndex) {
                earliestIndex = earliestNumberIndex;
                earliestNumber = Number(ALLOWED_NUMBERS[number]) || Number(number);
            }

            if (latestNumberIndex !== -1 && latestNumberIndex >= latestIndex) {
                latestIndex = latestNumberIndex;
                latestNumber = Number(ALLOWED_NUMBERS[number]) || Number(number);
            }
        })

        sum += earliestNumber * 10 + latestNumber;
    }

    return sum;
}

async function run() {
    const input = Bun.file("./input.txt");
    const inputContent = await input.text();

    console.log(main(inputContent));
}

run();
