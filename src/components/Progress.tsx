import React from "react";

interface ProgressProps {
  value: number; // 当前进度值 (0-100)
}

const Progress: React.FC<ProgressProps> = ({ value }) => {
  // 根据进度值动态设置背景颜色
  const getProgressColor = (value: number) => {
    if (value >= 100) return "bg-green-500"; // 完成时的颜色
    if (value >= 50) return "bg-blue-500"; // 加载过半时的颜色
    return "bg-green-500"; // 默认加载时的颜色
  };

  return (
    <div className="block m-auto rounded-lg shadow w-72">
      <div className="w-full h-2 bg-gray-400 rounded-full mt-3">
        <div
          className={`h-full text-center text-xs text-white rounded-full transition-all duration-300 ${getProgressColor(
            value
          )}`}
          style={{ width: `${value}%` }} // 动态设置宽度
        ></div>
      </div>
    </div>
  );
};

export default Progress;