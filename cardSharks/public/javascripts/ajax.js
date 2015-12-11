//ajax.js
document.addEventListener("DOMContentLoaded", function(){
	var btn = document.getElementById('btn');
	btn.addEventListener("click", function(evt){
		evt.preventDefault();
		var url = "/api/highScores";
		var username = document.getElementById('username').value;
		url = url + "?username=" + username;
		var req = new XMLHttpRequest();
		req.open('GET', url, true);
		console.log('clicked');
		req.addEventListener("load", function() {
			console.log(req.responseText);
			var tbody = document.createElement('tbody');
			tbody.id = "scores";
			JSON.parse(req.responseText).forEach(function(user) {
				var tr = tbody.appendChild(document.createElement('tr'));
				tr.appendChild(document.createElement('td')).textContent = user.username;
				tr.appendChild(document.createElement('td')).textContent = user.currentWinStreak;
				tr.appendChild(document.createElement('td')).textContent = user.bestWinStreak;
			});
			var scores = document.getElementById('scores');
			scores.parentNode.replaceChild(tbody, scores);
			console.log(tbody);
		});
		req.send();
	})
})