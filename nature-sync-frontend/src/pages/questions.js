import React from 'react';

const Questions = () => {
        return (
            <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
                    <div className="w-full max-w-sm flex flex-col items-center">
                        {/* Symbol image above card */}
                        <div className="relative z-10 -mb-10">
                            <div className="mx-auto rounded-full bg-gray-800 dark:bg-gray-800 shadow-lg flex items-center justify-center" style={{ width: '90px', height: '90px' }}>
                                <img src={require('../assets/images/symbol.png')} alt="Symbol" className="w-16 h-16 object-contain" />
                            </div>
                        </div>
                        {/* Card */}
                        <div className="w-full rounded-2xl shadow-xl bg-gray-800 pt-16 pb-8 px-6 flex flex-col items-center">
                            <p className="text-gray-300 text-center mb-6 text-sm">
                                Sample Question 123
                            </p>
                            <div className="w-full flex flex-col gap-3">
                                <button className="w-full py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold shadow hover:from-yellow-500 hover:to-orange-500 transition">Share</button>
                            </div>
                        </div>
                    </div>
            </div>
        );
};

export default Questions;