const Hadding = ({mainHadding, subHadding, colorTage}: {mainHadding:string, subHadding: string, colorTage: string}) => {
    return (
        <div className=" text-center space-y-2">
            <p>{subHadding}</p>
            <h2 className=" text-4xl font-bold">{mainHadding} <span className=" text-orange-500">{colorTage}</span></h2>
        </div>
    );
};

export default Hadding;