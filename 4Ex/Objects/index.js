var user = {
    first_name: "John",
    last_name: "Smith",
    age: "38",
    department: "Software"
};
console.log(user);
console.log(Object.keys(user).length);
delete user.last_name;
console.log(user);
console.log(Object.keys(user).length);
    