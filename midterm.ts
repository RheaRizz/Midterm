
//Rhea Rizz M. Perocho
//Lois Kirsten Alonsagay
 


// This project serves as a concept sketch of our app Designer or deSigner,
// deSigner is a multi-purpose designing tool with an e-commerce platform. 
//The application aims to unleash your creative and entrepreneurial potential. 
//It provides a wide-range of designing tools that is catered to the global digital marketplace. 


interface Designer {

    Designing_Tools() : string       //displays the list of tools designated for that particular feature
    Export_Property() : string       // depends on the user 
    Industry_Partners() : string    //list of industries
    Unique_Features() : string      //unique feature of the particular child class. implement encapsulation
    External_extensions() : string  //eligible external extensions (github, visual studio code, autocad, canva)
    Business_partners() : string    //sellers or business interaction with the employers aka users.
    Collaboration() : string        //collaboration between the professionals, employers and users to a working project.
    Ecommerce_space() : string      //buying and selling space.
    Social_media() : string         //option to post or display it in the users guild. 
    legal_matters() : string        //if the seller and the professionals have successfully signed in their identity as a pro they are now permitted to be in the one: boolean
                                    //if the users have taken the designated parameters to succesfully export her product. this will take legal action on teh said guild.
}


class Main_Features implements Designer {

    brandName: string;
    feature: string;
    user: string;
    seller: string;
    retailers: string;
    function_ : string;
    cost: number;
    quantity: number;
    product: string;
    quality: string
    collaborator: string;

    constructor
        (brandName: string, feature: string, user: string, seller: string, 
        retailers: string, function_: string, cost: number, quantity: number, product: string, 
        quality: string, collaborator: string) {


        this.brandName = brandName;
        this.feature = feature
        this.user = user;
        this.seller = seller;
        this.retailers = retailers;
        this.function_ = function_;
        this.quantity = quantity;
        this.cost = cost;
        this.product = product;
        this.quality = quality
        this.collaborator = collaborator;


    }


    Designing_Tools()  {

        return (`${this.brandName} has variety of tools designated for a specific item  `);

    }  


    Export_Property() {

        return (`${this.user} selects to export this product`);

    }  
    
    
    Industry_Partners()  {

        return (`These are the list of industries for ${this.brandName} `);

    }


    Unique_Features()   {

        return (`${this.brandName} has list of unique features on its own`);

    }  


    External_extensions() {

        return (`These are the list of external extensions eligible for ${this.brandName}`);

    }


    Business_partners() {

        return (`${this.user} selects his/her own partnership with ${this.retailers}`);

    } 


    Collaboration()  {

        return (`${this.user} wants to do a collab with ${this.collaborator}`);

    }    


    Ecommerce_space()  {

        return (`${this.user} can display desired and ${this.cost} items : 

        choice to buy/sell with a specific number ${this.quantity} of quantities   .`)

    }  


    Social_media()   {

        return(`${this.user} markets ${this.product} `);

    }     


    legal_matters() {

        if (this.user === 'verification') {

            return (`${this.user} verified partnerships`);

        } else {

             return (`${this.user} didn't passed the required evaluation`);

        }

        

    }


}


//--------------------------------------------------------------------------------------------------



class Fashion_Design extends Main_Features  { 

    private clothing: string;
    private bags: string;
    private accessories: string;
    private shoes: string;
    private anotherUser: string;


    constructor(brandName: string, feature: string, user: string, seller: string, 
        retailers: string, function_: string, cost: number, quantity: number, product: string, 
        quality: string, collaborator: string, clothing: string, bags: string, accessories: string, shoes: string, anotherUser : string) {


    super(brandName, feature, user, seller, retailers, function_, 
          cost, quantity, product, quality, collaborator)

          this.clothing = clothing
          this.bags = bags
          this.accessories = accessories
          this.shoes = shoes
          this.anotherUser = anotherUser

    }


    getClothing(): string {

        return this.clothing

    }


    setClothing(clothing: string) {

        this.clothing = clothing

    }


    getBags(): string {

        return this.bags

    }


    setBags(bags: string) {

        this.bags = bags

    }


    getAccessories(): string {

        return this.accessories

    }


    setAccessories(accessories: string) {

        this.accessories = accessories

    }


    getShoes(): string {

        return this.shoes

    }


    setShoes(shoes: string) {

        this.shoes = shoes

    }




