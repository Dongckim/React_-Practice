
//action value
const Plus_one = 'Plus_one'
export const minus_one = 'Minus_one'
const Plus_N = 'Plus_N'
const Minus_N = 'Minus_N'

//action 
export const PlusN = (payload) => {
    return {
        type : Plus_N,
        payload,
    }
}

export const MinusN = (payload) => {
    return{
        type : Minus_N,
        payload,
    }
}


//초기 상태값(state)
const initialState = {
    number : 0,
}

//리듀서 : 'state에 변화를 일으키는' 함수
//(1) state를 action의 type에 따라 변경하는 함수

//input : state와 action

const counter = (state = initialState, action) => {
    switch(action.type){
        case Plus_one:
            return {
                number : state.number +1,
            };
        case minus_one:
            return{
                number : state.number -1,
            };
        case Plus_N :
            return {
                number : +state.number + +action.payload
            }
        case Minus_N :
            return {
                number : +state.number - +action.payload
            }
        default :
            return state;
    }
};

export default counter;