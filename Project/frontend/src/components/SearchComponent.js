export default function SeachBar(props) {
  return (
    <div>
      <div
        class="input-group"
        style={{
          width: "30%",
          float: "right",
          marginRight: "20px",
        }}
      >
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search based on Item or Store"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => props.functionSearch(e.target.value)}
        />
        <button type="button" class="btn btn-outline-primary">
          Search
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}