    Designing_Tools() : any {


        let arrayOfObjects = [this.shoes, this.bags, this.accessories, this.clothing]
        
        for(let i = 0 ; i < arrayOfObjects.length; i++) {

            console.log(arrayOfObjects[i])
        
            if (arrayOfObjects[i] == this.shoes){

                console.log('Shoes Designing Tools: ');

                console.log("Foot shape, Size, Materials, Sole, Upper design, Color and Texture, Branding and Logo Design");

            }else if (arrayOfObjects[i] == this.bags){

                console.log('Bag Designing Tools: ');

                console.log("Functionality, Size and shape, Materials and construction, Compartments and pockets, Strap and handle design, Color and texture, Branding and logo design ");

            }else if (arrayOfObjects[i] == this.accessories){

                console.log('Accessories Designing Tools: ')

                console.log("Functionality, Size and shape, Materials and construction, Closure and fastening, Color and texture");

            }else if (arrayOfObjects[i] == this.clothing)

                console.log('Clothing Designing Tools: ')

                console.log("Silhouette, Fabrics, Colors and prints, Embellishments, Details, Fit");
                
        }
        
    }  



    Export_Property() : any {

        if (this.user === "agree") {

            console.log(`${this.user} selects to export ${this.product} `);

        } else {

		    console.log(`${this.user} disagree to export ${this.product}`);

        }

    }   



    Industry_Partners() : any  {

        console.log(`These are the list of industries for ${this.brandName} `)

        let fashionIndustries = ['Hashikon', 'Zalora', 'Prada', 'Shein', 'Lovelace'];
	    
        for(let i = 0 ; i < fashionIndustries.length; i++) {

            console.log(fashionIndustries[i])

        }

    }


    Unique_Features() : any  {

        console.log(`Unique features for ${this.brandName}: `)

        let uniquefeatures = ['3D Virtual Fitting Room', 'Fabric Visualization', 'Trend Forecasting', 'Style Recommendations',]

        for(let i = 0 ; i < uniquefeatures.length; i++) {

            console.log(uniquefeatures[i]);

        }

    }  


    External_extensions() : any {

        console.log(`These are the list of external extensions eligible for ${this.brandName}: `)

        let fashiondesignExtensions = ['Clo3D', 'PatternSmith', 'Telestia Creator', 'Canva'];
        
        for(let i = 0 ; i < fashiondesignExtensions.length; i++) {

            console.log(fashiondesignExtensions[i]);

        }

    }


    Business_partners(anotherUser : any | Fashion_Design) : void {

        
	    if (this.user === 'agree' && anotherUser.user === 'agree') {

            console.log (`${this.user} selects partnership with ${this.retailers}`);
           
        } else if (this.user === 'agree' && this.collaborator === 'agree' ){
            
            console.log (`${this.user} selects partnership with a ${this.collaborator}`);
            
        }else if (this.user === 'agree' && this.retailers === 'agree'){

            console.log (`${this.user} selects partnership with a ${this.retailers}`);
	        
        }else {
            
            console.log (`${this.user} denied to have partnership`);

        }
    
    } 
    
    
    Collaboration() : any {

        if (this.user === 'inquire') {

	        console.log(`${this.user} is eligible to collab with ${this.collaborator}`);

        } else {

            console.log(`Collaboration rejected!`)
        }

    }    


    Ecommerce_space() : any {

        let ecommerceFeatures : string[] = ['User Management', 
                                            'Product Catalog', 
                                            'Ordering and Payment', 
                                            'Inventory Management', 
                                            'Search and Filtering', 
                                            'Discounts and Coupons', 
                                            'Shipping and Tracking', 
                                            'Reviews and Ratings', 
                                            'Order History', 
                                            'Customer Support'];

        for (let features of ecommerceFeatures) {
        
        console.log('E-commerce Features: ')

        console.log(features)

        }
        
        if (this.user === "agree"){

            console.log(`These items cost: ${this.cost}`) 

            console.log(`Quantity: ${this.quantity}`)
            

        } else {

            console.log('Display denied');

        }

    }  


    Social_media() : any  {
        

    console.log('Social Media Features: ')

    let socialMediaFeatures : string[] = [  'User Management', 
                                            'Connections', 
                                            'Post and Content', 
                                            'Newsfeed', 
                                            'Privacy and Security', 
                                            'Reactions', 
                                            'Notifications', 
                                            'Search Engine', 
                                            'Reporting and Moderation', 
                                            'Analytics and Insights'];

        for (let features of socialMediaFeatures) {

        console.log(features)

        }

    }     


    legal_matters() : any{

        if (this.user === 'verification') {

            return (`${this.user} verified partnerships`);

        } else {
             return (`${this.user} didn't passed the required evaluation`)
        }
    }


}



//-----------------------------------------------------------------------------------------------------------------




