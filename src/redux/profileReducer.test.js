import profileReducer, { addPostAction, deletePost } from './profileReducer'

let state = { 
    posts: [
        {id:1, message: 'Привет, как дела? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, deleniti qui molestiae reprehenderit, optio cumque consequatur blanditiis reiciendis molestias tenetur magnam totam delectus laborum similique recusandae. Corrupti assumenda temporibus reprehenderit!', likesCount: 12},
        {id:2, message: 'Это мой первый пост!', likesCount: 21}
    ],
}

test('Новый пост должен быть добавлен', () => {// название теста
    // инициализируем данные
    let action = addPostAction('RABOTAET');

    // инициализируем экшон
    let newState = profileReducer(state, action);
    // сам тест
    expect(newState.posts.length).toBe (3)
  });

  test('Проверка текста', () => {
    let action = addPostAction('RABOTAET');

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe ('RABOTAET')
  });

  test('После удаления длина массива уменьшается', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe (2)
  });
  
  test('Если id не правильный, то массив не меняется', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe (2)
  });
