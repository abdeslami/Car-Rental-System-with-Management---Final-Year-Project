export const DeleteVoiture=(id)=>{
    return {type:"delete",payload:id}
}
export const UpdateVoiture=(id)=>{
    return {type:"update",payload:id}
    console.log(id)
}
export const AjouterVoiture=(newvoiture)=>{
    console.log(newvoiture)
    return {type:"ajouter",payload:newvoiture}
}