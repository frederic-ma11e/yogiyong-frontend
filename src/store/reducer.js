import * as actionTypes from "./actions";

// menus : [{name: "칠리치킨", total_price : 20000, count : 1}]
const initialState = {
    restaurant: "",
    menus: [],
    total_price: 0, 
    menu_number: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.RESET_MENU: {
            return {
                restaurant: "",
                menus: [],
                total_price: 0, 
                menu_number: 0
            }
        }

        case actionTypes.ADD_RESTAURANT_INFO: { 
            return { 
                ...state, 
                restaurant : action.restaurant_info 
            } 
        } 

        case actionTypes.INCREMENT_MENU: {
            let updatedMenus = [...state.menus];
            for(let i = 0; i < updatedMenus.length; i++) {
                if(updatedMenus[i].id === action.incremented_menu_id) {
                    updatedMenus[i].count += 1;
                    updatedMenus[i].total_price = updatedMenus[i].count * updatedMenus[i].price;
                }
            }

            return {
                ...state, 
                menus : updatedMenus,
                total_price : calcTotalPrice(updatedMenus),
                menu_number : calcNumberOfMenus(updatedMenus)
            }
        }

        case actionTypes.DECREMENT_MENU: {
            let updatedMenus = [...state.menus];
            for(let i = 0; i < updatedMenus.length; i++) {
                if(updatedMenus[i].id === action.decremented_menu_id) {
                    if(updatedMenus[i].count > 1) {
                        updatedMenus[i].count -= 1;
                        updatedMenus[i].total_price = updatedMenus[i].count * updatedMenus[i].price;
                    }
                }
            }

            return {
                ...state, 
                menus : updatedMenus,
                total_price : calcTotalPrice(updatedMenus),
                menu_number : calcNumberOfMenus(updatedMenus)
            }
        }

        case actionTypes.ADD_MENU: {

            let updatedMenus = [
                ...state.menus
            ]
            
            for(let i = 0; i < updatedMenus.length; i++) {
                if(updatedMenus[i].id === action.added_menu.id) {
                    updatedMenus[i].count += 1;
                    updatedMenus[i].total_price = updatedMenus[i].count * updatedMenus[i].price;
                    return {
                        ...state,
                        menus: updatedMenus,
                        total_price : calcTotalPrice(updatedMenus),
                        menu_number : calcNumberOfMenus(updatedMenus)
                    }
                }   
            }

            updatedMenus.push(action.added_menu)
            
            return {
                ...state, 
                menus: updatedMenus,
                total_price : calcTotalPrice(updatedMenus),
                menu_number : calcNumberOfMenus(updatedMenus)
            }
        }

        case actionTypes.REMOVE_MENU: {

            let updatedMenus = [
                ...state.menus
            ]
            
            for(let i = 0; i < updatedMenus.length; i++) {
                if(updatedMenus[i].id === action.removed_menu_id) {
                    updatedMenus.splice(i, 1)
                }   
            }
            
            return {
                ...state, 
                menus: updatedMenus,
                total_price : calcTotalPrice(updatedMenus),
                menu_number : calcNumberOfMenus(updatedMenus)
            }
        }

        default:
            return state;
    }
};

const calcTotalPrice = (menus) => {
    let totalPrice = 0;
    for(let i = 0; i < menus.length; i++) {
        totalPrice += menus[i].total_price;
    }
    return totalPrice;
}

const calcNumberOfMenus = (menus) =>{
    
    let menu_count = 0
    for(let i = 0; i < menus.length; i++) {
        menu_count += menus[i].count;
    }
    return menu_count;
}

export default reducer;