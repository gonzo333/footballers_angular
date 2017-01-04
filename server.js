var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/footballerList", function(req, res){
	console.log("I receive a GET request");

	footballer1 ={
		name: "Robert Lewandowski",
		club: "Bayern Munich",
		notionality:"Poland"
	};

	footballer2 ={
		name: "Cristiano Ronaldo",
		club: "Real Madrit",
		notionality:"Portugal"
	};

	footballer3 = {
		name: "Leo Messi",
		club: "Barcelona",
		notionality:"Argentina"	
	}

	var footballerList = [footballer1, footballer2, footballer3];
	res.json(footballerList);

});
app.listen(3000)

console.log("Server running on port 3000");