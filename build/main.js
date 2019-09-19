import {RegistrationForm} from "./src/loginForm.js"
import {HomePage} from "./src/homePage.js"
import SPARouter from "@kodnificent/sparouter"
const options = {historyMode : true}
const router = new SPARouter(options)
// render function to allow for state in the app without react

let render = function (component, initState = {}, mountNode = 'app') {
  initState.render = function( stateRepresentation/* , options = {} */ ) {
    const start = (options.focus) ? document.getElementById(options.focus).selectionStart : 0;
    (document.getElementById(mountNode) || {}).innerHTML = stateRepresentation
    if (options.focus) {
      let f = document.getElementById(options.focus)
      f.selectionStart = start
      f.focus()
    }
  }

  let stateRepresentation = component(initState)

  initState.render((typeof stateRepresentation === 'function' ) ? stateRepresentation() : stateRepresentation)
}

// adds the function call "i" to the window object. Allows it to be called
export let intent = function(i,f) {
	window[i || "_"] = f
}

// grabs the value of said object
export let value = function(el) {
	return document.getElementById(el).value
}


router.get('/', function(req, router) {
	render(HomePage, {}, "app");
}).setName("home");
router.get('/login', function(req, router) {
	render(RegistrationForm)
})
router.init()