class Structural_Design extends Main_Features  {


    private building : string;
    private bridges: string;
    private stadium: string;
    private house: string;
    private furniture: string;
    private vehicles : string;
    private anotherUser : string


    constructor(brandName: string, feature: string, user: string, seller: string, 
        retailers: string, function_: string, cost: number, quantity: number, product: string, 
        quality: string, collaborator: string, building: string, bridges : string, stadium : string, house : string, furniture : string, vehicles : string, anotherUser : string) {


    super(brandName, feature, user, seller, retailers, function_, 
          cost, quantity, product, quality, collaborator)

          this.building = building;
          this.bridges = bridges;
          this.stadium = stadium;
          this.house = house;
          this.furniture = furniture;
          this.vehicles = vehicles;
          this.anotherUser = anotherUser

    }


    getBuilding(): string {

        return this.building

    }

    setBuilding(building: string) {

        this.building = building;

    }

    getBridges(): string {

        return this.bridges

    }

    setBridges(bridges : string) {

        this.bridges = bridges;

    }


    getStadium(): string {

        return this.stadium;

    }


    setStadium (stadium : string) {

        this.stadium = stadium;

    }


    getHouse(): string {

        return this.house;

    }

    setHouse(house : string) {

        this.house = house;

    }

    getFurniture() {

        return this.furniture;

    }

    setFurniture(furniture : string) {

        this.furniture = furniture;

    }

    getVehicles() {

        return this.vehicles;

    }

    setVehicles(vehicles : string) {

        this.vehicles = vehicles;


    }





    Designing_Tools() : any {

        console.log(`These ${this.brandName} has variety of tools designated for a specific item  `)

        let arrayOfObjects = [this.building, this.bridges, this.stadium, this.house, this.furniture, this.vehicles]
        
        for(let i = 0 ; i < arrayOfObjects.length; i++) {

            console.log(arrayOfObjects[i])
        
            if (arrayOfObjects[i] == this.building){

                console.log('Building Designing Tools: ')

                console.log("Site analysis, Building Program, Building Envelope, Structural system, Mechanical systems, Interior design")

            }else if (arrayOfObjects[i] == this.bridges){

                console.log('Bridge Designing Tools: ')

                console.log("Structural system, Bridge deck, Substructure, Superstructure, Connections, Bridge railing, Bridge lighting, Design Structures")

            }else if (arrayOfObjects[i] == this.stadium){

                console.log('Stadium designing Tools: ')

                console.log("Site analysis, Building program, Spectator experience, Playing field, Structural system, Mechanical systems, Security and safety ")

            }else if (arrayOfObjects[i] == this.house){

                console.log('House Designing Tools: ')

                console.log("Site analysis, Building program, Building envelope, Structural system, Mechanical systems, Interior design")

            }else if (arrayOfObjects[i] == this.furniture) {

                console.log('Furniture Designing Tools: ')
                
                console.log("Type, Template, Shape, Form, Curvature, Materials, Scale and Proportion, Color and texture")

            } else if (arrayOfObjects[i] == this.vehicles) {

                console.log('Vehicles Designing Tools: ')

                console.log('Type, Exterior Design, Interior Design, Powertrain, Drivetrain, Suspension and Braking, Safety Features')
                
            } 

    }  

}
    

    Export_Property(): any {

                
        if (this.user === 'agree') {

            console.log (`${this.user} selects to export ${this.product}`)

        } else {
            
		    console.log (`${this.user} disagree to export ${this.product}`)

        }

    }  


    Industry_Partners() : any {

        console.log(`These are the list of industries for ${this.brandName}: `)

        let structuralIndustries = ["Construction company", "Real estate Developer", "Engineering Contractor"]
	    
        for(let i=0 ; i < structuralIndustries.length; i++) {

            console.log(structuralIndustries[i])

        }
    }


    Unique_Features() : any  {

       console.log(`This ${this.brandName} list of unique features: `)

        let uniquefeatures = ['3D view', 'AutoCAd extension', 'Structural analysis'];

        for(let i=0 ; i < uniquefeatures.length; i++) {

            console.log(uniquefeatures[i])

        }
    }  



    External_extensions() : any {

        console.log(`These are the list of external extensions eligible for ${this.brandName}: `);

        let fashiondesignExtensions = ['AutoCad', 'Revit', 'SketchUp', 'Etabs'];
        
        for(let i=0 ; i < fashiondesignExtensions.length; i++) {

            console.log(fashiondesignExtensions[i])

        }

    }


