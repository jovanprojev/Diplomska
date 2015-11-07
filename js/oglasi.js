Parse.initialize("byR5XyYU1jpRIJKiBbxKcE5T3vxF97p2tqCSpc8Q", "cPVB8GgClmkvsXnkWPiQPbyTuHBOmZ0nQ4cYMMHJ"); //("Application ID"  , "Javascript Key");
function Oglas(oglas){
	this.objectId = oglas.objectId;
	this.email = oglas.email;
	this.objavuvach = oglas.objavuvach;
	this.oblast = oglas.oblast;
	this.opis = oglas.opis;
	this.rabotno_mesto = oglas.rabotno_mesto;
	this.createdAt = oglas.createdAt;
};

// Добивање на огласите кој ги има во базата на parse.com.
	function MyController($scope, $http) {
		$scope.items = [];
		$scope.forma = {};
		$scope.getItems = function() {

		$http({method : 'GET',url : "https://api.parse.com/1/classes/oglas", 
			headers: { 'X-Parse-Application-Id':"byR5XyYU1jpRIJKiBbxKcE5T3vxF97p2tqCSpc8Q", 	
					   'X-Parse-REST-API-Key':"EjJNPThO8GIsFPee9NolxscFUDdYeY9dOu2Bn4EL"}})
		.success(function(data, status) {
			for(element in data.results){
				$scope.items.push(new Oglas(data.results[element]));
			}
			})
			.error(function(data, status) {
				alert("Error");
			});
		};
		//User
		$scope.Login = function(){  
			return $scope.username;

		}
	
//Бришење на избраниот оглас.
		$scope.BrisenjeFunkcija = function(item){
		$http({method : 'DELETE',url : "https://api.parse.com/1/classes/oglas/"
			+item.objectId, 
			headers: {'X-Parse-Application-Id':"byR5XyYU1jpRIJKiBbxKcE5T3vxF97p2tqCSpc8Q", 
					  'X-Parse-REST-API-Key':"EjJNPThO8GIsFPee9NolxscFUDdYeY9dOu2Bn4EL"}})
		.success(function(){
			var index = $scope.items.indexOf(item);
			$scope.items.splice(index,1);
			alert("Огласот е избришан!");
		})
	};
	
// Изменување на избраниот оглас.
		$scope.update = function(item){
		delete item['$$hashKey'];
		$http({method : "PUT",url : "https://api.parse.com/1/classes/oglas/"+item.objectId, 
			data:JSON.stringify(item), 
			headers: { 'X-Parse-Application-Id':"byR5XyYU1jpRIJKiBbxKcE5T3vxF97p2tqCSpc8Q", 
			           'X-Parse-REST-API-Key':"EjJNPThO8GIsFPee9NolxscFUDdYeY9dOu2Bn4EL"},	
					   contentType: "application/json"})
		.success(function(){
			console.log("success")
			alert("Огласот е изменет!")
;			location.reload();
		})
	};
};

// Додавање на нов оглас.
	function Post($scope, $http) {
		$scope.items = [];
		$scope.postItems = function() {
		$http({method : 'POST',url : "https://api.parse.com/1/classes/oglas", 
		data:JSON.stringify($scope.forma), 
			headers: { 'X-Parse-Application-Id':"byR5XyYU1jpRIJKiBbxKcE5T3vxF97p2tqCSpc8Q", 
					   'X-Parse-REST-API-Key':"EjJNPThO8GIsFPee9NolxscFUDdYeY9dOu2Bn4EL"}})
		.success(function(data, status) {
		alert("Огласот е додаден!");
		location.reload();
		})
        
		.error(function(data, status) {
            alert("Error");
			});
		};
	};