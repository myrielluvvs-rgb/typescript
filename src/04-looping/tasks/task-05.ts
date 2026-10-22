/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const score = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];
let scoreTotal : number = 0;
let gold : number = 0;
let silver : number = 0;
let bronze : number = 0;
let noMedal : number = 0;

for (let i: number = 0; i < score.length; i++) {
    const currentScores: number = score [i];

    scoreTotal += currentScores

    if (score[i] >= 95) {
        gold++
    }
    if (score[i] >= 85){
        silver++
    }
    if (score[i] >=75){
        bronze++
    }
    else {
        noMedal++
    }
}

const averageScore: number = scoreTotal / score.length
console.log(`${gold} Gold Medal winners`)
console.log(`${silver} Silver Medal winners`)
console.log(`${bronze} Bronze Medal winners`)
console.log(`${noMedal} no Medal winners`)
console.log (`Average Scores = ${averageScore}`)