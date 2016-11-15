let orchard = document.getElementById("orchard");


let Plant = function() {
	this.height = null;
	this.branches = null;
	this.counter = null;
};

let Tree = function() {
	this.branches = 1;
};

Tree.prototype = new Plant();

Plant.prototype.increaseHeight = function (growth) {
	this.height += growth;
};

Plant.prototype.decreaseHeight = function (growth) {
	this.height -= growth;
};

Tree.prototype.grow = function(growth) {
	this.increaseHeight(growth);
	this.counter += growth;

	while(this.counter >= 10) {
		this.counter -= 10;
		this.branches++;
	}
};

Tree.prototype.trim = function(growth) {
	this.decreaseHeight(growth);
	this.branches--;
};


// Each time the height of a tree increases by 10, the value of branch should increase by one.

var counter = 0;

var PearTree = new Tree();
var OakTree = new Tree();


let orchardTimer = setInterval(function() {

	if (counter % 10 === 0 && counter != 0) {
		OakTree.trim(3);
		PearTree.trim(1);
	} else {
		OakTree.grow(4);
		PearTree.grow(2);
	}

	counter ++;

	if (counter === 30) {
		clearInterval(orchardTimer);
	}
	
	orchard.innerHTML += `<p>${counter}: Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches.`;
	orchard.innerHTML += `Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches.</p>`;
}, 100);
