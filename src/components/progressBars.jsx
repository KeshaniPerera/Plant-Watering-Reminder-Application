import Progress from 'react-circle-progress-bar';

export const ProgressBar = () => {
    return (
        <div className="flex items-center gap-4 p-4">
            <div className="flex flex-col items-center">

                <div className="bg-gray-100 p-4 rounded-lg font-normal font-bold">
                    <Progress
                        progress={70}  
                        size={80} 
                        strokeWidth={16}  
                        circleOneStroke="#d9ee"
                        circleTwoStroke="#2745"  
                        fontColor="#333ff"
                        transitionDuration="0.5" 
                        transitionTimingFunction="ease" 
                        percentSpacing={6}  
                        showPercentage
                        fontSize="12px"  
                        gradient={[{ stop: 0, color: '#38B313' }, { stop: 1, color: '#6BE945' }]}
                        style={{
                            width: '90px',
                            height: '90px',
                            fontFamily: '',
                            fontWeight: 'bold'  
                        }}
                    />
                </div>
                <span className="mt-2 text-xs font-semibold">Health</span>

            </div>
            <div className="flex flex-col items-center">

        
                <div className="bg-gray-100 p-4 rounded-lg">
                    <Progress
                        progress={50}  
                        size={80}  
                        strokeWidth={16}  
                        circleOneStroke="#d9edfe"
                        circleTwoStroke="#ffc107"  
                        fontColor="#333"
                        transitionDuration="1s"  
                        transitionTimingFunction="ease-out"  
                        percentSpacing={6}  
                        showPercentage
                        fontSize="12px"  
                        gradient={[{ stop: 0, color: '#49BE25' }, { stop: 1, color: '#CEE175' }]}
                        style={{
                            width: '90px',
                            height: '90px',
                            fontFamily: '',
                            fontWeight: 'bold' 
                        }}                
                    />
                </div>
                <span className="mt-2 text-xs font-semibold">Water Frequency</span>
            </div>
        </div>
    );
};
