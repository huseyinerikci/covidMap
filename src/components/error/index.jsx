const Error = ({ info, refetch }) => {
  return (
    <div
      data-testid="error"
      className="col-span-3 my-20 flex flex-col justify-center items-center text-center gap-10"
    >
      <div className="bg-red-400 p-5 w-[80%] rounded-md">
        <p>Üzgünüz bir sorun oluştu</p>
        <p>{info}</p>
      </div>
      <button
        onClick={refetch}
        className="border shadow mt-10 text-black  p-2 hover:bg-gray-100"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
