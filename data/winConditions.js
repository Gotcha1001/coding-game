// @/data/winConditions.js
export const getWinConditions = (difficulty) => {
  const baseConditions = {
    easy: {
      cash: 150,
      happiness: 70,
      health: 90,
      subjectsMastered: 2,
      isDating: true,
      apartmentTier: "Standard",
      possessions: 5,
    },
    medium: {
      cash: 200,
      happiness: 80,
      health: 100,
      subjectsMastered: 20,
      isDating: true,
      apartmentTier: "Luxury",
      possessions: 10,
    },
    hard: {
      cash: 300000,
      happiness: 90,
      health: 100,
      subjectsMastered: 30,
      isDating: true,
      apartmentTier: "Luxury",
      possessions: 20,
    },
  };

  return baseConditions[difficulty] || baseConditions.medium;
};

export const hasWon = (player) => {
  const winConditions = getWinConditions(player.difficulty);
  const subjectsMastered = countMasteredSubjects(player);

  // Debug log to check apartment tier comparison
  console.log("Player apartment tier:", player.rental.apartmentTier);
  console.log("Required apartment tier:", winConditions.apartmentTier);

  const tiers = ["Basic", "Standard", "Luxury"];
  const playerTierIndex = tiers.indexOf(player.rental.apartmentTier);
  const requiredTierIndex = tiers.indexOf(winConditions.apartmentTier);
  const apartmentTierMet = playerTierIndex >= requiredTierIndex;

  console.log("Apartment tier comparison:", {
    playerTierIndex,
    requiredTierIndex,
    apartmentTierMet,
  });

  return (
    player.cash >= winConditions.cash &&
    player.happiness >= winConditions.happiness &&
    player.relationship.health >= winConditions.health &&
    subjectsMastered >= winConditions.subjectsMastered &&
    player.relationship.isDating === winConditions.isDating &&
    apartmentTierMet &&
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
