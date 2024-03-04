'use client'

interface ActionRessourceProps {
    action:string,
    item:string,
    handleClick: any;
}

const ActionRessource : React.FC<ActionRessourceProps> = ({action, item, handleClick}) =>{
    return(
        <div onClick={handleClick} style={{backgroundImage: 'linear-gradient(90deg, #79DBF0, #4E67EC)'}} className="p-5">
            <p style={{fontSize:40}} className='text-white'>{action}</p>
            <p style={{fontSize:15}} className='text-white'>{item}</p>
        </div>
    )
}

export default ActionRessource