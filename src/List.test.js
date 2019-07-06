import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

const testCardArray = [  { id: 'a', title: 'First card', content: 'lorem ipsum' },
{ id: 'b', title: 'Second card', content: 'lorem ipsum' },
{ id: 'c', title: 'Third card', content: 'lorem ipsum' }];

describe('Lists component', () => {
    it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List id={'1'} header={'First List'} cards={testCardArray} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
 it('renders the UI as expected', ()=> {
    const tree = renderer
    .create(<List id={'1'} header={'First List'} cards={testCardArray}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
 });
 
});