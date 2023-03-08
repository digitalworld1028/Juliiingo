function characters(by: string|"name"):void {
  switch (by) {
    case "status":
      console.log("filter by status");
      break;

    case "gender":
      console.log("filter by gender");
      break;

    default:
      console.log("filter by name");
      break;
  }
}

export {characters}