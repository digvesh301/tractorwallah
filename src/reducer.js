export const initialState ={
    user : [],
    AllPrice:[],
    TotalPrice:0,
    isUser:false,
    OwnerName:["Harsukhbhai","Bhartbhai","vinubhai","kadvabhai"],
    hour:["પોણા","પુરી","સવા","સાડા"],
    hours:["એક કરતા ઓછી","એક","બે","ત્રણ","ચાર","પાંચ","છ","સાત","આઠ","નવ","દસ"],
    corp:["મગફળી","ચણા","ધાણા","બાજરો","ઘઉં","તલ"],
    trolley:["ધૂળ","ખાતર","મગફળી","ચણા"]
};

 export const getUserTotal = (history) => history.reduce((TotalPrice,item)=>item.TotalPrice+TotalPrice,0);

const reducer = (state,action) =>{
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:[action.user]
            }
        case "SET_PRICE":
            return {
                ...state,
                AllPrice:[action.price]
            }
        case "ADD_TOTAL_PRICE":
            return {
                ...state,TotalPrice:[action.price]
            }
        case "IS_USER":
            return {
                ...state,isUser:action.isUser
            }
        default:
            return state
    }
}

export default reducer;