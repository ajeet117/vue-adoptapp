export default {
    appendPet: (state, {species,pets}) => 
    {
        state[species].push(pets);
    }
}