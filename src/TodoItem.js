import React, {useState} from 'react'

const TodoItem = ({title, id, completed}) => {
  const [checked, setChecked] = useState(completed);

  const classes = ['todo'];

  if(checked) {
    classes.push('completed');
  }

  return (
    <li className={classes.join(' ')}>
      <label>
        <input
          type = "checkbox"
          checked = {checked}
          onChange = {() => setChecked(checked => !checked)}
        />
        <span>{title}</span>

        <i className="material-icons red-text">close</i>
      </label>
    </li>
  )
}

export default TodoItem;