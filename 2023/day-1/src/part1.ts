export function main(string: string): number {
    const lines = string.split('\n');
    const trimmedLines = lines.map((str) => str.trim());
    let sum = 0;

    for (let i = 0; i < trimmedLines.length; i++) {
        const line = trimmedLines[i];
        let firstNumber: number | null = null;
        let lastNumber: number | null = null;
        for (let j = 0; j < line.length; j++) {
            if (!isNaN(Number(line[j])) && firstNumber === null) {
                firstNumber = Number(line[j]);
            }

            if (!isNaN(Number(line[line.length - j - 1])) && lastNumber === null) {
                lastNumber = Number(line[line.length - j - 1]);
            }
        }

        if (firstNumber !== null && lastNumber !== null) {
            sum += firstNumber * 10 + lastNumber;
        }
    }

    return sum;
}

async function run() {
    const input = Bun.file("./input.txt");
    const inputContent = await input.text();

    console.log(main(inputContent));
}

run();
