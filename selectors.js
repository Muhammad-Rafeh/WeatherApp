export function selectTimeBackground(state){
    if(state.day <= state.present 
        && state.present <= state.night ){
            return  'bg-img'      
        }
        else{
            return  'bg-img2'
           
        }
}