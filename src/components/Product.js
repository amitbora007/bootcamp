export default function Product(props) {
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <h3>Price: {props.price}</h3>
      <h3>Description: {props.description}</h3>
    </div>
  );
}
