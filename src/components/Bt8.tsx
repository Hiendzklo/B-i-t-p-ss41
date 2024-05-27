import React from 'react';

const LayoutExamples = () => {
  return (
    <div className="space-y-8">
      {/* Các phần tử nằm bên trái */}
      <div>
        <h2 className="text-xl font-bold mb-4">Các phần tử nằm bên trái</h2>
        <div className="flex justify-start">
          <div className="p-4 bg-blue-500">Element 1</div>
          <div className="p-4 bg-green-500">Element 2</div>
        </div>
      </div>

      {/* Các phần tử nằm bên phải */}
      <div>
        <h2 className="text-xl font-bold mb-4">Các phần tử nằm bên phải</h2>
        <div className="flex justify-end">
          <div className="p-4 bg-blue-500">Element 1</div>
          <div className="p-4 bg-green-500">Element 2</div>
        </div>
      </div>

      {/* Các phần tử nằm ở giữa */}
      <div>
        <h2 className="text-xl font-bold mb-4">Các phần tử nằm ở giữa</h2>
        <div className="flex justify-center">
          <div className="p-4 bg-blue-500">Element 1</div>
          <div className="p-4 bg-green-500">Element 2</div>
        </div>
      </div>

      {/* Các phần tử giãn ra hai bên */}
      <div>
        <h2 className="text-xl font-bold mb-4">Các phần tử giãn ra hai bên</h2>
        <div className="flex justify-between">
          <div className="p-4 bg-blue-500">Element 1</div>
          <div className="p-4 bg-green-500">Element 2</div>
        </div>
      </div>

      {/* Các phần tử giãn đều 2 bên */}
      <div>
        <h2 className="text-xl font-bold mb-4">Các phần tử giãn đều 2 bên</h2>
        <div className="flex justify-around">
          <div className="p-4 bg-blue-500">Element 1</div>
          <div className="p-4 bg-green-500">Element 2</div>
        </div>
      </div>

      {/* Các phần tử giữa đều */}
      <div>
        <h2 className="text-xl font-bold mb-4">Các phần tử giữa đều</h2>
        <div className="flex justify-evenly">
          <div className="p-4 bg-blue-500">Element 1</div>
          <div className="p-4 bg-green-500">Element 2</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutExamples;
