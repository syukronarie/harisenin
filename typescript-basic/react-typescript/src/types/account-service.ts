interface Account {
  id: number;
  firstName: string;
  lastName?: string;
  gender?: 'male' | 'female';
  age: number;
}

export function addAccount(account: Account) {
  // add your code below here
  console.log(account);
}

export function deleteAccount(id: number) {
  // add your code below here
  console.log(id);
}
