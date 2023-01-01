import React from "react";

const List = () => {
  const obj = [
    {
      name: "savings",
      color: "#f9c74f",
    },
    {
      name: "Investment",
      color: "#f9c74f",
    },
    {
      name: "Expense",
      color: "rgb(54, 162, 235)",
    },
  ];
  return (
    <div className="flex flex-col gap-3 py-6">
      <h1 className="py-4 text-xl font-bold">History</h1>
      {obj.map((v, i) => (
        <Transaction key={i} category={v}></Transaction>
      ))}
    </div>
  );
};

const Transaction = ({ category }) => {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center  bg-gray-50 py-2 rounded-md "
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">icon</button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
};

export default List;
