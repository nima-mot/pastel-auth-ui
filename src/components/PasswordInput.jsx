import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function PasswordInput({ name, value, onChange, placeholder, showPassword }) {
  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600 
        dark:bg-gray-700 dark:text-white placeholder-white dark:placeholder-gray-300"
      />
    </div>
  );
}
