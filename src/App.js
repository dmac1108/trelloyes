import React from 'react';
import List from './List';



function App(prop) {
  const allCards = prop.store.allCards;
  const lists = prop.store.lists;
  const listsList = [];
  console.log(lists);
  for (let i=0; i<lists.length; i++ ){
    console.log(lists[i]);
    for (let j=0; j<allCards.length; j++){
      if (lists[i].cardIds[j] === allCards[i].id){
        listsList.push(<List key={lists[i].id} title={allCards[j].title} content={allCards[j].content} />);
      }
    }

  } 
  console.log(listsList);
  

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      {listsList}
    </main>
  );
}

export default App;
