import { expect } from 'chai';
import LinkedList from '../scripts/LinkedList'

describe('list should have a head', () => {
  var list

  beforeEach(() => {
    list = new LinkedList();
  });

  it ('list should have null head', () => {
    expect(list.head).to.equal(null);
  })

  it ('should allow me to prepend' , () => {
    list.prepend(29);
    list.prepend(30);

    expect(list.head.data).to.equal(30);
  })

  it ('should allow me to shift' , () => {
    list.prepend(29);
    list.prepend(30);

    expect(list.head.data).to.equal(30);

    let node = list.shift();
    expect(list.head.data).to.equal(29);
    expect(node.data).to.equal(30);
  })

  it ('should allow me find the end/tail' , () => {
    list.prepend(29);
    list.prepend(30);
    list.prepend(25);
    list.prepend(18);
    list.prepend(303);

    let node = list.findTail();

    expect(node.data).to.equal(29);
  })

  it ('should append', () => {
    list.prepend(30);
    list.prepend(25);
    list.prepend(18);
    list.append(17);

    let node = list.findTail();
    expect(node.data).to.equal(17);
  });

  it ('pop should remove one from the end', () => {
    list.prepend(30);
    list.prepend(25);
    list.prepend(18);

    let node = list.findTail();

    expect(node.data).to.equal(30);

    let poppedNode = list.pop();
    expect(poppedNode.data).to.equal(30)

    let newLastNode = list.findTail();
    expect(newLastNode.data).to.equal(25);
  });

  it ('find should find node in list', () => {
    list.prepend(30);
    list.prepend(25);
    list.prepend(18);

    let node = list.find(25);

    expect(node.data).to.equal(25);
  });

  it ('if no node found return "not found"', () => {
    list.prepend(30);
    list.prepend(25);
    list.prepend(18);

    let node = list.find(252);

    expect(node).to.equal('not found');
  });

  it ('length should start at 0', () => {
    expect(list.length).to.equal(0);
  });

  it ('after prepend length should be 1', () => {
    list.prepend(25);

    expect(list.length).to.equal(1);
  });

  it ('after append length should be 1', () => {
    list.append(25);

    expect(list.length).to.equal(1);
  });

  it ('after append, then shift length should be 0', () => {
    list.prepend(25);
    list.shift();

    expect(list.length).to.equal(0);
  });

  it ('after append, then pop length should be 0', () => {
    list.append(25);
    list.pop();

    expect(list.length).to.equal(0);
  });

  it ('toArray should return an array with all the items', () => {
    list.append(25);
    list.append(26);
    list.append(253);
    list.append(25123);

    let array = list.toArray();

    expect(array).to.deep.equal([
      list.find(25),
      list.find(26),
      list.find(253),
      list.find(25123)
    ]);
  });

  it ('toArray should return an array with all the items', () => {
    let autoPopList = new LinkedList([
      223,
      2,
      23,
      2232
    ]);

    expect(autoPopList.length).to.equal(4)
  });

})
