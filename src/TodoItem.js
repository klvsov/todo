import React, {useContext} from 'react';

import {Context} from './context';

const TodoItem = ({title, id, completed}) => {

  const {dispatch} = useContext(Context);

  const classes = ['todo'];

  if(completed) {
    classes.push('completed');
  }

  return (
    <li className={classes.join(' ')}>
      <label>
        <input
          type = "checkbox"
          checked = {completed}
          onChange = {() => dispatch({
            type: 'toggle',
            payload: id
          })}
        />
        <span>{title}</span>

        <i
          className = "material-icons red-text"
          onClick = {() => dispatch({
            type: 'remove',
            payload: id
          })}
        >
          close
        </i>
      </label>
    </li>
  )
}

export default TodoItem;