//component imports
import Header from './Header'
import Footer from './Footer'
import { ReactComponent as HeroImage } from '../assets/svgs/hero.svg'

//Landing component
function Landing() {

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className='landing-page' >

            {/* Relative container used to control absolute position of hero container for navbar color change effect */}
            <div className='relative-container'>
                <Header />
                <section className='hero-container'>
                    <h1>Tabulo helps teams work more collaboratively and get more done.</h1>
                    <p className='lead'>Tabulo’s boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p>
                    <HeroImage />
                    <form className='quick-signup'>
                        <input
                            className='email'
                            type='text'
                            name='email'
                            placeholder='Email'
                        />
                        <button onClick={handleSubmit} className='signup'>Sign Up - It's Free!</button>
                    </form>
                </section>
            </div>

            <section className='middle-container right'>
                <h2>Work with any team</h2>
                <p>Whether it’s for work, a side project or even the next family vacation, Tabulo helps your team stay organized.</p>
                <button>Try Now</button>
                <img src='' alt='team tasks' />
            </section>

            <section className='middle-container left'>
                <img src='' alt='user activity view' />
                <h2>Information at a glance</h2>
                <p>Dive into the details by adding comments, attachments, due dates, and more directly to Tabulo cards. Collaborate on projects from beginning to end.</p>
            </section>

            <section className='middle-container right'>
                <img src='' alt='user activity view' />
                <h2>Built-In Workflow Automation With Butler</h2>
                <p>Let the robots do the work! Boost productivity by unleashing the power of automation across your entire team with Butler, and remove tedious tasks from your to-do lists with:</p>
                <ul>
                    <li>Rule-Based Triggers</li>
                    <li>Custom Card & Board Buttons</li>
                    <li>Calendar Commands</li>
                    <li>Due Date Commands</li>
                </ul>
                <img src='' alt='butler' />
            </section>

            <section className='carousel-container'>
                <h2>See how it works</h2>
                <p>Go from idea to action in seconds with Tabulo’s intuitively simple boards, lists, and cards.</p>
                <img src='' alt='carousel' />
            </section>

            <section className='bottom-container'>
                <h2>Tabulo your way</h2>
                <p>Use Tabulo the way your team works best. We’ve got the flexibility & features to fit any team’s style.</p>
                <img src='' alt='robot and monster high five' />
                <h2>The Team Playbook</h2>
                <p>It’s easy to get your team up and running with Tabulo. We’ve collected all of the boards and tools your team needs to succeed in one handy resource.</p>
                <button>Make a Game Plan</button>
                <img src='' alt='widget icons' />
                <h2>A Productivity Platform</h2>
                <p>Integrate the apps your team already uses directly into your workflow. Power-Ups turn Tabulo boards into living applications to meet your team's unique business needs.</p>
                <button>Power-Up Your Workflow</button>
                <img src='' alt='cell phone' />
                <h2>Always In Sync</h2>
                <p>No matter where you are, Tabulo stays in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.</p>
                <button>App Store</button>
                <button>Google Play</button>
            </section>

            <section className='endorsements'>
                <h2>Work smarter with Tabulo</h2>
                <p>Companies of all shapes and sizes use Tabulo</p>
                <i>Google</i>
                <i>Fender</i>
                <i>SquareSpace</i>
                <i>Costco</i>
                <i>Lush</i>
                <i>Pinterest</i>
                <i>Peloton</i>
                <button>Find out how --{'>'}</button>
            </section>

            <section className='get-started'>
                <h2>Start Planning Today</h2>
                <p>Sign up and join over 1,000,000 teams worldwide who are using Tabulo to get more done.</p>
                <button>Get Started - It's Free!</button>
            </section>

            <Footer />
            
        </div>
    )
}

//exports
export default Landing