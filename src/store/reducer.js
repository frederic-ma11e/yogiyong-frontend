import * as actionTypes from "./actions";

// menus : [{name: "칠리치킨", total_price : 20000, count : 1}]
const initialState = {
    restaurant: "",
    menus: [],
    total_price: 0
}

const calcTotalPrice = (menus) => {
    let totalPrice = 0;
    for(let i = 0; i < menus.length; i++) {
        totalPrice += menus[i].total_price;
    }
    return totalPrice;
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.INCREMENT_MENU: {
            let updatedMenus = [...state.menus];
            let currentTotalPrice = state.total_price;
            for(let i = 0; i < updatedMenus.length; i++) {
                if(updatedMenus[i].id === action.incremented_menu_id) {
                    updatedMenus[i].count += 1;
                    updatedMenus[i].total_price = updatedMenus[i].count * updatedMenus[i].price;
                }
            }

            return {
                menus : updatedMenus,
                total_price : calcTotalPrice(updatedMenus)
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
                menus : updatedMenus,
                total_price : calcTotalPrice(updatedMenus)
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
                        menus: updatedMenus,
                        total_price : calcTotalPrice(state.menus)
                    }
                }   
            }

            updatedMenus.push(action.added_menu)
            
            return {
                menus: updatedMenus,
                total_price : calcTotalPrice(updatedMenus)
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
                menus: updatedMenus,
                total_price : calcTotalPrice(updatedMenus)
            }
        }

        default:
            return state;
    }
};

export default reducer;