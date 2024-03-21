const add = (a: number, b: number) => {
    alert(`${a} + ${b} = ${a + b}`);
  };
  function PassingDataOnEvent() {
    return (
      <div>
        <h2>Passing Data on Event</h2>
        <button onClick={() => add(2, 3)} // Use this syntax instead of the one below because you risk creating an infinite loop.
                // onClick={add(2, 3)}
                className="btn btn-primary">
          Pass 2 and 3 to add()
        </button>
      </div>
    );
  }
  export default PassingDataOnEvent;