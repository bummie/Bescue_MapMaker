var OBJ_LISTE = new Array();

// Liste over spillobjekter
OBJ_LISTE[0] = ['Player', 'player.png'];
OBJ_LISTE[1] = ['Spikes', 'spikes.png'];
OBJ_LISTE[2] = ['Ground', ''];
OBJ_LISTE[3] = ['Spring', 'spring_down.png'];
OBJ_LISTE[4] = ['Goal', ''];
OBJ_LISTE[5] = ['Coin', 'coins.png'];
OBJ_LISTE[6] = ['Shield', 'shield.png'];
OBJ_LISTE[7] = ['Box', 'crate.png'];


function objekterListe()
{
	var selected = false;
	document.write('Type: <select id="obj_type" name="type_objekt" size="1" onchange="updateObject(-1)">');
		for (var i = 0; i < OBJ_LISTE.length; i++)
		{
			if(!selected)
			{
				document.write('<option selected="selected" value="'+ OBJ_LISTE[i][0].toLowerCase() +'">'+ OBJ_LISTE[i][0] +'</option>');
				selected = true;
			}else
			{
				document.write('<option value="'+ OBJ_LISTE[i][0].toLowerCase() +'">'+ OBJ_LISTE[i][0] +'</option>');
			}
		};
	document.write('</select>');
}