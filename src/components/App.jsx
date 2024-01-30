import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function listed(contacts) {
  return <Card
        key = {contacts.id}
        name={contacts.name}
        image={contacts.imgURL}
        alt={contacts.name}
        instagram={contacts.instagram}
      />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Favourites</h1>
      {contacts.map(listed)}
    </div>
  );
}

export default App;
