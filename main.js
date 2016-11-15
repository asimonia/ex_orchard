let orchard = document.getElementById("orchard");


let Plant = function() {
	this.height = null;
	this.branches = null;
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
	this.height += growth;
};

Tree.prototype.trim = function(growth) {
	this.height -= growth;
	this.branches -= 1;
};


// Each time the height of a tree increases by 10, the value of branch should increase by one.

var counter = 0;

var PearTree = new Tree();
var OakTree = new Tree();


window.setInterval(function() {
	if (counter % 10 === 0 && counter !== 0) {
		OakTree.trim(4);
		PearTree.trim(2);
	}

	if (counter === 30) {
		clearInterval();
	}
	counter += 1;
	OakTree.grow(4);
	PearTree.grow(2);
	orchard.innerHTML += `<p>Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches.`;
	orchard.innerHTML += `Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches.</p>`;
}, 1000);