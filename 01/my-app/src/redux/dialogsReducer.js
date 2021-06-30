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
        {id:1, message: 'HI'},
        {id:2, message: 'Как оно?'},
        {id:3, message: 'Когда  сдашь проект? Привет, как дела? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, deleniti qui molestiae reprehenderit, optio cumque consequatur blanditiis reiciendis molestias tenetur magnam totam delectus laborum similique recusandae. Corrupti assumenda temporibus reprehenderit!'},
      ],
        newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body; //меняем стейт, сохраняем текст из поля ввода
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody; //копируем сохранённый текст, во временную переменную
            state.newMessageBody = ''; //обнуляем поле ввода
            state.messages.push({ id: 6, message: body }); //отправляем текст в базу
            return state;
        default:
            return state;
    }
}
export default dialogsReducer;