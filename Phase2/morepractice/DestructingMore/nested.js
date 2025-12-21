const apiData = {
    status: 200,
    payload: {
        user_info:{
            id: "UX123",
            contact:{email:"test@mail.com", phone: "017...."}
        }
    }
};

// ১ লাইনে email বের করে নাম দেওয়া 'userEmail'
const{payload:{user_info:{contact:{email:userEmail}}}} = apiData;
console.log(userEmail);
