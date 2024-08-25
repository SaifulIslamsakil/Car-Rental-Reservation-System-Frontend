/* eslint-disable @typescript-eslint/no-explicit-any */
const Container = ({children}: {children:any}) => {
    return (
        <div className=" my-10 p-5 space-y-5 md:space-y-10">
            {children}
        </div>
    );
};

export default Container;