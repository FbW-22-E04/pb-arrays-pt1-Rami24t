euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);
secondCity = euroCities[1];
console.log(secondCity);

euroCities[0]="Berlin";
console.log(euroCities);

console.log(euroCities.length);
euroCities.pop();
console.log(euroCities);

euroCities.push("Budapest");
console.log(euroCities);

asianCities = ["Shanghai", "Beijing", "Shenzhen", "Guangzhou", "Chengdu"];
console.log(asianCities);

 worldCities = [...euroCities, ...asianCities];
 console.log(worldCities);

console.log(worldCities.reverse());
