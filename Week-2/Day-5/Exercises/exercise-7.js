const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let initials = [];

for (let i = 0; i < names.length; i++) {
  initials.push(names[i][0]);
}

const secretSociety = initials.sort().join("");

console.log(secretSociety); 