const findTheOldest = function (people) {
    const oldest = people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        if (oldestAge > currentAge) {
            return oldest;
        } else {
            return currentPerson;
        }
    });
    return oldest;
};

const getAge = function (birth, death) {
    if (!death) {
        return new Date().getFullYear() - birth;
    } else {
        return death - birth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
