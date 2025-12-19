/*
const student = {
    fullName: "Karim Uddin",
    scores: [85, 90, 78],
    contact: {
        email: "karim@mail.com",
        phone: "01700000000"
    }
};

Task 1: ডেসট্রাকচারিং ব্যবহার করে fullName-কে name ভেরিয়েবলে এবং email-কে আলাদা করে বের করো।

Task 2: স্প্রেড অপারেটর দিয়ে scores অ্যারেতে নতুন একটি স্কোর 95 যোগ করে newScores তৈরি করো।

Task 3: একটি ফাংশন লিখো showScores(first, ...rest) যা প্রথম স্কোরটি আলাদা প্রিন্ট করবে এবং বাকি সবগুলোকে একটি অ্যারে হিসেবে দেখাবে।

*/


const student = {
    fullName: "Karim Uddin",
    scores: [85,90,78],
    contact:{
        email: "karim@mail.com",
        phone: "0170000000"
    }
};

/* Task 1: ডেসট্রাকচারিং ব্যবহার করে fullName-কে name ভেরিয়েবলে এবং email-কে আলাদা করে বের করো। */

const {name: fullName, contact: {email}} = student;



/* Task 2: স্প্রেড অপারেটর দিয়ে scores অ্যারেতে নতুন একটি স্কোর 95 যোগ করে newScores তৈরি করো। */

const newScore = [...student.scores, 95];
console.log(newScore);



/* Task 3: একটি ফাংশন লিখো showScores(first, ...rest) যা প্রথম স্কোরটি আলাদা প্রিন্ট করবে এবং বাকি সবগুলোকে একটি অ্যারে হিসেবে দেখাবে। */

function showScores(first,...rest){
    console.log("প্রথম স্কোরঃ", first);
    console.log('বাকি স্কোরঃ', rest);

}

showScores(...newScore);