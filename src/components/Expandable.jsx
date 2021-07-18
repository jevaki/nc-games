import { useState } from 'react';

const Expandable = ({children,name}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

    return (
        <div>
            <button onClick={toggleOpen}>{name}</button>
            {isOpen && children}
        </div>
    );
};

export default Expandable;