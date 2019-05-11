Inventory = function(){
    var self = {
        items:[] //{id:"itemId",amount:1}
    }
    self.addItem = function(id,amount){
		for(var i = 0 ; i < self.items.length; i++){
			if(self.items[i].id === id){
				self.items[i].amount += amount;
				self.refreshRender();
				return;
			}
		}
		self.items.push({id:id,amount:amount});
		self.refreshRender();
    }
    self.removeItem = function(id,amount){
		for(var i = 0 ; i < self.items.length; i++){
			if(self.items[i].id === id){
				self.items[i].amount -= amount;
				if(self.items[i].amount <= 0)
					self.items.splice(i,1);
				self.refreshRender();
				return;
			}
		}    
    }
    self.hasItem = function(id,amount){
		for(var i = 0 ; i < self.items.length; i++){
			if(self.items[i].id === id){
				return self.items[i].amount >= amount;
			}
		}  
		return false;
    }
    self.createButtonHTML = function(onclick, name, amount, imgName) {
        let img = "<img id=\"itemImg\" src=\"" + imgName + "\">";
        let str = "<button class=\"button\" id=\"invSlot\" onclick=\"" + onclick + "\">" + img + " x" + amount  + "</button><br>";
        return str;
    }
	self.refreshRender = function(){
		var str = "";
		for(var i = 0 ; i < self.items.length; i++){
			let item = Item.List[self.items[i].id];
			let onclick = "Item.List['" + item.id + "'].event()";
			str += self.createButtonHTML(onclick, item.name, self.items[i].amount, item.img);
		}

		document.getElementById("inventory").innerHTML = str;
	}


	return self;
}


Item = function(id, name, img, event){
	var self = {
		id:id,
		name:name,
        event:event,
        img:img
	}
	Item.List[self.id] = self;
	return self;
}
Item.List = {};

Item('key', "Key", "img/key1.png", function(){
    playerInventory.addItem('key', 1);
});