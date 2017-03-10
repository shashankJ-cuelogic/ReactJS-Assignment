
export const HANDLE_CHANGE_EVENT = 'HANDLE_CHANGE_EVENT';


 

const initalState = {
    useremail: 'demo@ymail.com',
    username: 'Johan parker',
    password: '12542',
    data: 'Test'
};

const reducerRegister = (state = initalState, action) => {


    switch (action) {
        case HANDLE_CHANGE_EVENT:
            var field = event.target.name;
            var change = {};
            change[field] = event.target.value;
            console.log(field);
            this.setState(change);
            break;
        default:
            return state;
    }
}





export default reducerRegister;