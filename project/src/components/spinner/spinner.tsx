function Spinner(): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'purple' }}
        className="
          animate-spin
          rounded-full
          h-32
          w-32
          border-t-2 border-b-2 border-purple-500
        "
      >
        Spinner
      </div>
    </div>
  );}

export default Spinner;
