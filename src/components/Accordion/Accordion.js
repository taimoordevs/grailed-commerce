import { FaAngleUp } from "react-icons/fa6";
// Accordion.js

export default function Accordion({ title, isOpen, toggleAccordion, children }) {
    return (
        <>

            <div className="border-b  mb-4">
                <button
                    className="w-full p-4 text-left
                            transition duration-300"
                            onClick={toggleAccordion}
                >
                    <span className={`float-right transform ${isOpen ?
                        'rotate-180' : 'rotate-0'} 
                                 transition-transform duration-300`}>
                        <FaAngleUp size={12} className=" text-gray-600" />
                    </span>
                    <h6 className=" h6">{title}</h6>

                </button>

            </div>

            {isOpen && (
                <div className=" bg-white">
                    {children}
                </div>
            )}
        </>
    );
};