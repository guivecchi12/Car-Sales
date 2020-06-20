export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";


export const removeFeature = feature => {
    console.log("Removing feature: ", feature);
    return {type: REMOVE_FEATURE, payload: feature};
};

export const addFeature = feature => {
    console.log ("Adding feature: ", feature);
    return { type: ADD_FEATURE, payload: {
        id: feature.id,
        name: feature.name,
        price: feature.price
    }};
}
