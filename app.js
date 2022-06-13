// TODO
var groceryItems = ['Cucumbers', 'Kale', 'Pringles', 'Oranges']



class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

    onListItemMouseEnter() {
      this.setState({
        done: true
      });
    }

    onListItemMouseLeave() {
      this.setState({
        done: false
      })
    }


  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal',
    };

    return (
      <li style={style} onMouseEnter={this.onListItemMouseEnter.bind(this)} onMouseLeave={this.onListItemMouseLeave.bind(this)}>{this.props.groceryItems}</li>
    );
  }
}

var GroceryList = (props) => (
  <div>
    <h2>My Grocery List</h2>
      <ul>
        {props.groceryItems.map((item) =>
        <GroceryListItem groceryItems={item} />
        )}
      </ul>

  </div>
);


ReactDOM.render(<GroceryList groceryItems={groceryItems}/>, document.getElementById('app'));


// manual components

// var Cucumbers = () => (
//   <div>
//     <ul>Cucumbers</ul>
//   </div>
// );

// var Kale = () => (
//   <div>
//     <ul>Kale</ul>
//   </div>
// );

//static props, not using state

// var GroceryListItem = (props) => {

//   var onListItemClick = (event) => {
//     console.log(`I got clicked`);
//   }

//   return (
//   <ul>
//     <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
//     <li onClick={onListItemClick}>{props.groceryItems[1]}</li>
//     <li onClick={onListItemClick}>{props.groceryItems[2]}</li>
//   </ul>
// )
// }
