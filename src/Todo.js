import React from 'react';
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {item: props.item};
    this.delete = props.delete;
  }

  deleteEventHander = () => {
    this.delete(this.state.item);
  }

  render() {
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done}/>
        <ListItemText>
          <InputBase
            inputProps={{"area-label": "naked"}}
            type="text"
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
          />
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete todo"
            onClick={this.deleteEventHander}>
            <DeleteOutlined/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default Todo;