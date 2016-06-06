function ClearBoard(){
	for (i=0; i<8; i++){
		for (j=0; j<8; j++){
			board[i][j] = 0;
		}
	}
}

function PaintCell(x, y, color){
	cell = document.getElementById("c"+x+y);
	cell.style.background = color;
}

function PaintHorseCell(x, y, color){
	cell = document.getElementById("c"+x+y);
	cell.style.background = color;
	cell.innerHTML  = "<img src='horse.gif'></img>";
}

function PaintBonusCell(x, y){
	cell = document.getElementById("c"+x+y);
	cell.innerHTML  = "<img src='bonus.gif'></img>";
}

function setBoard(){
	if (Level == 2) PaintLevel_2();
	if (Level == 3) PaintLevel_3();
	if (Level == 4) PaintLevel_4();
	if (Level == 5) PaintLevel_5();
	if (Level == 6) PaintLevel_6();
	// Level7 will be the same as Level1 but without bonus.
}

function Paint_Column(column){
	for (i=0; i<8; i++){
		board[column][i] = 1;
		PaintHorseCell(column, i, "orange");
	}
}
