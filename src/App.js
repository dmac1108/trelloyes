import React from 'react';
import List from './List';
import './App.css';



function App(prop) {

  //pass the header and teh array of card objects with the title and content
  const allCards = prop.store.allCards;
  const lists = prop.store.lists;
  const listsList = [];
  //const cardArray = []
  //console.log(allCards);
  for (let i=0; i<lists.length; i++ ){
    const cardArray = []
    for (let j=0; j<lists[i].cardIds.length; j++){
      let cardid = lists[i].cardIds[j];
      //build the card array
      cardArray.push(
        {"key": allCards[cardid].id,"title": allCards[cardid].title, "content" : allCards[cardid].content}
        );
      
      
    }
    listsList.push(<List key={i} header={lists[i].header} cards={cardArray} />);

  } 
  console.log(listsList);
  

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {listsList}
      </div>
    </main>
  );
}

export default App;
