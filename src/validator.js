/**
 * Card Swap Validator
 *
 * Checks whether a current arrangement can become
 * the expected arrangement using at most one swap.
 */

/**
 * Validates if an arrangement can be fixed with one swap.
 *
 * @param {string} currentArrangement - Current sequence
 * @param {string} targetArrangement - Desired sequence
 * @returns {boolean} - Whether transformation is possible
 */
function validateArrangement(currentArrangement, targetArrangement = "abc") {
    let mismatchedPositions = 0;

    for (let index = 0; index < currentArrangement.length; index++) {
        if (currentArrangement[index] !== targetArrangement[index]) {
            mismatchedPositions++;
        }
    }

    // A single swap can fix exactly two wrong positions.
    // Zero differences means it is already valid.
    return (
        mismatchedPositions === 0 ||
        mismatchedPositions === 2
    );
}


// Example usage
const arrangement = "acb";

const isValid = validateArrangement(arrangement);

console.log(
    isValid
        ? "Valid arrangement"
        : "Invalid arrangement"
);
