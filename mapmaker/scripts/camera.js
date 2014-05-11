function Camera(x, y, w, h)
{
	this.x = x;
	this.y = -y;
	this.zoom = 1;
	this.width = w;
	this.height = h;
}

Camera.prototype.setPos = function(x, y)
{
	this.x = x;
	this.y = -y;
}

Camera.prototype.draw = function()
{
	if(Objekter != null && Objekter.length > 0)
	{
		for (var i = 0; i < Objekter.length; i++)
		{
			if(Objekter[i] != null)
			{
				Objekter[i].draw(this);
			}
		}
	}
}