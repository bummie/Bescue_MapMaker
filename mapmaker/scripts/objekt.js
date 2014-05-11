function Object( id, type, x, y, w, h, angle, power, color)
{
	this.id = id;
	this.type = type;
	this.x = x;
	this.y = -y;
	this.width = w * WORLD_BOX;
	this.height = h * WORLD_BOX;
	this.angle = (360 - angle);
	this.power = power;
	this.color = color;
}

Object.prototype.update = function(type, x, y, w, h, angle, power, color)
{
	this.type = type;
	this.x = x;
	this.y = -y;
	this.width = w * WORLD_BOX;
	this.height = h * WORLD_BOX;
	this.angle = (360 - angle);
	this.power = power;
	this.color = color;
}

Object.prototype.draw = function(c)
{
	if(c != null)
	{
		var dX = this.x - c.x;
		var dY = this.y - c.y;

		var dWidth = this.width / 0.1; 
		var dHeight = -(this.height / 0.1); 

		// Thank you "user1602942" at Stack_Overflow <3
		//Convert degrees to radian 
		var rad = this.angle * Math.PI / 180;
    	//Set the origin to the center of the image
    	gfx.translate(dX, dY);
    	gfx.rotate(rad);
    	
    	if(Bilder[this.type] != '')
    	{
    		gfx.drawImage(Bilder[this.type], dWidth / 2 * (-1), dHeight / 2 * (-1), dWidth, dHeight);
    	}else
    	{
			gfx.fillStyle = this.color;
    		gfx.fillRect( dWidth / 2 * (-1), dHeight / 2 * (-1), dWidth, dHeight);
    	}
    	
    	//Reset the canvas  
    	gfx.rotate(rad * ( -1 ) );
    	gfx.translate(dX * (-1), dY * (-1));
    	//ObjectCords
		if(ID_SELECTED == this.id){
    		gfx.fillStyle = 'green';
    	}else{
    		gfx.fillStyle = 'white';
    	}   
    	gfx.fillRect(dX, dY, 2, 2);


	}
}