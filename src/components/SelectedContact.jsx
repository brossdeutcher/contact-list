const SelectedContact = (props) => {
  const backToList = () => {
    props.setContactId(null);
  }

  return (
    <>
      <h1>Selected Contact</h1>
      <button onClick={backToList}>Back to List!!</button>
    </>
  );
};

export default SelectedContact;
