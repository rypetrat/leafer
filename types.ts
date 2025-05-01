// fields being collected from weed data API
export interface Weedprops {
    _id: string;
    name: string;
    imageUrl: string;
    description: string[];
    genetics: string;
    thc: string;
    cbd: string;
    smellAndFlavor: string[];
    effect: string[];
}

// add fields to be collected from dispensary API, make sure is typed
export interface Dispensaryprops {

}
