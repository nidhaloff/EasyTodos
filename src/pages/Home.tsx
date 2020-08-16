import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonList, IonItemSliding, IonItemOptions, IonItem, IonLabel, IonItemDivider, IonToggle, IonCheckbox } from '@ionic/react';
import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import {Slider} from '../components/Slider';
import {Pulldown} from '../components/Pulldown';




const Home: React.FC<{
  initialLabel: any;
  setInitialLabel: any;
}> = (props) => {

  const [todos, setTodos] = useState<any>([]); 
  const [pagePulled, setPagePulled] = useState(false);
  const [inputTodo, setInputTodo] = useState('');

  const addTodo = () => {

    if (!inputTodo) {
      setPagePulled(false);
    }

    else{
    const newTodos = [...todos];
    const newTodo = {
      todo: inputTodo,
      completed: false
    }
    newTodos.push(newTodo);
    
    console.log("new todos: ", newTodos);
    setTodos(newTodos); 
    setInputTodo('');
    setPagePulled(false);
    }
    
  }

  return (
    <IonPage>
      <IonContent>

   {/*  {
    {initialLabel} && (<IonItem>
      <IonLabel color="dark">{initialLabel}</IonLabel>
    </IonItem>) 
    } */}

      {/* <Slider />  */}
        <Pulldown todos={todos} 
                  setTodos={setTodos} 
                  pagePulled={pagePulled} 
                  setPagePulled={setPagePulled}
                  // setInitialLabel={setInitialLabel}
        />
        
        {
        pagePulled && 
        <IonInput
          autofocus={pagePulled}
          value={inputTodo}
          placeholder={pagePulled? 'add your todo': ''}
          onIonChange={e => setInputTodo(e.detail.value!)}
          //onIonChange={e => console.log(e.detail.value)}
          onIonBlur={e => addTodo()}
        ></IonInput>
          }

      <IonList>    
        {
          todos.map( (todoObj: any, idx: number) => <Slider key={idx} todoObj={todoObj} todos={todos} setTodos={setTodos}/>)
        }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
