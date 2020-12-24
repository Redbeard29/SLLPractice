
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Creating the .push function
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    //Creating the .pop function
    pop(){
        if(!this.head){
            return undefined;
        }
        else{
            var current = this.head;
            var newTail = current;
            while(current.next){
                nextToLastElem = lastElem;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length --;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }
    //Creating the .shift function
    shift(){
        if(!this.head){
            return undefined;
        }
        else{
            var currentHead = this.head;
            this.head = currentHead.next;
            this.length --;
            if(this.length === 0){
                this.tail = null;
            }
            return currentHead;
        }
    }
    //Creating the .unshift function
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }
    //Creating the .get function
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter ++;
        }
        return current;
    }
    //Creating the .set function
    set(index, val){
        var targetNode = this.get(index);
        if(targetNode){
            targetNode.val = val;
            return true;
        }
        return false;
    }
    //Creating the .insert function
    insert(index, val){
        if(index < 0 || index > this.length){
            return false;
        }
        if(index === this.length){
            return !!this.push(val);
        }
        if(index === 0){
            return !!this.unshift(val);
        }
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next; 
        prev.next = newNode;
        newNode.next = temp;
        this.length ++;
        return true;
    }
}



var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.insert(0, "FIRST");
list.insert(5, "LAST");

var fourthIDX = list.get(4)

console.log(fourthIDX);