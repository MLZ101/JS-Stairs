class Node{
    constructor(name){
        this.name = name;
        this.children = [];
    }


    addChild(name){
        const child = new Node(name);
        this.children.push(child);

        return child;
    }

    removeChild(name){
        this.children = this.children.filter(child => child.name != name);
    }

    /*
    toString(){
        let names = this.name + ' -> [' ;
        for(let child of this.children){
            names += child.name + ', ';
        } 
        names.trim();
        console.log(names.length);
        names.substring(0, names.length - 3);
        names += ']';
        return names;
    }
    */
}


function bfs(root) {
    console.log(root);

    current = [root];
    next = [];

    while(current.length>0){
        for(let element of current){
            for(let child of element.children){
                next.push(child);
                console.log(child);
            }
        }
        current = next;
        next = [];
    }
}


function dfs(root) {
    console.log(root);

    for (const child of root.children) {
        dfs(child);
    }
}




// Making our own nodes to test the code

const root = new Node("html");
const head = root.addChild("head");
const body = root.addChild("body");

head.addChild("meta");
head.addChild("title");

body.addChild("h1");
body.addChild("p");
body.addChild("table").addChild("tr").addChild("td");

console.log("Custom Nodes Test:\nBFS: ");
bfs(root);
console.log("\nDFS: ");
dfs(root);



// I also tested the code on an html file linked to it (which can be viewed in the inspect console of the browser)
const rootElement = document.documentElement; 

console.log("Actual Document Test\nBFS: ");
bfs(rootElement);
console.log("DFS: ");
dfs(rootElement);
