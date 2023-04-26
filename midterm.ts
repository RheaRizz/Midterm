
//Rhea Rizz M. Perocho
//Lois Kirsten Alonsagay



// This project serves as a concept sketch of our app Designer or deSigner,
// deSigner is a multi-purpose designing tool with an e-commerce platform. 
//The application aims to unleash your creative and entrepreneurial potential. 
//It provides a wide-range of designing tools that is catered to the global digital marketplace. 




interface Designer {

    Designing_Tools() : string//displays the list of tools designated for that particular feature
    Export_Property() : string//Tangible or Intangible 
    Industry_Partners() : string//list o f industries
    Unique_Features() : string//unique feature of the particular child class. implement encapsulation
    External_extensions() : string//eligible external extensions (github, visual studio code, autocad, canva)
    Business_partners() : string  //sellers or business interaction with the employers aka users.
    Collaboration() : string//is collaboration between the professionals, employers and users to a working project.
    Ecommerce_space() : string//buy and sell space.
    Social_media() : string//option to post or display it in the users guild. 
    legal_matters() : string//if the seller and the professionals have successfully signed in their identity as a pro they are now permitted to be in the one: boolean
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

    constructor
        (brandName: string, feature: string, user: string, seller: string, 
        retailers: string, function_: string, cost: number, quantity: number, product: string, 
        quality: string) {


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


    }


    Designing_Tools()  {
        return (`This ${this.brandName} has variety of tools designated for a specific item  `)
    }  


    Export_Property() {
        return (`${this.user} selects to export ${this.product} `)

    }  
    
    
    Industry_Partners()  {
        return (`These are the list of industries for this ${this.brandName} `)
    }


    Unique_Features()   {
        return (`This ${this.brandName} has list of unique features and its own ${this.function_} `)
    }  


    External_extensions() {
        return (`These are the list of external extensions eligible for ${this.brandName}`)
    }


    Business_partners() {
        return (`${this.user} selects own partnership`)
    } 


    Collaboration()  {
        return (`${this.user} has a free will to collab with a professional to strengthen ${this.quality} of ${this.product}`)
    }    


    Ecommerce_space()  {
        return (`${this.user} can display desired and ${this.cost} items : 
        choice to buy/sell with a specific number ${this.quantity} of quantities   .`)
    }  


    Social_media()   {
        return(`${this.user} selects way to market ${this.product} `)
    }     


    legal_matters() {
        return (`${this.user} verified partnerships`)
    }


}

class Fashion_Design extends Main_Features implements Designer { 

    private clothing: string;
    private bags: string;
    private accessories: string;
    private shoes: string;


    constructor(brandName: string, feature: string, user: string, seller: string, 
        retailers: string, function_: string, cost: number, quantity: number, product: string, 
        quality: string, clothing: string, bags: string, accessories: string, shoes: string) {


    super(brandName, feature, user, seller, retailers, function_, 
          cost, quantity, product, quality)

          this.clothing = clothing
          this.bags = bags
          this.accessories = accessories
          this.shoes = shoes

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

        console.log(`These ${this.brandName} has variety of tools designated for a specific item  `)

        let arrayOfObjects = [this.shoes, this.bags, this.accessories, this.clothing]
        
        for(let i=0 ; i < arrayOfObjects.length; i++) {
            console.log(arrayOfObjects[i])
        
            if (arrayOfObjects[i] == this.shoes){

                console.log("Foot shape, size, Materials and construction, Sole, Upper design, Color and Texture, Branding and logo design")

            }else if (arrayOfObjects[i] == this.bags){

                console.log("Functionality, Size and shape, Materials and construction, Compartments and pockets, Strap and handle design, Color and texture, Branding and logo design ")

            }else if (arrayOfObjects[i] == this.accessories){

                console.log("Functionality, Size and shape, Materials and construction, Closure and fastening, Color and texture")

            }else if (arrayOfObjects[i] == this.clothing)

                console.log("Silhouette, Fabrics, Colors and prints, Embellishments, Details, Fit")
                
        }
    }  


    Export_Property() : any {

        if (this.user === "agree") {
            console.log(`${this.user} selects to export ${this.product} `)
        } else {
		    console.log(`${this.user} disagree to export ${this.product}`)
        }

    }   


