const userProfile = {
    id: 501,
    info: {
        firstName: 'Abid',
        lastName: "Khan"
    },

    social:{
        platform: "Github"
    }
};

const {
    info:{firstName:name, lastName:surName},
    social:{platform = "LindedIn",
        phoneNumber = "01788888"
    }
} = userProfile;


console.log(phoneNumber);