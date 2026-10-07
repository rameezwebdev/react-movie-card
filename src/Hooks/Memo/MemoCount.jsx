import { memo, useRef } from "react";

 const Count = () => {

    const renderCount = useRef(0)

    return (
        <div className="mt-3 font-display text-center">
            <p>
                Nothing change here but Ive now rendered:
                <span className="text-red-500">
                    {renderCount.current++}
                </span> 
            </p>

        </div>
    )
};

export default memo(Count)  