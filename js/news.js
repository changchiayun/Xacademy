Parse.initialize("kc3NvzE6o7SOUiMq5cO6i9z8JdZK2PhLphs40S6W", "b7bYbBATk7eX9GSo3UjqesG0zx0HCQEHayW7DoyJ");

var Title = Parse.Object.extend("Xnews");
var printing = function(){
	$(".newsroom").empty();

	var query = new Parse.Query(Title)
	var collection = query.collection();
	//query.limit(3);
	query.descending("createdAt")

	collection.fetch({
	  success: function(collection){
	    collection.each(function(object){

	      $(".newsroom").append("<div id="+object.id+" class='span3'><img class='img-circle nail' src="+object.get("photo")+"><h5>"+object.get("datepicker")+"</h5><h4>"+object.get("title")+"</h4></div>");
	      $("#"+object.id).on("click", removeCell);
	    });
	  },
	  error: function(collection, error) {}
	});


};



var removeCell = function(){
	var oid = this.id;
	console.log(oid);
	$(".newsroom").empty();

	var Title = Parse.Object.extend("Xnews");
	var query = new Parse.Query(Title);
	query.equalTo("objectId", oid);
	query.first({
	success: function(object) {
	$(".newsroom").append("<div><img class='bigNail span4' src="+object.get("photo")+"><h5 class='span6 offset1'>"+object.get("datepicker")+"</h5><h4  class='span6 offset1'>"+object.get("title")+"</h4><pre class='span6 offset1'>"+object.get("content")+"</pre></div>");
	$(".newsroom").append("<a class='btn' href='javascript:printing()'>BACK</a>");
	},
	error: function(error) {
	alert("Error: " + error.code + " " + error.message);
	}
	});

}
	




