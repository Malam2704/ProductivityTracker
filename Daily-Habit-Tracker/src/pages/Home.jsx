export default function Home({ dailyProgress }) {
    console.log("Daily Progress in Home:", dailyProgress);
    return (
        <div>
            <h1>Daily Habit Tracker</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                {dailyProgress?.map((item) => (
                    <div key={item.id} style={{
                        border: '5px solid black',
                        borderRadius: '10px',
                        margin: '5px',
                        padding: '5px',
                        width: 'fit-content',
                        textAlign: 'center'
                    }
                    }>
                        <p>{item.Percentage}</p>
                        <p>{item.Day}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}