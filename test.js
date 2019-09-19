///////////////////////////////////////////////////////////////////////////
// A React Like Functional HTML Library that supports stateless and stateful 
// components as well as component composition in less than 20 lines
//
let render = function (component, initState = {}, mountNode = 'app') {
  initState.render = function( stateRepresentation/* , options = {} */ ) {
    // const start = (options.focus) ? document.getElementById(options.focus).selectionStart : 0;
    (document.getElementById(mountNode) || {}).innerHTML = stateRepresentation
    // if (options.focus) {
    //   let f = document.getElementById(options.focus)
    //   f.selectionStart = start
    //   f.focus()
    // }
  }

  let stateRepresentation = component(initState)

  initState.render((typeof stateRepresentation === 'function' ) ? stateRepresentation() : stateRepresentation)
}

let intent = function(i, f) {
  window[i || '_'] = f 
}

let value = function(el) {
  return document.getElementById(el).value
}
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Examples (from http://reactjs.org)
//
// HelloMessage: Stateless Component
//
let TodoApp = function({render}) {
  let state = { items: [], text:'', render }
  
  intent( "addTodo", function(e) {
    const newItem = {
      text: value("text"),
      id: Date.now()
    }
    state.items.push(newItem)
    state.text = ''
    state.render(representation())
    return false
  })

  let representation = () => `
      <div>
        <h4>TODO</h4>
				${TodoList({items:state.items})}
        <form >
          <input id="text" value=${state.text}>
          <button onclick=addTodo()>
          Add #${state.items.length + 1}
          </button>
        </form>
      </div>`

  return representation
}
// How easy is it to mount a handler on a child element?
// as easy as passing a string! The corresponding intent
// can be declared anywhere, yes you can try this at home!
let TodoList = ({items, onclick}) => `
    <ul>
			${items.map(item => `<li key="${item.id}">${item.text}</li>`)}
    </ul>`







render(
  TodoApp, {},
  "todo"
)

