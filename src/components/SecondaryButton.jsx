// secondary button component that receives:

// value(str) props => defines the button value
// type(str) props => defines the button type

// name(str) props => defines the button name
// formId(str) props => specifies one or more forms, null if it's an ordinary button
function SecondaryButton({ value, type, formId }) {
  return (
    <>
      <button className="SecondaryButton" type={type} form={formId}>
        {value}
      </button>
    </>
  );
}
export default SecondaryButton;
