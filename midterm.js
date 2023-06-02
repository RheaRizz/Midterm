//Rhea Rizz M. Perocho
//Lois Kirsten Alonsagay
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main_Features = /** @class */ (function () {
    function Main_Features(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality, collaborator) {
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
        this.collaborator = collaborator;
    }
    Main_Features.prototype.Designing_Tools = function () {
        return ("".concat(this.brandName, " has variety of tools designated for a specific item  "));
    };
    Main_Features.prototype.Export_Property = function () {
        return ("".concat(this.user, " selects to export this product"));
    };
    Main_Features.prototype.Industry_Partners = function () {
        return ("These are the list of industries for ".concat(this.brandName, " "));
    };
    Main_Features.prototype.Unique_Features = function () {
        return ("".concat(this.brandName, " has list of unique features on its own"));
    };
    Main_Features.prototype.External_extensions = function () {
        return ("These are the list of external extensions eligible for ".concat(this.brandName));
    };
    Main_Features.prototype.Business_partners = function () {
        return ("".concat(this.user, " selects his/her own partnership with ").concat(this.retailers));
    };
    Main_Features.prototype.Collaboration = function () {
        return ("".concat(this.user, " wants to do a collab with ").concat(this.collaborator));
    };
    Main_Features.prototype.Ecommerce_space = function () {
        return ("".concat(this.user, " can display desired and ").concat(this.cost, " items : \n\n        choice to buy/sell with a specific number ").concat(this.quantity, " of quantities   ."));
    };
    Main_Features.prototype.Social_media = function () {
        return ("".concat(this.user, " markets ").concat(this.product, " "));
    };
    Main_Features.prototype.legal_matters = function () {
        if (this.user === 'verification') {
            return ("".concat(this.user, " verified partnerships"));
        }
        else {
            return ("".concat(this.user, " didn't passed the required evaluation"));
        }
    };
    return Main_Features;
}());
//--------------------------------------------------------------------------------------------------
var Fashion_Design = /** @class */ (function (_super) {
    __extends(Fashion_Design, _super);
    function Fashion_Design(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality, collaborator, clothing, bags, accessories, shoes, anotherUser) {
        var _this = _super.call(this, brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality, collaborator) || this;
        _this.clothing = clothing;
        _this.bags = bags;
        _this.accessories = accessories;
        _this.shoes = shoes;
        _this.anotherUser = anotherUser;
        return _this;
    }
    Fashion_Design.prototype.getClothing = function () {
        return this.clothing;
    };
    Fashion_Design.prototype.setClothing = function (clothing) {
        this.clothing = clothing;
    };
    Fashion_Design.prototype.getBags = function () {
        return this.bags;
    };
    Fashion_Design.prototype.setBags = function (bags) {
        this.bags = bags;
    };
    Fashion_Design.prototype.getAccessories = function () {
        return this.accessories;
    };
    Fashion_Design.prototype.setAccessories = function (accessories) {
        this.accessories = accessories;
    };
    Fashion_Design.prototype.getShoes = function () {
        return this.shoes;
    };
    Fashion_Design.prototype.setShoes = function (shoes) {
        this.shoes = shoes;
    };
    Fashion_Design.prototype.Designing_Tools = function () {
        var arrayOfObjects = [this.shoes, this.bags, this.accessories, this.clothing];
        for (var i = 0; i < arrayOfObjects.length; i++) {
            console.log(arrayOfObjects[i]);
            if (arrayOfObjects[i] == this.shoes) {
                console.log('Shoes Designing Tools: ');
                console.log("Foot shape, Size, Materials, Sole, Upper design, Color and Texture, Branding and Logo Design");
            }
            else if (arrayOfObjects[i] == this.bags) {
                console.log('Bag Designing Tools: ');
                console.log("Functionality, Size and shape, Materials and construction, Compartments and pockets, Strap and handle design, Color and texture, Branding and logo design ");
            }
            else if (arrayOfObjects[i] == this.accessories) {
                console.log('Accessories Designing Tools: ');
                console.log("Functionality, Size and shape, Materials and construction, Closure and fastening, Color and texture");
            }
            else if (arrayOfObjects[i] == this.clothing)
                console.log('Clothing Designing Tools: ');
            console.log("Silhouette, Fabrics, Colors and prints, Embellishments, Details, Fit");
        }
    };
    Fashion_Design.prototype.Export_Property = function () {
        if (this.user === "agree") {
            console.log("".concat(this.user, " selects to export ").concat(this.product, " "));
        }
        else {
            console.log("".concat(this.user, " disagree to export ").concat(this.product));
        }
    };
    Fashion_Design.prototype.Industry_Partners = function () {
        console.log("These are the list of industries for ".concat(this.brandName, " "));
        var fashionIndustries = ['Hashikon', 'Zalora', 'Prada', 'Shein', 'Lovelace'];
        for (var i = 0; i < fashionIndustries.length; i++) {
            console.log(fashionIndustries[i]);
        }
    };
    Fashion_Design.prototype.Unique_Features = function () {
        console.log("Unique features for ".concat(this.brandName, ": "));
        var uniquefeatures = ['3D Virtual Fitting Room', 'Fabric Visualization', 'Trend Forecasting', 'Style Recommendations',];
        for (var i = 0; i < uniquefeatures.length; i++) {
            console.log(uniquefeatures[i]);
        }
    };
    Fashion_Design.prototype.External_extensions = function () {
        console.log("These are the list of external extensions eligible for ".concat(this.brandName, ": "));
        var fashiondesignExtensions = ['Clo3D', 'PatternSmith', 'Telestia Creator', 'Canva'];
        for (var i = 0; i < fashiondesignExtensions.length; i++) {
            console.log(fashiondesignExtensions[i]);
        }
    };
    Fashion_Design.prototype.Business_partners = function (anotherUser) {
        if (this.user === 'agree' && anotherUser.user === 'agree') {
            console.log("".concat(this.user, " selects partnership with ").concat(this.retailers));
        }
        else if (this.user === 'agree' && this.collaborator === 'agree') {
            console.log("".concat(this.user, " selects partnership with a ").concat(this.collaborator));
        }
        else if (this.user === 'agree' && this.retailers === 'agree') {
            console.log("".concat(this.user, " selects partnership with a ").concat(this.retailers));
        }
        else {
            console.log("".concat(this.user, " denied to have partnership"));
        }
    };
    Fashion_Design.prototype.Collaboration = function () {
        if (this.user === 'inquire') {
            console.log("".concat(this.user, " is eligible to collab with ").concat(this.collaborator));
        }
        else {
            console.log("Collaboration rejected!");
        }
    };
    Fashion_Design.prototype.Ecommerce_space = function () {
        var ecommerceFeatures = ['User Management',
            'Product Catalog',
            'Ordering and Payment',
            'Inventory Management',
            'Search and Filtering',
            'Discounts and Coupons',
            'Shipping and Tracking',
            'Reviews and Ratings',
            'Order History',
            'Customer Support'];
        for (var _i = 0, ecommerceFeatures_1 = ecommerceFeatures; _i < ecommerceFeatures_1.length; _i++) {
            var features = ecommerceFeatures_1[_i];
            console.log('E-commerce Features: ');
            console.log(features);
        }
        if (this.user === "agree") {
            console.log("These items cost: ".concat(this.cost));
            console.log("Quantity: ".concat(this.quantity));
        }
        else {
            console.log('Display denied');
        }
    };
    Fashion_Design.prototype.Social_media = function () {
        var socialMediaFeatures = ['User Management',
            'Connections',
            'Post and Content',
            'Newsfeed',
            'Privacy and Security',
            'Reactions',
            'Notifications',
            'Search Engine',
            'Reporting and Moderation',
            'Analytics and Insights'];
        for (var _i = 0, socialMediaFeatures_1 = socialMediaFeatures; _i < socialMediaFeatures_1.length; _i++) {
            var features = socialMediaFeatures_1[_i];
            console.log('Social Media Features: ');
            console.log(features);
        }
    };
    Fashion_Design.prototype.legal_matters = function () {
        if (this.user === 'verification') {
            return ("".concat(this.user, " verified partnerships"));
        }
        else {
            return ("".concat(this.user, " didn't passed the required evaluation"));
        }
    };
    return Fashion_Design;
}(Main_Features));
//-----------------------------------------------------------------------------------------------------------------
var Structural_Design = /** @class */ (function (_super) {
    __extends(Structural_Design, _super);
    function Structural_Design(brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality, collaborator, building, bridges, stadium, house, furniture, vehicles, anotherUser) {
        var _this = _super.call(this, brandName, feature, user, seller, retailers, function_, cost, quantity, product, quality, collaborator) || this;
        _this.building = building;
        _this.bridges = bridges;
        _this.stadium = stadium;
        _this.house = house;
        _this.furniture = furniture;
        _this.vehicles = vehicles;
        _this.anotherUser = anotherUser;
        return _this;
    }
    Structural_Design.prototype.getBuilding = function () {
        return this.building;
    };
    Structural_Design.prototype.setBuilding = function (building) {
        this.building = building;
    };
    Structural_Design.prototype.getBridges = function () {
        return this.bridges;
    };
    Structural_Design.prototype.setBridges = function (bridges) {
        this.bridges = bridges;
    };
    Structural_Design.prototype.getStadium = function () {
        return this.stadium;
    };
    Structural_Design.prototype.setStadium = function (stadium) {
        this.stadium = stadium;
    };
    Structural_Design.prototype.getHouse = function () {
        return this.house;
    };
    Structural_Design.prototype.setHouse = function (house) {
        this.house = house;
    };
    Structural_Design.prototype.getFurniture = function () {
        return this.furniture;
    };
    Structural_Design.prototype.setFurniture = function (furniture) {
        this.furniture = furniture;
    };
    Structural_Design.prototype.getVehicles = function () {
        return this.vehicles;
    };
    Structural_Design.prototype.setVehicles = function (vehicles) {
        this.vehicles = vehicles;
    };
    Structural_Design.prototype.Designing_Tools = function () {
        console.log("These ".concat(this.brandName, " has variety of tools designated for a specific item  "));
        var arrayOfObjects = [this.building, this.bridges, this.stadium, this.house, this.furniture, this.vehicles];
        for (var i = 0; i < arrayOfObjects.length; i++) {
            console.log(arrayOfObjects[i]);
            if (arrayOfObjects[i] == this.building) {
                console.log('Building Designing Tools: ');
                console.log("Site analysis, Building Program, Building Envelope, Structural system, Mechanical systems, Interior design");
            }
            else if (arrayOfObjects[i] == this.bridges) {
                console.log('Bridge Designing Tools: ');
                console.log("Structural system, Bridge deck, Substructure, Superstructure, Connections, Bridge railing, Bridge lighting, Design Structures");
            }
            else if (arrayOfObjects[i] == this.stadium) {
                console.log('Stadium designing Tools: ');
                console.log("Site analysis, Building program, Spectator experience, Playing field, Structural system, Mechanical systems, Security and safety ");
            }
            else if (arrayOfObjects[i] == this.house) {
                console.log('House Designing Tools: ');
                console.log("Site analysis, Building program, Building envelope, Structural system, Mechanical systems, Interior design");
            }
            else if (arrayOfObjects[i] == this.furniture) {
                console.log('Furniture Designing Tools: ');
                console.log("Type, Template, Shape, Form, Curvature, Materials, Scale and Proportion, Color and texture");
            }
            else if (arrayOfObjects[i] == this.vehicles) {
                console.log('Vehicles Designing Tools: ');
                console.log('Type, Exterior Design, Interior Design, Powertrain, Drivetrain, Suspension and Braking, Safety Features');
            }
        }
    };
    Structural_Design.prototype.Export_Property = function () {
        if (this.user === 'agree') {
            console.log("".concat(this.user, " selects to export ").concat(this.product));
        }
        else {
            console.log("".concat(this.user, " disagree to export ").concat(this.product));
        }
    };
    Structural_Design.prototype.Industry_Partners = function () {
        console.log("These are the list of industries for ".concat(this.brandName, ": "));
        var structuralIndustries = ["Construction company", "Real estate Developer", "Engineering Contractor"];
        for (var i = 0; i < structuralIndustries.length; i++) {
            console.log(structuralIndustries[i]);
        }
    };
    Structural_Design.prototype.Unique_Features = function () {
        console.log("This ".concat(this.brandName, " list of unique features: "));
        var uniquefeatures = ['3D view', 'AutoCAd extension', 'Structural analysis'];
        for (var i = 0; i < uniquefeatures.length; i++) {
            console.log(uniquefeatures[i]);
        }
    };
    Structural_Design.prototype.External_extensions = function () {
        console.log("These are the list of external extensions eligible for ".concat(this.brandName, ": "));
        var fashiondesignExtensions = ['AutoCad', 'Revit', 'SketchUp', 'Etabs'];
        for (var i = 0; i < fashiondesignExtensions.length; i++) {
            console.log(fashiondesignExtensions[i]);
        }
    };
    Structural_Design.prototype.Business_partners = function (anotherUser) {
        if (this.user === 'agree' && anotherUser.user === 'agree') {
            return ("".concat(this.user, " selects partnership with ").concat(anotherUser));
        }
        else if (this.user === 'agree' && this.collaborator == 'agree') {
            return ("".concat(this.user, " selects partnership with ").concat(this.collaborator));
        }
        else if (this.user === 'agree' && this.retailers === 'agree') {
            return ("".concat(this.user, " selects partnership with ").concat(this.retailers));
        }
        else {
            return ("".concat(this.user, " has denied a partnership!"));
        }
    };
    Structural_Design.prototype.Collaboration = function () {
        if (this.user === 'agree' && this.collaborator === 'agree') {
            console.log("".concat(this.user, " is eligible to collab with ").concat(this.collaborator));
        }
        else {
            console.log('Collaboration rejected');
        }
    };
    Structural_Design.prototype.Ecommerce_space = function () {
        console.log('E-commerce Features: ');
        var ecommerceFeatures = ['User Management',
            'Product Catalog',
            'Ordering and Payment',
            'Inventory Management',
            'Search and Filtering',
            'Discounts and Coupons',
            'Shipping and Tracking',
            'Reviews and Ratings',
            'Order History',
            'Customer Support'];
        for (var _i = 0, ecommerceFeatures_2 = ecommerceFeatures; _i < ecommerceFeatures_2.length; _i++) {
            var features = ecommerceFeatures_2[_i];
            console.log(features);
        }
        if (this.user === "agree") {
            console.log("These item/s cost : ".concat(this.cost));
            console.log("Quantity: ".concat(this.quantity));
        }
        else {
            console.log("Display denied");
        }
    };
    Structural_Design.prototype.Social_media = function () {
        console.log('Social Media features: ');
        var socialMediaFeatures = ['User Management',
            'Connections',
            'Post and Content',
            ' Newsfeed',
            'Privacy and Security',
            'Reactions',
            'Notifications',
            'Search Engine',
            'Reporting and Moderation',
            'Analytics and Insights'];
        for (var _i = 0, socialMediaFeatures_2 = socialMediaFeatures; _i < socialMediaFeatures_2.length; _i++) {
            var features = socialMediaFeatures_2[_i];
            console.log(features);
        }
    };
    Structural_Design.prototype.legal_matters = function () {
        if (this.user === 'verification') {
            console.log("".concat(this.user, " has been verified"));
        }
        else if (this.retailers === 'verification') {
            console.log("".concat(this.retailers, " has been verified"));
        }
        else {
            console.log('Verification has failed');
        }
    };
    return Structural_Design;
}(Main_Features));
//TEST CASES
var fashion = new Fashion_Design('Fashion Design', 'Unique Features', 'Lois Alonsagay', 'Sheree Laluma', 'Shoppe', 'Fashion Designing', 200, 1, 'Clothing, Bags, Accessories, Shoes', 'Unique Qualities', 'Chito Poral', 'dress', 'backpack', 'necklace', 'doll shoes', 'Manaff Kassim');
console.log("\n----------------------------------------------------------");
fashion.Export_Property();
console.log("\n----------------------------------------------------------");
fashion.Industry_Partners();
console.log("\n----------------------------------------------------------");
fashion.Unique_Features();
console.log("\n----------------------------------------------------------");
fashion.External_extensions();
console.log("\n----------------------------------------------------------");
fashion.Business_partners('Manaff Kassim');
console.log("\n----------------------------------------------------------");
fashion.Collaboration();
console.log("\n----------------------------------------------------------");
fashion.Ecommerce_space();
console.log("\n----------------------------------------------------------");
fashion.Social_media();
console.log("\n----------------------------------------------------------");
fashion.legal_matters();
console.log('\n----------------------------------------------------------');
fashion.Designing_Tools();
var structure = new Structural_Design('Structure Design', 'Unique Features', 'Lois', 'Rhea', 'Retailer 2', 'Structure Designs', 12345, 1, 'Products: vehicles, etc', 'Unique Qualities', 'Chito Poral', 'skyscraper', 'suspension bridge', 'open stadium', 'bungalow', 'sofa', 'tricycle', 'Manaff kassim');
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
structure.Business_partners('Manaff Kassim');
console.log("\n----------------------------------------------------------");
structure.Collaboration();
console.log("\n----------------------------------------------------------");
structure.Ecommerce_space();
console.log("\n----------------------------------------------------------");
structure.Social_media();
console.log("\n----------------------------------------------------------");
structure.legal_matters();
