const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Keys, values, entries (items)
const robotKeys = Object.keys(robot);
console.log(robotKeys);
const robotValues = Object.values(robot);
console.log(robotValues);
const robotEntries = Object.entries(robot);
console.log(robotEntries);
console.log('\n');

// Assign (1st argument CHANGES, while the 2nd one does NOT change)
let tempRobot = {laserBlaster : true, voiceRecognition: true};
const newRobot = Object.assign(tempRobot, robot);
console.log(newRobot);
console.log('\n----> robot remains unchanged (it is the 2nd argument of assign) <----\n');
console.log(robot)
