Inventory = function(){
    var self = {
        items:[], //{id:"itemId",amount:1}
        selected:-1,
    }

    self.addItem = function(id){
		for(var i = 0 ; i < self.items.length; i++){
			if(self.items[i].id === id){
				self.refreshRender();
				return;
			}
		}
        self.items.push({id:id});
		self.refreshRender();
    }

    self.removeItem = function(id){
		for(var i = 0 ; i < self.items.length; i++){
			if(self.items[i].id === id){
                if (self.selected == i)
                    self.selected = -1;
                else if (self.selected > i)
                    self.selected--;
				self.items.splice(i,1);
				self.refreshRender();
				return;
			}
		}
    }

    self.hasItem = function(id){
		for(var i = 0 ; i < self.items.length; i++){
			if(self.items[i].id === id){
				return true;
			}
		}
		return false;
    }

    self.toggleItem = function(id) {
        if (self.hasItem(id))
            self.removeItem(id)
        else
            self.addItem(id)
    }

    // Check if an item id is selected
    self.isSelected = function(id){
        for(var i = 0 ; i < self.items.length; i++){
			if(self.items[i].id === id && self.selected == i){
                return true;
			}
		}
        return false;
    }

    // get selected id
    self.getSelected = function() {
        for(var i = 0 ; i < self.items.length; i++){
			if(self.selected == i){
                return self.items[i].id;
			}
		}
        return undefined;
    }

    // select a given item by id
    self.select = function(id) {
        for(var i = 0 ; i < self.items.length; i++){
			if(self.items[i].id === id){
				self.selected = i;
			}
        }
        // console.log(self.selected)
        self.refreshRender();
    }

    // unselects everything
    self.unselect = function() {
        self.selected = -1;
        self.refreshRender()
    }

    // toggles whether an item is selected
    self.toggleSelect = function(id) {
        if (self.isSelected(id))
            self.unselect()
        else
            self.select(id)
    }

    self.createButtonHTML = function(onclick, id, imgName, name) {
        let img = "<img id=\"itemImg\" src=\"" + imgName + "\">";
        let str = "<button onclick=\""+ onclick + "\" class=\"invSlot\" id=\"" + id + "\" > " + img + " <br> " + name + " </button> ";
        // str = "<div class=\"invSlot\" id=\"" + id + "\">" + str + " </div>"
        return str;
    }
	self.refreshRender = function(){
        var str = "";
		for(var i = 0 ; i < self.items.length; i++){
			let item = Item.List[self.items[i].id];
			let onclick = "Item.List['" + item.id + "'].event()";
			str += self.createButtonHTML(onclick, item.id, item.img, item.name);
		}

        document.getElementById("inventory").innerHTML = str;

        let selected = self.getSelected();
        // console.log(selected)
        if (selected !== undefined) {
            document.getElementById(selected).style.backgroundColor = "#888888";
        }
        if (selected === "book")
            showRRR();
        else if (selected === "check")
            showCheck();
        else if (selected === "scrap")
            showHint();
        else
            hideInstructions(); 

	}


	return self;
}


Item = function(id, name, img, event){
	var self = {
		id:id,
		name:name,
        event:event,
        img:img,
        selected:false
	}
	Item.List[self.id] = self;
	return self;
}
Item.List = {};

Item('key', "Key", "img/key1.png", function(){
    console.log("key clicked");
    playerInventory.toggleSelect('key');
});

Item('fuse', "Fuse", "img/light-bulb.png", function(){
    console.log("fuse clicked");
    playerInventory.toggleSelect('fuse');
});

Item('prox', "Keycard", "img/prox1.png", function(){
    console.log("prox clicked");
    playerInventory.toggleSelect('prox');
});

Item('book', "Book", "img/book.png", function(){
    console.log("book clicked");
    playerInventory.toggleSelect('book');
});
Item('check', "Check", "img/check.png", function(){
    console.log("check clicked");
    playerInventory.toggleSelect('check');
});

Item('scrap', "Scrap", "img/scrap2.png", function(){
    console.log("scrap clicked");
    playerInventory.toggleSelect('scrap');
});