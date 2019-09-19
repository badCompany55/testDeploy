import {intent} from '../main.js'


export let HomePage = function({render}) {

	intent("onNavigate", function(e) {
		window.history.pushState({}, "/login", window.location.origin + "/login")
		window.history.pushState({}, "/login", window.location.origin + "/login")
		window.history.forward()
		window.history.back()
		window.history.forward()
	})

		let representation = () => `
			<div class="homeCont">
		<button onclick=onNavigate()></button>
			This is the Home Page
			</div>
	`
		return representation
}


