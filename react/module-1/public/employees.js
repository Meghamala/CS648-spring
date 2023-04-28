let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let robin = 'Robin Sparkles';
let ted = 'Ted Mosby';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, ted));
ReactDOM.render(element, document.getElementById('content'));
{/* const element = (
 //     <ul style={{'color':'blue', 'fontSize': '24px'}}>
 //         <li>Sally Smith</li>
 //         <li>Mark Martin</li>
 //         <li>Holly Unlikely</li>
 //     </ul>
 // )
 // ReactDOM.render(element, document.getElementById('content'))
 // const element = React.createElement(
 // 'ul', 
 // {style: {"color": "blue", "font-size": "24px" }},
 // React.createElement('li', null, 'Meghamala'),
 // React.createElement('li', null, 'Deepak'),
 // React.createElement('li', null, 'Alok')// nested element h1
 // )
 // ReactDOM.render(element, document.getElementById('content'))
         // const element = React.createElement(
 // 'div', 
 // {title: 'Outer div'},
 // React.createElement('h1', null, 'Hello World!') // nested element h1
 // )
 // ReactDOM.render(element, document.getElementById('content'))
 /*  ReactDOM.render( // to render to real DOM
   React.createElement( // virtual DOM
       'div', // type
       {title: 'Outer div'}, // property
       'Hello World!' // children
   ),
   document.getElementById('content')  // location to render
 ) */}