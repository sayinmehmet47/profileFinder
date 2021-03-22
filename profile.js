class Profile {
  constructor() {
    (this.clientid = ''), (this.clientSecret = '');
  }

  async getProfile(input) {
    const profileResponse = await fetch(
      `
            https://jsonplaceholder.typicode.com/users?username=${input}
            
            `
    );

    const profile = await profileResponse.json();
    const toDoResponse=await fetch(

        `
        https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}
        
        `

    )

        const todo=await toDoResponse.json();

    return {
      profile,todo
    
    };
  }
}
const profile = new Profile();

