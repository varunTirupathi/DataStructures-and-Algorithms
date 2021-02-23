class Linkedlist {
  constructor(value){
    this.head = {
      value:value,
      next:null
    }
    this.tail = this.head;
    this.length = 1;
  }

append(value){
 const newnode = new Node(value)
 this.tail.next = newnode;
 this.tail = newnode;
 this.length++;
 return this;

  }

  prepend(value){
  const newnode = new Node(value)
  newnode.next = this.head;
  this.head = newnode
  this.length++
  return this
  }

printList(){
  const array = [];
  let currentNode = this.head;
  while(currentNode !== null){
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return array;
}
  insert(index,value){
   //check the parameters
   if(index >= this.length){
     return this.append(value)
   }
   const newNode ={
     value:value,
     next:null
   };
   const leader = this.traverseToIndex(index-1)
   const holdingPointer = leader.next;
   leader.next =newNode;
   newNode.next = holdingPointer;
   this.length++
   return this.printList()

  }
traverseToIndex(index){
  let counter = 0;
  let currNode = this.head;
  while(counter !== index){  //O(n)
    currNode = currNode.next
    counter++;
    return currNode
  }
}

remove(index){ //O(n)
  //check parameters
  const leader = this.traverseToIndex(index-1);
  const unWantednode = leader.next;
  leader.next =unWantednode.next
  this.length--
  return this.printList()
}
}

const linkedlist = new Linkedlist(10);

linkedlist.append(2)
linkedlist.prepend(3)
linkedlist.insert(15,23)
linkedlist.insert(3,4)
linkedlist.printList()
linkedlist.remove(3)
linkedlist.remove(2)
linkedlist.remove(2)