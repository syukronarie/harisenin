import React, { useEffect, useState } from 'react';
import { addAccount } from '../types/account-service';

export default function AccountPage() {
  const [state, setState] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const account = Object.fromEntries(formData) as unknown as Account;
    addAccount(account);
  };

  return (
    <form className="container" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="firstName" placeholder="Your first name" />
      <input type="text" name="lastName" placeholder="Your last name" />
      <select name="gender" placeholder="Your gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="number" min={1} name="age" placeholder="Your age" />
      <button type="submit">register</button>
    </form>
  );
}
