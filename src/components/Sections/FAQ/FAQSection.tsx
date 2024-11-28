'use client';

import clsx from 'clsx';
import { FC, useState } from 'react';
import { BsDashSquare, BsPlusSquare } from 'react-icons/bs';

import { FAQ } from '@/types';
import { FAQCatogories } from '@/utils';
import { QuestionAnswerOfCategory } from '@/utils';

let AllQuestionAnswer: FAQ[] = [];
for(const key in QuestionAnswerOfCategory) {
    AllQuestionAnswer = AllQuestionAnswer.concat(QuestionAnswerOfCategory[key]);
}

const FAQSection: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('General');
    const [selectedDropdown, setSelectedDropdown] = useState(0);

    function handleDropdown(index: number) {
        if(selectedDropdown == index) setSelectedDropdown(-1);
        else setSelectedDropdown(index);
    }
    return (
        <div className='bg-black px-4 md:px-24 py-24 flex flex-col md:space-y-24 space-y-12'>
            <p className='uppercase font-medium text-white md:text-5xl text-2xl'>
                Frequently Asked <br />{' '}
                <span className='text-[#1CFDE4]'>Questions</span>
            </p>
            
            {/* For Larger screen */}
            <div className='md:grid md:grid-cols-7 flex flex-col md:space-x-8'>
                <div className='md:flex md:flex-col hidden gap-4'>
                    {FAQCatogories.map((category, index) => (
                        <button
                            key={index}
                            className={clsx(
                                'p-[2px] rounded-md',
                                category == selectedCategory ? 'bg-gradient-border' : 'border'
                            )}
                            onClick={() => setSelectedCategory(category)}
                        >
                            <div className='bg-black text-white p-2 rounded-md w-full items-center'>
                                <p className='text-center font-light'>{category}</p>
                            </div>
                        </button>
                    ))}
                </div>
                
                {/* For smaller screen */}
                {/* <div className='flex flex-col md:hidden space-x-8 mb-5'>
                    {FAQCatogories.map((category, index) => (
                        <button
                            key={index}
                            className={clsx(
                                'p-[2px] rounded-md',
                                category == selectedCategory ? 'bg-gradient-border' : 'border'
                            )}
                            onClick={() => setSelectedCategory(category)}
                        >
                            <div className='bg-black text-white p-2 rounded-md w-full items-center'>
                                <p className='text-center font-light'>{category}</p>
                            </div>
                        </button>
                    ))}
                </div> */}

                {/* For Larger screen */}
                <div className='md:col-span-6 w-full md:flex flex-col gap-8 hidden'>
                    {QuestionAnswerOfCategory[selectedCategory].map((category, index) => (
                        <div key={index} className='flex border rounded-md overflow-clip'>
                            <p className='text-header-grey pt-4 px-4 font-semibold text-xl'>
                                {index + 1}
                            </p>

                            <div className='flex flex-col w-full'>
                                <div className='px-8 py-4 w-full text-white relative flex justify-between'>
                                    <p>{category.question}</p>
                                    <button onClick={() => handleDropdown(index)}>
                                        <p className='font-light bg-[#4FA9E2] absolute right-0 top-0 p-4 aspect-square w-14 h-14 flex items-center justify-center'>
                                            {selectedDropdown == index ? (
                                                <BsDashSquare />
                                            ) : (
                                                <BsPlusSquare />
                                            )}
                                        </p>
                                    </button>
                                </div>

                                <div
                                    className={clsx(
                                        'text-white border-slate-500 transition-all duration-300',
                                        selectedDropdown === index
                                          ? 'max-h-[500px] p-4 text-opacity-100 border-t'
                                          : 'max-h-[0px] overflow-hidden p-0 text-opacity-0 border-none'
                                    )}
                                >
                                    {category.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* For smaller screen */}
                <div className='flex flex-col gap-8 md:hidden'>
                    {AllQuestionAnswer.map((item, index) => (
                        <div key={index} className='flex border rounded-md overflow-clip'>
                            <p className='text-header-grey pt-4 px-4 font-semibold text-xl'>
                                {index + 1}
                            </p>

                            <div className='flex flex-col w-full'>
                                <div className='px-8 py-4 w-full text-white relative flex justify-between'>
                                    <p>{item.question}</p>
                                    <button onClick={() => handleDropdown(index)}>
                                        <p className='font-light bg-[#4FA9E2] absolute right-0 top-0 p-4 aspect-square w-14 h-14 flex items-center justify-center'>
                                            {selectedDropdown == index ? (
                                                <BsDashSquare />
                                            ) : (
                                                <BsPlusSquare />
                                            )}
                                        </p>
                                    </button>
                                </div>

                                <div
                                    className={clsx(
                                        'text-white border-slate-500 transition-all duration-300',
                                        selectedDropdown === index
                                          ? 'max-h-[500px] p-4 text-opacity-100 border-t'
                                          : 'max-h-[0px] overflow-hidden p-0 text-opacity-0 border-none'
                                    )}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;