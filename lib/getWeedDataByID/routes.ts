"use server";

import { Weedprops } from "@/types";

// for gathering weed data from API
export default async function getWeedDataByName(strainID: string): Promise<Weedprops[]> {
    const url = `https://the-weed-db.p.rapidapi.com/api/strains?id=${strainID}`;
    const API_KEY = process.env.WEED_API_KEY;
    const API_HOST = process.env.WEED_API_HOST;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${API_KEY}`,
            'x-rapidapi-host': `${API_HOST}`
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        const weedData: Weedprops[] = data.map((entry: any) => ({
            _id: entry._id,
            name: entry.name,
            imageUrl: entry.imageUrl,
            description: entry.description,
            genetics: entry.genetics,
            thc: entry.THC,
            cbd: entry.CBD,
            smellAndFlavor: entry.smellAndFlavour,
            effect: entry.effect
        }));
        
        console.log("Weed data by name fetched successfully");
        return weedData;
    } 
    catch (error) {
        console.error(error);
        return [];
    }
}