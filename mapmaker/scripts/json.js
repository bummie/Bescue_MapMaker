// Les og skriv til JSONformatet
function JSONHandler(){}

JSONHandler.prototype.toJSON = function()
{
	if(Objekter != null && Objekter.length > 0)
	{
		var map_name = document.getElementById("map_name");
		var map_creator = document.getElementById("map_creator");
		var map_difficulty = document.getElementById("map_diff");
		if(map_name.value != '' && map_creator.value != '' && map_difficulty != '')
		{	
			var mObjects = {};
			mObjects['map_name'] = map_name.value;
			mObjects['map_creator'] = map_creator.value;
			mObjects['map_difficulty'] = map_difficulty.value;
			mObjects['map_created'] = (new Date().getUTCDate() + "." + (new Date().getUTCMonth() + 1) + "." + new Date().getUTCFullYear());
			mObjects['map_objects'] = []; 
			for (var i = 0; i < Objekter.length; i++)
			{
				if(Objekter[i] != null)
				{
					var objs = {};
					objs = Objekter[i];
					mObjects['map_objects'].push(objs);
				}
			};
				var jsons = JSON.stringify(mObjects);
				console.log(jsons);		
	
				var blob = new Blob([jsons], {type: "application/json"});
				var url  = URL.createObjectURL(blob);
				console.log(url);
				
				var a = document.createElement('a');
				a.download    = map_name.value + ".json";
				a.href        = url;
				a.textContent = "Download";
				document.getElementById('download').replaceChild(a, document.getElementById('download').childNodes[0]);
    	}else
    	{
    		alert("["+app_name+"]: Map information can not be null");
    	}
    }
}

JSONHandler.prototype.loadJSON = function(json)
{
	if(json != null)
	{
		Objekter = new Array();
		var map_name = document.getElementById("map_name");
		var map_creator = document.getElementById("map_creator");
		var map_difficulty = document.getElementById("map_diff");
		var objID = document.getElementById("obj_id");


		map_name.value = json.map_name;
		map_creator.value = json.map_creator;
		map_difficulty.value = json.map_difficulty;

		for (var i = 0; i < json.map_objects.length; i++) {
			var ob = json.map_objects[i];
			Objekter.push(new Object( i, ob.type, ob.x, -ob.y, ob.width * BOX_WORLD, ob.height * BOX_WORLD,  (360 - ob.angle), ob.power, ob.color));
			objID.value = i;
			ID_SELECTED = i;
		};
		updateIdList();
	}
}
