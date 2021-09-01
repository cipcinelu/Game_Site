const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id:1, name: 'Dima'},
        {id:2, name: 'Anton'},
        {id:3, name: 'Lera'},
        {id:4, name: 'Vitala'},
        {id:5, name: 'Sveta'},
    ],
    messages: [
        [],
        [        
            {id:1, message: 'HI'},
            {id:2, message: 'Как оно?'},
            {id:3, message: 'Когда  сдашь проект? Привет, как дела? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, deleniti qui molestiae reprehenderit, optio cumque consequatur blanditiis reiciendis molestias tenetur magnam totam delectus laborum similique recusandae. Corrupti assumenda temporibus reprehenderit!'},
        ],
        [        
            {id:1, message: 'КУ'},
            {id:2, message: 'Здарова!'},
        ],
        [        
            {id:1, message: 'Добрый день'},
            {id:2, message: 'День добрый!'},
        ],
        [        
            {id:1, message: ':D'},
            {id:2, message: ':0'},
        ],
        [        
            {id:1, message: 'Чё там, работаешь?'},
            {id:2, message: 'Конечно!'},
        ],
    ],
};

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body, //меняем стейт, сохраняем текст из поля ввода
            };
        case SEND_MESSAGE:
            let body = action.newMessageBody.message; //копируем сохранённый текст, во временную переменную
            let id = action.newMessageBody.id
            let message = {
                id: 6,
                message: body,
            }
            
            return {
                ...state,
                ...state.messages[id].push(message),
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (id, message) => ({type: SEND_MESSAGE, newMessageBody: {id, message}})

export default dialogsReducer;