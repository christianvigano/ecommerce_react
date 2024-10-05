import "../itemListContainer/itemlistcontainer.css";

const ItemListContainer = (props) => {
  //const { saludo } = props;

  return (
    <div className="saludo-props">
      <h1>{props.saludo }</h1>
    </div>
  );
};

export default ItemListContainer;
