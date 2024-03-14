import { useGlobalState } from "src/contexts/GlobalStateContext";

const MenuItem = ({title}:{title:string}) => {
    
    const { toggleMenu } = useGlobalState()

    return (<div className='flex items-center'>
        <a aria-label={title} className={"transition ease-in-out duration-300 text-center hover:text-violet-400 "} onClick={toggleMenu} href={"/#"+title}>{title}</a>
        </div>
    );
}

export default MenuItem;