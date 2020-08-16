import React, { useState } from 'react';
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';


 
export const Pulldown: React.FC<{

    todos: any;
    setTodos: any; 
    pagePulled: boolean;
    setPagePulled: any;
    //setInitialLabel: any;

}> = (props) => {


    function doRefresh(event: CustomEvent<RefresherEventDetail>) {

        props.setPagePulled(true);
        //props.setInitialLabel('');
        //console.log('Begin async operation');
      
        setTimeout(() => {
          //console.log('Async operation has ended');
          event.detail.complete();
        }, 100);
      }

    return (
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingIcon={chevronDownCircleOutline}
          pullingText="Pull to add todo"
          refreshingSpinner="bubbles">
        </IonRefresherContent>
      </IonRefresher>
)};