    Industry_Partners() : any  {

        console.log(`These are the list of industries for this ${this.brandName} `)
        let fashionIndustries = ["List of partners", "List of partners", "List of partners"]
	    
        for(let i=0 ; i < fashionIndustries.length; i++) {
            console.log(fashionIndustries[i])

        }

    }


    Unique_Features() : any  {

        console.log(`This ${this.brandName} has list of unique features and its own ${this.function_} `)

        let uniquefeatures = ["List of feature", "List of feature", "List of feature"]

        for(let i=0 ; i < uniquefeatures.length; i++) {

            console.log(uniquefeatures[i]);

        }

    }  


    External_extensions() : any {

        console.log(`These are the list of external extensions eligible for ${this.brandName}`)

        let fashiondesignExtensions = ["list of extensions eligible on the said class"]
        
        for(let i=0 ; i < fashiondesignExtensions.length; i++) {

            console.log(fashiondesignExtensions[i])

        }

    }


    Business_partners() : any {
        
	    if (this.user === "business proposal"){
            console.log(`${this.user} selects partnership in business`)
           
        } else if (this.user === "professional proposal" ){
            console.log(`${this.user} selects partnership with a professional`)
            
        }else if (this.user === "anotherUser proposal"){
            console.log(`${this.user} selects partnership with a professional`)
	        
        }else {
            console.log(`${this.user} denied to have partnership!`)
        }
    
    } 
    
    
    Collaboration() : any {

        console.log(`${this.user} has a free will to collab with a professional to strengthen ${this.quality} of ${this.product}`)

        if (this.user === "professional"){
	        console.log(`${this.user} is eligible to collab with a professional to strengthen ${this.quality} of ${this.product}`)
        } else {
            console.log(`Collaboration rejected!`)
        }

    }    


    Ecommerce_space() : any {
        
        if (this.user === "agree"){
            console.log(`Display desired items and ${this.cost} items : 
            choice to buy/sell with a specific number ${this.quantity} of quantities`)
        } else {
            console.log(`Display denied; no participants as ${this.seller} and ${this.retailers} of this brand!`)
        }

    }  


    Social_media() : any  {

        if (this.user === "agree"){
            console.log(`${this.user} selects social media in marketing the designs`)
        } else {
            console.log(`${this.user} in ${this.brandName}: Declined Project Design Marketing!`)
        }
    }     


    legal_matters() : any{

        console.log(`${this.user} verified partnerships`);

    }


}



//-----------------------------------------------------------------------------------------------------------------




class Structural_Design extends Main_Features implements Designer {


    private building : string;
    private bridges: string;
    private stadium: string;
    private house: string;
    private furniture: string;
    private vehicles : string;


