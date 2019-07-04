import React from 'react';
import Card from './Card';
import './List.css';

function List(props){
    console.log("In the List Component");
    console.log(props);
    const cardLis = props.cards.map(item => 
        <Card key={item.key} title={item.title} content={item.content}></Card>
    )
    return(
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2></header>
                <div className="List-cards">
                    
                        {cardLis}
                        <button type="button" class="List-add-button">
            + Add Random Card
          </button>
                </div>
            

        </section>
    )
}

export default List;