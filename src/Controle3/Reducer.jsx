const initialeSate={
    voiture:[],
    utilisateur:[]
}
const Reducervoiture=(state=initialeSate,action)=>{
    switch(action.type){
        case 'ajouter':
            return {
                ...state,
                voiture: [...state.voiture,...action.payload]
            };
            case 'update':
                const update=state.voiture.find((u)=>parseInt(u.id)==parseInt(action.payload.id))
                if(update){
                 update.title=action.payload.title
                 update.img=action.payload.img
                 update.class=action.payload.class
                 update.prevPrice=action.payload.prevPrice
                }
                return state
                case 'delete':
    return {
        ...state,
        voiture: state.voiture.filter(valeur => parseInt(valeur.id) !== parseInt(action.payload))
    };
    case 'filluser':
        return {
            ...state,
            utilisateur: [...state.utilisateur,...action.payload]
        };

                default:
                        return state
    }
}
export default Reducervoiture;