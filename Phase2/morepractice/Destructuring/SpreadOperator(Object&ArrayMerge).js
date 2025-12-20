const oldNumber = [1,2,3];
const newNumber = [4,5,6];

// ১. অ্যারে মার্জ করা
const combinedNumber = [...oldNumber, ...newNumber, 7,8];
console.log(combinedNumber);

// ২. অবজেক্ট কপি এবং আপডেট
const student = {name: "Zayan", grade: "A"};
const updatedStudent = {
    ...student,
    grade: "A+",
    city: "Dhaka"
};

console.log(updatedStudent);
