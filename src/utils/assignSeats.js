export function assignSeats(seatsToAssign, votesPerParty) {
    let divisors = Array(votesPerParty.length).fill(1);
    let seatsAllocated = Array(votesPerParty.length).fill(0);
    let seatsAssigned = 0;

    const getMax = array => Math.max(...array);
    const findIndex = array => value => array.indexOf(value);

    allocateRecursive();

    return seatsAllocated;

    // ****************************************************

    function allocateRecursive() {
        if (seatsAssigned >= seatsToAssign) {
            return seatsAllocated;
        }

        const votesDivided = votesPerParty.map(
            (votes, i) => votes / divisors[i]
        );

        const indexMax = findIndex(votesDivided)(getMax(votesDivided));

        divisors[indexMax] += 1;
        seatsAllocated[indexMax] += 1;
        seatsAssigned += 1;

        allocateRecursive();
    }
}
