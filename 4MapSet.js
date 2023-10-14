
class Users {
    constructor(data) {
        this.obj = new Map();
        for (let k of data) {
            this.obj.set(k.id, k);
        }
    }

    addUsers(arr) {
        for(let k of arr){
            this.obj.set(k.id,k);
        }
    }
    getUserById(id){
        if(this.obj.has(id)){
            return this.obj.get(id);
        }
        return "Invalid id "

    }
    print(){
        return this.obj;
    }

}

const mappedUser = new Users([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
]);
console.log(mappedUser.getUserById(1));
mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);
console.log(mappedUser.getUserById(3));
console.log(mappedUser.print());