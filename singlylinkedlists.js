
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
    //Creating the .remove function
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        if(index === this.length - 1){
            return this.pop();
        }
        if(index === 0){
            return this.shift();
        }
        var prevNode = this.get(index - 1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length --;
        return removed;
    }
    //Creating a .print function in order to see every value in my linked list when reversing it 
    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    //Creating the .reverse function
    reverse(){
        var current = this.head;
        this.head = this.tail;
        this.tail = current;
        var prev = null;
        var next = null;
        for(var x = 0; x < this.length; x++){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
}



var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push("beans");
list.push("yoyo");
list.push(35);
list.push(312);

list.reverse();

console.log(list.print());