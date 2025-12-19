const student = {
    fullName: "Karim Uddin",
    scores : [85,90,78],
    contact: {
        email: "karim@mail.com",
        phone: "017000000"
    }
};

/* Task 1: ডেসট্রাকচারিং ব্যবহার করে fullName-কে name ভেরিয়েবলে এবং email-কে আলাদা করে বের করো। */

const {fullName:name} = student;
console.log(name);

/* Task 2: স্প্রেড অপারেটর দিয়ে scores অ্যারেতে নতুন একটি স্কোর 95 যোগ করে newScores তৈরি করো। */

const newScores = [...student.scores, 95];

console.log(newScores);



/* Task 3: একটি ফাংশন লিখো showScores(first, ...rest) যা প্রথম স্কোরটি আলাদা প্রিন্ট করবে এবং বাকি সবগুলোকে একটি অ্যারে হিসেবে দেখাবে। */

function showScores(first, ...rest){
    console.log("First Score:", first);
    console.log("Rest Score:", rest);
}

showScores(...newScores);