// 1a. UPDATE/ADD key-value pairs
function greenEnergy(obj){
    obj['Fuel Type'] = 'avocado oil';
}
function remotelyDisable(obj){
    obj.disabled = true;
}
// 1b. REASSIGN the whole object
function reassign(obj){
    obj = {changed:true, name:'NEW OBJECT'};
}
// 1c. REASSIGN the whole object and RETURN
function reassign_and_return(obj){
    obj = {changed:true, name:'NEW OBJECT'};
    return obj;
}


// MAIN FUNCTION
let spaceship = {'Fuel Type' : 'Turbo Fuel', homePlanet : 'Earth'};

console.log('1) Updating/adding key-value pairs !! CHANGES !! the object');
greenEnergy(spaceship);
console.log(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

console.log('\n2) Reassigning the object (without returning it) !! DOES NOT !! change the object');
reassign(spaceship);
console.log(spaceship);

console.log('\n3) Reassigning the object and returning it !! CHANGES !! the object');
spaceship = reassign_and_return(spaceship);
console.log(spaceship);