    Business_partners(anotherUser : any | Structural_Design) : string {
        
	    if (this.user === 'agree' && anotherUser.user === 'agree'){

            return (`${this.user} selects partnership with ${anotherUser}`);
           
        } else if (this.user === 'agree' && this.collaborator == 'agree' ){

            return (`${this.user} selects partnership with ${this.collaborator}`);
            
        }else if (this.user === 'agree' && this.retailers === 'agree'){

            return (`${this.user} selects partnership with ${this.retailers}`);
	        
        }else {

            return (`${this.user} has denied a partnership!`);
        }
    
    } 

    Collaboration() : any {


        if (this.user === 'agree' && this.collaborator === 'agree'){

	        console.log(`${this.user} is eligible to collab with ${this.collaborator}`);

        } else {

            console.log('Collaboration rejected')
        }
    }    


    Ecommerce_space() : any{

        console.log('E-commerce Features: ')

        let ecommerceFeatures : string[] = [ 'User Management', 
                                            'Product Catalog', 
                                            'Ordering and Payment', 
                                            'Inventory Management', 
                                            'Search and Filtering', 
                                            'Discounts and Coupons', 
                                            'Shipping and Tracking', 
                                            'Reviews and Ratings', 
                                            'Order History', 
                                            'Customer Support'];

        for (let features of ecommerceFeatures) {
        

        console.log(features)

        }
        
        if (this.user === "agree"){

            console.log(`These item/s cost : ${this.cost}`)

            console.log(`Quantity: ${this.quantity}`)

        } else {

            console.log(`Display denied`)

        }
    }  

    Social_media() : any {

        console.log('Social Media features: ');

        let socialMediaFeatures : string[] = ['User Management', 
                                              'Connections', 
                                              'Post and Content', 
                                              ' Newsfeed', 
                                              'Privacy and Security', 
                                              'Reactions', 
                                              'Notifications', 
                                              'Search Engine', 
                                              'Reporting and Moderation', 
                                              'Analytics and Insights']
        
        for (let features of socialMediaFeatures) {

            console.log(features)

        }


    }  
    
    
    legal_matters() : any {

        if (this.user === 'verification') {

            console.log(`${this.user} has been verified`);

        } else if (this.retailers === 'verification') {
            
            console.log(`${this.retailers} has been verified`)
        } else {

            console.log('Verification has failed')

        }        

    }

}





//TEST CASES

const fashion = new Fashion_Design
('Fashion Design', 
'Unique Features', 
'Lois Alonsagay', 
'Sheree Laluma', 
'Shoppe', 
'Fashion Designing', 
200, 1, 
'Clothing, Bags, Accessories, Shoes',
 'Unique Qualities', 'Chito Poral', 'dress', 'backpack', 'necklace', 'doll shoes', 'Manaff Kassim') 

console.log("\n----------------------------------------------------------")
fashion.Export_Property()

console.log("\n----------------------------------------------------------")
fashion.Industry_Partners()

console.log("\n----------------------------------------------------------")
fashion.Unique_Features();

console.log("\n----------------------------------------------------------")
fashion.External_extensions();

console.log("\n----------------------------------------------------------")
fashion.Business_partners('Manaff Kassim');

console.log("\n----------------------------------------------------------")
fashion.Collaboration();

console.log("\n----------------------------------------------------------")
fashion.Ecommerce_space();

console.log("\n----------------------------------------------------------")
fashion.Social_media();

console.log("\n----------------------------------------------------------")
fashion.legal_matters();

console.log('\n----------------------------------------------------------')
fashion.Designing_Tools();




const structure = new Structural_Design
('Structure Design', 
'Unique Features', 
'Lois', 
'Rhea', 
'Retailer 2',
'Structure Designs', 
12345, 1, 
'Products: vehicles, etc',
'Unique Qualities','Chito Poral', 'skyscraper', 'suspension bridge', 'open stadium', 'bungalow', 'sofa', 'tricycle', 'Manaff kassim' 
)


console.log("\n----------------------------------------------------------")
structure.Designing_Tools();

console.log("\n----------------------------------------------------------")
structure.Export_Property()

console.log("\n----------------------------------------------------------")
structure.Industry_Partners()

console.log("\n----------------------------------------------------------")
structure.Unique_Features();

console.log("\n----------------------------------------------------------")
structure.External_extensions();

console.log("\n----------------------------------------------------------")
structure.Business_partners('Manaff Kassim');

console.log("\n----------------------------------------------------------")
structure.Collaboration();

console.log("\n----------------------------------------------------------")
structure.Ecommerce_space();

console.log("\n----------------------------------------------------------")
structure.Social_media();

console.log("\n----------------------------------------------------------")
structure.legal_matters();



