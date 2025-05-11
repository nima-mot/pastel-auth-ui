import React, { useState, useEffect } from 'react';
import { FiEye, FiEyeOff, FiMail } from 'react-icons/fi'; // ✅ مسیر پیش‌فرض (در اکثر نسخه‌ها)
import PasswordInput from './components/PasswordInput';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPasswords, setShowPasswords] = useState(false);

    
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);



  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log(`${isLogin ? 'Login' : 'Register'} submitted`, form);
  };

  return (
    <div className={`min-h-screen h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pastel-blue via-pastel-purple to-pastel-green'}`}>
          {/* دکمه سوئیچ تم */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 bg-pastel-blue dark:bg-gray-700 text-white px-3 py-1 rounded-lg shadow hover:opacity-80 transition"
      >
        {darkMode ? 'تم روز' : 'تم شب'}
      </button>
      <div className="bg-white/80 dark:bg-gray-800 dark:text-white backdrop-blur-lg p-8 sm:p-10 rounded-3xl shadow-xl w-full max-w-sm sm:max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-center text-pastel-blue dark:text-white mb-6">
          {isLogin ? 'Login' : 'Create Account'}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pastel-blue" />
            <input
              className="w-full pl-10 pr-4 py-2 border border-pastel-blue
               dark:border-gray-600 dark:bg-gray-700 dark:text-white 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-blue"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* پسورد اصلی */}
          <PasswordInput
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            showPassword={showPasswords}
          />
  
          {/* تایید پسورد فقط در حالت Create Account */}
          {!isLogin && (
            <PasswordInput
              className="w-full px-4 py-2 border border-pastel-blue dark:border-gray-600 dark:bg-gray-700 dark:text-white 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-blue"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder = "Confirm Password"
              showPassword={showPasswords}
            />
          )}
  
          {/* دکمه چشم برای نمایش/مخفی کردن هر دو فیلد رمز */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowPasswords(prev => !prev)}
              className="text-sm text-pastel-blue hover:underline flex items-center gap-1"
            >
              {showPasswords ? (
                <>
                  <FiEyeOff /> مخفی کردن رمز
                </>
              ) : (
                <>
                  <FiEye /> نمایش رمز
                </>
              )}
            </button>
          </div>
  
          <button
            type="submit"
            className="w-full bg-pastel-green text-white font-semibold py-2 rounded-lg hover:bg-pastel-green-dark transition duration-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-center text-sm text-pastel-blue underline cursor-pointer"
        >
          {isLogin
            ? "Don't have an account? Create one"
            : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );  
};

export default AuthPage;