    constructor(brandName: string, feature: string, user: string, seller: string, 
        retailers: string, function_: string, cost: number, quantity: number, product: string, 
        quality: string, building: string, bridges : string, stadium : string, house : string, furniture : string, vehicles : string) {


    super(brandName, feature, user, seller, retailers, function_, 
          cost, quantity, product, quality)

          this.building = building;
          this.bridges = bridges;
          this.stadium = stadium;
          this.house = house;
          this.furniture = furniture;
          this.vehicles = vehicles;

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

                console.log("Site analysis, Building program, Building envelope, Structural system, Mechanical systems, Interior design")

            }else if (arrayOfObjects[i] == this.bridges){

                console.log("Structural system, Bridge deck, Substructure, Superstructure, Connections, Bridge railing, Bridge lighting, Design Structures")

            }else if (arrayOfObjects[i] == this.stadium){

                console.log("Site analysis, Building program, Spectator experience, Playing field, Structural system, Mechanical systems, Security and safety ")

            }else if (arrayOfObjects[i] == this.house){

                console.log("Site analysis, Building program, Building envelope, Structural system, Mechanical systems, Interior design")

            }else if (arrayOfObjects[i] == this.furniture) {
                
                console.log("type, template, shape, form, curvature, Materials, Scale and proportion, Color and texture")

            } else if (arrayOfObjects[i] == this.vehicles) {

                console.log('type, exterior design, interior design, powertrain, drivetrain, Suspension and braking, Safety features')
                
            } 

    }  
    


    Export_Property() {

                
        if (this.user === 'agree') {

            console.log (`${this.user} selects to export ${this.product} `)

        } else {
            
		    console.log (`${this.user} disagree to export ${this.product}`)

        }

    }   


    Industry_Partners()  {

        console.log(`These are the list of industries for this ${this.brandName} `)
        let fashionIndustries = ["List of partners", "List of partners", "List of partners"]
	    
        for(let i=0 ; i < fashionIndustries.length; i++) {
            console.log(fashionIndustries[i])
        }
    }

    Unique_Features()   {

        console.log(`This ${this.brandName} has list of unique features and its own ${this.function_} `)
        let uniquefeatures = ["List of feature", "List of feature", "List of feature"]

        for(let i=0 ; i < uniquefeatures.length; i++) {
            console.log(uniquefeatures[i])
        }
    }  



    External_extensions() {

        console.log(`These are the list of external extensions eligible for ${this.brandName}`)
        let fashiondesignExtensions = ["list of extensions eligible on the said class"]
        
        for(let i=0 ; i < fashiondesignExtensions.length; i++) {
            console.log(fashiondesignExtensions[i])
        }
    }


    Business_partners() {
        
	    if (this.user === "business proposal"){
            console.log(`${this.user} selects partnership in business`)
           
        } else if (this.user === "professional proposal" ){
            console.log(`${this.user} selects partnership with a professional`)
            
        }else if (this.user === "anotherUser proposal"){
            console.log(`${this.user} selects partnership with a professional`)
	        
        }else {
            console.log(`${this.user} denied to have partnership!`)
        }
    
    } Collaboration() {

        console.log(`${this.user} has a free will to collab with a professional to strengthen ${this.quality} of ${this.product}`)

        if (this.user === "professional"){
	        console.log(`${this.user} is eligible to collab with a professional to strengthen ${this.quality} of ${this.product}`)
        } else {
            console.log(`Collaboration rejected!`)
        }
    }    
    Ecommerce_space(){
        
        if (this.user === "agree"){
            console.log(`Display desired items and ${this.cost} items : 
            choice to buy/sell with a specific number ${this.quantity} of quantities`)
        } else {
            console.log(`Display denied; no participants as ${this.seller} and ${this.retailers} of this brand!`)
        }
    }  

    Social_media()   {

        if (this.user === "agree"){
            console.log(`${this.user} selects social media in marketing the designs`)
        } else {
            console.log(`${this.user} in ${this.brandName}: Declined Project Design Marketing!`)
        }
    }     
    legal_matters() {
        console.log(`${this.user} verified partnerships`)
    }
}

}


//TEST CASES

const fashion = new Fashion_Design
('Fashion Industry', 
'Unique Features', 
'User 1', 
'Seller 1', 
'Retailer 1', 
'Fasion Designing', 
200, 50, 
'Products: Clothing, Bags, Accessories, Shoes',
 'Unique Qualities', 
 'Shirt', 'Bag', 'Watch', 'Heels');
 'agree'
 'business proposal'
 'professional'

console.log("\n----------------------------------------------------------")
fashion.Designing_Tools();

console.log("\n----------------------------------------------------------")
fashion.Export_Property()

console.log("\n----------------------------------------------------------")
fashion.Industry_Partners()

console.log("\n----------------------------------------------------------")
fashion.Unique_Features();

console.log("\n----------------------------------------------------------")
fashion.External_extensions();

console.log("\n----------------------------------------------------------")
fashion.Business_partners();

console.log("\n----------------------------------------------------------")
fashion.Collaboration();

console.log("\n----------------------------------------------------------")
fashion.Ecommerce_space();

console.log("\n----------------------------------------------------------")
fashion.Social_media();

console.log("\n----------------------------------------------------------")
fashion.legal_matters();




const structure = new Structural_Design
('Designer', 'Structural Design', 'Lois', 'Rhea', 'Gucci', 'design structures', 12345, 1, 'seat', 'custom', 'Gavana bldg', 'Seravim', 'KATANA', 'siees', 'table', 'tricycle')


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
structure.Business_partners();

console.log("\n----------------------------------------------------------")
structure.Collaboration();

console.log("\n----------------------------------------------------------")
structure.Ecommerce_space();

console.log("\n----------------------------------------------------------")
structure.Social_media();

console.log("\n----------------------------------------------------------")
structure.legal_matters();




