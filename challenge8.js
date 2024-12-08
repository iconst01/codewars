//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)
// total number of bullets needed: neededBullets = 2 * dragons.
// Check if the number of bullets is greater than or equal to neededBullets.
// Return true if the hero can survive or return false if he dies .

function hero(bullets, dragons) {
  const neededBullets = 2 * dragons;
  return bullets >= neededBullets;
}
console.log(hero(3, 5));
