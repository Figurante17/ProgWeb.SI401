
var controller = true;
var controllerTableTop = true;

function gntStringTable(dim){
	var stringTable="<table class='tableField'>";
	
	for(i=0;i<dim;i++)
	{
		stringTable+="<tr>";
		for(z=0;z<dim;z++)
		{
			//stringTable+="<td onclick='unlock("+i+","+z+")'class='fieldLocked' id='x"+i+"y"+z+"'>a</td>";
			var tagTdOpen = "<td onclick='unlock("+i+","+z+")'class='fieldLocked' id='x"+i+"y"+z+"'>&#x1f388";
			var tagTdClose = "</td>";
			var tagImg = "<p alt='Bomb' class='imgLocked' id='imgx"+i+"y"+z+"'>&#x1f921</p>";
			stringTable+=tagTdOpen+tagImg+tagTdClose;
		}
		stringTable+="</tr>";
	}
	stringTable+="</table>";
	return stringTable;
}

function firstSettings(){
	//alert("ola"+gntStringTable(10));
	document.getElementById("idGameBoard").innerHTML=gntStringTable(10);
}

function getNearBomb(i,z)
{
	var nBombs=0;
	if(i+1<dimension)
	{
		if(fieldMap[i+1][z]==-1)
			nBombs++;
		if(z+1<dimension)
		{
			if(fieldMap[i+1][z+1]==-1)
				nBombs++;
		}
		if(z-1>-1)
		{
			if(fieldMap[i+1][z-1]==-1)
				nBombs++;
		}
	}
	if(i-1>-1)
	{
		if(fieldMap[i-1][z]==-1)
			nBombs++;
		if(z+1<dimension)
		{
			if(fieldMap[i-1][z+1]==-1)
				nBombs++;
		}
		if(z-1>-1)
		{
			if(fieldMap[i-1][z-1]==-1)
				nBombs++;
		}
	}
	if(z+1<dimension)
	{
		if(fieldMap[i][z+1]==-1)
			nBombs++;
	}
	if(z-1>-1)
	{
		if(fieldMap[i][z-1]==-1)
			nBombs++;
	}
	
	return nBombs;
}

function showAll()
{
if(controllerTableTop == true){
		for(var i=0;i<dimension;i++)
		{	
			for(var z=0;z<dimension;z++)
			{
				if(fieldMap[i][z] !=-1)
				{
					unlockAll(i,z);
				}
			}
		}
		document.getElementById("showAll").value = "  ";
		controllerTableTop = false;
	}else{
		for(var i=0;i<dimension;i++)
		{	
			for(var z=0;z<dimension;z++)
			{
				if(fieldMap[i][z] !=-1)
				{
					unlockAll(i,z);
				}
			}
		}
		document.getElementById("showAll").value = "  ";
		controllerTableTop = true;
	}
}


function showAllBombs()
{
	for(var i=0;i<dimension;i++)
	{	
		for(var z=0;z<dimension;z++)
		{
			if(fieldMap[i][z]==-1)
			{
				document.getElementById("x"+i+"y"+z).classList.add('fieldOpenned');
				document.getElementById("x"+i+"y"+z).classList.remove('fieldLocked');
				document.getElementById("imgx"+i+"y"+z).classList.add('imgOpenned');
				document.getElementById("imgx"+i+"y"+z).classList.remove('imgLocked');
			}
		}
	}
}

function occulteAllBombs()
{
	for(var i=0;i<dimension;i++)
	{	
		for(var z=0;z<dimension;z++)
		{
			if(fieldMap[i][z]==-1)
			{
				document.getElementById("x"+i+"y"+z).classList.remove('fieldOpenned');
				document.getElementById("x"+i+"y"+z).classList.add('fieldLocked');
				document.getElementById("imgx"+i+"y"+z).classList.remove('imgOpenned');
				document.getElementById("imgx"+i+"y"+z).classList.add('imgLocked');
			}
		}
	}
}

function showOcculteBombs()
{
	if (controller == true){
		controller = false;
		showAllBombs();
		document.getElementById("showOcculteBombs").value = "  ";
	}else{
		controller = true;
		occulteAllBombs();
		document.getElementById("showOcculteBombs").value = "  ";
	}
}

strRanking=new Array();
function sendToRanking()
{
	//alert("oi2");
	strFinal="";
	for(var i=strRanking.length-1;i>-1;i--)
	{
		//alert(strRanking[i]);
		strFinal += strRanking[i];
	}
	document.getElementById("divRanking").innerHTML=strFinal;
}

