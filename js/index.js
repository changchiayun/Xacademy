Parse.initialize("kc3NvzE6o7SOUiMq5cO6i9z8JdZK2PhLphs40S6W", "b7bYbBATk7eX9GSo3UjqesG0zx0HCQEHayW7DoyJ");

var Title = Parse.Object.extend("Xnews");

var printing = function(){


var query = new Parse.Query(Title)
var collection = query.collection();
query.limit(3);
query.descending("createdAt")

collection.fetch({
  success: function(collection){
    collection.each(function(object){

      $(".newsroom").append("<div class='span4'><img class='img-circle' src="+object.get("photo")+"><h5 id="+object.id+">"+object.get("datepicker")+"</h5><h4 id="+object.id+">"+object.get("title")+"</h4><div>");
      
      console.log("catch"); 
    });
  },
  error: function(collection, error) {}
});


};







