import React from 'react'
import './section.css'

function Section() {
	return (
    <div className='service-box'>
      <h2>Our Services</h2>
<div className='container'>
			<div className='card'>
				<div className='lines'></div>
				<div className='imgBx'>
					<i class="bi bi-globe"
						style={
							{
								fontSize: '50px',
								color: 'green'
							}
					}></i>
				</div>
				<div className='content'>
					<div className='content-info'>
            <h1>World Wide</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<a href='s'>Read More</a>
					</div>

				</div>
			</div>


      <div className='card'>
				<div className='lines'></div>
				<div className='imgBx'>
					<i class="bi bi-fire"
						style={    
							{
								fontSize: '50px',
								color: 'green'
							}
					}></i>
				</div>
				<div className='content'>
					<div className='content-info'>
            <h1>Camp fire</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<a href='s'>Read More</a>
					</div>

				</div>
			</div>


      <div className='card'>
				<div className='lines'></div>
				<div className='imgBx'>
					<i class="bi bi-headset"
						style={
							{
								fontSize: '50px',
								color: 'green'
							}
					}></i>
				</div>
				<div className='content'>
					<div className='content-info'>
            <h1>24/7</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. 
						</p>
            <a href='s'>Read More</a>
					</div>
				</div>
			</div>


      <div className='card'>
				<div className='lines'></div>
				<div className='imgBx'>
					<i class="bi bi-buildings"
						style={
							{
								fontSize: '50px',
								color: 'green'
							}
					}></i>
				</div>
				<div className='content'>
					<div className='content-info'>
            <h1>Affordable hotels</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. 
						</p>
            <a href='s'>Read More</a>
					</div>
				</div>
			</div>


      <div className='card'>
				<div className='lines'></div>
				<div className='imgBx'>
					<i class="bi bi-globe"
						style={
							{
								fontSize: '50px',
								color: 'green'
							}
					}></i>
				</div>
				<div className='content'>
					<div className='content-info'>
            <h1>Trekking</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. 
						</p>
            <a href='s'>Read More</a>
					</div>
				</div>
			</div>


      <div className='card'>
				<div className='lines'></div>
				<div className='imgBx'>
					<i class="bi bi-globe"
						style={
							{
								fontSize: '50px',
								color: 'green'
							}
					}></i>
				</div>
				<div className='content'>
					<div className='content-info'>
            <h1>Tour Guide</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. 
						</p>
            <a href='s'>Read More</a>
					</div>
				</div>
			</div>

			</div>
		
    </div>
		
	)
}

export default Section
