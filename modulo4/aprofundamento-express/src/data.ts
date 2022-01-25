
type Homeworks = {
    userId: number,
    id: number,
    title: string,
    completed: boolean  
}

export let homeworks:Homeworks[]=[
    {
        "userId": 1,
        "id": 1,
        "title": "Lavar Roupas",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "Varrer a Casa",
        "completed": true
      },
      {
        "userId": 2,
        "id": 3,
        "title": "Limpar os Vidros",
        "completed": false
      },
      {
        "userId": 2,
        "id": 4,
        "title": "Lavar a louça",
        "completed": true
      },
      {
        "userId": 3,
        "id": 5,
        "title": "Arrumar a cama",
        "completed": false
      }
]