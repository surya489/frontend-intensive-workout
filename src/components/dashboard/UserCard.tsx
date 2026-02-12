export default function UserCard() {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5 flex items-center justify-between">
      <div>
        <h4 className="font-medium">John Doe</h4>
        <p className="text-sm text-gray-500">john@example.com</p>
      </div>

      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
        Active
      </span>
    </div>
  );
}