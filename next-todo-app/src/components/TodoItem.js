"use client";

export default function TodoItem({ id, title, status, updateStatus }) {
  return (
    <li key={id} className="flex gap-2 mb-4 items-center">
      <input
        id={id}
        type="checkbox"
        defaultChecked={status}
        onChange={(e) => updateStatus(id, e.target.checked)}
        className="cursor-pointer peer"
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-400 text-l"
      >
        {title}
      </label>
    </li>
  );
}
