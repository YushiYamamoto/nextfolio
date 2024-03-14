import { useGlobalState } from "src/contexts/GlobalStateContext";

const MenuItem = ({title, customStyling, action }:{title:string, customStyling?:string, action?:()=>void}) => {
    
    const { toggleMenu } = useGlobalState()

    return (<div className='flex items-center'>
        <a aria-label={title} className={"transition ease-in-out duration-300 text-center hover:text-violet-400 "+customStyling} onClick={() => {toggleMenu(); action()}} href={"/#"+title}>{title}</a>
        </div>
    );
}

export default MenuItem;