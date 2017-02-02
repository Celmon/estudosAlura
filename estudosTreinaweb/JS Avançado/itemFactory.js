function ItemMaker (){};

ItemMaker.prototype.getDescription = function(){
	console.log(this.name);
	console.log(this.price);
	console.log(this.description);
}

ItemMaker.factory = function(type){
	var item;

	if(typeof ItemMaker[type] !== 'function'){
		throw new Error(type.concat(' não existe'));
	}

	if(typeof ItemMaker[type].prototype.getDescription !== 'function'){
		ItemMaker[type].prototype = new ItemMaker();
	}

	item = new ItemMaker[type]();

	return item;
}

ItemMaker.LongSword = function(){
	this.name = 'LongSword';
	this.price = 1000;
	this.description = 'LongSword description';
}

ItemMaker.Bow = function(){
	this.name = 'Bow';
	this.price = 500;
	this.description = 'Bow description';
}