function finishGame(result)
{
	//alert("oi1");
	var strGameProperties="<br><br>";
        var duration = (Date.now() - aberturaPagina)/1000;
	
	var duration = parseFloat(duration .toFixed(2));

	//alert(duration);
	strGameProperties+=playerName+"<br>"+dimension+ " -- "+ nBombs+" -- "+ duration+" -- "+ nFieldsOpen+" -- "+result;
	strRanking.push(strGameProperties);
	sendToRanking();
	
	
	document.getElementById("btnStart").disabled = true;
	document.getElementById("divGameContainer").style.opacity = 0.7;
	document.getElementById("btnRestart").style.visibility = "visible";
	document.getElementById("imagemFim").style.visibility = "visible";
	
	
	if(result=='D')
	{
		showAllBombs();
	}
	else if(result=='V')
	{	
	}
}
nFieldsOpen=0;
function unlock(i,z)
{
	document.getElementById("x"+i+"y"+z).classList.add('fieldOpenned');
	document.getElementById("x"+i+"y"+z).classList.remove('fieldLocked');
	
	if(fieldMap[i][z]!=-1)
	{
		nFieldsOpen++;
		if((Number(nFieldsOpen)+Number(nBombs))==(dimension*dimension))
		{
			finishGame('V');
		}
	
		var nearBomb = getNearBomb(i,z);
		document.getElementById("x"+i+"y"+z).innerHTML=nearBomb;
		fieldMap[i][z]=nearBomb;
		
		if(nearBomb==0)
		{
			if(i+1<dimension)
			{
				if(fieldMap[i+1][z]==null)
				{	
					unlock(i+1,z);
				}
				if(z+1<dimension)
				{
					if(fieldMap[i+1][z+1]==null)
						unlock(i+1,z+1);
				}
				if(z-1>-1)
				{
					if(fieldMap[i+1][z-1]==null)
						unlock(i+1,z-1);
				}
			}
			if(i-1>-1)
			{
				if(fieldMap[i-1][z]==null)
					unlock(i-1,z);
				if(z+1<dimension)
				{
					if(fieldMap[i-1][z+1]==null)
						unlock(i-1,z+1);
				}
				if(z-1>-1)
				{
					if(fieldMap[i-1][z-1]==null)
						unlock(i-1,z-1);
				}
			}
			if(z+1<dimension)
			{
				if(fieldMap[i][z+1]==null)
					unlock(i,z+1);
			}
			if(z-1>-1)
			{
				if(fieldMap[i][z-1]==null)
					unlock(i,z-1);
			}
		
		}
	}
	else
	{
		finishGame('D');
	}
    
}

function unlockAll(i,z)
{
	if(controllerTableTop == true){
				var nearBomb = getNearBomb(i,z);
				document.getElementById("x"+i+"y"+z).innerHTML=nearBomb;
		}else{
			if(document.getElementById("x"+i+"y"+z).className != "fieldOpenned"){
			//nFieldsOpen--;
			fieldMap[i][z]= null;
			var tagTdOpen = "<td onclick='unlock("+i+","+z+")'class='fieldLocked' id='x"+i+"y"+z+"'>";
			var tagTdClose = "</td>";
			var tagImg = "<img src='http://pngimg.com/uploads/bomb/bomb_PNG5.png' alt='Bomb' class='imgLocked' id='imgx"+i+"y"+z+"'";	
			document.getElementById("x"+i+"y"+z).innerHTML = tagTdOpen+tagImg+tagTdClose;
			} 
		}
}

function restartGame(){
	controller = true;
	controllerTableTop = true;
	document.getElementById("btnStart").disabled = false;
	document.getElementById("divLeft").style.opacity = 1;
	document.getElementById("divRight").style.opacity = 0.7;
	document.getElementById("divGameContainer").style.opacity = 1;
	document.getElementById("btnRestart").style.visibility = "hidden";
	document.getElementById("imagemFim").style.visibility = "hidden";
	document.getElementById("divRight").style.pointerEvents = "none";
	document.getElementById("showOcculteBombs").value = "Exibir";
	document.getElementById("showAll").value = "Exibir";
	
	nFieldsOpen=0;
	document.getElementById("idGameBoard").innerHTML=gntStringTable(dimension);
}
var aberturaPagina;
function startGame(){
	
	//alert(aberturaPagina);
   	
	var settings=true;
	aberturaPagina =  Date.now();
	playerName = document.getElementById('nameInput').value;
	dimension = document.getElementById('dimensionInput').value; //Global
	nBombs = document.getElementById('numberBombsInput').value;	//Global
	
	document.getElementById('nameInput').style.color="#555";
	document.getElementById('dimensionInput').style.color="#555";
	document.getElementById('numberBombsInput').style.color="#555";
	
	
	if(!playerName.match(/\S/))
	{
		document.getElementById('nameInput').style.color="red";
		settings=false;
	}
	if((dimension<3)||(dimension>20))
	{
		document.getElementById('dimensionInput').style.color="red";
		settings=false;
	}
	if((nBombs<1)||(nBombs>(dimension*dimension)))
	{
		document.getElementById('numberBombsInput').style.color="red";
		settings=false;
	}
	
	if(settings==true)
	{
		fieldMap=new Array(dimension);
		for(var i=0;i<dimension;i++)
		{
			fieldMap[i]=new Array(dimension);
			fieldMap[i][0]=null;
			//Por que fieldMap[i][0]=dimension e não inicializa com =null ?
		}
		document.getElementById("idGameBoard").innerHTML=gntStringTable(dimension);
		
		for(var i=0;i<nBombs;i++)
		{
			var x=Math.floor((Math.random() * (dimension-1)));
			var y=Math.floor((Math.random() * (dimension-1)));
			
			if(fieldMap[x][y]!=-1)
			{
				fieldMap[x][y]=-1;
				
				//alert(x+" "+y);
			}
			else
			{
				i--;
			}
		}
		
		document.getElementById("btnStart").disabled = true;
		document.getElementById("divLeft").style.opacity = 0.7;
		document.getElementById("divRight").style.opacity = 1;
		document.getElementById("divRight").style.pointerEvents = "all";

	}
}
/* Sons */
function audio(musica){
    var musica=document.getElementById("musica");
    setTimeout("musica.play()", 0);
}




