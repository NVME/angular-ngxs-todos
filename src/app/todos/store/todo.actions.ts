export class AddTodo{
    static readonly type='[Todo] Add'
    constructor(public task:string){}
}

export class UpdateTodo{
    static readonly type='[Todo] Finish'
    constructor(public id:number){}
}

export class GetTodos {
   static readonly type= '[Todo] GetAll'
}