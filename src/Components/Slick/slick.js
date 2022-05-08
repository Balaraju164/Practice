import Scrollspy from 'react-scrollspy'
const slick = () => {
    let dates =['1','2','3','4','5','6','7','8','9','10']
    return (
        <>
       
        <div className='horizonat-component'>
        <Scrollspy items={dates} currentClassName='iscurrent'>
            {dates.map(date=>(
            <div className='horizontal-dates'>
                <span className='date-display'>{date}</span>
            </div>
        ))}
                </Scrollspy>
        </div>
        <div className='vertical-component'>
        {dates.map(date=>(
        <div className='vertical-dates' id={String(date)}>
            <span className='date-display'>{date}</span>
        </div>
    ))}
    </div>
        </>
    )
};

export default slick;
