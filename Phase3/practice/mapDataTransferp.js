// 1.নামের তালিকা তৈরি: অবজেক্টের অ্যারে থেকে শুধু নামগুলো বের করা।
const users = [{id:1, name: "Arif"}, {id:2, name:"Siam"}];
const name = users.map(user => user.name);
console.log(name);