"use strict";
//Rhea Rizz M. Perocho
//Lois Kirsten Alonsagay
class Main_Features {
    constructor(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality) {
        this.brandName = brandName;
        this.feature = feature;
        this.user = user;
        this.seller = seller;
        this.retailers = retailers;
        this.function_ = function_;
        this.quantity = quantity;
        this.cost = cost;
        this.product = product;
        this.quality = quality;
    }
    Designing_Tools() {
        return (`This ${this.brandName} has variety of tools designated for a specific item  `);
    }
    Export_Property() {
        return (`${this.user} selects to export ${this.product} `);
    }
    Industry_Partners() {
        return (`These are the list of industries for this ${this.brandName} `);
    }
    Unique_Features() {
        return (`This ${this.brandName} has list of unique features and its own ${this.function_} `);
    }
    External_extensions() {
        return (`These are the list of external extensions eligible for ${this.brandName}`);
    }
    Business_partners() {
        return (`${this.user} selects own partnership`);
    }
    Collaboration() {
        return (`${this.user} has a free will to collab with a professional to strengthen ${this.quality} of ${this.product}`);
    }
    Ecommerce_space() {
        return (`${this.user} can display desired and ${this.cost} items : 
        choice to buy/sell with a specific number ${this.quantity} of quantities   .`);
    }
    Social_media() {
        return (`${this.user} selects way to market ${this.product} `);
    }
    legal_matters() {
        return (`${this.user} verified partnerships`);
    }
}
class Fashion_Design extends Main_Features {
    constructor(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality, clothing, bags, accessories, shoes) {
        super(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality);
        this.clothing = clothing;
        this.bags = bags;
        this.accessories = accessories;
        this.shoes = shoes;
    }
    getClothing() {
        return this.clothing;
    }
    setClothing(clothing) {
        this.clothing = clothing;
    }
    getBags() {
        return this.bags;
    }
    setBags(bags) {
        this.bags = bags;
    }
    getAccessories() {
        return this.accessories;
    }
    setAccessories(accessories) {
        this.accessories = accessories;
    }
    getShoes() {
        return this.shoes;
    }
    setShoes(shoes) {
        this.shoes = shoes;
    }
    Designing_Tools() {
        console.log(`These ${this.brandName} has variety of tools designated for a specific item  `);
        let arrayOfObjects = [this.shoes, this.bags, this.accessories, this.clothing];
        for (let i = 0; i < arrayOfObjects.length; i++) {
            console.log(arrayOfObjects[i]);
            if (arrayOfObjects[i] == this.shoes) {
                console.log("Foot shape, size, Materials and construction, Sole, Upper design, Color and Texture, Branding and logo design");
            }
            else if (arrayOfObjects[i] == this.bags) {
                console.log("Functionality, Size and shape, Materials and construction, Compartments and pockets, Strap and handle design, Color and texture, Branding and logo design ");
            }
            else if (arrayOfObjects[i] == this.accessories) {
                console.log("Functionality, Size and shape, Materials and construction, Closure and fastening, Color and texture");
            }
            else if (arrayOfObjects[i] == this.clothing)
                console.log("Silhouette, Fabrics, Colors and prints, Embellishments, Details, Fit");
        }
    }
    Export_Property() {
        if (this.user === "agree") {
            console.log(`${this.user} selects to export ${this.product} `);
        }
        else {
            console.log(`${this.user} disagree to export ${this.product}`);
        }
    }
    Industry_Partners() {
        console.log(`These are the list of industries for this ${this.brandName} `);
        let fashionIndustries = ["List of partners", "List of partners", "List of partners"];
        for (let i = 0; i < fashionIndustries.length; i++) {
            console.log(fashionIndustries[i]);
        }
    }
    Unique_Features() {
        console.log(`This ${this.brandName} has list of unique features and its own ${this.function_} `);
        let uniquefeatures = ["List of feature", "List of feature", "List of feature"];
        for (let i = 0; i < uniquefeatures.length; i++) {
            console.log(uniquefeatures[i]);
        }
    }
    External_extensions() {
        console.log(`These are the list of external extensions eligible for ${this.brandName}`);
        let fashiondesignExtensions = ["list of extensions eligible on the said class"];
        for (let i = 0; i < fashiondesignExtensions.length; i++) {
            console.log(fashiondesignExtensions[i]);
        }
    }
    Business_partners() {
        if (this.user === "business proposal") {
            console.log(`${this.user} selects partnership in business`);
        }
        else if (this.user === "professional proposal") {
            console.log(`${this.user} selects partnership with a professional`);
        }
        else if (this.user === "anotherUser proposal") {
            console.log(`${this.user} selects partnership with a professional`);
        }
        else {
            console.log(`${this.user} denied to have partnership!`);
        }
    }
    Collaboration() {
        console.log(`${this.user} has a free will to collab with a professional to strengthen ${this.quality} of ${this.product}`);
        if (this.user === "professional") {
            console.log(`${this.user} is eligible to collab with a professional to strengthen ${this.quality} of ${this.product}`);
        }
        else {
            console.log(`Collaboration rejected!`);
        }
    }
    Ecommerce_space() {
        if (this.user === "agree") {
            console.log(`Display desired items and ${this.cost} items : 
            choice to buy/sell with a specific number ${this.quantity} of quantities`);
        }
        else {
            console.log(`Display denied; no participants as ${this.seller} and ${this.retailers} of this brand!`);
        }
    }
    Social_media() {
        if (this.user === "agree") {
            console.log(`${this.user} selects social media in marketing the designs`);
        }
        else {
            console.log(`${this.user} in ${this.brandName}: Declined Project Design Marketing!`);
        }
    }
    legal_matters() {
        console.log(`${this.user} verified partnerships`);
    }
}
//-----------------------------------------------------------------------------------------------------------------
class Structural_Design extends Main_Features {
    constructor(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality, building, bridges, stadium, house, furniture, vehicles) {
        super(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality);
        this.building = building;
        this.bridges = bridges;
        this.stadium = stadium;
        this.house = house;
        this.furniture = furniture;
        this.vehicles = vehicles;
    }
    getBuilding() {
        return this.building;
    }
    setBuilding(building) {
        this.building = building;
    }
    getBridges() {
        return this.bridges;
    }
    setBridges(bridges) {
        this.bridges = bridges;
    }
    getStadium() {
        return this.stadium;
    }
    setStadium(stadium) {
        this.stadium = stadium;
    }
    getHouse() {
        return this.house;
    }
    setHouse(house) {
        this.house = house;
    }
    getFurniture() {
        return this.furniture;
    }
    setFurniture(furniture) {
        this.furniture = furniture;
    }
    getVehicles() {
        return this.vehicles;
    }
    setVehicles(vehicles) {
        this.vehicles = vehicles;
    }
    Designing_Tools() {
        console.log(`These ${this.brandName} has variety of tools designated for a specific item  `);
        let arrayOfObjects = [this.building, this.bridges, this.stadium, this.house, this.furniture, this.vehicles];
        for (let i = 0; i < arrayOfObjects.length; i++) {
            console.log(arrayOfObjects[i]);
            if (arrayOfObjects[i] == this.building) {
                console.log("Site analysis, Building program, Building envelope, Structural system, Mechanical systems, Interior design");
            }
            else if (arrayOfObjects[i] == this.bridges) {
                console.log("Structural system, Bridge deck, Substructure, Superstructure, Connections, Bridge railing, Bridge lighting, Design Structures");
            }
            else if (arrayOfObjects[i] == this.stadium) {
                console.log("Site analysis, Building program, Spectator experience, Playing field, Structural system, Mechanical systems, Security and safety ");
            }
            else if (arrayOfObjects[i] == this.house) {
                console.log("Site analysis, Building program, Building envelope, Structural system, Mechanical systems, Interior design");
            }
            else if (arrayOfObjects[i] == this.furniture) {
                console.log("type, template, shape, form, curvature, Materials, Scale and proportion, Color and texture");
            }
            else if (arrayOfObjects[i] == this.vehicles) {
                console.log('type, exterior design, interior design, powertrain, drivetrain, Suspension and braking, Safety features');
            }
        }
    }
    Export_Property() {
        if (this.user === 'agree') {
            console.log(`${this.user} selects to export ${this.product} `);
        }
        else {
            console.log(`${this.user} disagree to export ${this.product}`);
        }
    }
    Industry_Partners() {
        console.log(`These are the list of industries for this ${this.brandName} `);
        let fashionIndustries = ["List of partners", "List of partners", "List of partners"];
        for (let i = 0; i < fashionIndustries.length; i++) {
            console.log(fashionIndustries[i]);
        }
    }
    Unique_Features() {
        console.log(`This ${this.brandName} has list of unique features and its own ${this.function_} `);
        let uniquefeatures = ["List of feature", "List of feature", "List of feature"];
        for (let i = 0; i < uniquefeatures.length; i++) {
            console.log(uniquefeatures[i]);
        }
    }
    External_extensions() {
        console.log(`These are the list of external extensions eligible for ${this.brandName}`);
        let fashiondesignExtensions = ["list of extensions eligible on the said class"];
        for (let i = 0; i < fashiondesignExtensions.length; i++) {
            console.log(fashiondesignExtensions[i]);
        }
    }
    Business_partners() {
        if (this.user === "business proposal") {
            console.log(`${this.user} selects partnership in business`);
        }
        else if (this.user === "professional proposal") {
            console.log(`${this.user} selects partnership with a professional`);
        }
        else if (this.user === "anotherUser proposal") {
            console.log(`${this.user} selects partnership with a professional`);
        }
        else {
            console.log(`${this.user} denied to have partnership!`);
        }
    }
    Collaboration() {
        console.log(`${this.user} has a free will to collab with a professional to strengthen ${this.quality} of ${this.product}`);
        if (this.user === "professional") {
            console.log(`${this.user} is eligible to collab with a professional to strengthen ${this.quality} of ${this.product}`);
        }
        else {
            console.log(`Collaboration rejected!`);
        }
    }
    Ecommerce_space() {
        if (this.user === "agree") {
            console.log(`Display desired items and ${this.cost} items : 
            choice to buy/sell with a specific number ${this.quantity} of quantities`);
        }
        else {
            console.log(`Display denied; no participants as ${this.seller} and ${this.retailers} of this brand!`);
        }
    }
    Social_media() {
        if (this.user === "agree") {
            console.log(`${this.user} selects social media in marketing the designs`);
        }
        else {
            console.log(`${this.user} in ${this.brandName}: Declined Project Design Marketing!`);
        }
    }
    legal_matters() {
        console.log(`${this.user} verified partnerships`);
    }
}
//TEST CASES
const fashion = new Fashion_Design('Fashion Industry', 'Unique Features', 'User 1', 'Seller 1', 'Retailer 1', 'Fasion Designing', 200, 50, 'Products: Clothing, Bags, Accessories, Shoes', 'Unique Qualities', 'Shirt', 'Bag', 'Watch', 'Heels');
'agree';
'business proposal';
'professional';
console.log("\n----------------------------------------------------------");
fashion.Designing_Tools();
console.log("\n----------------------------------------------------------");
fashion.Export_Property();
console.log("\n----------------------------------------------------------");
fashion.Industry_Partners();
console.log("\n----------------------------------------------------------");
fashion.Unique_Features();
console.log("\n----------------------------------------------------------");
fashion.External_extensions();
console.log("\n----------------------------------------------------------");
fashion.Business_partners();
console.log("\n----------------------------------------------------------");
fashion.Collaboration();
console.log("\n----------------------------------------------------------");
fashion.Ecommerce_space();
console.log("\n----------------------------------------------------------");
fashion.Social_media();
console.log("\n----------------------------------------------------------");
fashion.legal_matters();
const structure = new Structural_Design('Structure Design', 'Unique Features', 'Lois', 'Rhea', 'Retailer 2', 'Structure Designs', 12345, 1, 'Products: Clothing, Bags, Accessories, Shoes', 'Unique Qualities', 'seat', 'custom', 'Gavana bldg', 'Seravim', 'agree', 'professional');
console.log("\n----------------------------------------------------------");
structure.Designing_Tools();
console.log("\n----------------------------------------------------------");
structure.Export_Property();
console.log("\n----------------------------------------------------------");
structure.Industry_Partners();
console.log("\n----------------------------------------------------------");
structure.Unique_Features();
console.log("\n----------------------------------------------------------");
structure.External_extensions();
console.log("\n----------------------------------------------------------");
structure.Business_partners();
console.log("\n----------------------------------------------------------");
structure.Collaboration();
console.log("\n----------------------------------------------------------");
structure.Ecommerce_space();
console.log("\n----------------------------------------------------------");
structure.Social_media();
console.log("\n----------------------------------------------------------");
structure.legal_matters();
