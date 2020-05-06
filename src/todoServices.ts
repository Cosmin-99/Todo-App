function delay(ms: number) {
    return new Promise((r) => setTimeout(r));
  }
  
  export type ToDo2 = {
    key: any;
    text: string;
    responsable: string;
    dueDate: any;
    addedDate: string;
  };

  
  const todosList: ToDo2[] = [
    { key: "11", text: "Aplicatie", responsable: "Andrei", dueDate: "2020-04-05", addedDate: "2020-04-13" },
    { key: "112", text: "Sport", responsable: "Andrei", dueDate: "2020-04-05", addedDate: "2020-04-13" },
    { key: "113", text: "Mancare", responsable: "Andrei", dueDate: "2020-06-05", addedDate: "2020-04-13" },
  ];

 console.log(todosList)
  
  export async function getToDos(filter?: string): Promise<ToDo2[]> {
    await delay(1000);
    if (filter) {
      return todosList.filter((t) => t.text.indexOf(filter) != -1);
    } else {
      return todosList.map((t) => t);
    }
  }
  
  export async function addToDo(todo: ToDo2): Promise<void> {
    await delay(3000);
    todosList.push(todo);
  }
  
  export async function removeToDo(todo: ToDo2): Promise<void> {
    await delay(3000);
    const index = todosList.indexOf(todo);
    todosList.splice(index, 1);
  }