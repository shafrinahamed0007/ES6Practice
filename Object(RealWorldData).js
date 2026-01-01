 let smartPhone = {
    brand: "Samsung",
    model: "S23 Ultra",
    spaces: {
        ram: "12GB",
        storage: "256GB",
        camera: "200MP"
    },
    price: 120000,
    isAvailable: true,

    // Method / Function inside object
    calculateEMI: function(month){
        let perMont = this.price / month;
        return `Monthly EMI for ${month} month is: ${perMont.toFixed(2)} TK`;
    },

    updateStorage: function(newSize){
        this.spaces.storage = newSize;
        console.log(`Storage updated to ${newSize}`);
    }
 };

 console.log(smartPhone.brand + " " + smartPhone.spaces.camera);
 console.log(smartPhone.calculateEMI(12));
 smartPhone.updateStorage("512GB");