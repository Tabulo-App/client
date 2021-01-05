import Header from './Header'

const handleSubmit = e => {
    e.preventDefault()
}

function Landing() {
    return (
        <div className='landing-page'>
            <Header />
            <div className='header-container'>
                <h1>Tabulo helps teams work more collaboratively and get more done.</h1>
                <h2>Tabulo’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</h2>
                <img src='' alt='professionals working'/>
                <form className='quick-signup'>
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                    />
                    <button onClick={handleSubmit}>Sign Up for Free!</button>
                </form>
            </div>
            <div className='middle-container right'>
                <h2>Work with any team</h2>
                <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
                <button>Try Now</button>
                <img src='' alt='team tasks'/>
            </div>
            <div className='middle-container left'>
                <img src='' alt='user activity view' />
                <h2>Information at a glance</h2>
                <p>Dive into the details by adding comments, attachments, due dates, and more directly to Trello cards. Collaborate on projects from beginning to end.</p>
            </div>
            <div className='middle-container right'>
                <img src='' alt='user activity view' />
                <h2>Built-In Workflow Automation With Butler</h2>
                <p>Let the robots do the work! Boost productivity by unleashing the power of automation across your entire team with Butler, and remove tedious tasks from your to-do lists with:</p>
                <ul>
                    <li>Rule-Based Triggers</li>
                    <li>Custom Card & Board Buttons</li>
                    <li>Calendar Commands</li>
                    <li>Due Date Commands</li>
                </ul>
                <img src='' alt='butler'/>
            </div>
        </div>
    )
}

export default Landing