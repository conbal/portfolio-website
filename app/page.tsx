"use client";

export default function Page() {
  function handleClick() {
    alert("button pressed");
  }
  return (
    <div className="flex space-x-3 justify-center items-center h-screen">
      <div>app page </div>
      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-800 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition cursor-pointer "
      >
        button here
      </button>
    </div>
  );
}
