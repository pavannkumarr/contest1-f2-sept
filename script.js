const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
    console.log(developers);
}

// 2. Add Data
function addData() {
    const newData = { name: "newPerson", age: 30, profession: "designer" };
    data.push(newData);
    console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
    const withoutAdmins = data.filter(person => person.profession !== "admin");
    console.log(withoutAdmins);
}

// 4. Concatenate Array
function concatenateArray() {
    const newArray = data.concat([{ name: "bob", age: 22, profession: "manager" }]);
    console.log(newArray);
}

// 5. Average Age
function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const avgAge = totalAge / data.length;
    console.log(avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
    const above25 = data.some(person => person.age > 25);
    console.log(above25);
}

// 7. Unique Professions
function uniqueProfessions() {
    const professions = data.map(person => person.profession);
    const uniqueProfessions = [...new Set(professions)];
    console.log(uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
    const sortedByAge = [...data].sort((a, b) => a.age - b.age);
    console.log(sortedByAge);
}

// 9. Update Profession
function updateJohnsProfession() {
    const updatedData = data.map(person => {
        if (person.name === "john") {
            return { ...person, profession: "designer" };
        }
        return person;
    });
    console.log(updatedData);
}

// 10. Profession Count
function getTotalProfessions() {
    const professionCount = data.reduce((count, person) => {
        count[person.profession] = (count[person.profession] || 0) + 1;
        return count;
    }, {});
    console.log(professionCount);
}
