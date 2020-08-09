import React from 'react';
import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote } from '@ionic/react';

import { heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

export const Slider: React.FC<{
    todoObj: any;
    todos: any;
    setTodos: any;
}> = (props) => {

  const deleteTodo = () => {

    const newTodos = props.todos.filter((todoObj: any) => todoObj.todo !== props.todoObj.todo);
    console.log("after delete: ", newTodos);

    props.setTodos(newTodos);
  }

  const completeTodo = () => {
    const todo = props.todos.find( (todoObj: any) => todoObj.todo == props.todoObj.todo);
    const idx = props.todos.indexOf(todo);
    const newTodos = [...props.todos]
    newTodos.splice(idx, 1);
    todo.completed = !todo.completed;
    newTodos.push(todo);
    props.setTodos(newTodos);
  }

 return (
<IonList>
  {/* Sliding item with text options on both sides */}
  <IonItemSliding>
    <IonItemOptions side="start" onIonSwipe={(e) => completeTodo()}>
    </IonItemOptions>

    <IonItem>
      <IonLabel color={props.todoObj.completed ? "danger":"primary"}>{props.todoObj.todo}</IonLabel>
    </IonItem>

    <IonItemOptions side="end" onIonSwipe={e => deleteTodo()}>
    </IonItemOptions>
  </IonItemSliding>
  </IonList>
  )
 }