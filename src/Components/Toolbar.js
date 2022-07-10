function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  const handleClick = (evt) => {
    props.onSelectFilter(props.selected);
  };

  return (
    <div className="Toolbar">
      {filters.map((o) => (
        <button
          key={o}
          onClick={() => {
            props.onSelectFilter(o);
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
