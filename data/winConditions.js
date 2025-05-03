// @/data/winConditions.js
export const winConditions = {
  cash: 200,
  happiness: 80,
  health: 100,
  subjectsMastered: 3, // Covers completing 10 subjects and eligibility for senior backend job (requires 20)
  isDating: true,
  apartmentTier: "Luxury",
  possessions: 4,
};

export const hasWon = (player) => {
  const subjectsMastered = countMasteredSubjects(player);
  return (
    player.cash >= winConditions.cash &&
    player.happiness >= winConditions.happiness &&
    player.relationship.health >= winConditions.health &&
    subjectsMastered >= winConditions.subjectsMastered &&
    player.relationship.isDating === winConditions.isDating &&
    player.rental.apartmentTier === winConditions.apartmentTier &&
    player.possessions.length >= winConditions.possessions
  );
};

const countMasteredSubjects = (player) => {
  let subjectsMastered = 0;
  subjectsMastered += Object.values(player.hooksMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.nextJsMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.cssMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.pythonMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.javaScriptMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.typeScriptMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.expressMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.cSharpMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.reactNativeMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.javaMastered || {}).filter(
    (v) => v >= 1
  ).length;
  subjectsMastered += Object.values(player.cppMastered || {}).filter(
    (v) => v >= 1
  ).length;
  return subjectsMastered;
};
