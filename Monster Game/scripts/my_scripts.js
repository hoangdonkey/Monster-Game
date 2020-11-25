$(document).ready(function(){

	var headclix = 0, eyeclix = 0,
	noseclix = 0, mouthclix = 0;

			lightning_one();
			lightning_two();
			lightning_three();

			$("#head").click(function(){
				if(headclix < 9){
					$("#head").animate({left:"-=367px"},500);
					headclix+=1;
				}
				else{
					$("#head").animate({left:"0px"}, 500);
					headclix = 0;
				}
			});
})