import { FiLock } from 'react-icons/fi';

export default function PasswordInput({ name, value, onChange, placeholder, showPassword }) {
  return (
    <div className="relative">
      <FiLock className="absolute left-3
       top-1/2 transform -translate-y-1/2 text-pastel-blue" />
      <input
        type={showPassword ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
         className="w-full pl-10 pr-10 py-2 placeholder-gray-400 border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600 
        dark:bg-gray-700 dark:text-white placeholder-white dark:placeholder-gray-400"
      />
    </div>
  );
}
