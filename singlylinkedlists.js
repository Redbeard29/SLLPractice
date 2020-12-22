//Creating the .push function in a singly linked list

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
}

var list = new SinglyLinkedList();

list.push("hi");
list.push("you");
list.push(99);

console.log(list);

//Creating the .pop function in a singly linked list

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
}

//Creating the .shift function in a singly linked list

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
}

//Creating the .unshift function in a singly linked list

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
}

//Creaing the .get function in a singly linked list

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
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            counter = current.next;
            counter ++;
        return current;
        }
    }
}



//Creaing the .set function in a singly linked list

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
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            counter = current.next;
            counter ++;
        return current;
        }
    }
    set(index, val){
        var targetNode = this.get(index);
        if(targetNode){
            targetNode.val = val;
            return true;
        }
        return false;
    }
}
