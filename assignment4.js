৪. [ ফাংশন নেম দিতে হবে perfectFriend]

//..................................................
// perfectFriend
//..................................................

let friends = ['taijul', 'aman', 'aiman', 'dida', 'rana', 'nipa'];

function perfectFriend(array) {
    if (typeof array != 'object') {
        return 'check input';
    }
    let answer = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length == 5) {
            answer.push(array[i]);
            break;
        }
    }
    return answer;
}

// output check
//
// let result = perfectFriend(friends);
// console.log(result);
